import React, { useState } from 'react';
import { productData } from '../data.js';

const categories = [...new Set(productData.flatMap((item) => item.categories?.length ? item.categories : [item.category || 'Uncategorized']))].sort();
const brands = [...new Set(productData.flatMap((item) => item.brands?.length ? item.brands : [item.brand]).filter(Boolean))].sort();
const priceFormatter = new Intl.NumberFormat('en-KE', {
  style: 'currency',
  currency: 'KES',
  maximumFractionDigits: 0,
});

const formatProductPrice = (item) => {
  const minimum = item.priceMin ?? item.retail;
  const maximum = item.priceMax ?? item.retail;
  if (minimum == null) return 'Contact for price';
  if (maximum != null && maximum !== minimum) {
    return `${priceFormatter.format(minimum)} - ${priceFormatter.format(maximum)}`;
  }
  return priceFormatter.format(minimum);
};

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeBrand, setActiveBrand] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '4rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem',
    },
    heroArea: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      maxWidth: '700px',
      margin: '0 auto',
    },
    tagline: {
      fontSize: '0.875rem',
      fontWeight: '700',
      color: '#0ea5e9',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
    },
    title: {
      fontSize: '2.5rem',
      color: '#0f172a',
      fontWeight: '800',
    },
    subtitle: {
      fontSize: '1.125rem',
      color: '#64748b',
      lineHeight: '1.6',
    },
    /* E-commerce Category Filter Menu */
    filterTabs: {
      display: 'flex',
      justifyContent: 'flex-start',
      gap: '0.75rem',
      flexWrap: 'wrap',
      borderBottom: '1px solid #e2e8f0',
      paddingBottom: '1.5rem',
    },
    filterControl: {
      flex: '1 1 220px',
      minWidth: 0,
      padding: '0.75rem 0.9rem',
      border: '1px solid #cbd5e1',
      borderRadius: '6px',
      backgroundColor: '#ffffff',
      color: '#334155',
      fontSize: '0.95rem',
    },
    /* Premium E-commerce Grid Layout */
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
      gap: '1.25rem',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease',
      border: '1px solid #f1f5f9',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.01)',
    },
    imageContainer: {
      height: '240px',
      backgroundColor: '#f8fafc',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      borderBottom: '1px solid #f1f5f9',
    },
    badge: {
      position: 'absolute',
      top: '16px',
      left: '16px',
      backgroundColor: '#f0fdf4',
      color: '#166534',
      fontSize: '0.75rem',
      fontWeight: '700',
      padding: '0.35rem 0.75rem',
      borderRadius: '20px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    infoArea: {
      padding: '1.75rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      flexGrow: 1,
    },
    metaRow: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) auto',
      alignItems: 'center',
      gap: '0.5rem',
      minHeight: '2.5rem',
    },
    categoryTag: {
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: 2,
      overflow: 'hidden',
      fontSize: '0.7rem',
      fontWeight: '700',
      color: '#64748b',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      lineHeight: '1.35',
    },
    brandTag: {
      fontSize: '0.8rem',
      color: '#64748b',
      minHeight: '1.2rem',
    },
    priceTag: {
      fontSize: '1.25rem',
      fontWeight: '800',
      color: '#0f172a',
      whiteSpace: 'nowrap',
      fontVariantNumeric: 'tabular-nums',
    },
    prodTitle: {
      fontSize: '1.05rem',
      fontWeight: '700',
      color: '#0f172a',
      lineHeight: '1.35',
    },
    description: {
      fontSize: '1rem',
      color: '#0f172a',
      lineHeight: '1.4',
      minHeight: '2.8rem',
    },
    /* E-commerce Technical Feature Specs Row */
    specRow: {
      display: 'flex',
      gap: '0.5rem',
      flexWrap: 'wrap',
      marginTop: '0.25rem',
    },
    specTag: {
      fontSize: '0.75rem',
      backgroundColor: '#f1f5f9',
      color: '#475569',
      padding: '0.25rem 0.5rem',
      borderRadius: '4px',
      fontWeight: '500',
    },
    buyBtn: {
      marginTop: 'auto',
      width: '100%',
      padding: '0.85rem',
      backgroundColor: '#0ea5e9', /* Accent Teal */
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      fontSize: '0.95rem',
      fontWeight: '700',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.5rem',
      boxShadow: '0 4px 6px -1px rgba(14, 165, 233, 0.15)',
      transition: 'background-color 0.2s, transform 0.1s',
    },
    imagePlaceholder: {
      color: '#64748b',
      fontSize: '0.9rem',
    },
    resultCount: {
      color: '#64748b',
      fontSize: '0.9rem',
    },
    emptyState: {
      gridColumn: '1 / -1',
      padding: '3rem 1rem',
      textAlign: 'center',
      color: '#64748b',
    },
  };

  const filteredItems = productData.filter((item) => {
    const itemCategories = item.categories?.length ? item.categories : [item.category || 'Uncategorized'];
    const itemBrands = item.brands?.length ? item.brands : [item.brand];
    const matchesCategory = activeCategory === 'all' || itemCategories.includes(activeCategory);
    const matchesBrand = activeBrand === 'all' || itemBrands.includes(activeBrand);
    const variantText = (item.variants || []).map((variant) => `${variant.sku} ${variant.size}`).join(' ');
    const searchableText = `${item.description} ${itemBrands.join(' ')} ${itemCategories.join(' ')} ${variantText}`.toLowerCase();
    const matchesSearch = searchableText.includes(searchQuery.trim().toLowerCase());

    return matchesCategory && matchesBrand && matchesSearch;
  });

  const handleCheckoutIntent = (item) => {
    const priceMessage = item.priceMin == null
      ? 'no CASH PRICE + ZONE F TRANSPORT is listed'
      : `CASH PRICE + ZONE F TRANSPORT: ${formatProductPrice(item)}`;
    const options = (item.variants || []).map((variant) => {
      const label = variant.size || variant.sku;
      return label ? `${label}: ${variant.retail == null ? 'Contact for price' : priceFormatter.format(variant.retail)}` : '';
    }).filter(Boolean);
    const optionMessage = options.length > 1 || item.variants?.some((variant) => variant.size)
      ? ` Available sizes and prices: ${options.join(', ')}.`
      : '';
    const formattedMsg = encodeURIComponent(`Hello! I am interested in "${item.description}". ${priceMessage}.${optionMessage} Can you please confirm availability?`);
    window.open(`https://wa.me/254111707733?text=${formattedMsg}`, '_blank');
  };

  return (
    <div style={styles.container}>
      {/* Dynamic Shop Frame Header */}
      <div style={styles.heroArea}>
        <span style={styles.tagline}>Clinic Dispensary</span>
        <h1 style={styles.title}>Orthopedic & Medical Products</h1>
        <p style={styles.subtitle}>
          Browse orthopedic supports, mobility aids and rehabilitation products available from our clinic.
        </p>
      </div>

      <div style={styles.filterTabs}>
        <input
          type="search"
          aria-label="Search products"
          placeholder="Search products or brands"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          style={styles.filterControl}
        />
        <select
          aria-label="Filter by category"
          value={activeCategory}
          onChange={(event) => setActiveCategory(event.target.value)}
          style={styles.filterControl}
        >
          <option value="all">All categories</option>
          {categories.map((category) => <option key={category} value={category}>{category}</option>)}
        </select>
        <select
          aria-label="Filter by brand"
          value={activeBrand}
          onChange={(event) => setActiveBrand(event.target.value)}
          style={styles.filterControl}
        >
          <option value="all">All brands</option>
          {brands.map((brand) => <option key={brand} value={brand}>{brand}</option>)}
        </select>
      </div>

      <p style={styles.resultCount}>{filteredItems.length} products</p>

      <div style={styles.grid}>
        {filteredItems.length === 0 && <p style={styles.emptyState}>No products match your search.</p>}
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            style={styles.card}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 20px -5px rgba(0, 0, 0, 0.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.02)';
            }}
          >
            <div style={styles.imageContainer}>
              {item.image ? (
                <img
                  src={`${import.meta.env.BASE_URL}products/${item.image}`}
                  alt={item.description}
                  width="480"
                  height="360"
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '1rem', boxSizing: 'border-box' }}
                />
              ) : (
                <span style={styles.imagePlaceholder}>Photo unavailable</span>
              )}
            </div>

            <div style={styles.infoArea}>
              <div style={styles.metaRow}>
                <span style={styles.categoryTag}>{item.category || 'Uncategorized'}</span>
                <span style={styles.priceTag}>
                  {formatProductPrice(item)}
                </span>
              </div>
              
              <h2 style={styles.prodTitle}>{item.description}</h2>
              <p style={styles.brandTag}>{item.brand || ' '}</p>
              {(item.variants?.length > 1 || item.variants?.some((variant) => variant.size)) && (
                <div style={styles.specRow}>
                  {item.variants.map((variant) => {
                    const label = variant.size || variant.sku;
                    const price = variant.retail == null ? 'Contact for price' : priceFormatter.format(variant.retail);
                    return <span key={`${variant.sku}-${variant.size}`} style={styles.specTag}>{label ? `${label}: ${price}` : price}</span>;
                  })}
                </div>
              )}

              <button 
                style={styles.buyBtn}
                onClick={() => handleCheckoutIntent(item)}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0284c7'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0ea5e9'}
              >
                Order / Enquire Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
