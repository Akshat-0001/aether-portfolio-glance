import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial setup
    gsap.set([textRef.current, progressBarRef.current], { opacity: 0 });

    // Animation sequence
    tl.to(textRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    })
    .to(progressBarRef.current, {
      opacity: 1,
      duration: 0.3
    }, "-=0.2")
    .to(progressBarRef.current, {
      width: "100%",
      duration: 2.5,
      ease: "power2.out"
    })
    .to([textRef.current, progressBarRef.current?.parentElement], {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut"
    }, "+=0.3")
    .to(preloaderRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        onComplete();
      }
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={preloaderRef} className="preloader">
      <div ref={textRef} className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-4">
          Milad
        </h1>
        <p className="text-xl text-muted-foreground">Creative Developer</p>
      </div>
      
      <div className="progress-container">
        <div ref={progressBarRef} className="progress-bar"></div>
      </div>
    </div>
  );
};

export default Preloader;