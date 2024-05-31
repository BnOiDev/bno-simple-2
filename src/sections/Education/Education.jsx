import React from 'react';
import styles from './EducationStyles.module.css';
import { useTheme } from '../../common/ThemeContext';

function Education() {
  const { theme } = useTheme();

  const educationData = [
    {
      year: '2021',
      degree: 'Academia de Inovações / 2021',
      institution: 'SENAI Fatesg',
      description: 'Desenvolvimento de Sistemas voltado para empresa novomundo.com'
    },
    {
      year: '2016 - 2018',
      degree: 'Analise e Desenvolvimento de Sistemas',
      institution: 'Unifanap - universidade nossa senhora aparecida',
      description: 'Especialização em desenvolvimento de software e sistemas.'
    },
    {
      year: '2011 - 2015',
      degree: 'Tecnologo em Desenvolvimento de Sistemas',
      institution: 'Pontifícia Universidade Católica de Goiás',
      description: 'desenvolvimento de software e sistemas.'
    },
    // Adicione mais entradas conforme necessário
  ];

  return (
    <section id="education" className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <h2>Educação</h2>
      <div className={styles.timeline}>
        {educationData.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>{item.year}</h3>
              <h4>{item.degree}</h4>
              <h5>{item.institution}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
