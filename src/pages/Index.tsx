import { useEffect } from 'react';
import Portfolio from './Portfolio';

const Index = () => {
  useEffect(() => {
    // SEO Meta tags
    document.title = "Milad - Creative Web Developer | Modern Portfolio";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Creative web developer specializing in 3D web experiences, GSAP animations, and modern React applications. View my portfolio of cutting-edge projects.');
    }

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Milad",
      "jobTitle": "Creative Web Developer",
      "description": "Crafting digital experiences that inspire and engage through innovative design and cutting-edge technology",
      "url": window.location.origin,
      "sameAs": [
        "https://github.com/milad",
        "https://linkedin.com/in/milad"
      ],
      "knowsAbout": ["React", "JavaScript", "GSAP", "Three.js", "Web Development", "3D Web Design"]
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
