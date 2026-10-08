import React, { useState, useEffect } from 'react';

export default function WhatsAppWidget({ onBookAppointment }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Client's WhatsApp number (country code 254)
  const whatsappNumber = "254140559090"; 

  // Pre-configured structured menu options
  const menuOptions = [
    {
      id: 'book',
      label: 'Book an Appointment',
      message: "Hello Nyahururu Orthopaedic Clinic! I would like to book a consultation appointment. Please assist me with available dates."
    },
    {
      id: 'enquire',
      label: 'Ask about Services / Products',
      message: "Hello! I have an enquiry regarding your orthopaedic services and clinic products."
    },
    {
      id: 'location',
      label: 'Location & Clinic Hours',
      message: "Hello! Where is your clinic located in Nyahururu, and what are your working hours?"
    }
  ];

  // Helper function to build dynamic link targets
  const getWhatsAppLink = (messageText) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;
  };

  useEffect(() => {
    // 1. Initial trigger: Show pop-up 5 seconds after the user lands on the site
    const initialTimer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 5000);

    // 2. Recurring trigger: Check and show the pop-up every 3 minutes
    const recurringInterval = setInterval(() => {
      setIsPopupVisible(true);
    }, 180000);

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
      zIndex: 9999,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    },
    floatingButton: {
      width: '60px',
      height: '60px',
      backgroundColor: '#25D366',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'transform 0.2s ease',
    },
    popupBox: {
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      width: 'min(340px, calc(100vw - 32px))',
      overflow: 'hidden',
      display: isPopupVisible ? 'flex' : 'none',
      flexDirection: 'column',
      transition: 'all 0.3s ease',
    },
    popupHeader: {
      backgroundColor: '#075E54',
      color: '#ffffff',
      padding: '14px 16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    popupTitle: {
      fontSize: '0.95rem',
      fontWeight: '600',
    },
    closeBtn: {
      background: 'none',
      border: 'none',
      color: '#ffffff',
      fontSize: '1.4rem',
      cursor: 'pointer',
      opacity: '0.8',
      padding: '0',
      width: 'auto',
      lineHeight: '1',
    },
    popupBody: {
      padding: '16px',
      backgroundColor: '#f4f1eb',
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
    },
    chatBubble: {
      backgroundColor: '#ffffff',
      padding: '12px',
      borderRadius: '0px 8px 8px 8px',
      fontSize: '0.875rem',
      color: '#334155',
      lineHeight: '1.4',
      boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
      maxWidth: '92%',
    },
    menuLabel: {
      fontSize: '0.75rem',
      fontWeight: '700',
      color: '#64748b',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      marginTop: '4px',
    },
    menuContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    menuOptionBtn: {
      backgroundColor: '#ffffff',
      color: '#075E54',
      border: '1px solid #cbd5e1',
      textDecoration: 'none',
      padding: '10px 14px',
      borderRadius: '8px',
      fontSize: '0.875rem',
      fontWeight: '500',
      textAlign: 'left',
      display: 'block',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      cursor: 'pointer',
      transition: 'background-color 0.2s, border-color 0.2s',
    }
  };

  return (
    <div className="whatsapp-widget" style={styles.wrapper}>
      {/* 1. INTERACTIVE OPTION POP-UP */}
      <div style={styles.popupBox}>
        <div style={styles.popupHeader}>
          <span style={styles.popupTitle}>Orthopaedic Clinic Support</span>
          <button 
            style={styles.closeBtn} 
            onClick={() => setIsPopupVisible(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>
        <div style={styles.popupBody}>
          <div style={styles.chatBubble}>
            Welcome to Nyahururu Orthopaedic Clinic. How can we help you get the right care today?
          </div>

          {/* New Interactive Section */}
          <span style={styles.styles?.menuLabel || styles.menuLabel}>Select an option to begin:</span>
          
          <div style={styles.menuContainer}>
            {menuOptions.map((option) => (
              <a
                key={option.id}
                href={getWhatsAppLink(option.message)}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.menuOptionBtn}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#f8fafc';
                  e.currentTarget.style.borderColor = '#075E54';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.borderColor = '#cbd5e1';
                }}
                onClick={() => {
                  // Fallback anchor action context hook
                  if (option.id === 'book' && onBookAppointment) {
                    onBookAppointment();
                  }
                  setIsPopupVisible(false);
                }}
              >
                {option.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 2. FLOATING BASE ANCHOR BUTTON */}
      <a 
        href={getWhatsAppLink("Hello! I'd like to enquire about your services.")} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={styles.floatingButton}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        title="Chat with us on WhatsApp"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      </a>
    </div>
  );
}
