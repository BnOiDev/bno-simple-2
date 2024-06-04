// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styles from './SkillsStyles.module.css';
import { useTheme } from '../../common/ThemeContext';
import SkillList from '../../common/SkillList';

function Skills() {
  const { theme } = useTheme();
  const iconPrefix = theme === 'plain' ? 'plain' : 'original';
  const devIconBaseUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';

  const skillsByCategory = [
    {
      title: 'Todos',
      skills: ['html5', 'css3', 'javascript', 'typescript', 'vuejs', 'react', 'nextjs', 'nodejs', 'python', 'laravel', 'lumen', 'json', 'tailwindcss', 'bootstrap', 'rabbitmq', 'docker', 'oracle', 'mysql', 'postgresql', 'git', 'gitlab']
    },
    {
      title: 'Arquitetura de Software',
      skills: ['nodejs', 'laravel', 'lumen', 'docker']
    },
    {
      title: 'Back-End',
      skills: ['nodejs', 'python', 'laravel', 'lumen', 'php', 'mysql', 'postgresql' , 'oracle']
    },
    {
      title: 'Front-End',
      skills: ['html5', 'css3', 'javascript', 'typescript', 'vuejs', 'react', 'nextjs', 'tailwindcss', 'bootstrap']
    },
    {
      title: 'Banco de Dados',
      skills: ['oracle', 'mysql', 'postgresql']
    }
  ];

  // Estado para armazenar a categoria selecionada
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Função para alterar a categoria selecionada
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section id="skills" className={styles.container}>
      <h1 className={styles.sectionTitle}>Competências</h1>
      {/* Botões de filtro de categoria */}
      <div className={styles.categoryButtons}>
        {skillsByCategory.map((category, index) => (
          <button
            key={index}
            className={selectedCategory === category.title ? styles.activeButton : styles.button}
            onClick={() => handleCategoryChange(category.title)}
          >
            {category.title}
          </button>
        ))}
      </div>
      {/* Lista de habilidades filtradas pela categoria selecionada */}
      <div className={styles.skillList}>
        {skillsByCategory
          .find((category) => category.title === selectedCategory)
          .skills.map((skill, index) => (
            <SkillList
              key={index}
              src={`${devIconBaseUrl}${skill}/${skill}-${iconPrefix}.svg`}
              skill={skill.toUpperCase()}
              className={styles.card}
            />
          ))}
      </div>
    </section>
  );
}

export default Skills;
