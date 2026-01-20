import React from 'react';
import Navigation from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/About';
import EducationSection from './components/Education';
import ExperienceSection from './components/Experience';
import SkillsSection from './components/Skills';
import ProjectsSection from './components/Projects';
import ContactSection from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
