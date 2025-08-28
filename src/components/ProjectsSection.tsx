import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, GithubLogo, Globe } from 'phosphor-react';
import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';
import project4 from '../assets/project-4.png';
import project5 from '../assets/project-5.png';
import project6 from '../assets/project-6.png';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards stagger animation
      const cards = cardsRef.current?.querySelectorAll('.project-card');
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 100, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      id: 1,
      title: "3D Interactive Email Service",
      description: "A futuristic email platform with 3D elements and modern UI design for developers.",
      image: project1,
      tech: ["React", "Three.js", "GSAP"],
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Gaming UI Dashboard",
      description: "Next-level gaming interface with character selection and immersive design.",
      image: project2,
      tech: ["React", "CSS3", "JavaScript"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "3D Portfolio Website",
      description: "Modern portfolio design with glassmorphism and interactive 3D elements.",
      image: project3,
      tech: ["React", "Spline", "GSAP"],
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "Gaming Website Platform",
      description: "Colorful gaming platform with anime aesthetics and modern animations.",
      image: project4,
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "#",
      live: "#"
    },
    {
      id: 5,
      title: "Animation Tools Hub",
      description: "Learning platform for web animation tools with interactive tutorials.",
      image: project5,
      tech: ["React", "GSAP", "CSS3"],
      github: "#",
      live: "#"
    },
    {
      id: 6,
      title: "Portfolio Tutorial Site",
      description: "Step-by-step tutorial platform for creating animated portfolios.",
      image: project6,
      tech: ["React", "GSAP", "Locomotive"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work in web development, featuring cutting-edge technologies 
            and innovative design solutions.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card glass-card rounded-2xl overflow-hidden group hover:scale-105 hover:neon-glow-cyan transition-all duration-500 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:neon-text-cyan transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs glass rounded-full neon-text-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:neon-text-cyan transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <GithubLogo size={20} />
                    </a>
                    <a
                      href={project.live}
                      className="text-muted-foreground hover:neon-text-cyan transition-colors"
                      aria-label="Live Demo"
                    >
                      <Globe size={20} />
                    </a>
                  </div>
                  
                  <button className="flex items-center space-x-2 text-sm neon-text-purple hover:neon-text-cyan transition-colors group">
                    <span>View Project</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;