import React from 'react';
import servicesImage from '../assets/services.jpg';
import consultationImage from '../assets/11.jpeg';
import injuryImage from '../assets/1.jpeg';
import sportsImage from '../assets/2.jpeg';
import spineImage from '../assets/3.jpeg';
import jointImage from '../assets/10.jpeg';

export default function ServicesPage({ onBookAppointment }) {
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '4rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '4rem',
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
    listLayout: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem',
    },
    serviceRow: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2.5rem',
      backgroundColor: '#f8fafc',
      padding: '2.5rem',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
      alignItems: 'center',
    },
    infoPane: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    serviceName: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#0f172a',
    },
    serviceDesc: {
      fontSize: '1rem',
      color: '#64748b',
      lineHeight: '1.6',
    },
    audienceBox: {
      backgroundColor: '#ffffff',
      padding: '1rem 1.25rem',
      borderRadius: '8px',
      borderLeft: '4px solid #0ea5e9',
    },
    audienceText: {
      fontSize: '0.875rem',
      color: '#475569',
      fontWeight: '500',
    },
    imagePlaceholder: {
      height: '240px',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#94a3b8',
      textAlign: 'center',
      padding: 0,
      overflow: 'hidden',
    },
    ctaBlock: {
      textAlign: 'center',
      backgroundColor: '#1e293b',
      color: '#ffffff',
      padding: '4rem 2rem',
      borderRadius: '16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.5rem',
      marginTop: '2rem',
    },
    ctaTitle: {
      fontSize: '1.75rem',
      fontWeight: '700',
    },
    ctaBtn: {
      padding: '0.8rem 2rem',
      backgroundColor: '#0ea5e9',
      color: '#ffffff',
      border: 'none',
      borderRadius: '6px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    }
  };

  // Safe, structured diagnostic placeholders following strict guidelines
  const detailedServices = [
    {
      name: 'Joint Pain Management',
      desc: 'Comprehensive diagnostic evaluation and clinical care plans for chronic joint degradation, including specialized targeting for Arthritis, Bursitis, and Tendonitis.',
      relevantTo: 'Patients suffering from deep friction pain, localized morning stiffness, or chronic swelling cycles.',
      image: jointImage
    },
    {
      name: 'Bone Injury & Traumatology Care',
      desc: 'Expert diagnostic review, stabilization tracking, and long-term recovery oversight for mechanical bone breaks, structural Fractures, and acute Dislocations.',
      relevantTo: 'Individuals recovering from high-impact structural bone trauma or sudden joint slips.',
      image: injuryImage
    },
    {
      name: 'Sports Injury Recovery',
      desc: 'Active rehabilitation and treatment pathways engineered specifically to mend soft-tissue athletic trauma, including Sprains, Strains, and mechanical ligament Tears.',
      relevantTo: 'Athletes navigating sharp rotational strains, tearing sensations, or repetitive impact wear.',
      image: sportsImage
    },
    {
      name: 'Back & Neck Pain Care',
      desc: 'Targeted assessment and conservative management tracks aimed at spinal alignment pressures, offering relief for Herniated Discs and nerve-rooted Sciatica.',
      relevantTo: 'Individuals experiencing radiating lower back discomfort, shooting leg pain, or structural cervical pressure.',
      image: spineImage
    },
    {
      name: 'Muscle & Tendon Rehabilitation',
      desc: 'Focused care pathways tailored specifically to treat painful muscle Strains and localized Tendonitis, restoring optimal tissue elasticity and joint range.',
      relevantTo: 'Patients dealing with chronic muscle fatigue, localized pulling aches, or soft tissue tightness.',
      image: consultationImage
    }
  ];


  return (
    <div style={styles.container}>
      {/* Page Header */}
      <div style={styles.heroArea}>
        <span style={styles.tagline}>Clinical Services</span>
        <h1 style={styles.title}>Nyahururu Orthopedic Care Center Services.</h1>
        <p style={styles.subtitle}>
          Our treatment protocols are designed to work in harmony with your biological timeline to restore stable, pain-free daily function.
        </p>
      </div>

      {/* Services Breakdown List */}
      <div style={styles.listLayout}>
        {detailedServices.map((service, index) => (
          <div key={index} style={styles.serviceRow}>
            {/* Left: Info */}
            <div style={styles.infoPane}>
              <h2 style={styles.serviceName}>{service.name}</h2>
              <p style={styles.serviceDesc}>{service.desc}</p>
              <div style={styles.audienceBox}>
                <p style={styles.audienceText}>
                  <strong>Commonly Relevant for:</strong> {service.relevantTo}
                </p>
              </div>
            </div>

            {/* Right: Graphic Media Area */}
            <div style={styles.imagePlaceholder}>
              <img src={service.image} alt={service.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        ))}
      </div>

      {/* Primary Appointment Call to Action Banner */}
      <div style={styles.ctaBlock}>
        <h2 style={styles.ctaTitle}>Ready to consult with an Orthopedic Specialist?</h2>
        <p style={{ color: '#94a3b8', maxWidth: '500px', fontSize: '1rem' }}>
          Schedule a direct assessment framework to begin mapping out an objective, evidence-based physical recovery road.
        </p>
        <button style={styles.ctaBtn} onClick={onBookAppointment}>
          Book an Appointment Now
        </button>
      </div>
    </div>
  );
}
