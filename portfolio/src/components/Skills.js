import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaUserAstronaut } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiMysql, SiExpress, SiBootstrap, SiKotlin, SiAdobephotoshop, SiLinux, SiDigitalocean, SiScrumalliance } from 'react-icons/si';
import { MdOutlineLeaderboard } from 'react-icons/md';

const SkillsSection = styled.section`
  min-height: 100vh;
  background: #0a192f;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const SkillsContainer = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillsHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
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

const GalaxyWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 700px;
  height: 700px;
  margin: 0 auto;
  @media (max-width: 900px) {
    max-width: 420px;
    height: 420px;
  }
  @media (max-width: 600px) {
    max-width: 300px;
    height: 300px;
  }
`;

const Sun = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #64ffda 60%, #0aeeaf 100%);
  border-radius: 50%;
  box-shadow: 0 0 60px 10px #64ffda55, 0 0 0 8px #0a192f;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  color: #0a192f;
  font-size: 2.8rem;
  border: 4px solid #ccd6f6;
`;

const orbitAnim = (radius, duration) => keyframes`
  0% { transform: rotate(0deg) translateX(${radius}px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(${radius}px) rotate(-360deg); }
`;

const Planet = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  animation: ${({ radius, duration }) => orbitAnim(radius, duration)} ${({ duration }) => duration}s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
`;

const PlanetIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(100, 255, 218, 0.12);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64ffda;
  font-size: 2rem;
  box-shadow: 0 0 18px 2px #64ffda33;
  border: 2px solid #ccd6f6;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.15) rotate(-8deg);
    box-shadow: 0 0 32px 6px #64ffda99, 0 0 0 4px #0a192f;
    background: rgba(100, 255, 218, 0.22);
  }
`;

const PlanetLabel = styled.div`
  margin-top: 0.3rem;
  color: #ccd6f6;
  font-size: 0.95rem;
  text-align: center;
  font-weight: 500;
  text-shadow: 0 2px 8px #0a192f;
`;

const rotateCircle = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const RotatingCircle = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: ${rotateCircle} 32s linear infinite;
  will-change: transform;
`;

const skills = [
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'Bootstrap', icon: <SiBootstrap /> },
  { name: 'Kotlin', icon: <SiKotlin /> },
  { name: 'Adobe Photoshop', icon: <SiAdobephotoshop /> },
  { name: 'Kali Linux', icon: <SiLinux /> },
  { name: 'REST APIs', icon: <FaDatabase /> },
  { name: 'Digital Marketing', icon: <SiDigitalocean /> },
  { name: 'Scrum', icon: <SiScrumalliance /> },
  { name: 'Leadership', icon: <MdOutlineLeaderboard /> },
];

// Distribute planets in 3 orbits for better spacing and responsiveness
const getOrbitParams = (count, width = 700) => {
  // Orbit radii scale with container width
  const base = width / 2;
  const orbits = [base - 60, base - 150, base - 240];
  const planets = [];
  // Distribute skills as evenly as possible
  const perOrbit = [Math.ceil(count * 0.34), Math.ceil(count * 0.33), count - Math.ceil(count * 0.34) - Math.ceil(count * 0.33)];
  let skillIdx = 0;
  for (let o = 0; o < orbits.length; o++) {
    const n = perOrbit[o];
    for (let i = 0; i < n; i++) {
      planets.push({
        radius: orbits[o],
        angle: (360 / n) * i + (o * 15), // extra stagger for more gap
        duration: o === 0 ? 24 : o === 1 ? 18 : 12,
        delay: (i * 0.5) % 3,
      });
      skillIdx++;
    }
  }
  return planets;
};

// Arrange skills statically in a single circle (no animation)
const getStaticCircleParams = (count, radius = 270) => {
  const planets = [];
  for (let i = 0; i < count; i++) {
    const angle = (360 / count) * i;
    planets.push({
      radius,
      angle,
    });
  }
  return planets;
};

// Choose up to 12 most essential skills for a clean circle
const essentialSkills = [
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'Bootstrap', icon: <SiBootstrap /> },
];

const Skills = () => {
  const [galaxyWidth, setGalaxyWidth] = useState(700);
  const [circleAngle, setCircleAngle] = useState(0);
  const animationRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) setGalaxyWidth(300);
      else if (window.innerWidth < 900) setGalaxyWidth(420);
      else setGalaxyWidth(700);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animate the rotation angle
  useEffect(() => {
    let lastTime = performance.now();
    const animate = (now) => {
      const delta = now - lastTime;
      lastTime = now;
      setCircleAngle((prev) => (prev + (delta * 360) / (32000)) % 360); // 32s per full rotation
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const circleRadius = Math.max(galaxyWidth / 2 - 60, 100);
  const circleParams = getStaticCircleParams(essentialSkills.length, circleRadius);

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SkillsHeader>
          <h2>Skills Galaxy</h2>
          <p>
            My main skills form a circle of expertise. Hover over a planet to see it glow!
          </p>
        </SkillsHeader>
        <GalaxyWrapper style={{ maxWidth: galaxyWidth, height: galaxyWidth }}>
          <Sun>
            <FaUserAstronaut />
          </Sun>
          <div style={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0, willChange: 'transform', transform: `rotate(${circleAngle}deg)` }}>
            {essentialSkills.map((skill, i) => {
              const { radius, angle } = circleParams[i];
              const rad = (angle * Math.PI) / 180;
              const x = Math.cos(rad) * radius + galaxyWidth / 2 - 30; // 30 = half planet size
              const y = Math.sin(rad) * radius + galaxyWidth / 2 - 30;
              return (
                <Planet
                  key={skill.name}
                  style={{
                    left: x,
                    top: y,
                    animation: 'none',
                    transform: 'none',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transform: `rotate(${-circleAngle}deg)` }}>
                    <PlanetIcon title={skill.name}>{skill.icon}</PlanetIcon>
                    <PlanetLabel style={{ transform: 'none', marginTop: '0.4rem' }}>{skill.name}</PlanetLabel>
                  </div>
                </Planet>
              );
            })}
          </div>
        </GalaxyWrapper>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills; 