import React from 'react';
import locationIcon from '../assets/location.svg';
import phoneIcon from '../assets/phone.svg';
import mailIcon from '../assets/mail-alt-svgrepo-com.svg';
import whatsappIcon from '../assets/whatsapp-svgrepo-com.svg';

export default function Footer({ setCurrentPage, onNavigateToSection }) {
  const styles = {
    footer: {
      backgroundColor: '#0f172a', /* Premium deep navy/charcoal slate */
      color: '#94a3b8', /* Highly legible muted text gray */
      padding: '4rem 2rem 2rem 2rem',
      borderTop: '1px solid #1e293b',
    },
    grid: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '3rem',
      paddingBottom: '3rem',
      borderBottom: '1px solid #1e293b',
    },
    col: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
    },
    brandTitle: {
      fontSize: '1.25rem',
      fontWeight: '800',
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    brandIcon: {
      color: '#0ea5e9',
    },
    brandDesc: {
      fontSize: '0.9rem',
      lineHeight: '1.5',
    },
    heading: {
      fontSize: '1rem',
      fontWeight: '700',
      color: '#ffffff',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
    },
    linkList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
    },
    footerLink: {
      background: 'none',
      border: 'none',
      color: '#94a3b8',
      fontSize: '0.925rem',
      textAlign: 'left',
      cursor: 'pointer',
      padding: 0,
      transition: 'color 0.2s ease',
    },
    contactRow: {
      display: 'flex',
      gap: '0.75rem',
      alignItems: 'flex-start',
      fontSize: '0.9rem',
      lineHeight: '1.5',
    },
    contactIcon: {
      width: '1.25rem',
      height: '1.25rem',
      flex: '0 0 1.25rem',
      objectFit: 'contain',
      marginTop: '0.15rem',
      filter: 'brightness(0) saturate(100%) invert(67%) sepia(10%) saturate(454%) hue-rotate(176deg) brightness(91%) contrast(88%)',
    },
    bottomBar: {
      maxWidth: '1200px',
      margin: '2rem auto 0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
      fontSize: '0.85rem',
    }
  };

  const handleLinkClick = (pageName, isSection = false, sectionId = '') => {
    if (isSection) {
      onNavigateToSection(sectionId);
    } else {
      setCurrentPage(pageName);
    }
  };

  return (
    <footer className="site-footer" style={styles.footer}>
      <div style={styles.grid}>
        {/* Column 1: Identity */}
        <div style={styles.col}>
          <div style={styles.brandTitle}>
            <span style={styles.brandIcon}>✦</span>
            <span>Orthopedic<span style={{ fontWeight: '400', color: '#94a3b8' }}>Clinic</span></span>
          </div>
          <p style={styles.brandDesc}>
            Specialist healthcare combining modern advanced diagnostics with custom physical recovery pathways.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div style={styles.col}>
          <h3 style={styles.heading}>Explore</h3>
          <div style={styles.linkList}>
            <button style={styles.footerLink} onClick={() => handleLinkClick('home')}>Home</button>
            <button style={styles.footerLink} onClick={() => handleLinkClick('services')}>Services Page</button>
            <button style={styles.footerLink} onClick={() => handleLinkClick('products')}>Product Catalogue</button>
            <button style={styles.footerLink} onClick={() => handleLinkClick(null, true, 'about')}>About Clinic</button>
          </div>
        </div>

        {/* Column 3: Contact Channels */}
        <div style={styles.col}>
          <h3 style={styles.heading}>Contact Channels</h3>
          <div style={styles.linkList}>
            <div style={styles.contactRow}><img src={phoneIcon} alt="" style={styles.contactIcon} /><span>Phone: +254111707733</span></div>
            <div style={styles.contactRow}><img src={whatsappIcon} alt="" style={styles.contactIcon} /><span>WhatsApp: +254111707733</span></div>
            <div style={styles.contactRow}><img src={mailIcon} alt="" style={styles.contactIcon} /><span>Email: info@orthopedicclinic.com</span></div>
          </div>
        </div>

        {/* Column 4: Location Vector */}
        <div style={styles.col}>
          <h3 style={styles.heading}>Our Location</h3>
          <div style={styles.contactRow}>
            <img src={locationIcon} alt="" style={styles.contactIcon} />
            <span>
              Shepherd Road, opposite Laikipia Comfort, <br /> 
              on your way to the Nyahururu Law Courts.<br />
              Nyahururu, Kenya
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Legal Band */}
      <div style={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} Orthopedic Clinic. All medical information displayed is strictly for informational parameters.</p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <p>Made by <a href="https://wa.me/254741194959" target="_blank" rel="noopener noreferrer" style={{ color: '#80afc5a2', textDecoration: 'none' }}>KuiTech</a></p>
        </div>
      </div>
    </footer>
  );
}
