import React from 'react';
import { productData } from '../data.js';
import './FeaturedProducts.css';

const featuredProducts = productData.reduce((featured, product) => {
  if (!product.image || featured.some((item) => item.category === product.category)) {
    return featured;
  }

  featured.push(product);
  return featured;
}, []).slice(0, 4);

const priceFormatter = new Intl.NumberFormat('en-KE', {
  style: 'currency',
  currency: 'KES',
  maximumFractionDigits: 0,
});

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
                  {product.retail == null ? 'Contact for price' : priceFormatter.format(product.retail)}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}