import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Salut ! Je suis développeur Full Stack 👋", sender: "me" }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const labs = [
    {
      id: 1,
      title: "Lab 1: Todo App",
      description: "Application de gestion des tâches avec React Hooks",
      tech: ["React", "Vite", "CSS Modules"],
      github: "https://github.com/username/lab1",
      demo: "https://demo.com/lab1"
    },
    {
      id: 2,
      title: "Lab 7: Kanban Board",
      description: "Tableau Kanban interactif avec drag & drop",
      tech: ["React", "Vite", "Jest"],
      github: "https://github.com/username/lab7",
      demo: "https://demo.com/lab7"
    },
    {
      id: 3,
      title: "Lab 5: Weather App",
      description: "Application météo avec API integration",
      tech: ["React", "API", "CSS"],
      github: "https://github.com/username/lab5",
      demo: "https://demo.com/lab5"
    }
  ];

  const skills = {
    Frontend: ["React", "JavaScript", "HTML5", "CSS3", "Vite"],
    Backend: ["Node.js", "Express", "Python", "PHP"],
    Database: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    Tools: ["Git", "Jest", "Docker", "VS Code"]
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage('');
      
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "Merci pour votre message ! Je vous répondrai bientôt 🚀", 
          sender: "me" 
        }]);
      }, 1000);
    }
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.portfolio}>
      {/* Cursor effect */}
      <div 
        className={styles.cursor} 
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      />

      {/* Navigation */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <span className={styles.logoSymbol}>&lt;/&gt;</span>
          <span>DevPortfolio</span>
        </div>
        <div className={styles.navLinks}>
          {['home', 'projects', 'skills', 'contact'].map(section => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={activeSection === section ? styles.active : ''}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className={styles.home}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.typewriter}>
              <h1>
                <span className={styles.wave}>👋</span> Bonjour, je suis
                <span className={styles.gradient}> Votre Nom</span>
              </h1>
            </div>
            <h2 className={styles.subtitle}>Full Stack Developer</h2>
            
            {/* Animated Tech Band */}
            <div className={styles.techBand}>
              <div className={styles.bandTrack}>
                <span className={styles.techItem}>Frontend 💻</span>
                <span className={styles.techItem}>Backend ⚙️</span>
                <span className={styles.techItem}>Base de Données 🗄️</span>
                <span className={styles.techItem}>Frontend 💻</span>
                <span className={styles.techItem}>Backend ⚙️</span>
                <span className={styles.techItem}>Base de Données 🗄️</span>
              </div>
            </div>

            <p className={styles.bio}>
              Passionné par le développement web moderne et la création d'expériences 
              utilisateur exceptionnelles. Spécialisé en React, Node.js et architectures Full Stack.
            </p>
            
            <div className={styles.ctaButtons}>
              <button 
                className={styles.primaryBtn}
                onClick={() => scrollToSection('projects')}
              >
                <span>Voir Mes Projets</span>
                <span className={styles.btnArrow}>→</span>
              </button>
              <button 
                className={styles.secondaryBtn}
                onClick={() => scrollToSection('contact')}
              >
                Me Contacter
              </button>
            </div>
          </div>

          <div className={styles.heroImage}>
            <div className={styles.imageFrame}>
              <div className={styles.profileCircle}>
                <div className={styles.codeSymbol}>&lt;/&gt;</div>
              </div>
              <div className={styles.floatingElements}>
                <div className={styles.float1}>💻</div>
                <div className={styles.float2}>⚡</div>
                <div className={styles.float3}>🚀</div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Background */}
        <div className={styles.bgAnimation}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.projects}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleNumber}>01.</span> Mes Projets
        </h2>
        <div className={styles.projectsGrid}>
          {labs.map((lab, index) => (
            <div 
              key={lab.id} 
              className={styles.projectCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>📁</div>
                <div className={styles.cardLinks}>
                  <a href={lab.github} target="_blank" rel="noopener noreferrer">
                    <span className={styles.githubIcon}>⚡</span>
                  </a>
                  {lab.demo && (
                    <a href={lab.demo} target="_blank" rel="noopener noreferrer">
                      <span className={styles.externalIcon}>↗</span>
                    </a>
                  )}
                </div>
              </div>
              <h3>{lab.title}</h3>
              <p>{lab.description}</p>
              <div className={styles.techStack}>
                {lab.tech.map((tech, i) => (
                  <span key={i} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={styles.skills}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleNumber}>02.</span> Compétences & Technologies
        </h2>
        <div className={styles.skillsGrid}>
          {Object.entries(skills).map(([category, items], index) => (
            <div 
              key={category} 
              className={styles.skillCategory}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3>
                <span className={styles.categoryIcon}>
                  {category === 'Frontend' ? '💻' : 
                   category === 'Backend' ? '⚙️' : 
                   category === 'Database' ? '🗄️' : '🛠️'}
                </span>
                {category}
              </h3>
              <div className={styles.skillsList}>
                {items.map((skill, i) => (
                  <div key={i} className={styles.skillItem}>
                    <span className={styles.skillDot}>▹</span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleNumber}>03.</span> Contact
        </h2>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h3>Restons en Contact ! 🚀</h3>
            <p>
              Vous avez un projet en tête ? N'hésitez pas à me contacter.
              Je suis toujours ouvert aux nouvelles opportunités.
            </p>
            <div className={styles.contactLinks}>
              <a href="mailto:votre.email@example.com" className={styles.contactLink}>
                📧 votre.email@example.com
              </a>
              <a href="https://linkedin.com/in/votre-profil" className={styles.contactLink}>
                💼 LinkedIn
              </a>
              <a href="https://github.com/votre-username" className={styles.contactLink}>
                💻 GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Chat Button - Bottom Right */}
        {!chatOpen && (
          <div className={styles.chatPrompt} onClick={() => setChatOpen(true)}>
            <span className={styles.promptText}>Découvre-moi</span>
            <span className={styles.promptArrow}>→</span>
          </div>
        )}

        {/* Chat Interface */}
        {chatOpen && (
          <div className={styles.chatContainer}>
            <div className={styles.chatHeader}>
              <div className={styles.chatHeaderInfo}>
                <div className={styles.statusDot}></div>
                <span>Discutons ensemble !</span>
              </div>
              <button 
                className={styles.closeChat}
                onClick={() => setChatOpen(false)}
              >
                ✕
              </button>
            </div>
            
            <div className={styles.chatMessages}>
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`${styles.message} ${
                    msg.sender === 'me' ? styles.myMessage : styles.userMessage
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <form className={styles.chatInput} onSubmit={handleSendMessage}>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Votre message..."
                className={styles.messageInput}
              />
              <button type="submit" className={styles.sendButton}>
                ➤
              </button>
            </form>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>Designed & Built with ❤️ by Votre Nom</p>
        <p className={styles.copyright}>© 2025 - Tous droits réservés</p>
      </footer>
    </div>
  );
};

export default Portfolio;