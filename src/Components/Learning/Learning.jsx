import React from 'react';
import styles from './Learning.module.css';

const Learning = () => {
  const steps = [
    {
      step: "01",
      title: "Les bases : HTML, CSS & JavaScript",
      period: "2022 - 2023",
      description: "J'ai commencé par les fondamentaux du web. Apprentissage du structure (HTML), du style (CSS) et de l'interactivité (JavaScript).",
      resources: ["freeCodeCamp", "The Odin Project", "MDN Web Docs", "Traversy Media (YouTube)"]
    },
    {
      step: "02",
      title: "React & Frontend moderne",
      period: "2023",
      description: "Plongée dans React, les hooks, la gestion d'état, Vite, et les bonnes pratiques frontend.",
      resources: ["React Official Docs", "Scrimba React Course", "Net Ninja (YouTube)", "Frontend Masters"]
    },
    {
      step: "03",
      title: "Backend avec Django & Python",
      period: "2023 - 2024",
      description: "Apprentissage du développement backend : Python, Django, bases de données, API REST, authentification.",
      resources: ["Django Official Tutorial", "Corey Schafer (YouTube)", "Python Crash Course (book)", "Real Python"]
    },
    {
      step: "04",
      title: "Full-Stack & Projets réels",
      period: "2024",
      description: "Connexion frontend + backend, déploiement, Git, et création de projets complets (comme ce portfolio !).",
      resources: ["Full Stack Open (University of Helsinki)", "GitHub", "Vercel/Netlify", "Mes propres labs"]
    },
    {
      step: "05",
      title: "Mobile avec Flutter",
      period: "2024 - Maintenant",
      description: "Exploration du développement mobile multiplateforme avec Flutter et Dart.",
      resources: ["Flutter Official Docs", "Flutter by Example", "Reso Coder (YouTube)", "Academind Flutter Course"]
    }
  ];

  const generalResources = [
    { name: "w3schools", link: "https://www.w3schools.com/", icon: "🌐" },
    { name: "The Odin Project", link: "https://www.theodinproject.com", icon: "📚" },
    { name: "MDN Web Docs", link: "https://developer.mozilla.org", icon: "📖" },
    { name: "YouTube (Traversy, Net Ninja, Corey Schafer)", link: "https://www.youtube.com", icon: "📺" },
    { name: "GitHub", link: "https://github.com", icon: "💻" },
    { name: "Stack Overflow", link: "https://stackoverflow.com", icon: "🆘" }
  ];

  return (
    <section id="learning" className={styles.learning}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.titleNumber}>04.</span> Mon Parcours d'Apprentissage
      </h2>

      <div className={styles.timeline}>
        {steps.map((step, index) => (
          <div key={index} className={styles.timelineItem} style={{ animationDelay: `${index * 0.2}s` }}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNumber}>{step.step}</span>
                <h3>{step.title}</h3>
                <span className={styles.period}>{step.period}</span>
              </div>
              <p className={styles.description}>{step.description}</p>
              <div className={styles.resources}>
                <span>Ressources utilisées :</span>
                <div className={styles.resourceTags}>
                  {step.resources.map((res, i) => (
                    <span key={i} className={styles.resourceTag}>{res}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.resourcesSection}>
        <h3 className={styles.resourcesTitle}>Mes ressources favorites pour apprendre</h3>
        <div className={styles.resourcesGrid}>
          {generalResources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resourceCard}
            >
              <span className={styles.resourceIcon}>{resource.icon}</span>
              <span className={styles.resourceName}>{resource.name}</span>
              <span className={styles.externalLink}>↗</span>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.finalMessage}>
        <p>
          💡 <strong>Conseil :</strong> La clé, c'est la <strong>pratique quotidienne</strong> et la création de projets personnels.<br />
          Commence petit, sois constant, et tu verras des résultats incroyables !
        </p>
      </div>
    </section>
  );
};

export default Learning;