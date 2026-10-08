import React from 'react';
import { productData } from '../data.js';
import './FeaturedProducts.css';

const featuredProductIds = [
  'CA 856L L',
  'JL 925 L S',
  'CA 811 L',
  'CA 811L 5',
];
const featuredProducts = featuredProductIds
  .map((id) => productData.find((product) => product.id === id))
  .filter((product) => product && product.image);

const priceFormatter = new Intl.NumberFormat('en-KE', {
  style: 'currency',
  currency: 'KES',
  maximumFractionDigits: 0,
});

const formatProductPrice = (product) => {
  if (product.priceMin == null) return 'Contact for price';
  if (product.priceMax !== product.priceMin) {
    return `${priceFormatter.format(product.priceMin)} - ${priceFormatter.format(product.priceMax)}`;
  }
  return priceFormatter.format(product.priceMin);
};

export default function FeaturedProducts({ onOpenProducts }) {
  return (
    <section className="featured-products" aria-labelledby="featured-products-title">
      <div className="featured-products__inner">
        <div className="featured-products__intro">
          <span className="featured-products__eyebrow">Clinic picks</span>
          <h2 id="featured-products-title">Find your everyday support.</h2>
          <p>Explore orthopaedic essentials selected from our clinic catalogue.</p>
          <button className="featured-products__cta" onClick={onOpenProducts}>
            Browse all products
          </button>
        </div>

        <div className="featured-products__grid">
          {featuredProducts.map((product) => (
            <button
              className="featured-products__item"
              key={product.id}
              onClick={onOpenProducts}
              aria-label={`Browse products: ${product.description}`}
            >
              <span className="featured-products__image-wrap">
                <img
                  src={`${import.meta.env.BASE_URL}products/${product.image}`}
                  alt={product.description}
                  width="480"
                  height="360"
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="featured-products__details">
                <span className="featured-products__category">{product.category}</span>
                <span className="featured-products__name">{product.description}</span>
                <span className="featured-products__price">
                  {formatProductPrice(product)}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}