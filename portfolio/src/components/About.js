import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profileImage from '../assets/images/profile.png';

const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a192f;
  position: relative;
  overflow: hidden;
`;

const AboutContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 4rem;
  align-items: center;
  padding: 0 2rem;
  z-index: 1;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const AboutImageContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const AboutImage = styled(motion.img)`
  width: 320px;
  height: 320px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  border: 4px solid #64ffda;
  background: #0a192f;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.04) rotate(-2deg);
    box-shadow: 0 16px 40px 0 rgba(44, 83, 100, 0.45);
  }
  @media (max-width: 600px) {
    width: 220px;
    height: 220px;
  }
`;

const AboutText = styled(motion.div)`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #ccd6f6;
    letter-spacing: 1px;
  }
  p {
    font-size: 1.18rem;
    line-height: 1.8;
    margin-bottom: 1.2rem;
    color: #8892b0;
  }
  .highlight {
    color: #64ffda;
    font-weight: 600;
  }
`;

const Particle = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background: #64ffda;
  border-radius: 50%;
  opacity: 0.5;
  animation: float 15s infinite linear;
  z-index: 0;

  @keyframes float {
    0% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(-100px) translateX(100px);
    }
    100% {
      transform: translateY(0) translateX(0);
    }
  }
`;

const About = () => {
  // Generate subtle particles for background effect (like Hero)
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 15,
  }));

  return (
    <AboutSection id="about">
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      <AboutContentWrapper>
        <AboutImageContainer
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <AboutImage src={profileImage} alt="Lakshmi Narasimha" />
        </AboutImageContainer>
        <AboutText
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>
            Hi! I'm <span className="highlight">Lakshmi Narasimha</span>, a passionate <span className="highlight">Full Stack Developer</span> and <span className="highlight">AI/ML Enthusiast</span>.
          </p>
          <p>
            I love building modern, interactive web applications with <span className="highlight">React</span>, <span className="highlight">Node.js</span>, and exploring the world of <span className="highlight">Artificial Intelligence</span> and <span className="highlight">Machine Learning</span>.
          </p>
          <p>
            My journey started in college, and since then, I've been on a mission to create beautiful, performant, and user-friendly digital experiences. When I'm not coding, you'll find me learning new tech, contributing to open source, or writing technical blogs.
          </p>
        </AboutText>
      </AboutContentWrapper>
    </AboutSection>
  );
};

export default About; 