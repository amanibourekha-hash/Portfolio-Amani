import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ scrollToSection, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (section) => {
    scrollToSection(section);
    setIsOpen(false); // Ferme le menu mobile après clic
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.logoSymbol}>&lt;/&gt;</span>
        <span className={styles.logoText}>DevPortfolio</span>
      </div>

      <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        {['Accueil', 'Projets', 'Compétences', 'Apprentissage', 'Contact'].map((section) => (
          <button
            key={section}
            onClick={() => handleLinkClick(section)}
            className={activeSection === section ? styles.active : ''}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>
      <button
        className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;