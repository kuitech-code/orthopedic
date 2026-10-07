import React, { useState } from 'react';

export default function BookingPage() {
  // Local form state
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    reason: 'consultation', // Default dropdown value
    preferredDate: '',
    preferredTime: 'morning',
    notes: ''
  });

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '4rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem',
    },
    headerArea: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
    },
    tagline: {
      fontSize: '0.875rem',
      fontWeight: '700',
      color: '#0ea5e9',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
    },
    title: {
      fontSize: '2.25rem',
      color: '#0f172a',
      fontWeight: '800',
    },
    subtitle: {
      fontSize: '1rem',
      color: '#64748b',
      lineHeight: '1.5',
    },
    form: {
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '16px',
      padding: '2.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)',
    },
    fieldGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    label: {
      fontSize: '0.9rem',
      fontWeight: '600',
      color: '#334155',
    },
    input: {
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      border: '1px solid #cbd5e1',
      fontSize: '1rem',
      color: '#0f172a',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    select: {
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      border: '1px solid #cbd5e1',
      fontSize: '1rem',
      color: '#0f172a',
      backgroundColor: '#ffffff',
      outline: 'none',
    },
    textarea: {
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      border: '1px solid #cbd5e1',
      fontSize: '1rem',
      color: '#0f172a',
      minHeight: '100px',
      resize: 'vertical',
      outline: 'none',
    },
    submitBtn: {
      padding: '0.85rem',
      backgroundColor: '#0ea5e9',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: '700',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.5rem',
      boxShadow: '0 4px 6px -1px rgba(14, 165, 233, 0.15)',
      marginTop: '0.5rem',
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = '254111707733';

    // Format the form details neatly for WhatsApp reading
    const messageText = `New Appointment Request\n\n` +
      `Name: ${formData.fullName}\n` +
      `Phone: ${formData.phone}\n` +
      `Reason: ${formData.reason.toUpperCase()}\n` +
      `Date: ${formData.preferredDate || 'Not specified'}\n` +
      `Preferred time: ${formData.preferredTime}\n` +
      `Notes: ${formData.notes || 'None'}`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open in a new tab safely
    window.open(whatsappLink, '_blank');
  };

  return (
    <div style={styles.container}>
      {/* Header Info */}
      <div style={styles.headerArea}>
        <span style={styles.tagline}>Scheduling</span>
        <h1 style={styles.title}>Book an Appointment</h1>
        <p style={styles.subtitle}>
          Please fill out your request details below. Submitting this form will automatically generate an structured text configuration directly to our WhatsApp.
        </p>
      </div>

      {/* Semantic, Fully Accessible HTML Form */}
      <form style={styles.form} onSubmit={handleSubmit}>
        
        {/* Full Name */}
        <div style={styles.fieldGroup}>
          <label style={styles.label} htmlFor="fullName">Full Name *</label>
          <input 
            style={styles.input} 
            type="text" 
            id="fullName" 
            name="fullName" 
            required 
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Karanja"
          />
        </div>

        {/* Contact Phone */}
        <div style={styles.fieldGroup}>
          <label style={styles.label} htmlFor="phone">Phone Number *</label>
          <input 
            style={styles.input} 
            type="tel" 
            id="phone" 
            name="phone" 
            required 
            value={formData.phone}
            onChange={handleChange}
            placeholder="+254 712 345 678"
          />
        </div>

        {/* Reason for Consultation */}
        <div style={styles.fieldGroup}>
          <label style={styles.label} htmlFor="reason">Reason for Visit</label>
          <select 
            style={styles.select} 
            id="reason" 
            name="reason" 
            value={formData.reason}
            onChange={handleChange}
          >
            <option value="consultation">Initial Orthopedic Consultation</option>
            <option value="joint-knee">Knee or Joint Evaluation</option>
            <option value="injury-trauma">Fracture or Trauma Check</option>
            <option value="sports">Sports Injury Assessment</option>
            <option value="product-fitting">Product Sizing & Fitting</option>
          </select>
        </div>

        {/* Preferred Date */}
        <div style={styles.fieldGroup}>
          <label style={styles.label} htmlFor="preferredDate">Preferred Date</label>
          <input 
            style={styles.input} 
            type="date" 
            id="preferredDate" 
            name="preferredDate" 
            value={formData.preferredDate}
            onChange={handleChange}
          />
        </div>

        {/* Preferred Time Windows */}
        <div style={styles.fieldGroup}>
          <label style={styles.label} htmlFor="preferredTime">Preferred Time of Day</label>
          <select 
            style={styles.select} 
            id="preferredTime" 
            name="preferredTime" 
            value={formData.preferredTime}
            onChange={handleChange}
          >
            <option value="morning">Morning (Opening – 12:00 PM)</option>
            <option value="afternoon">Afternoon (12:00 PM – 5:00 PM)</option>
          </select>
        </div>

        {/* Brief Medical Notes */}
        <div style={styles.fieldGroup}>
          <label style={styles.label} htmlFor="notes">Additional Information or Symptoms (Optional)</label>
          <textarea 
            style={styles.textarea} 
            id="notes" 
            name="notes" 
            value={formData.notes}
            onChange={handleChange}
            placeholder="Briefly describe what you're experiencing (e.g., left knee discomfort for 2 weeks)..."
          />
        </div>

        {/* Dispatch Action Trigger */}
        <button 
          style={styles.submitBtn} 
          type="submit"
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0284c7'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0ea5e9'}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4Z"/>
          </svg>
          Book Now
        </button>

      </form>
    </div>
  );
}
