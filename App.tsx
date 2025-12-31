
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen gradient-bg selection:bg-teal-500/30">
      <Header activeSection={activeSection} />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
