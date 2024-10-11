// src/components/Projects.js
import React from 'react';
import './Projects.css';
import projectOneExe from './downloads/chidiya'; // Correct path to your .exe file
import projectTwoExe from './downloads/Project_2'; // Correct path to your .exe file
import projectThreeExe from './downloads/ILoveYou'; // Correct path to your .exe file


const projects = [
  {
    title: 'Project One',
    description: 'A web application that allows users to track their tasks efficiently.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: 'https://via.placeholder.com/300x200', // Replace with actual image URLs
    github: 'https://github.com/HIMANSHU-KUSHWAHA-2004/flappy_bird',
    liveDemo: projectOneExe, // Link to the .exe file for Project One
  },
  {
    title: 'Project Two',
    description: 'An e-commerce platform with a seamless shopping experience.',
    technologies: ['React', 'Redux', 'Firebase'],
    image: 'https://via.placeholder.com/300x200',
    github: 'https://github.com/yourusername/project-two',
    liveDemo: projectTwoExe, // Link to the .exe file for Project Two
  },
  {
    title: 'Project Three',
    description: 'An advanced project showcasing various features.',
    technologies: ['Python', 'Flask', 'SQLite'],
    image: 'https://via.placeholder.com/300x200',
    github: 'https://github.com/yourusername/project-three',
    liveDemo: projectThreeExe, // Link to the .exe file for Project Three
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item" data-aos="zoom-in" data-aos-delay="100">
            <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.liveDemo} download rel="noopener noreferrer">Download .exe</a> {/* Changed the link text */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
