import React from 'react';
import aboutImage from '../assets/11.jpeg';

export default function AboutSection() {
  const styles = {
    section: {
      padding: '6rem 2rem',
      backgroundColor: '#d4d2d24b',
      display: 'flex',
      justifyContent: 'center',
    },
    container: {
      maxWidth: '1200px',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '4rem',
      alignItems: 'center',
    },
    leftColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
    },
    tagline: {
      fontSize: '0.875rem',
      fontWeight: '700',
      color: '#0ea5e9', // Accent Teal
      letterSpacing: '1px',
      textTransform: 'uppercase',
    },
    title: {
      fontSize: '2.25rem',
      color: '#0f172a',
      fontWeight: '800',
      lineHeight: '1.2',
    },
    paragraph: {
      fontSize: '1.05rem',
      color: '#64748b',
      lineHeight: '1.65',
    },
    rightColumn: {
      backgroundColor: '#f8fafc',
      padding: '2.5rem',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    },
    aboutImage: {
      width: '100%',
      height: '220px',
      objectFit: 'cover',
      borderRadius: '10px',
      marginBottom: '0.5rem',
    },
    pillarTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#0f172a',
      marginBottom: '0.25rem',
    },
    pillarDesc: {
      fontSize: '0.95rem',
      color: '#64748b',
      lineHeight: '1.5',
    }
  };

  return (
    <section id="about" style={styles.section}>
      <div className="about-layout" style={styles.container}>
        {/* Left Side: Short Text Narrative */}
        <div style={styles.leftColumn}>
          <span style={styles.tagline}>Our Mission</span>
          <h2 style={styles.title}>Dedicated to Restoring Your Freedom of Movement</h2>
          <p style={styles.paragraph}>
           Nyahururu Orthopaedic Centre is a specialized outpatient clinic dedicated to the diagnosis, treatment and management of orthopaedic conditions affecting the bones, joints, muscles and mobility.
          </p>
          <p style={styles.paragraph}>
            From sports injuries and fractures to ongoing joint and musculoskeletal conditions, we provide professional, patient-centred care tailored to each individual's needs. We also offer quality orthopaedic supports and medical supplies to help patients through treatment, recovery and rehabilitation.
          </p>
          <p style={styles.paragraph}>
            Our goal is simple: to help every patient receive the right care and support to move with greater comfort, confidence and independence.
          </p>
        </div>

        {/* Right Side: Key Care Pillars (Placeholders to avoid manufactured claims) */}
        <div className="about-panel" style={styles.rightColumn}>
          <img src={aboutImage} alt="Nyahururu Orthopaedic Centre" style={styles.aboutImage} />
          <div>
            <h3 style={styles.pillarTitle}>Evidence-Based Care</h3>
            <p style={styles.pillarDesc}>Our assessments and treatment recommendations are guided by established orthopaedic practices and each patient's individual needs.</p>
          </div>
          <div>
            <h3 style={styles.pillarTitle}>Personalised Recovery</h3>
            <p style={styles.pillarDesc}>We develop practical treatment and recovery plans that support each patient's progress from treatment through rehabilitation.</p>
          </div>
          <div>
            <h3 style={styles.pillarTitle}>Specialist-Led Care</h3>
            <p style={styles.pillarDesc}>Receive attentive, personalised care with professional guidance throughout your treatment and recovery journey.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
