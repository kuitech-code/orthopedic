/*
import React from 'react';

export default function InsuranceStrip() {
  const styles = {
    section: {
      padding: '4rem 2rem',
      backgroundColor: '#1e293b', // Very light cool neutral background
      borderTop: '1px solid #e2e8f0',
      borderBottom: '1px solid #e2e8f0',
      display: 'flex',
      justifyContent: 'center',
    },
    container: {
      maxWidth: '1200px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2rem',
    },
    title: {
      fontSize: '0.875rem',
      fontWeight: '700',
      color: '#e8ebf0', // Muted slate color
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
    logoGrid: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '4rem',
      flexWrap: 'wrap',
      width: '100%',
    },
    logoPlaceholder: {
      fontSize: '1.15rem',
      fontWeight: '700',
      color: '#f8f9facc',
      letterSpacing: '0.5px',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      userSelect: 'none',
    },
    logoIcon: {
      fontSize: '1.4rem',
      color: '#eceff1cc',
    }
  };

  // Safe placeholder corporate medical providers to comply with the healthcare rules
  const providerPlaceholders = [
    { name: "APA Insurance", icon: "⌖" },
    { name: "CIC", icon: "⬢" },
    { name: "SHA", icon: "❖" },
    { name: "Liaison", icon: "▲" },
    { name: "Mtiba", icon: "◼" }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h3 style={styles.title}>Accepted Insurance Networks & Providers</h3>
        
        <div style={styles.logoGrid}>
          {providerPlaceholders.map((provider, index) => (
            <div key={index} style={styles.logoPlaceholder}>
              <span style={styles.logoIcon}>{provider.icon}</span>
              <span>{provider.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
*/
