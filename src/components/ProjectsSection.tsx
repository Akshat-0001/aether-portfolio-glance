import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Calendar, Code2, Database, Smartphone, Brain } from 'lucide-react';

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
      title: "TeamFinder Mobile App",
      year: "2025",
      category: "Mobile Application",
      icon: Smartphone,
      description: "A comprehensive mobile application where users can find, apply to, or create project teams based on interests or university affiliation. The app streamlines team formation for academic and personal projects.",
      detailedFeatures: [
        "Team creation and discovery system with advanced filtering",
        "Application handling with approval/rejection workflows",
        "User authentication and profile management",
        "Admin features for platform management and moderation",
        "Real-time notifications for team updates and applications",
        "University-based team matching and interest-based recommendations"
      ],
      tech: ["FlutterFlow", "Supabase", "PostgreSQL", "REST APIs", "Dart", "Firebase"],
      github: "https://github.com/akshat-0001",
      live: "#",
      color: "neon-glow-cyan"
    },
    {
      id: 2,
      title: "High-Frequency Trading Backtester",
      year: "2024",
      category: "Financial Analytics",
      icon: Database,
      description: "Built a sophisticated backtesting simulation framework that analyzed over 5,000 trade events to evaluate trading strategy performance under realistic market conditions including slippage and execution delays.",
      detailedFeatures: [
        "Historical stock data processing and analysis pipeline",
        "Trade visualization with interactive charts and graphs",
        "Performance metrics calculation including PnL and execution lag",
        "Slippage and delay simulation for realistic backtesting",
        "Strategy comparison and optimization tools",
        "Risk assessment and drawdown analysis"
      ],
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter", "Financial APIs"],
      github: "https://github.com/akshat-0001",
      live: "#",
      color: "neon-glow-purple"
    },
    {
      id: 3,
      title: "CosMoS - Constellation Detection",
      year: "2023",
      category: "Machine Learning",
      icon: Brain,
      description: "An innovative constellation recognition mobile app achieving 97% prediction accuracy using custom-trained machine learning models. Integrated TensorFlow Lite for efficient on-device predictions.",
      detailedFeatures: [
        "Custom ML model training with extensive constellation datasets",
        "TensorFlow Lite integration for on-device inference",
        "Real-time image processing and star pattern recognition",
        "Interactive constellation information and educational content",
        "Offline functionality with local model deployment",
        "Performance optimization for mobile devices"
      ],
      tech: ["Flutter", "Python", "TensorFlow Lite", "Jupyter", "Roboflow", "Firebase"],
      github: "https://github.com/akshat-0001",
      live: "#",
      color: "neon-glow-cyan"
    },
    {
      id: 4,
      title: "Discord Music Bot",
      year: "2021",
      category: "Bot Development",
      icon: Code2,
      description: "A feature-rich Discord bot that streams music in voice channels using the YouTube API. Successfully handled concurrency and API rate limits across 150+ active servers with smooth playback experience.",
      detailedFeatures: [
        "YouTube API integration for music streaming",
        "Playlist management with queue, skip, and volume controls",
        "User management and permission systems",
        "Concurrency handling for multiple server support",
        "Rate limiting and error handling for stable performance",
        "Command system with intuitive music controls"
      ],
      tech: ["JavaScript", "Node.js", "Discord API", "YouTube API", "Express.js"],
      github: "https://github.com/akshat-0001",
      live: "#",
      color: "neon-glow-purple"
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
            A showcase of my development work spanning mobile applications, machine learning, 
            financial analytics, and bot development with real-world impact.
          </p>
        </div>

        <div ref={cardsRef} className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className={`project-card glass-card rounded-2xl overflow-hidden group hover:scale-105 ${project.color} transition-all duration-500`}
              >
                {/* Project Header */}
                <div className="p-6 border-b border-glass-border">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center">
                        <IconComponent size={24} className="neon-text-cyan" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:neon-text-cyan transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar size={14} />
                          <span>{project.year}</span>
                          <span>•</span>
                          <span>{project.category}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        className="w-8 h-8 glass rounded-lg flex items-center justify-center text-muted-foreground hover:neon-text-cyan transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={16} />
                      </a>
                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          className="w-8 h-8 glass rounded-lg flex items-center justify-center text-muted-foreground hover:neon-text-cyan transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 neon-text-cyan">Key Features</h4>
                    <ul className="space-y-2">
                      {project.detailedFeatures.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-neon-purple rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                        </li>
                      ))}
                      {project.detailedFeatures.length > 3 && (
                        <li className="text-sm text-muted-foreground ml-4">
                          + {project.detailedFeatures.length - 3} more features...
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2 neon-text-purple">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs glass rounded-full text-muted-foreground border border-glass-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Interested in <span className="gradient-text">Collaborating?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new projects, innovative ideas, or opportunities to contribute to your team.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-lg neon-glow-purple hover:neon-glow-cyan hover:scale-105 transition-all duration-300"
            >
              <span className="gradient-text font-semibold">View All Projects</span>
              <ExternalLink size={16} className="neon-text-cyan" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;