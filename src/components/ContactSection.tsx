import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo, PaperPlaneTilt } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Form inputs animation
      const inputs = formRef.current?.querySelectorAll('.form-input');
      if (inputs) {
        gsap.fromTo(inputs,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Social icons animation
      const socialIcons = socialRef.current?.querySelectorAll('.social-icon');
      if (socialIcons) {
        gsap.fromTo(socialIcons,
          { opacity: 0, y: 30, scale: 0.5 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: socialRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    // Success animation
    const submitBtn = e.target as HTMLFormElement;
    const button = submitBtn.querySelector('button[type="submit"]');
    if (button) {
      gsap.to(button, {
        scale: 1.1,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Drop me a message 
            and let's create something amazing together.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-12">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="form-input">
                <label htmlFor="name" className="block text-sm font-medium mb-2 neon-text-cyan">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-glass-border rounded-lg focus:outline-none focus:border-neon-cyan focus:neon-glow-cyan transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                  placeholder="Your name"
                />
              </div>
              
              <div className="form-input">
                <label htmlFor="email" className="block text-sm font-medium mb-2 neon-text-cyan">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-glass-border rounded-lg focus:outline-none focus:border-neon-cyan focus:neon-glow-cyan transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div className="form-input">
              <label htmlFor="message" className="block text-sm font-medium mb-2 neon-text-cyan">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-input border border-glass-border rounded-lg focus:outline-none focus:border-neon-cyan focus:neon-glow-cyan transition-all duration-300 text-foreground placeholder:text-muted-foreground resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full glass-card px-8 py-4 rounded-lg font-semibold neon-glow-purple hover:neon-glow-cyan hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-neon-cyan border-t-transparent rounded-full animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <PaperPlaneTilt size={20} className="group-hover:translate-x-1 transition-transform" />
                  <span className="gradient-text">Send Message</span>
                </>
              )}
            </button>
          </form>
          
          <div ref={socialRef} className="flex justify-center space-x-6 mt-12 pt-8 border-t border-glass-border">
            <a
              href="https://github.com/akshat-0001"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon w-12 h-12 glass rounded-full flex items-center justify-center hover:neon-glow-cyan hover:scale-110 transition-all duration-300 group"
            >
              <GithubLogo size={24} className="text-muted-foreground group-hover:neon-text-cyan" />
            </a>
            <a
              href="https://linkedin.com/in/akshat0603"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon w-12 h-12 glass rounded-full flex items-center justify-center hover:neon-glow-cyan hover:scale-110 transition-all duration-300 group"
            >
              <LinkedinLogo size={24} className="text-muted-foreground group-hover:neon-text-cyan" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;