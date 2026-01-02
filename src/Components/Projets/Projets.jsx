import React from 'react';
import styles from './Projets.module.css';
import projectsData from '../../data/projectsData'; 

import todoImg from '../../assets/todo.jpg';
import weatherImg from '../../assets/weather.jpg';
import ecommerceImg from '../../assets/ecommerce.jpg';
import reactImg from '../../assets/react.png';
import jestImg from '../../assets/jest.png';
import nodeImg from '../../assets/node.png';
import kanbanImg from '../../assets/kanban.png';


const images = {
  'node.png': nodeImg,
  'jest.png': jestImg,
  'react.png': reactImg,
  'kanban.png': kanbanImg,
  'ecommerce.jpg': ecommerceImg
};

const Projets = () => {
  return (
    <section id="Projets" className={styles.projects}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.titleNumber}>01.</span> Mes Projets
      </h2>
      <div className={styles.projectsGrid}>
        {projectsData.map((project, index) => (
          <div 
            key={project.id} 
            className={styles.projectCard} 
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div 
              className={styles.projectImage} 
              style={{ backgroundImage: `url(${images[project.image]})` }}
            ></div>
            <div className={styles.projectOverlay}></div>
            <div className={styles.projectContent}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>📁</div>
                <div className={styles.cardLinks}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">⚡</a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">↗</a>
                  )}
                </div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className={styles.projectDate}>{project.date}</p>

              <div className={styles.techStackBadges}>
                {project.tech.map((tech, i) => (
                  <span key={i} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projets;