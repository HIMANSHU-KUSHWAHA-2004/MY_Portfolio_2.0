// src/components/Skills.js
import React from 'react';
import './Skills.css';

const technicalSkills = [
  { name: 'C', icon: <img src={`${process.env.PUBLIC_URL}/pics/pngwing.com.png`} alt="C Programming Language Icon" /> },
  { name: 'C++', icon: <img src={`${process.env.PUBLIC_URL}/pics/pngwing.com (2).png`} alt="C++ Programming Language Icon" /> },
  { name: 'Python', icon: <img src={`${process.env.PUBLIC_URL}/pics/pngwing.com (1).png`} alt="Python Programming Language Icon" /> },
  { name: 'HTML5', icon: <img src={`${process.env.PUBLIC_URL}/pics/pngwing.com (5).png`} alt="HTML5 Icon" /> },
  { name: 'CSS3', icon: <img src={`${process.env.PUBLIC_URL}/pics/pngwing.com (6).png`} alt="CSS3 Icon" /> },
  { name: 'MySQL', icon: <img src={`${process.env.PUBLIC_URL}/pics/pngwing.com (4).png`} alt="MySQL Icon" /> },
  { name: 'DSA', icon: <img src={`${process.env.PUBLIC_URL}/pics/dsa-by-sandeep-jain.png`} alt="Data Structures and Algorithms Icon" /> },
];

const softSkills = [
  'Good Communication',
  'Leadership',
  'Teamwork',
  'Problem Solving',
];

const Skills = () => {
  return (
    <section id="skills" className="skills" data-aos="fade-up">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skills-section technical-skills">
          <h3>Technical Skills</h3>
          <div className="skills-list">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="skill-item" data-aos="zoom-in" data-aos-delay="100">
                <div className="skill-icon">{skill.icon}</div>
                {/* <div className="skill-name">{skill.name}</div> */}
              </div>
            ))}
          </div>
        </div>

        <div className="soft-skills">
          <h3>Soft Skills</h3>
          <ul className="soft-skills-list">
            {softSkills.map((skill, index) => (
              <li key={index} className="skill-item" data-aos="zoom-in" data-aos-delay="100">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
