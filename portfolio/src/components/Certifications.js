import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

// Import certification logos
import metaLogo from '../assets/images/certifications/meta.png';
import microsoftLogo from '../assets/images/certifications/microsoft.png';
import salesforceLogo from '../assets/images/certifications/salesforce.jpeg';
import mongodbLogo from '../assets/images/certifications/mongodb.png';
import githubLogo from '../assets/images/certifications/github.jpeg';
import ciscoLogo from '../assets/images/certifications/cisco.jpeg';

const CertificationsSection = styled.section`
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

const CertificationsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const CertificationsHeader = styled(motion.div)`
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

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const CertificationCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  overflow: hidden;
  position: relative;
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
`;

const CardContent = styled.div`
  padding: 2rem;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CompanyLogo = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: all 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const CertificationTitle = styled.h3`
  color: #ccd6f6;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const CertificationDetails = styled.div`
  margin-top: auto;
`;

const CredentialId = styled.p`
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    color: #64ffda;
  }
`;

const ViewButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #64ffda;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border: 1px solid #64ffda;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }
`;

const certifications = [
  {
    title: 'Meta Frontend Developer',
    company: 'Meta',
    logo: metaLogo,
    credentialId: '00fdf286-788b-477f-9dbb-0e320f7bc4d7',
    url: 'https://www.credly.com/badges/00fdf286-788b-477f-9dbb-0e320f7bc4d7/linked_in_profile'
  },
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    company: 'Microsoft',
    logo: microsoftLogo,
    credentialId: '82FC904901019668',
    url: 'https://learn.microsoft.com/api/credentials/share/en-gb/REDDILAKSHMINARASIMHA-4027/82FC9049010196E8?sharingId=66E4DC4A7483FBF'
  },
  {
    title: 'Salesforce Certified Agent Force Specialist',
    company: 'Salesforce',
    logo: salesforceLogo,
    credentialId: '6019415',
    url: 'https://drive.google.com/file/d/184yF8w_OTDpVCaDhwvnvy8qB6mH0j2an/view?usp=drivesdk'
  },
  {
    title: 'MongoDB Certified Associate Developer',
    company: 'MongoDB',
    logo: mongodbLogo,
    credentialId: 'MDB25eus69bgh',
    url: 'https://www.credly.com/badges/8c84eb46-b508-4515-a12c-b0fd9a3847e4/public_url'
  },
  {
    title: 'GitHub Foundations',
    company: 'GitHub',
    logo: githubLogo,
    credentialId: 'UbgvW4cD',
    url: 'https://www.credly.com/go/UbgvW4cD'
  },
  {
    title: 'Cisco Discovering Entrepreneurship',
    company: 'Cisco',
    logo: ciscoLogo,
    credentialId: 'fbd1648c-f3a9-4dfc-bf73-4f00a6c13160',
    url: 'https://www.credly.com/badges/fbd1648c-f3a9-4dfc-bf73-4f00a6c13160/public_url'
  }
];

const Certifications = () => {
  return (
    <CertificationsSection id="certifications">
      <CertificationsContainer>
        <CertificationsHeader
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Certifications</h2>
          <p>
            Professional certifications that validate my expertise and commitment to continuous learning
            in various technologies and platforms.
          </p>
        </CertificationsHeader>

        <CertificationsGrid>
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CardContent>
                <CompanyLogo>
                  <img src={cert.logo} alt={`${cert.company} logo`} />
                </CompanyLogo>
                <CertificationTitle>{cert.title}</CertificationTitle>
                <CertificationDetails>
                  <CredentialId>
                    Credential ID: <span>{cert.credentialId}</span>
                  </CredentialId>
                  <ViewButton
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Certificate <FaExternalLinkAlt />
                  </ViewButton>
                </CertificationDetails>
              </CardContent>
            </CertificationCard>
          ))}
        </CertificationsGrid>
      </CertificationsContainer>
    </CertificationsSection>
  );
};

export default Certifications; 