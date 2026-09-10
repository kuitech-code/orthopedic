import React from 'react';

export default function ValueStrip() {
  const styles = {
    section: {
      backgroundColor: '#1e293b', // Deep charcoal/navy for an authoritative, stable feel
      color: '#ffffff',
      padding: '2rem 1rem',
      display: 'flex',
      justifyContent: 'center',
    },
    container: {
      maxWidth: '1200px',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '2rem',
    },
    item: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1rem',
    },
    iconWrapper: {
      backgroundColor: 'rgba(14, 165, 233, 0.15)', // Light teal highlight tint
      color: '#0ea5e9', // Crisp accent teal
      padding: '0.5rem',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    textGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',
    },
    title: {
      fontSize: '1rem',
      fontWeight: '600',
      letterSpacing: '0.3px',
    },
    desc: {
      fontSize: '0.875rem',
      color: '#94a3b8', // Muted text for readability contrast
    }
  };

  // Static trust categories matching our healthcare rules (no manufactured stats)
  const trustItems = [
    {
      title: 'Specialized Orthopedic Care',
      desc: 'Focused exclusively on bone, joint and mobility conditions.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )
    },
    {
      title: 'Patient-Centered Care',
      desc: "Care and treatment plans tailored to each patient's individual needs.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
      )
    },
    {
      title: 'Quality Medical Supplies',
      desc: 'Access to orthopaedic supports and mobility products to complement your care.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="m10 15 5-5-1.41-1.41L10 12.17 8.41 10.59 7 12l3 3z"/>
        </svg>
      )
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {trustItems.map((item, index) => (
          <div key={index} style={styles.item}>
            <div style={styles.iconWrapper}>
              {item.icon}
            </div>
            <div style={styles.textGroup}>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.desc}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
