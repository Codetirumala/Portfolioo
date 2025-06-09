import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, Events, scrollSpy } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 2rem;
  background: ${({ scrolled }) =>
    scrolled ? 'rgba(10, 25, 47, 0.85)' : 'transparent'};
  backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(10px)' : 'none')};
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #64ffda;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #64ffda;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #ccd6f6;
  cursor: pointer;
  position: relative;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #64ffda;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #64ffda;
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: #64ffda;
    &::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  color: #64ffda;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1002;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: #0a192f;
  padding: 2rem;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

const MobileNavLink = styled(Link)`
  color: #ccd6f6;
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  padding: 0.5rem 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #64ffda;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #64ffda;
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: #64ffda;
    &::after {
      width: 100%;
    }
  }
`;

const navItems = ['home', 'about', 'skills', 'certifications', 'projects', 'contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Initialize scroll spy
    scrollSpy.update();

    // Add scroll event listener
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Add scroll event listener for smooth scroll
    Events.scrollEvent.register('begin', () => {
      // Optional: Add any pre-scroll logic here
    });

    Events.scrollEvent.register('end', () => {
      // Optional: Add any post-scroll logic here
    });

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setActiveSection('home');
  };

  const handleNavClick = (section) => {
    setIsOpen(false);
    setActiveSection(section);
  };

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={scrollToTop}
        >
          Portfolio
        </Logo>

        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={item}
              smooth={true}
              duration={800}
              offset={-70}
              spy={true}
              onSetActive={handleSetActive}
              className={activeSection === item ? 'active' : ''}
              onClick={() => handleNavClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          ))}
        </NavLinks>

        <MobileMenuButton
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>

        <AnimatePresence>
          {isOpen && (
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              {navItems.map((item) => (
                <MobileNavLink
                  key={item}
                  to={item}
                  smooth={true}
                  duration={800}
                  offset={-70}
                  spy={true}
                  onSetActive={handleSetActive}
                  className={activeSection === item ? 'active' : ''}
                  onClick={() => handleNavClick(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </MobileNavLink>
              ))}
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 