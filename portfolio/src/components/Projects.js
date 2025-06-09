import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import codevaultImg from '../assets/images/codevault.jpg';
import service3yImg from '../assets/images/service3y.jpg';
import partydenImg from '../assets/images/partyden.jpg';

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 100px 0;
  background: #0a192f;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(100, 255, 218, 0.1), transparent 70%);
    pointer-events: none;
  }
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const ProjectsHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    font-size: 3rem;
    color: #ccd6f6;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 4px;
      background: #64ffda;
      border-radius: 2px;
    }
  }

  p {
    color: #8892b0;
    max-width: 600px;
    margin: 1.5rem auto 0;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 2px;
  background: linear-gradient(135deg, #64ffda 0%, transparent 50%, #64ffda 100%);

  &::before {
    content: '';
    position: absolute;
    inset: 2px;
    background: #0a192f;
    border-radius: 13px;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    
    .overlay {
      opacity: 1;
    }
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  position: relative;
  z-index: 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  position: relative;
  z-index: 2;

  h3 {
    color: #ccd6f6;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }

  p {
    color: #8892b0;
    margin-bottom: 1rem;
    line-height: 1.4;
    font-size: 0.9rem;
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 25, 47, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(5px);
  z-index: 3;
`;

const ProjectLink = styled.a`
  color: #64ffda;
  font-size: 1.8rem;
  transition: all 0.3s ease;
  padding: 1rem;
  border-radius: 50%;
  background: rgba(100, 255, 218, 0.1);

  &:hover {
    transform: translateY(-5px);
    background: rgba(100, 255, 218, 0.2);
  }
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const TechTag = styled.span`
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
`;

const projects = [
  {
    title: 'CodeVault',
    description: 'A coding platform with practice problems, admin dashboard, and leaderboard functionality for developers to enhance their skills.',
    image: codevaultImg,
    live: 'https://codevaultt.onrender.com',
    tech: ['EJS', 'Node.js', 'MongoDB', 'Express']
  },
  {
    title: 'Service-Desk',
    description: 'A service desk application for educational institutions where students can raise and track tickets for college-related issues.',
    image: service3yImg,
    live: 'https://service-3ys4.onrender.com',
    tech: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    title: 'PartyDen',
    description: 'Vizag\'s premier private theatre for special events, featuring a stunning mountain view and perfect venue for celebrations.',
    image: partydenImg,
    live: 'https://partyden.in',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MYSQL', 'Express']
  }
];

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <ProjectsHeader
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Featured Projects</h2>
          <p>
            Here are some of my recent projects that showcase my skills in full-stack development
            and creating impactful user experiences.
          </p>
        </ProjectsHeader>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ProjectTech>
                  {project.tech.map((tech, i) => (
                    <TechTag key={i}>{tech}</TechTag>
                  ))}
                </ProjectTech>
              </ProjectContent>
              <ProjectOverlay className="overlay">
                <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                </ProjectLink>
              </ProjectOverlay>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects; 