import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const FooterSection = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer fade up animation
      gsap.fromTo(footerRef.current,
        { opacity: 0, y: 60, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating particles animation
      const particles = particlesRef.current?.querySelectorAll('.footer-particle');
      if (particles) {
        particles.forEach((particle, index) => {
          gsap.to(particle, {
            y: -30,
            x: Math.sin(index) * 20,
            duration: 4 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: index * 0.2
          });
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Awards', id: 'awards' },
    { label: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={footerRef} className="relative py-16 px-6 overflow-hidden">
      {/* Background particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        <div className="footer-particle absolute top-10 left-[10%] w-2 h-2 bg-neon-cyan rounded-full opacity-40" />
        <div className="footer-particle absolute top-20 left-[20%] w-3 h-3 bg-neon-purple rounded-full opacity-30" />
        <div className="footer-particle absolute top-16 right-[15%] w-2 h-2 bg-neon-pink rounded-full opacity-50" />
        <div className="footer-particle absolute top-32 right-[25%] w-4 h-4 bg-neon-blue rounded-full opacity-20" />
        <div className="footer-particle absolute bottom-20 left-[30%] w-2 h-2 bg-neon-cyan rounded-full opacity-60" />
        <div className="footer-particle absolute bottom-16 right-[40%] w-3 h-3 bg-neon-purple rounded-full opacity-40" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Main footer content */}
        <div className="text-center mb-12">
          <button
            onClick={scrollToTop}
            className="inline-block text-3xl font-bold gradient-text hover:scale-110 transition-transform duration-300 mb-6"
          >
            AS
          </button>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Thanks for visiting! Let's build something amazing together.
          </p>
          
          {/* Navigation links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-muted-foreground hover:neon-text-cyan transition-colors duration-300 hover:scale-105"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent mb-8" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <span>© 2024 Akshat Shukla. Made with</span>
            <Heart size={16} className="text-neon-pink animate-pulse" />
            <span>using React & GSAP</span>
          </div>
          
          <div>
            <span>Crafted for the future of web</span>
          </div>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-24 bg-gradient-primary opacity-10 blur-3xl rounded-full" />
    </footer>
  );
};

export default FooterSection;