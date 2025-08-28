import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 4 });

    // Hero animations
    tl.fromTo(titleRef.current,
      { opacity: 0, y: 50, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power2.out" }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    )
    .fromTo(ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.4"
    )
    .fromTo(splineRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
      "-=1"
    );

    // Floating orbs animation
    const orbs = document.querySelectorAll('.floating-orb');
    orbs.forEach((orb, index) => {
      gsap.to(orb, {
        y: -20,
        duration: 3 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.3
      });
    });

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Spline 3D */}
      <div ref={splineRef} className="absolute inset-0 z-0">
        <iframe 
          src='https://my.spline.design/orb-XbrQQhk4iDpu5a1SQFa07V0d/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="pointer-events-none"
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-orb absolute top-20 left-20 w-4 h-4 bg-neon-cyan rounded-full neon-glow-cyan opacity-60" />
        <div className="floating-orb absolute top-40 right-32 w-6 h-6 bg-neon-purple rounded-full neon-glow-purple opacity-40" />
        <div className="floating-orb absolute bottom-32 left-40 w-3 h-3 bg-neon-pink rounded-full opacity-50" />
        <div className="floating-orb absolute bottom-40 right-20 w-5 h-5 bg-neon-blue rounded-full opacity-30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center z-10 relative">
        <div ref={titleRef} className="mb-6">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Hi, I'm <span className="gradient-text">Akshat</span>
            <br />
            <span className="neon-text-cyan">Full Stack Developer</span>
          </h1>
        </div>
        
        <div ref={subtitleRef} className="mb-8">
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Delivering real-world solutions across mobile apps, full-stack web, and machine learning systems with expertise in fast-paced environments.
          </p>
        </div>

        <button
          ref={ctaRef}
          onClick={() => scrollToSection('contact')}
          className="glass-card px-8 py-4 rounded-full text-lg font-semibold neon-glow-purple hover:scale-110 hover:neon-glow-cyan transition-all duration-300 group"
        >
          <span className="gradient-text">Hire Me</span>
          <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-cyan rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;