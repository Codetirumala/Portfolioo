import React, { Suspense, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Stars } from '@react-three/drei';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: #0a192f;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding-top: 80px;
  }
`;

const HeroText = styled(motion.div)`
  h1 {
    font-size: 4.5rem;
    margin-bottom: 1rem;
    color: #ccd6f6;
    line-height: 1.1;

    span {
      color: #64ffda;
    }
  }

  h2 {
    font-size: 2.5rem;
    color: #8892b0;
    margin-bottom: 1.5rem;
    font-weight: 500;
    min-height: 3rem;
  }

  p {
    font-size: 1.2rem;
    color: #8892b0;
    max-width: 600px;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2rem;
    }
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  color: #ccd6f6;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #64ffda;
    transform: translateY(-3px);
  }
`;

const ScrollDown = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: #64ffda;
  font-size: 2rem;
  cursor: pointer;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
`;

const CanvasContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GlobeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 500px;
`;

const TypingText = styled.span`
  color: #64ffda;
  border-right: 2px solid #64ffda;
  animation: blink 0.7s infinite;
  padding-right: 5px;

  @keyframes blink {
    0%, 100% { border-color: transparent; }
    50% { border-color: #64ffda; }
  }
`;

const ParticleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`;

const Particle = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background: #64ffda;
  border-radius: 50%;
  opacity: 0.5;
  animation: float 15s infinite linear;

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

const roles = [
  'MERN Stack Developer',
  'Web Designer',
  'AI/ML Engineer',
  'Freelancer',
  'Logo Designer',
  'WordPress Developer'
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const current = roles[currentRole];
      
      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }

      if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
        return;
      }

      const delta = isDeleting ? -1 : 1;
      setText(current.substring(0, text.length + delta));
      setTypingSpeed(isDeleting ? 50 : 150);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, currentRole, isDeleting, typingSpeed]);

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 15,
  }));

  return (
    <HeroSection id="home">
      <ParticleContainer>
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
      </ParticleContainer>

      <HeroContent>
        <HeroText
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span>Lakshmi Narasimha</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TypingText>{text}</TypingText>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I build exceptional digital experiences that make an impact. Specializing
            in creating beautiful, functional, and user-centered digital solutions.
            Passionate about AI/ML and full-stack development.
          </motion.p>

          <SocialLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <SocialLink
              href="https://github.com/Codetirumala/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <FaGithub />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/reddi-lakshmi-narasimha-543a45289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <FaTwitter />
            </SocialLink>
          </SocialLinks>
        </HeroText>

        <GlobeContainer>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={0.5}
              />
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} intensity={1} />
              <Stars
                radius={100}
                depth={50}
                count={5000}
                factor={4}
                saturation={0}
                fade
                speed={1}
              />
              <Sphere args={[1, 100, 200]} scale={2.5}>
                <meshStandardMaterial
                  color="#64ffda"
                  wireframe
                  transparent
                  opacity={0.2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
        </GlobeContainer>
      </HeroContent>

      <ScrollDown
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          });
        }}
      >
        <HiArrowDown />
      </ScrollDown>
    </HeroSection>
  );
};

export default Hero; 