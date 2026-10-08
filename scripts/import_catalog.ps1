Add-Type -AssemblyName System.IO.Compression.FileSystem

$projectRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$workbookPath = Join-Path $projectRoot 'src/assets/MEDEX PRICELIST 2024.xlsx'
$dataPath = Join-Path $projectRoot 'src/data.js'
$zip = [System.IO.Compression.ZipFile]::OpenRead($workbookPath)

function Read-WorkbookXml($entryName) {
  $entry = $zip.GetEntry($entryName)
  $reader = [System.IO.StreamReader]::new($entry.Open())
  try { [xml]$reader.ReadToEnd() } finally { $reader.Dispose() }
}

function Get-CellValues($row, $sharedStrings) {
  $values = @{}
  foreach ($cell in $row.SelectNodes("./*[local-name()='c']")) {
    $column = [regex]::Match($cell.GetAttribute('r'), '^[A-Z]+').Value
    $valueNode = $cell.SelectSingleNode("./*[local-name()='v']")
    if ($null -eq $valueNode) {
      $values[$column] = ''
    } elseif ($cell.GetAttribute('t') -eq 's') {
      $values[$column] = $sharedStrings[[int]$valueNode.InnerText]
    } else {
      $values[$column] = $valueNode.InnerText
    }
  }
  return $values
}

function Normalize-Text($value) {
  return ([regex]::Replace(([string]$value).Replace([string][char]0x200B, '').Replace([string][char]0xFEFF, ''), '\s+', ' ')).Trim()
}

try {
  [xml]$stringsXml = Read-WorkbookXml 'xl/sharedStrings.xml'
  $sharedStrings = @($stringsXml.SelectNodes("//*[local-name()='si']") | ForEach-Object { $_.InnerText })
  [xml]$sheetXml = Read-WorkbookXml 'xl/worksheets/sheet2.xml'
  $rows = $sheetXml.SelectNodes("//*[local-name()='sheetData']/*[local-name()='row']")
  $header = Get-CellValues $rows[0] $sharedStrings
  if ((Normalize-Text $header['R']) -ne 'CASH PRICE + ZONE F TRANSPORT') {
    throw "Unexpected Zone F price column: $($header['R'])"
  }

  $imageBySku = @{}
  $imageManifestPath = Join-Path $PSScriptRoot 'product-images.json'
  $imageManifest = Get-Content $imageManifestPath -Raw | ConvertFrom-Json
  foreach ($entry in $imageManifest) {
    $imageBySku[$entry.sku.ToLowerInvariant()] = $entry.image
  }

  $groups = [System.Collections.Specialized.OrderedDictionary]::new([System.StringComparer]::Ordinal)
  $sourceRowCount = 0
  foreach ($row in $rows | Select-Object -Skip 1) {
    $cells = Get-CellValues $row $sharedStrings
    $name = Normalize-Text $cells['B']
    if (-not $name) { continue }
    $sourceRowCount++
    if (-not $groups.Contains($name)) {
      $groups.Add($name, [pscustomobject]@{ Description = $name; Variants = [System.Collections.Generic.List[object]]::new() })
    }
    $price = $null
    $parsedPrice = 0.0
    if ([double]::TryParse([string]$cells['R'], [Globalization.NumberStyles]::Any, [Globalization.CultureInfo]::InvariantCulture, [ref]$parsedPrice)) {
      $price = $parsedPrice
    }
    $groups[$name].Variants.Add([pscustomobject]@{
      sku = (Normalize-Text $cells['A'])
      size = (Normalize-Text $cells['D'])
      category = (Normalize-Text $cells['C'])
      brand = (Normalize-Text $cells['E'])
      retail = $price
    })
  }

  if ($groups.Count -ne 269) { throw "Expected 269 distinct products, found $($groups.Count)" }

  $products = [System.Collections.Generic.List[object]]::new()
  $usedIds = @{}
  foreach ($group in $groups.Values) {
    $variants = @($group.Variants)
    $id = ($variants | Where-Object sku | Select-Object -First 1 -ExpandProperty sku)
    if (-not $id) { $id = ($group.Description.ToLowerInvariant() -replace '[^a-z0-9]+', '-').Trim('-') }
    $baseId = $id
    $suffix = 2
    while ($usedIds.ContainsKey($id)) { $id = "$baseId-$suffix"; $suffix++ }
    $usedIds[$id] = $true

    $categories = @($variants | Where-Object category | Select-Object -ExpandProperty category -Unique)
    $brands = @($variants | Where-Object brand | Select-Object -ExpandProperty brand -Unique)
    $prices = @($variants | Where-Object { $null -ne $_.retail } | Select-Object -ExpandProperty retail)
    $image = ''
    foreach ($variant in $variants) {
      $skuKey = $variant.sku.ToLowerInvariant()
      if ($imageBySku.ContainsKey($skuKey)) { $image = $imageBySku[$skuKey]; break }
    }
    $products.Add([pscustomobject]@{
      id = $id
      description = $group.Description
      category = ($categories -join ' / ')
      categories = $categories
      brand = ($brands -join ' / ')
      brands = $brands
      image = $image
      retail = if ($prices.Count) { ($prices | Measure-Object -Minimum).Minimum } else { $null }
      priceMin = if ($prices.Count) { ($prices | Measure-Object -Minimum).Minimum } else { $null }
      priceMax = if ($prices.Count) { ($prices | Measure-Object -Maximum).Maximum } else { $null }
      variants = @($variants)
    })
  }

  $json = ConvertTo-Json -InputObject @($products) -Depth 8
  [IO.File]::WriteAllText($dataPath, "export const productData = $json;`n", [Text.UTF8Encoding]::new($false))
  Write-Output "Generated $($products.Count) products from $sourceRowCount source rows and $(@($products | ForEach-Object { $_.variants.Count } | Measure-Object -Sum).Sum) variants."
} finally {
  $zip.Dispose()
}
