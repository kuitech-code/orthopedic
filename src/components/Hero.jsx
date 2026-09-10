import React from 'react';
import heroImage from '../assets/12.jpeg';

export default function Hero({ onBookAppointment, onExploreServices }) {
  // Simple inline styles to avoid creating extra CSS sheets right now
  const styles = {
    section: {
      padding: '5rem 2rem',
      backgroundColor: '#f8fafc', // Clean light cool background
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      maxWidth: '1200px',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '4rem',
      alignItems: 'center',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    },
    badge: {
      alignSelf: 'flex-start',
      backgroundColor: '#e0f2fe',
      color: '#0369a1',
      padding: '0.4rem 1rem',
      borderRadius: '20px',
      fontSize: '0.875rem',
      fontWeight: '600',
      letterSpacing: '0.5px',
    },
    title: {
      fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
      lineHeight: '1.15',
      color: '#0f172a',
      fontWeight: '800',
    },
    subtitle: {
      fontSize: '1.125rem',
      color: '#64748b',
      lineHeight: '1.6',
      maxWidth: '540px',
    },
    btnGroup: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      marginTop: '1rem',
    },
    primaryBtn: {
      padding: '0.8rem 1.8rem',
      backgroundColor: '#0ea5e9', // Modern Tech Teal
      color: '#ffffff',
      border: 'none',
      borderRadius: '6px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      transition: 'all 0.2s',
    },
    secondaryBtn: {
      padding: '0.8rem 1.8rem',
      backgroundColor: 'transparent',
      color: '#0f172a',
      border: '2px solid #cbd5e1',
      borderRadius: '6px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s',
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
    },
    graphicPlaceholder: {
      width: '100%',
      aspectRatio: '4/3',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '16px',
      boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.05)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      color: '#94a3b8',
      textAlign: 'center',
    }
  };

  return (
    <section className="hero-section" style={styles.section}>
      <div className="hero-container" style={styles.container}>
        {/* Left Side: Text and Actions */}
        <div style={styles.content}>
          <div style={styles.badge}>ORTHOPEDIC CARE</div>
          <h1 style={styles.title}>NYAHURURU ORTHOPAEDIC CENTRE.</h1>
          <p style={styles.subtitle}>
              Trusted Orthopaedic Care in Nyahururu, Laikipia County.
              We provide professional orthopaedic consultations, treatment and rehabilitation for bone, joint and musculoskeletal conditions.
          </p>
          <div className="hero-actions" style={styles.btnGroup}>
            <button 
              style={styles.primaryBtn} 
              onClick={onBookAppointment}
            >
              Book an Appointment
            </button>
            <button 
              style={styles.secondaryBtn} 
              onClick={onExploreServices}
            >
              Explore our Services
            </button>
          </div>
        </div>

        {/* Right Side: Clean Tech-Medical Placeholder Image Area */}
        <div style={styles.imageContainer}>
          <img src={heroImage} alt="Orthopaedic supports and mobility products" style={{ ...styles.graphicPlaceholder, objectFit: 'cover' }} />
        </div>
      </div>
    </section>
  );
}
