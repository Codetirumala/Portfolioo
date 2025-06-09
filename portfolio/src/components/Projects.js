import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 100px 0;
  background: #0a192f;
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ProjectsHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    font-size: 2.5rem;
    color: #ccd6f6;
    margin-bottom: 1rem;
  }

  p {
    color: #8892b0;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  &:hover {
    .overlay {
      opacity: 1;
    }
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;

  h3 {
    color: #ccd6f6;
    margin-bottom: 1rem;
  }

  p {
    color: #8892b0;
    margin-bottom: 1.5rem;
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 25, 47, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const ProjectLink = styled.a`
  color: #64ffda;
  font-size: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce platform built with React, Node.js, and MongoDB.',
    image: 'project1.jpg',
    github: 'https://github.com/yourusername/project1',
    live: 'https://project1.com',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates.',
    image: 'project2.jpg',
    github: 'https://github.com/yourusername/project2',
    live: 'https://project2.com',
  },
  {
    title: 'Social Media Dashboard',
    description:
      'A responsive dashboard for managing social media accounts and analytics.',
    image: 'project3.jpg',
    github: 'https://github.com/yourusername/project3',
    live: 'https://project3.com',
  },
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
          <h2>My Projects</h2>
          <p>
            Here are some of the projects I've worked on. Each project is unique
            and showcases different aspects of my skills.
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
              </ProjectContent>
              <ProjectOverlay className="overlay">
                <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </ProjectLink>
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