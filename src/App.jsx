
import React from 'react';
import { Helmet } from 'react-helmet';

import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/portfolio/Header';
import { Hero } from '@/components/portfolio/Hero';
import { Skills } from '@/components/portfolio/Skills';
import { Projects } from '@/components/portfolio/Projects';
import { ExperienceEducation } from '@/components/portfolio/ExperienceEducation';
import { Contact } from '@/components/portfolio/Contact';
import { Footer } from '@/components/portfolio/Footer';

import { skillsData, projectsData, experienceData, educationData, certificationsData, achievementsData } from '@/data/portfolioData';

function App() {
  const name = "Hitesh";
  const email = "hiteshsingh2k4@gmail.com";
  const phone = "7976926703";
  const location = "Jaipur, India";

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white/95">
      <Helmet>
        <title>{name} - DevOps Engineer & Automation Builder</title>
        <meta name="description" content="DevOps Engineer specializing in CI/CD pipelines, cloud infrastructure automation, and modern web technologies. Currently pursuing B.Tech in Computer Science." />
      </Helmet>

      <Header name={name} scrollToSection={scrollToSection} />

      <main>
        <Hero name={name} />
        <Skills skills={skillsData} />
        <Projects projects={projectsData} />
        <ExperienceEducation 
          experience={experienceData} 
          education={educationData}
          certifications={certificationsData}
          achievements={achievementsData}
        />
        <Contact email={email} phone={phone} location={location} />
      </main>

      <Footer name={name} />
      <Toaster />
    </div>
  );
}

export default App;