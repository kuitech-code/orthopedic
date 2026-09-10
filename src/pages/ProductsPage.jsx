import React, { useState } from 'react';
import productImage from '../assets/12.jpeg';
import braceImage from '../assets/9.jpeg';
import mobilityImage from '../assets/13.jpeg';
import rehabImage from '../assets/2.jpeg';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

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
      justifyContent: 'center',
      gap: '0.75rem',
      flexWrap: 'wrap',
      borderBottom: '1px solid #e2e8f0',
      paddingBottom: '1.5rem',
    },
    tabBtn: (isActive) => ({
      padding: '0.6rem 1.5rem',
      borderRadius: '8px',
      fontSize: '0.9rem',
      fontWeight: '600',
      cursor: 'pointer',
      border: isActive ? '1px solid #0f172a' : '1px solid #e2e8f0',
      backgroundColor: isActive ? '#0f172a' : '#ffffff',
      color: isActive ? '#ffffff' : '#475569',
      transition: 'all 0.2s ease',
    }),
    /* Premium E-commerce Grid Layout */
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2.5rem',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease',
      border: '1px solid #f1f5f9',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.01)',
    },
    imageContainer: {
      height: '280px',
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
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    categoryTag: {
      fontSize: '0.75rem',
      fontWeight: '700',
      color: '#64748b',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    priceTag: {
      fontSize: '1.5rem',
      fontWeight: '800',
      color: '#0f172a', /* High-end fashion or tech style typography pricing */
    },
    prodTitle: {
      fontSize: '1.35rem',
      fontWeight: '700',
      color: '#0f172a',
      lineHeight: '1.2',
    },
    description: {
      fontSize: '0.925rem',
      color: '#64748b',
      lineHeight: '1.5',
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
    }
  };

  // Upgraded structured inventory data complete with formal currency blocks & variations [7]
  const storefrontProducts = [
    { id: 1, name: 'Elite Patella Stabilizer Brace', price: 'KSH850.00', category: 'braces', specs: ['Medical Grade', 'Breathable', 'S/M/L/XL'], desc: 'Anatomically molded framework featuring dynamic compression side-spring stabilizers for patellar tracking support.', image: braceImage },
    { id: 2, name: 'Premium Rigid Lumbar Support', price: 'KSH1200.00', category: 'braces', specs: ['Steel Stays', 'Dual Straps', 'Adjustable'], desc: 'Ergonomic structural back brace reinforced with medical steel stays to comfortably reduce acute lumbar fatigue vector loads.', image: productImage },
    { id: 3, name: 'Anatomical Wrist Split Brace', price: 'KSH450.00', category: 'braces', specs: ['Removable Splint', 'Left/Right'], desc: 'Immobilization support equipped with an aluminum lower pallet guard engineered for neutral carpal-tunnel tracking alignment.', image: braceImage },
    { id: 4, name: 'Ergonomic Crutches (Shock-Absorbing)', price: 'KSH1100.00', category: 'mobility', specs: ['Aluminum', 'Height-Tuned', 'Pair'], desc: 'Lightweight double-extruded structural poles with embedded safety underarm springs and anti-skid rubber traction feet.', image: mobilityImage },
    { id: 5, name: 'All-Terrain Rolling Walker Frame', price: 'KSH2400.00', category: 'mobility', specs: ['8" Wheels', 'Brakes', 'Max 130kg'], desc: 'Heavy-duty fluid mobility system built with double action speed-clamp security brakes and a wide padded resting bench panel.', image: mobilityImage },
    { id: 6, name: 'Clinical Therapy Exercise Kit', price: 'KSH350.00', category: 'rehab', specs: ['Latex-Free', '5 Resistance Levels'], desc: 'Professional orthopedic progressive band loops calibrated directly for safe targeted isolation and secondary joint therapy routines.', image: rehabImage },
  ];

  const filteredItems = activeCategory === 'all' 
    ? storefrontProducts 
    : storefrontProducts.filter(p => p.category === activeCategory);

  const handleCheckoutIntent = (productName, price) => {
    const formattedMsg = encodeURIComponent(`Hello Clinic! I am on your website catalog and want to purchase the "${productName}" listed for ${price}. Can you confirm sizing and pickup hours?`);
    window.open(`https://wa.me/254741194959?text=${formattedMsg}`, '_blank');
  };

  return (
    <div style={styles.container}>
      {/* Dynamic Shop Frame Header */}
      <div style={styles.heroArea}>
        <span style={styles.tagline}>Clinic Dispensary</span>
        <h1 style={styles.title}>Orthopedic & Medical Products</h1>
        <p style={styles.subtitle}>
          Premium, clinically verified rehabilitation devices and bracing frameworks. Select your sizing variants and click below to secure item verification with our active stock desk instantly.
        </p>
      </div>

      {/* Modern Filter Toggle Elements */}
      <div style={styles.filterTabs}>
        <button style={styles.tabBtn(activeCategory === 'all')} onClick={() => setActiveCategory('all')}>All Gear</button>
        <button style={styles.tabBtn(activeCategory === 'braces')} onClick={() => setActiveCategory('braces')}>Supports & Braces</button>
        <button style={styles.tabBtn(activeCategory === 'mobility')} onClick={() => setActiveCategory('mobility')}>Mobility & Walkers</button>
        <button style={styles.tabBtn(activeCategory === 'rehab')} onClick={() => setActiveCategory('rehab')}>Physical Rehab</button>
      </div>

      {/* Grid Canvas System */}
      <div style={styles.grid}>
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
            {/* Visual Thumbnail Area */}
            <div style={styles.imageContainer}>
              <span style={styles.badge}>In Stock</span>
              <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Shopping Specifications Area */}
            <div style={styles.infoArea}>
              <div style={styles.metaRow}>
                <span style={styles.categoryTag}>{item.category}</span>
                <span style={styles.priceTag}>{item.price}</span>
              </div>
              
              <h2 style={styles.prodTitle}>{item.name}</h2>
              <p style={styles.description}>{item.desc}</p>
              
              {/* Product Specifications Tags Row */}
              <div style={styles.specRow}>
                {item.specs.map((spec, sIdx) => (
                  <span key={sIdx} style={styles.specTag}>{spec}</span>
                ))}
              </div>

              {/* Order/Enquiry Action Switch */}
              <button 
                style={styles.buyBtn}
                onClick={() => handleCheckoutIntent(item.name, item.price)}
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
