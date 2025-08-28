import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileHtml, FileCss, FileJs, FileImage, Atom, GitBranch } from 'phosphor-react';
import miladPortrait from '../assets/milad-portrait.png';

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

  const skills = [
    { name: 'HTML5', icon: FileHtml, color: 'text-orange-500' },
    { name: 'CSS3', icon: FileCss, color: 'text-blue-500' },
    { name: 'JavaScript', icon: FileJs, color: 'text-yellow-500' },
    { name: 'React', icon: Atom, color: 'neon-text-cyan' },
    { name: 'GSAP', icon: FileImage, color: 'text-green-500' },
    { name: 'Git', icon: GitBranch, color: 'text-red-500' }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="w-80 h-80 rounded-full glass-card p-4 neon-glow-purple group-hover:neon-glow-cyan transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
                <img
                  src={miladPortrait}
                  alt="Milad - Creative Developer"
                  className="w-full h-full object-cover rounded-full"
                />
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
                I'm a passionate web developer specializing in creating immersive digital experiences. 
                With expertise in modern technologies like React, GSAP, and 3D web development, 
                I transform ideas into interactive realities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My focus is on building performant, accessible, and visually stunning applications 
                that push the boundaries of what's possible on the web.
              </p>
            </div>

            {/* Skills Grid */}
            <div ref={skillsRef} className="space-y-6">
              <h3 className="text-2xl font-semibold neon-text-cyan">Tech Stack</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="skill-icon flex flex-col items-center space-y-2 group cursor-pointer"
                    >
                      <div className="w-16 h-16 glass-card rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:neon-glow-cyan transition-all duration-300">
                        <IconComponent size={32} className={skill.color} />
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
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
    </section>
  );
};

export default AboutSection;