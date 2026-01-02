import React, { useState, useEffect } from 'react';
import styles from './Competences.module.css';

const Competences = () => {
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('skills');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0 && !skillsVisible) {
          setSkillsVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [skillsVisible]);

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
      { name: "Docker", icon: "🐋", level: 40 },
      { name: "VS Code", icon: "💻", level: 95 }
    ]
  };

  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.titleNumber}>02.</span> Compétences & Technologies
      </h2>
      <div className={styles.skillsGrid}>
        {Object.entries(skills).map(([category, items], index) => (
          <div key={category} className={styles.skillCategory} style={{ animationDelay: `${index * 0.15}s` }}>
            <h3>
              <span className={styles.categoryIcon}>
                {category === 'Frontend' ? '💻' : category === 'Backend' ? '⚙️' : category === 'Database' ? '🗄️' : '🛠️'}
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
  );
};

export default Competences;