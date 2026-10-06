import React from 'react';
import locationIcon from '../assets/location.svg';
import phoneIcon from '../assets/phone.svg';
import mailIcon from '../assets/mail-alt-svgrepo-com.svg';
import openIcon from '../assets/open.svg';

export default function ContactSection() {
  const styles = {
    section: {
      padding: '6rem 2rem',
      backgroundColor: '#f8fafc',
      display: 'flex',
      justifyContent: 'center',
    },
    container: {
      maxWidth: '1200px',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '4rem',
    },
    infoBlock: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem',
    },
    titleGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    tagline: {
      fontSize: '0.875rem',
      fontWeight: '700',
      color: '#0ea5e9',
      letterSpacing: '1px',
      textTransform: 'uppercase',
    },
    title: {
      fontSize: '2rem',
      color: '#0f172a',
      fontWeight: '800',
    },
    detailsGrid: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    },
    detailItem: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'flex-start',
    },
    iconWrapper: {
      width: '2rem',
      height: '2rem',
      flex: '0 0 2rem',
      marginTop: '0.15rem',
      objectFit: 'contain',
    },
    itemTitle: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#0f172a',
    },
    itemValue: {
      fontSize: '0.95rem',
      color: '#64748b',
      lineHeight: '1.5',
      overflowWrap: 'anywhere',
    },
    mapContainer: {
      width: '100%',
      height: 'min(460px, 100%)',
      minHeight: '380px',
      border: '1px solid #e2e8f0',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)',
    },
    iframe: {
      width: '100%',
      height: '100%',
      border: 0,
      minHeight: '380px',
    }
  };

  // Structured query parameters to center on the precise coordinates provided
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1555.9248664580414!2d36.36375051453057!3d0.03988312665832283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17876384e9a1e4a7%3A0xa8ebbb67372a48b8!2sL'Arche%20kenya!5e1!3m2!1sen!2ske!4v1788883162280!5m2!1sen!2ske";

  return (
    <section id="contact" style={styles.section}>
      <div className="contact-layout" style={styles.container}>
        
        {/* Left Side: Communication channels and operational hours */}
        <div style={styles.infoBlock}>
          <div style={styles.titleGroup}>
            <span style={styles.tagline}>Visit Our Centre</span>
            <h2 style={styles.title}>Location & Opening Hours</h2>
          </div>

          <div style={styles.detailsGrid}>
            <div style={styles.detailItem}>
              <img src={locationIcon} alt="" style={styles.iconWrapper} />
              <div>
                <h3 style={styles.itemTitle}>Physical Address</h3>
                <p style={styles.itemValue}>
                  <strong>Nyahururu Orthopaedic Centre</strong><br />
                  Shepherd Road, opposite Laikipia Comfort, <br />
                  on your way to the Nyahururu Law Courts. <br />
                  Nyahururu, Kenya
                </p>
              </div>
            </div>

            <div style={styles.detailItem}>
              <img src={phoneIcon} alt="" style={styles.iconWrapper} />
              <div>
                <h3 style={styles.itemTitle}>Direct Contact</h3>
                <p style={styles.itemValue}>Phone/Whatsapp: +254 741194959</p>
                {/* <p style={styles.itemValue}>WhatsApp Support Available</p> */}
                <p style={styles.itemValue}>Email: info@nyahururuortho.com</p>
              </div>
            </div>

            <div style={styles.detailItem}>
              <img src={openIcon} alt="" style={styles.iconWrapper} />
              <div>
                <h3 style={styles.itemTitle}>Operational Hours</h3>
                <p style={styles.itemValue}>Monday – Friday: 8:00 AM – 5:00 PM</p>
                <p style={styles.itemValue}>Saturday: 9:00 AM – 1:00 PM</p>
                <p style={styles.itemValue}>Sunday: Closed / Emergency On-Call Only</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Fully Interactive Embedded Digital Map */}
        <div className="contact-map" style={styles.mapContainer}>
          <iframe 
            title="Nyahururu Orthopaedic Centre Location Map"
            src={mapEmbedUrl}
            style={styles.iframe}
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
