import { useEffect } from 'react';
import Portfolio from './Portfolio';

const Index = () => {
  useEffect(() => {
    // SEO Meta tags
    document.title = "Akshat Shukla - Full Stack Developer | Modern Portfolio";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Experienced full-stack developer specializing in mobile apps, web development, and machine learning. Bug hunter at Discord with expertise in cross-platform development.');
    }

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Akshat Shukla",
      "jobTitle": "Full Stack Developer",
      "description": "Hands-on developer with a track record of delivering real-world solutions across mobile apps, full-stack web, and machine learning systems.",
      "url": window.location.origin,
      "sameAs": [
        "https://github.com/akshat-0001",
        "https://linkedin.com/in/akshat0603"
      ],
      "knowsAbout": ["Python", "JavaScript", "TypeScript", "Flutter", "Machine Learning", "TensorFlow", "Node.js", "Full Stack Development"]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup structured data script
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return <Portfolio />;
};

export default Index;
