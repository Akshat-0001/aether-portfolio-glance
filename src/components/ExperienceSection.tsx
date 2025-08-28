import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards stagger animation
      const cards = cardsRef.current?.querySelectorAll('.experience-card');
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 100, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
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

  const experiences = [
    {
      company: "Discord",
      position: "Bug Hunter and Developer",
      duration: "Aug 2021 - Dec 2022",
      location: "Remote",
      type: "Contract",
      description: "Reported 40+ critical bugs across desktop and mobile clients, helping to improve feature stability and user experience in beta releases.",
      achievements: [
        "Leveraged tools like Postman, Charles Proxy, Browser DevTools, and VMware to reproduce and debug issues across Windows, Android, and Linux environments",
        "Collaborated with Discord's QA team through the Testers Program to triage bugs and validate fixes during fast-paced release cycles",
        "Specialized in API Debugging, Proxy Tools, Browser DevTools, Cross-Platform Testing, VMware, and Linux systems"
      ],
      skills: ["API Debugging", "Proxy Tools", "Browser DevTools", "Cross-Platform Testing", "VMware", "Linux"],
      color: "neon-glow-purple"
    },
    {
      company: "Fiverr",
      position: "Freelance Web Developer",
      duration: "Oct 2020 - Apr 2021",
      location: "Remote",
      type: "Freelance",
      description: "Designed 10+ custom websites for clients using HTML, CSS, JavaScript, and jQuery.",
      achievements: [
        "Delivered all projects on time with 100% client satisfaction and 5-star ratings",
        "Managed client feedback independently while maintaining high quality standards",
        "Built responsive, modern websites tailored to client requirements"
      ],
      skills: ["HTML", "CSS", "JavaScript", "jQuery", "WordPress", "HubSpot"],
      color: "neon-glow-cyan"
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional journey across different companies, contributing to bug hunting, 
            quality assurance, and delivering client-focused web development solutions.
          </p>
        </div>

        <div ref={cardsRef} className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`experience-card glass-card rounded-2xl p-8 hover:scale-[1.02] ${exp.color} transition-all duration-500`}
            >
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Company Info */}
                <div className="lg:col-span-1">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold gradient-text">{exp.company}</h3>
                      <h4 className="text-xl font-semibold neon-text-cyan">{exp.position}</h4>
                      <span className="inline-block px-3 py-1 text-sm glass rounded-full text-muted-foreground mt-2">
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h5 className="text-sm font-medium neon-text-purple mb-2">Technologies Used</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs glass rounded text-muted-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Job Details */}
                <div className="lg:col-span-2 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h5 className="text-lg font-semibold mb-3 neon-text-cyan">Key Achievements</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Education</span>
          </h3>
          
          <div className="glass-card rounded-2xl p-8 neon-glow-purple">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="text-2xl font-bold neon-text-cyan">Chandigarh University</h4>
                <p className="text-lg font-semibold text-muted-foreground">B.E. in Computer Science and Engineering</p>
                <div className="flex items-center space-x-2 text-muted-foreground mt-2">
                  <Calendar size={16} />
                  <span>Aug 2022 - Present</span>
                </div>
                <div className="mt-2">
                  <span className="text-sm font-medium neon-text-purple">CGPA: </span>
                  <span className="text-lg font-bold gradient-text">7.88/10</span>
                </div>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold mb-3 neon-text-cyan">Relevant Coursework</h5>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Data Structures and Algorithms',
                    'Object Oriented Programming', 
                    'Databases',
                    'Operating Systems',
                    'Computer Networks',
                    'Discrete Mathematics',
                    'Machine Learning'
                  ].map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 text-sm glass rounded-full text-muted-foreground"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;