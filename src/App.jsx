import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Projets from './Components/Projets/Projets';
import Competences from './Components/Competences/Competences';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Learning from './Components/Learning/Learning';

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