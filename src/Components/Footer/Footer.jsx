import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.quote}>
        Créer des solutions numériques, c’est répondre à un besoin essentiel de notre époque et montrer ma capacité à m’adapter et innover dans le monde digital
      </p>

      <p className={styles.signature}>Designed & Built with ❤️ by Amani</p>

      <p className={styles.copyright}>© 2026 - Tous droits réservés</p>
    </footer>
  );
};

export default Footer;