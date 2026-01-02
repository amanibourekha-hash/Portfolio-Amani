import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Projets from './components/Projets/Projets';
import Competences from './components/Competences/Competences';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Learning from './components/Learning/Learning';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'contact'];
      const scrollPos = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio">
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />
      <Home scrollToSection={scrollToSection} />
      <Projets />
      <Competences />
       <Learning />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;