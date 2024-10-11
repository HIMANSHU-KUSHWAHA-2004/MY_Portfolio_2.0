// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about" data-aos="fade-up">
      <div className="about-container">
        <div className="about-image">
          <img
            src={`${process.env.PUBLIC_URL}/pics/pngtree-young-programmer-writing-program-code-png-image_14120242.png`}
            alt="About me"
          />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I'm Himanshu Kushwaha, a passionate software developer with expertise in creating efficient and reliable solutions. While software development is my main focus, I also have some experience in web development, including basic skills in React, JavaScript, and CSS. Additionally, I'm proficient in leveraging AI tools to streamline workflows and enhance productivity. I enjoy tackling complex challenges and simplifying them into effective solutions.
          </p>
          <p>
            When I'm not coding, I enjoy watching anime, playing cricket, talking with friends, and exploring new tech trends to keep my mind fresh and inspired.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
