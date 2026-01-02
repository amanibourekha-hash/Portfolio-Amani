import React, { useState, useEffect } from 'react';
import styles from './Portfolio.module.css';

// Importez vos images locales ici
import todoImg from '../assets/todo.jpg';
import kanbanImg from '../assets/kanban.jpg';
import weatherImg from '../assets/weather.jpg';
import ecommerceImg from '../assets/ecommerce.jpg';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Salut ! Je suis développeur Full Stack 👋", sender: "me" }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [activeWord, setActiveWord] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const roles = ['Full Stack', 'Frontend', 'Backend', 'Data BASE'];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible && !skillsVisible) {
          setSkillsVisible(true);
        }
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [skillsVisible]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const labs = [
    {
      id: 1,
      title: "Lab 1: Todo App",
      description: "Application de gestion des tâches avec React Hooks",
      tech: ["React", "Vite", "CSS Modules"],
      github: "https://github.com/username/lab1",
      demo: "https://demo.com/lab1",
      image: todoImg
    },
    {
      id: 2,
      title: "Lab 7: Kanban Board",
      description: "Tableau Kanban interactif avec drag & drop",
      tech: ["React", "Vite", "Jest"],
      github: "https://github.com/username/lab7",
      demo: "https://demo.com/lab7",
      image: kanbanImg
    },
    {
      id: 3,
      title: "Lab 5: Weather App",
      description: "Application météo avec API integration",
      tech: ["React", "API", "CSS"],
      github: "https://github.com/username/lab5",
      demo: "https://demo.com/lab5",
      image: weatherImg
    },
    {
      id: 4,
      title: "rw-accessoire25",
      description: "Ecommerce web application",
      tech: ["HTML", "CSS", "PHP", "SQL"],
      github: "https://github.com/username/ecommerce",
      demo: "https://rw-accessoire25.byethost8.com",
      image: ecommerceImg
    }
  ];

  const skills = {
    Frontend: [
      { name: "React", icon: "⚛️", level: 85 },
      { name: "JavaScript", icon: "📜", level: 90 },
      { name: "HTML5", icon: "🌐", level: 95 },
      { name: "CSS3", icon: "🎨", level: 90 },
      { name: "Flutter", icon: "📱", level: 75 },
      { name: "Dart", icon: "🎯", level: 70 }
    ],
    Backend: [
      { name: "Django", icon: "🐍", level: 80 },
      { name: "Python", icon: "🐍", level: 85 },
      { name: "PHP", icon: "🐘", level: 75 },
      { name: "Java", icon: "☕", level: 70 }
    ],
    Database: [
      { name: "MySQL", icon: "🗄️", level: 80 }
    ],
    Tools: [
      { name: "Git", icon: "📦", level: 85 },
      { name: "Docker", icon: "🐋", level: 70 },
      { name: "VS Code", icon: "💻", level: 95 }
    ]
  };

  const handleSendMessage = () => {
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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
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

      {/* Animated Background Blobs */}
      <div className={styles.bgBlobs}>
        <div 
          className={styles.blob1}
          style={{ transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.15}px)` }}
        />
        <div 
          className={styles.blob2}
          style={{ transform: `translate(-${scrollY * 0.08}px, -${scrollY * 0.12}px)` }}
        />
        <div 
          className={styles.blob3}
          style={{ transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.0005})` }}
        />
      </div>

      {/* Navigation */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <span className={styles.logoSymbol}>&lt;/&gt;</span>
          <span className={styles.logoText}>DevPortfolio</span>
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

      {/* HOME SECTION - NOUVELLE VERSION RESPONSIVE */}
      <section id="home" className={styles.home}>
        <div className={styles.heroContainer}>
          <div className={styles.heroGrid}>
            
            {/* Left Content */}
            <div className={styles.heroContent}>
              {/* Greeting with animated emoji */}
              <div className={styles.greeting}>
                <span className={styles.wave}>👋</span>
                <h2 className={styles.greetingText}>Salut, je suis</h2>
              </div>

              {/* Name with gradient */}
              <h1 className={styles.name}>Amani</h1>

              {/* Dynamic Role Switcher */}
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

              {/* Tech Stack Icons */}
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

              {/* Description */}
              <p className={styles.description}>
                1 | 🚀 Je transforme des idées 💡 en applications Web 💻 et Mobiles 📱 élégantes ✨ 
                grâce au développement Full-Stack 🗄️
              </p>

              {/* CTA Buttons */}
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

              {/* Social Links */}
              <div className={styles.socialLinks}>
                <a href="https://github.com/amanibourekha-hash" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  💻
                </a>
                <a href="https://www.linkedin.com/in/amani-bourekha-5278a8395" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  💼
                </a>
                <a href="mailto:amani.bourekha@univ-constantine2.dz" className={styles.socialLink}>
                  📧
                </a>
              </div>
            </div>

            {/* Right Content - 3D Card */}
            <div className={styles.heroVisual}>
              <div className={styles.cardContainer}>
                {/* Main Card */}
                <div className={styles.card3d}>
                  <div className={styles.cardInner}>
                    <div className={styles.cardSymbol}>&lt;/&gt;</div>
                    <div className={styles.cardTitle}>Full Stack</div>
                    <div className={styles.cardSubtitle}>Web & Mobile Developer</div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className={styles.floatingIcon} style={{ top: '10%', right: '0' }}>
                  💻
                </div>
                <div className={styles.floatingIcon} style={{ top: '60%', left: '-10%' }}>
                  ⚡
                </div>
                <div className={styles.floatingIcon} style={{ bottom: '10%', right: '10%' }}>
                  🚀
                </div>
                <div className={styles.floatingIcon} style={{ bottom: '0', left: '0' }}>
                  ✨
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <span className={styles.scrollText}>Scroll</span>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel}></div>
          </div>
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
              <div className={styles.projectImage} style={{ backgroundImage: `url(${lab.image})` }}></div>
              <div className={styles.projectOverlay}></div>
              <div className={styles.projectContent}>
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
                <div className={styles.techStackBadges}>
                  {lab.tech.map((tech, i) => (
                    <span key={i} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
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
                    <div className={styles.skillHeader}>
                      <div className={styles.skillInfo}>
                        <span className={styles.skillIcon}>{skill.icon}</span>
                        <span className={styles.skillName}>{skill.name}</span>
                      </div>
                      <span className={styles.skillPercentage}>
                        {skillsVisible ? skill.level : 0}%
                      </span>
                    </div>
                    <div className={styles.progressBar}>
                      <div 
                        className={`${styles.progressFill} ${skillsVisible ? styles.fillAnimation : ''}`}
                        style={{ width: skillsVisible ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
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
              <a href="mailto:amani.bourekha@univ-constantine2.dz" className={styles.contactLink}>
                📧 amani.bourekha@univ-constantine2.dz
              </a>
              <a href="https://www.linkedin.com/in/amani-bourekha-5278a8395" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                💼 LinkedIn Amani BOUREKHA
              </a>
              <a href="https://github.com/amanibourekha-hash" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                💻 GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Chat Button */}
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

            <div className={styles.chatInput}>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Votre message..."
                className={styles.messageInput}
              />
              <button onClick={handleSendMessage} className={styles.sendButton}>
                ➤
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>Designed & Built with ❤️ by Amani</p>
        <p className={styles.copyright}>© 2025 - Tous droits réservés</p>
      </footer>
    </div>
  );
};

export default Portfolio;