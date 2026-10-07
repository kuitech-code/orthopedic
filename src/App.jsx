import React, { useState, useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueStrip from './components/ValueStrip';
import AboutSection from './components/AboutSection';
// import ServicesPreview from './components/ServicesPreview';
// import ProductsPreview from './components/ProductsPreview';
import FAQSection from './components/FAQSection';
// import InsuranceStrip from './components/InsuranceStrip';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import BookingPage from './pages/BookingPage';

export default function App() {
  // Track which page the user is on ('home', 'services', 'products')
  const [currentPage, setCurrentPage] = useState('home');

  // Handle smooth scrolling for "About" and "Contact" anchors
  const navigateToSection = (sectionId) => {
    // If user is on services/products, go to home page first
    if (currentPage !== 'home') {
      setCurrentPage('home');
      // Wait for home page to render, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // If already on home, just scroll smoothly
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to top automatically when changing pages
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="app-container">
    {/* Completely replace the old <header> block with this clean component line: */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onNavigateToSection={navigateToSection} 
        onBookClick={() => setCurrentPage('book')} 
      />

      {/* 2. DYNAMIC PAGE ROUTER */}
      <main style={{ minHeight: '80vh', width: '100%', overflowX: 'hidden' }}>

        {currentPage === 'home' && (
          <div>
            <Hero onBookAppointment={() => setCurrentPage('book')} onExploreServices={() => setCurrentPage('services')} />
            <ValueStrip />
            <AboutSection />
            {/* <ServicesPreview onViewAllServices={() => setCurrentPage('services')} /> */}
            {/* <ProductsPreview onViewAllProducts={() => setCurrentPage('products')} /> */}
            <FAQSection />
            {/* <InsuranceStrip /> */}
            <ContactSection />

          </div>
        )}

        {currentPage === 'services' && (
          <ServicesPage onBookAppointment={() => setCurrentPage('book')} />
        )}

        {currentPage === 'products' && (
          <ProductsPage />
        )}

        {currentPage === 'book' && <BookingPage />}
      </main>

      {/* 3. FOOTER */}

      <Footer setCurrentPage={setCurrentPage} onNavigateToSection={navigateToSection} />
      <WhatsAppWidget onBookAppointment={() => setCurrentPage('book')} />
    </div>
  );
}
