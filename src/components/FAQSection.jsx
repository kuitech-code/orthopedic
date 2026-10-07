import React, { useState } from 'react';

export default function FAQSection() {
  // Track which accordion item index is currently expanded (-1 means all closed)
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const styles = {
    section: {
      padding: '6rem 2rem',
      backgroundColor: '#f1f5f9',
      display: 'flex',
      justifyContent: 'center',
    },
    container: {
      maxWidth: '800px', /* Narrower width for optimal reading comfort */
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem',
    },
    titleGroup: {
      textAlign: 'center',
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
    accordion: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    item: {
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      overflow: 'hidden',
      backgroundColor: '#f8fafc',
      transition: 'all 0.2s ease',
    },
    header: {
      width: '100%',
      padding: '1.25rem 1.5rem',
      backgroundColor: '#f8fafc',
      border: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
      textAlign: 'left',
      fontSize: '1.05rem',
      fontWeight: '600',
      color: '#0f172a',
      gap: '1rem',
    },
    icon: (isExpanded) => ({
      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.2s ease',
      color: '#0ea5e9',
      fontWeight: 'bold',
      fontSize: '1.2rem',
    }),
    panel: (isExpanded) => ({
      maxHeight: isExpanded ? '200px' : '0',
      overflow: 'hidden',
      transition: 'max-height 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
      backgroundColor: '#ffffff',
    }),
    content: {
      padding: '1.25rem 1.5rem',
      fontSize: '0.95rem',
      color: '#64748b',
      lineHeight: '1.6',
      borderTop: '1px solid #e2e8f0',
    }
  };

  // Safe, healthcare-compliant clinical logistics placeholders
  const faqData = [
    {
      question: "How much does an orthopaedic consultation cost?",
      answer: "An orthopaedic consultation costs KSH 1,500. Contact us to book your appointment or use the booking form on this website."
    },
    {
      question: "Do I need an appointment?",
      answer: "Appointments are recommended to help us serve you efficiently. Contact the clinic by phone, visit the clinic or WhatsApp to schedule a consultation."
    },
    {
      question: "Do you accept walk-in patients?",
      answer: "Walk-in patients are welcome, but we recommend scheduling an appointment to minimise wait times and ensure that the appropriate specialist is available for your consultation."
    },
    {
      question: "Do I need a formal doctor referral to book an orthopedic consultation?",
      answer: "No, a formal medical referral is not strictly mandatory to schedule an initial diagnostic evaluation at our clinic. However, if you have a referral from your primary care physician or another specialist, please bring it along to your appointment. It can provide valuable context for our orthopedic team and help us better understand your medical history."
    },
    {
      question: "What should I bring along to my first orthopedic evaluation?",
      answer: "Please bring any recent diagnostic imaging assets you possess, such as physical X-ray films, MRI discs, or relevant laboratory reports. Additionally, bring a complete list of your current active prescriptions, supplements, and any existing bracing supports you are utilizing."
    },
    {
      question: "Do you sell orthopaedic supports and medical products?",
      answer: "Yes. We offer a range of orthopaedic supports, mobility aids and other medical products. Browse our Products section or contact us for product availability and pricing."
    },
    {
      question: "Can I order products online?",
      answer: "Our online catalogue allows you to view available products. At this time, orders and enquiries are handled directly through the clinic via phone or WhatsApp."
    },
    {
      question: "Where is Nyahururu Orthopaedic Centre located?",
      answer: "We are located in Nyahururu, Kenya. Visit our Contact section for our exact location, directions, phone number and opening hours."
    },
    {
      question: "How can I contact the clinic?",
      answer: "You can reach the clinic at +254 111707733 or +254 140559090. You can also use the contact information provided on our website to enquire about appointments, services and products."
    },
    {
      question: "What are your clinic hours?",
      answer: "Our clinic is open Monday to Friday from 8:00 AM to 5:00 PM and Saturday from 8:00 AM to 12:00 PM. We are closed on Sundays."
    }
    // ,{
    //   question: "Do you accept insurance?",
    //   answer: "Yes, we accept a variety of private health insurance plans. Please contact our clinic directly to confirm whether your specific insurance provider is accepted and to understand any coverage requirements."
    // }
  ];

  const toggleItem = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Section Header */}
        <div style={styles.titleGroup}>
          <span style={styles.tagline}>Common Inquiries</span>
          <h2 style={styles.title}>Frequently Asked Questions</h2>
        </div>

        {/* Interactive Accordion Canvas */}
        <div style={styles.accordion}>
          {faqData.map((item, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div key={index} style={styles.item}>
                <button 
                  style={styles.header} 
                  onClick={() => toggleItem(index)}
                  aria-expanded={isExpanded}
                >
                  <span>{item.question}</span>
                  <span style={styles.icon(isExpanded)}>▾</span>
                </button>
                <div style={styles.panel(isExpanded)}>
                  <div style={styles.content}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
