import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const projects = [
    {
      title: 'Student Search Engine',
      image: '/Student Search Engine.png',
      deployedLink: 'https://jovana667.github.io/student-search-engine/',
      githubLink: 'https://github.com/Jovana667/student-search-engine.git',
    },
    {
      title: 'Weather App',
      image: '/Weather App.png',
      deployedLink: 'https://ashley55mv.github.io/Module-6-Challenge/',
      githubLink: 'https://github.com/Ashley55mv/Module-6-Challenge.git',
    },
    {
      title: 'Task Board',
      image: '/Task Board.png',
      deployedLink: 'https://ashley55mv.github.io/Module-5-Challenge/',
      githubLink: 'https://github.com/Ashley55mv/Module-5-Challenge.git',
    },
    {
      title: 'Matching a Hex Value',
      image: '/Matching a Hex Value.png',
      deployedLink: 'https://gist.github.com/Ashley55mv/4f93591f8414c5057c6d674470c0d001',
      githubLink: 'https://github.com/Ashley55mv/Module-17-Challenge.git',
    },
    {
      title: 'E Commerce Backend',
      image: '/E Commerce.png',
      deployedLink: 'https://drive.google.com/file/d/1PRobGScgg_cl5V_3U3h8Eaj3gWGD9VdN/view',
      githubLink: 'https://github.com/Ashley55mv/Module-13-Challenge.git',
    },
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            <div className="project-links">
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Deployed Application</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;