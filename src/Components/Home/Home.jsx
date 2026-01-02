import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';

const Home = ({ scrollToSection }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeWord, setActiveWord] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const roles = ['Full Stack', 'Frontend', 'Backend', 'Data BASE'];

  const fullText = "1|🚀 Je transforme des idées 💡 en applications Web 💻 et Mobiles 📱2| élégantes ✨ grâce au développement Full-Stack 🗄️";

  
  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  // Effet typewriter ultra fluide avec curseur qui suit parfaitement
  useEffect(() => {
    let index = 0;
    const typingSpeed = 50; // Vitesse d'écriture (ajuste si tu veux plus rapide/lent)

    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.substring(0, index));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  const cvLink = "/cv/CV-BOUREKHA_Amani.pdf"; 

  return (
    <section id="home" className={styles.home}>
      <div className={styles.cursor} style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }} />

      <div className={styles.bgBlobs}>
        <div className={styles.blob1} style={{ transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.15}px)` }} />
        <div className={styles.blob2} style={{ transform: `translate(-${scrollY * 0.08}px, -${scrollY * 0.12}px)` }} />
        <div className={styles.blob3} style={{ transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.0005})` }} />
      </div>

      <div className={styles.heroContainer}>
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <div className={styles.greeting}>
              <span className={styles.wave}>👋</span>
              <h2 className={styles.greetingText}>Salut, je suis</h2>
            </div>

            <h1 className={styles.name}>Amani</h1>

            <div className={styles.roleContainer}>
              <div className={styles.roleWrapper}>
                {roles.map((role, index) => (
                  <span
                    key={role}
                    className={`${styles.role} ${index === activeWord ? styles.roleActive : ''}`}
                  >
                    {role}
                  </span>
                ))}
              </div>
              <span className={styles.developerText}>Developer</span>
            </div>

            <div className={styles.techStack}>
              {[
                { icon: '⚛️', name: 'React' },
                { icon: '🐍', name: 'Django' },
                { icon: '📱', name: 'Flutter' },
                { icon: '🗄️', name: 'MySQL' },
              ].map((tech) => (
                <div key={tech.name} className={styles.techItem}>
                  <span className={styles.techIcon}>{tech.icon}</span>
                  <span className={styles.techTooltip}>{tech.name}</span>
                </div>
              ))}
            </div>

            {/* Typewriter avec curseur qui suit parfaitement */}
            <div className={styles.typewriterContainer}>
              <p className={styles.typewriter}>
                {typedText}
                {/* Le curseur clignote toujours pendant l'écriture, et reste à la fin */}
                <span className={`${styles.typingCursor} ${isTypingComplete ? styles.cursorEnd : ''}`}>|</span>
              </p>
            </div>

            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn} onClick={() => scrollToSection('projects')}>
                <span>Voir Mes Projets</span>
                <span className={styles.btnArrow}>→</span>
              </button>
              <button className={styles.secondaryBtn} onClick={() => scrollToSection('contact')}>
                Me Contacter
              </button>
              {/* Nouveau bouton CV ajouté ici */}
              <a href={cvLink} download className={styles.cvButton}>
                <span>Télécharger CV</span>
                <span className={styles.cvArrow}>↓</span>
              </a>
            </div>

            <div className={styles.socialLinks}>
              <a href="https://github.com/amanibourekha-hash" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>💻</a>
              <a href="https://www.linkedin.com/in/amani-bourekha-5278a8395" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>💼</a>
              <a href="mailto:amani.bourekha@univ-constantine2.dz" className={styles.socialLink}>📧</a>
              {/* Option : Ajouter un lien CV ici aussi si tu veux, avec icon 📄 */}
              <a href={cvLink} download className={styles.socialLink}>📄</a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.cardContainer}>
              <div className={styles.card3d}>
                <div className={styles.cardInner}>
                  <div className={styles.cardSymbol}>&lt;/&gt;</div>
                  <div className={styles.cardTitle}>Full Stack</div>
                  <div className={styles.cardSubtitle}>Web & Mobile Developer</div>
                </div>
              </div>

              <div className={styles.floatingIcon} style={{ top: '10%', right: '0' }}>💻</div>
              <div className={styles.floatingIcon} style={{ top: '60%', left: '-10%' }}>⚡</div>
              <div className={styles.floatingIcon} style={{ bottom: '10%', right: '10%' }}>🚀</div>
              <div className={styles.floatingIcon} style={{ bottom: '0', left: '0' }}>✨</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel}></div>
        </div>
      </div>
    </section>
  );
};

export default Home;