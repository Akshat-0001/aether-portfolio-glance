import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, BookOpen, Trophy, Star, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AwardsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards stagger animation
      const cards = cardsRef.current?.querySelectorAll('.award-card');
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 80, scale: 0.9 },
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

  const awards = [
    {
      title: "Research Paper Accepted for Publication",
      organization: "IEEE Xplore",
      description: "Led the research and presented 'Assessing the Long-Term Impact of AI Bias Mitigation Techniques' at the 6th IEEE International Conference on Emerging Technology (INCET).",
      year: "2025",
      type: "Research Publication",
      icon: BookOpen,
      details: [
        "Conducted comprehensive research on AI bias mitigation strategies",
        "Analyzed long-term effectiveness of various bias reduction techniques",
        "Presented findings at international conference to global audience",
        "Publication accepted in prestigious IEEE Xplore digital library"
      ],
      color: "neon-glow-purple",
      badge: "Published"
    },
    {
      title: "NPTEL Deep Learning Certification",
      organization: "NPTEL (National Programme on Technology Enhanced Learning)",
      description: "Achieved Elite + Silver certificate by scoring in the top 10 percentile of learners in the comprehensive Deep Learning course.",
      year: "2025",
      type: "Academic Excellence",
      icon: Award,
      details: [
        "Completed rigorous 12-week Deep Learning curriculum",
        "Scored in top 10% among thousands of global participants",
        "Mastered neural networks, CNNs, RNNs, and advanced ML concepts",
        "Demonstrated exceptional performance in assignments and exams"
      ],
      color: "neon-glow-cyan",
      badge: "Elite + Silver"
    }
  ];

  const achievements = [
    {
      title: "40+ Critical Bugs Reported",
      description: "Discord Bug Hunter Program",
      icon: Trophy,
      metric: "40+"
    },
    {
      title: "100% Client Satisfaction",
      description: "Fiverr Freelance Projects",
      icon: Star,
      metric: "5★"
    },
    {
      title: "97% ML Model Accuracy",
      description: "CosMoS Constellation Detection",
      icon: Award,
      metric: "97%"
    },
    {
      title: "150+ Active Servers",
      description: "Discord Music Bot Deployment",
      icon: Trophy,
      metric: "150+"
    }
  ];

  return (
    <section id="awards" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Awards & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for research contributions, academic excellence, and professional achievements 
            that demonstrate commitment to innovation and quality.
          </p>
        </div>

        {/* Major Awards */}
        <div ref={cardsRef} className="space-y-8 mb-16">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <div
                key={index}
                className={`award-card glass-card rounded-2xl p-8 ${award.color} hover:scale-[1.02] transition-all duration-500`}
              >
                <div className="grid lg:grid-cols-4 gap-6">
                  {/* Award Icon & Badge */}
                  <div className="lg:col-span-1 flex flex-col items-center lg:items-start space-y-4">
                    <div className="w-20 h-20 glass-card rounded-2xl flex items-center justify-center">
                      <IconComponent size={32} className="neon-text-cyan" />
                    </div>
                    <div className="text-center lg:text-left">
                      <span className="inline-block px-4 py-2 glass rounded-full text-sm font-semibold neon-text-purple">
                        {award.badge}
                      </span>
                      <div className="flex items-center space-x-2 text-muted-foreground mt-2 justify-center lg:justify-start">
                        <Calendar size={14} />
                        <span className="text-sm">{award.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Award Content */}
                  <div className="lg:col-span-3 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold gradient-text mb-2">{award.title}</h3>
                      <h4 className="text-lg font-semibold neon-text-cyan mb-2">{award.organization}</h4>
                      <span className="inline-block px-3 py-1 text-sm glass rounded-full text-muted-foreground">
                        {award.type}
                      </span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {award.description}
                    </p>

                    <div>
                      <h5 className="text-lg font-semibold mb-3 neon-text-purple">Key Highlights</h5>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {award.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievement Stats */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">
            Key <span className="gradient-text">Metrics</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={index}
                  className="glass-card rounded-xl p-6 text-center hover:scale-105 neon-glow-purple hover:neon-glow-cyan transition-all duration-300"
                >
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={24} className="neon-text-purple" />
                  </div>
                  
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {achievement.metric}
                  </div>
                  
                  <h4 className="text-lg font-semibold neon-text-cyan mb-2">
                    {achievement.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Future Goals */}
        <div className="mt-16 text-center">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Future Goals</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Continuing to push boundaries in technology through research, development, 
              and contributing to open-source projects that make a difference.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {['AI Research', 'Open Source', 'Tech Leadership', 'Innovation'].map((goal) => (
                <span
                  key={goal}
                  className="px-4 py-2 glass rounded-full text-sm neon-text-cyan border border-glass-border"
                >
                  {goal}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;