import { useState, useEffect } from 'react';
import Preloader from '../components/Preloader';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import AwardsSection from '../components/AwardsSection';
import ContactSection from '../components/ContactSection';
import FooterSection from '../components/FooterSection';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    // Prevent scrolling during loading
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="relative">
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      
      <div className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}>
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <AwardsSection />
          <ContactSection />
        </main>
        <FooterSection />
      </div>
    </div>
  );
};

export default Portfolio;