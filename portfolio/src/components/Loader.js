import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const rotate3D = keyframes`
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(100, 255, 218, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 20px rgba(100, 255, 218, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(100, 255, 218, 0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
`;

const LoaderContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0a192f;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${fadeOut} 0.5s ease-in-out 5s forwards;
`;

const LoaderContent = styled.div`
  text-align: center;
  position: relative;
  perspective: 1000px;
`;

const CubeContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin: 0 auto 2rem;
  transform-style: preserve-3d;
  animation: ${rotate3D} 8s linear infinite;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

const CubeFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid #64ffda;
  background: rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(5px);
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    border: 2px solid #64ffda;
    opacity: 0.5;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 60%;
    border: 2px solid #64ffda;
    opacity: 0.3;
  }
`;

const FrontFace = styled(CubeFace)`
  transform: translateZ(75px);

  @media (max-width: 768px) {
    transform: translateZ(60px);
  }

  @media (max-width: 480px) {
    transform: translateZ(50px);
  }
`;

const BackFace = styled(CubeFace)`
  transform: translateZ(-75px) rotateY(180deg);

  @media (max-width: 768px) {
    transform: translateZ(-60px) rotateY(180deg);
  }

  @media (max-width: 480px) {
    transform: translateZ(-50px) rotateY(180deg);
  }
`;

const RightFace = styled(CubeFace)`
  transform: translateX(75px) rotateY(90deg);

  @media (max-width: 768px) {
    transform: translateX(60px) rotateY(90deg);
  }

  @media (max-width: 480px) {
    transform: translateX(50px) rotateY(90deg);
  }
`;

const LeftFace = styled(CubeFace)`
  transform: translateX(-75px) rotateY(-90deg);

  @media (max-width: 768px) {
    transform: translateX(-60px) rotateY(-90deg);
  }

  @media (max-width: 480px) {
    transform: translateX(-50px) rotateY(-90deg);
  }
`;

const TopFace = styled(CubeFace)`
  transform: translateY(-75px) rotateX(90deg);

  @media (max-width: 768px) {
    transform: translateY(-60px) rotateX(90deg);
  }

  @media (max-width: 480px) {
    transform: translateY(-50px) rotateX(90deg);
  }
`;

const BottomFace = styled(CubeFace)`
  transform: translateY(75px) rotateX(-90deg);

  @media (max-width: 768px) {
    transform: translateY(60px) rotateX(-90deg);
  }

  @media (max-width: 480px) {
    transform: translateY(50px) rotateX(-90deg);
  }
`;

const CenterSphere = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: #64ffda;
  border-radius: 50%;
  animation: ${pulse} 2s infinite;
  box-shadow: 0 0 20px #64ffda;

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 480px) {
    width: 14px;
    height: 14px;
  }
`;

const LoaderText = styled(motion.div)`
  color: #64ffda;
  font-size: 1.2rem;
  margin-top: 2rem;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 4px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: 3px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    letter-spacing: 2px;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #64ffda, transparent);

    @media (max-width: 768px) {
      width: 60px;
    }

    @media (max-width: 480px) {
      width: 50px;
    }
  }
`;

const ProgressBar = styled(motion.div)`
  width: 150px;
  height: 2px;
  background: rgba(100, 255, 218, 0.2);
  margin: 1rem auto;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 120px;
  }

  @media (max-width: 480px) {
    width: 100px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #64ffda;
    animation: progress 5s linear forwards;
  }
`;

const progress = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const Loader = () => {
  return (
    <LoaderContainer
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LoaderContent>
        <CubeContainer>
          <FrontFace />
          <BackFace />
          <RightFace />
          <LeftFace />
          <TopFace />
          <BottomFace />
          <CenterSphere />
        </CubeContainer>
        <LoaderText
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Loading
        </LoaderText>
        <ProgressBar />
      </LoaderContent>
    </LoaderContainer>
  );
};

export default Loader; 