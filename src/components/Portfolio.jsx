import React from 'react';

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      image: 'path-to-image.jpg',
      deployedLink: 'https://deployed-link.com',
      githubLink: 'https://github.com/your-github/project1',
    },
    // Add more projects here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Deployed Application</a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;