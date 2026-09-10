import React, { useState, useEffect } from 'react';

export default function WhatsAppWidget({ onBookAppointment }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Replace this with the client's actual WhatsApp number later (include country code, no spaces/dashes)
  const whatsappNumber = "254741194959"; 
  const defaultMessage = encodeURIComponent("Hello! I am visiting your website and would like to enquire about an appointment or product.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  useEffect(() => {
    // 1. Initial trigger: Show pop-up 5 seconds after the user lands on the site
    const initialTimer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 5000);

    // 2. Recurring trigger: Check and show the pop-up every 3 minutes (180,000 ms)
    const recurringInterval = setInterval(() => {
      setIsPopupVisible(true);
    }, 180000);

    // Clean up timers if the component unmounts to prevent memory leaks
    return () => {
      clearTimeout(initialTimer);
      clearInterval(recurringInterval);
    };
  }, []);

  const styles = {
    wrapper: {
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '12px',
      zIndex: 9999, /* Ensure it hovers above all other site content */
      fontFamily: 'sans-serif',
    },
    /* Floating circular button styling */
    floatingButton: {
      width: '60px',
      height: '60px',
      backgroundColor: '#25D366', /* Official WhatsApp Green */
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'transform 0.2s ease',
    },
    /* Chat Pop-up Box styling */
    popupBox: {
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      width: 'min(320px, calc(100vw - 32px))',
      overflow: 'hidden',
      display: isPopupVisible ? 'flex' : 'none',
      flexDirection: 'column',
      animation: 'slideUp 0.3s ease',
    },
    popupHeader: {
      backgroundColor: '#075E54', /* WhatsApp Dark Teal Header */
      color: '#ffffff',
      padding: '12px 16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    popupTitle: {
      fontSize: '0.9rem',
      fontWeight: '600',
    },
    closeBtn: {
      background: 'none',
      border: 'none',
      color: '#ffffff',
      fontSize: '1.2rem',
      cursor: 'pointer',
      opacity: '0.8',
      padding: '0',
      width: 'auto',
    },
    popupBody: {
      padding: '16px',
      backgroundColor: '#f4f1eb', /* WhatsApp background cream tint tint */
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    chatBubble: {
      backgroundColor: '#ffffff',
      padding: '10px 12px',
      borderRadius: '0px 8px 8px 8px',
      fontSize: '0.875rem',
      color: '#334155',
      lineHeight: '1.4',
      boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
      maxWidth: '90%',
    },
    chatActionBtn: {
      backgroundColor: '#25D366',
      color: '#ffffff',
      textDecoration: 'none',
      padding: '8px',
      borderRadius: '6px',
      fontSize: '0.85rem',
      fontWeight: '600',
      textAlign: 'center',
      display: 'block',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    }
  };

  return (
    <div className="whatsapp-widget" style={styles.wrapper}>
      {/* 1. SMART TIMED CHAT POP-UP */}
      <div style={styles.popupBox}>
        <div style={styles.popupHeader}>
          <span style={styles.popupTitle}>Orthopedic Clinic Support</span>
          <button 
            style={styles.closeBtn} 
            onClick={() => setIsPopupVisible(false)}
            aria-label="Close message"
          >
            &times;
          </button>
        </div>
        <div style={styles.popupBody}>
          <div style={styles.chatBubble}>
            Book your appointment today and get the right orthopaedic care for your needs. At only KSH 1,500.
          </div>
          <button style={{ ...styles.chatActionBtn, border: 'none', cursor: 'pointer' }} onClick={() => { setIsPopupVisible(false); onBookAppointment(); }}>
            Book for KSH 1,500
          </button>
        </div>
      </div>

      {/* 2. FLOATING ANCHOR BUTTON */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={styles.floatingButton}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        title="Chat with us on WhatsApp"
      >
        {/* Clean minimal inline SVG WhatsApp icon logo */}
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      </a>
    </div>
  );
}
