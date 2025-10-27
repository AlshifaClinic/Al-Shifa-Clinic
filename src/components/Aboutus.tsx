import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundTextRef = useRef<HTMLDivElement>(null);
  const mainTitleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Background text parallax - slowest
    gsap.to(backgroundTextRef.current, {
      y: 200,
      opacity: 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 2.5,
      },
    });

    // Layer 1 - slow parallax
    gsap.to(layer1Ref.current, {
      y: -180,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.8,
      },
    });

    // Layer 2 - medium parallax
    gsap.to(layer2Ref.current, {
      y: -280,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 2.2,
      },
    });

    // Layer 3 - fast parallax
    gsap.to(layer3Ref.current, {
      y: -120,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      },
    });

    // Main title entrance
    gsap.fromTo(
      mainTitleRef.current,
      { 
        opacity: 0, 
        scale: 0.8,
        y: 100
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Subtitle slide in
    gsap.fromTo(
      subtitleRef.current,
      { 
        opacity: 0,
        x: -100
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Description fade in
    gsap.fromTo(
      descriptionRef.current,
      { 
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/10 flex items-center justify-center"
    >
      {/* Huge background text - parallax layer */}
      <div 
        ref={backgroundTextRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <div className="text-[20vw] font-black text-primary/5 whitespace-nowrap">
          ABOUT US
        </div>
      </div>

      {/* Decorative gradient orbs - parallax layers */}
      <div 
        ref={layer1Ref}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"
      />
      <div 
        ref={layer2Ref}
        className="absolute bottom-1/3 -right-32 w-[500px] h-[500px] bg-secondary/25 rounded-full blur-3xl pointer-events-none"
      />
      <div 
        ref={layer3Ref}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl pointer-events-none"
      />

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
        {/* Tagline */}
        <div 
          ref={subtitleRef}
          className="text-sm md:text-base font-bold tracking-[0.3em] text-primary mb-8 uppercase"
        >
          Family Care Under One Roof
        </div>

        {/* Main title with gradient */}
        <h1 
          ref={mainTitleRef}
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none text-foreground drop-shadow-lg"
        >
          About Us
        </h1>

        {/* Description */}
        <p 
          ref={descriptionRef}
          className="text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed max-w-3xl mx-auto font-normal drop-shadow-sm"
        >
          We are a dedicated team of experienced doctors and healthcare professionals 
          committed to providing comprehensive medical services for your entire family. 
          Our practice brings together expert specialists under one roof for your convenience.
        </p>
      </div>

      {/* Floating accent lines */}
      <div className="absolute top-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30" />
    </section>
  );
};

export default AboutUs;
    