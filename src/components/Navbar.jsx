import React, { useState } from 'react';

export default function Navbar({ currentPage, setCurrentPage, onNavigateToSection }) {
  // Track if mobile slide-out menu is active
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const styles = {
    header: {
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e2e8f0',
      padding: '1.25rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.05)',
    },
    logo: {
      fontSize: '1.25rem',
      fontWeight: '800',
      color: '#1e293b',
      cursor: 'pointer',
      letterSpacing: '-0.5px',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      zIndex: 1001, /* Stay above sliding canvas */
    },
    logoIcon: {
      color: '#0ea5e9',
    },
    /* Desktop Navigation Link Cluster */
    desktopNav: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
    },
    navBtn: {
      background: 'none',
      border: 'none',
      fontSize: '0.95rem',
      fontWeight: '500',
      cursor: 'pointer',
      padding: '0.25rem 0',
      transition: 'color 0.2s ease',
    },
    bookBtn: {
      padding: '0.65rem 1.25rem',
      backgroundColor: '#0ea5e9',
      color: '#ffffff',
      border: 'none',
      borderRadius: '6px',
      fontSize: '0.9rem',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 4px 6px -1px rgb(14 165 233 / 0.1)',
      transition: 'background-color 0.2s ease',
    },
    /* Hamburger Menu Trigger Button */
    hamburger: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'none', /* Hidden on desktop screens */
      width: '44px',
      height: '44px',
      padding: '10px',
      flexDirection: 'column',
      gap: '5px',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1001,
    },
    bar: {
      width: '22px',
      height: '3px',
      display: 'block',
      borderRadius: '2px',
      backgroundColor: '#1e293b',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    /* Slide-out Overlay Canvas Panel */
    mobileMenu: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: 'min(280px, 86vw)',
      height: '100vh',
      backgroundColor: '#ffffff',
      boxShadow: '-4px 0 20px rgba(0,0,0,0.1)',
      padding: '6rem 2rem 2rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      transform: isMenuOpen ? 'translateX(0)' : 'translateX(105%)',
      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      zIndex: 1000,
    }
  };

  const getLinkStyle = (pageName) => ({
    ...styles.navBtn,
    color: currentPage === pageName ? '#0ea5e9' : '#64748b',
    textAlign: 'left',
    fontSize: '1.1rem',
  });

  // Closes slide menu safely and sets routing target
  const handleNavClick = (pageSetter, isSection = false, target = '') => {
    setIsMenuOpen(false);
    if (isSection) {
      onNavigateToSection(target);
    } else {
      setCurrentPage(pageSetter);
    }
  };

  return (
    <header style={styles.header}>
      {/* Brand Identity */}
      <div style={styles.logo} onClick={() => handleNavClick('home')}>
        <span style={styles.logoIcon}>✦</span>
        <span>Orthopedic<span style={{ fontWeight: '400', color: '#64748b' }}>Clinic</span></span>
      </div>

      {/* DESKTOP LINKS (Hidden on mobile via CSS) */}
      <nav className="desktop-only-nav" style={styles.desktopNav}>
        <button style={{...styles.navBtn, color: currentPage === 'home' ? '#0ea5e9' : '#64748b'}} onClick={() => setCurrentPage('home')}>Home</button>
        <button style={{...styles.navBtn, color: currentPage === 'services' ? '#0ea5e9' : '#64748b'}} onClick={() => setCurrentPage('services')}>Services</button>
        <button style={{...styles.navBtn, color: currentPage === 'products' ? '#0ea5e9' : '#64748b'}} onClick={() => setCurrentPage('products')}>Products</button>
        <button style={{...styles.navBtn, color: '#64748b'}} onClick={() => onNavigateToSection('about')}>About</button>
        <button style={{...styles.navBtn, color: '#64748b'}} onClick={() => onNavigateToSection('contact')}>Contact</button>
        <button style={styles.bookBtn} onClick={() => handleNavClick('book')}>Book Appointment</button>
      </nav>

      {/* MOBILE TRIGGER (Hamburger Icon) */}
      <button 
        className="mobile-hamburger-trigger" 
        style={styles.hamburger} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Navigation Menu"
      >
        <div style={{...styles.bar, transform: isMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none'}} />
        <div style={{...styles.bar, opacity: isMenuOpen ? 0 : 1}} />
        <div style={{...styles.bar, transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none'}} />
      </button>

      {/* SLIDE OUT DRAWER OVERLAY */}
      <div style={styles.mobileMenu}>
        <button style={getLinkStyle('home')} onClick={() => handleNavClick('home')}>Home</button>
        
        <button style={getLinkStyle('services')} onClick={() => handleNavClick('services')}>Services</button>

        <button style={getLinkStyle('products')} onClick={() => handleNavClick('products')}>Products</button>

        <button style={{ ...styles.navBtn, color: '#64748b', textAlign: 'left', fontSize: '1.1rem' }} onClick={() => handleNavClick(null, true, 'about')}>About</button>

        <button style={{ ...styles.navBtn, color: '#64748b', textAlign: 'left', fontSize: '1.1rem' }} onClick={() => handleNavClick(null, true, 'contact')}>Contact</button>

        <button 
          style={styles.bookBtn} 
          onClick={() => handleNavClick('book')}
        >
          Book Appointment
        </button>
      </div>
    </header>
  );
}
