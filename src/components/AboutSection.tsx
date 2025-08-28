import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  Database, 
  Smartphone, 
  Brain, 
  Globe, 
  Terminal,
  Cpu,
  Server
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade in
      gsap.fromTo(sectionRef.current,
        { opacity: 0, filter: "blur(10px)" },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Image animation
      gsap.fromTo(imageRef.current,
        { opacity: 0, x: -100, rotation: -10 },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Content animation
      gsap.fromTo(contentRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Skills stagger animation
      const skillIcons = skillsRef.current?.querySelectorAll('.skill-icon');
      if (skillIcons) {
        gsap.fromTo(skillIcons,
          { opacity: 0, y: 50, scale: 0.5 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const languages = [
    { name: 'Python', icon: Code, color: 'text-blue-400' },
    { name: 'JavaScript', icon: Code, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: Code, color: 'text-blue-500' },
    { name: 'C/C++', icon: Terminal, color: 'text-purple-400' },
    { name: 'SQL', icon: Database, color: 'text-green-400' },
    { name: 'Dart', icon: Smartphone, color: 'text-cyan-400' }
  ];

  const technologies = [
    { name: 'TensorFlow', icon: Brain, color: 'text-orange-400' },
    { name: 'Flutter', icon: Smartphone, color: 'neon-text-cyan' },
    { name: 'Node.js', icon: Server, color: 'text-green-500' },
    { name: 'PostgreSQL', icon: Database, color: 'text-blue-600' },
    { name: 'Docker', icon: Cpu, color: 'text-blue-400' },
    { name: 'Firebase', icon: Database, color: 'text-orange-500' },
    { name: 'REST APIs', icon: Globe, color: 'text-purple-500' },
    { name: 'Git', icon: Terminal, color: 'text-red-500' }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Placeholder */}
          <div ref={imageRef} className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="w-80 h-80 rounded-full glass-card p-8 neon-glow-purple group-hover:neon-glow-cyan transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4 gradient-text font-bold">AS</div>
                  <div className="text-lg neon-text-cyan">Full Stack Developer</div>
                  <div className="text-sm text-muted-foreground mt-2">Chandigarh University</div>
                </div>
              </div>
              {/* Floating particles around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-cyan rounded-full opacity-60 float" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-purple rounded-full opacity-40 float-delayed" />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Hands-on developer with a track record of delivering real-world solutions across mobile apps, 
                full-stack web, and machine learning systems. Skilled at quickly learning new technologies, 
                reproducing and resolving complex cross-platform issues, and building scalable features from the ground up.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Thrives in fast-paced environments with minimal supervision. Former Bug Hunter at Discord, 
                where I reported 40+ critical bugs and collaborated with QA teams during rapid release cycles.
              </p>
              <div className="glass-card p-4 rounded-lg">
                <h3 className="text-lg font-semibold neon-text-purple mb-2">Core Competencies</h3>
                <div className="flex flex-wrap gap-2">
                  {['Communication', 'Collaboration', 'Analytical Thinking', 'Leadership', 'Adaptive Learning'].map((skill) => (
                    <span key={skill} className="px-3 py-1 text-sm glass rounded-full text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div ref={skillsRef} className="space-y-6">
              <h3 className="text-2xl font-semibold neon-text-cyan">Tech Stack</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-muted-foreground mb-3">Languages</h4>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                    {languages.map((skill) => {
                      const IconComponent = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="skill-icon flex flex-col items-center space-y-2 group cursor-pointer"
                        >
                          <div className="w-14 h-14 glass-card rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:neon-glow-cyan transition-all duration-300">
                            <IconComponent size={24} className={skill.color} />
                          </div>
                          <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-muted-foreground mb-3">Technologies & Tools</h4>
                  <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                    {technologies.map((skill) => {
                      const IconComponent = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="skill-icon flex flex-col items-center space-y-2 group cursor-pointer"
                        >
                          <div className="w-14 h-14 glass-card rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:neon-glow-cyan transition-all duration-300">
                            <IconComponent size={24} className={skill.color} />
                          </div>
                          <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;