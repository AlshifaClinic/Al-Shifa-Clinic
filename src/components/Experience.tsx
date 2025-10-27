import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DoctorsParallax = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Doctor 1 refs
  const doctor1FirstName = useRef<HTMLDivElement>(null);
  const doctor1LastName = useRef<HTMLDivElement>(null);
  const doctor1Specialty = useRef<HTMLDivElement>(null);
  
  // Doctor 2 refs
  const doctor2FirstName = useRef<HTMLDivElement>(null);
  const doctor2LastName = useRef<HTMLDivElement>(null);
  const doctor2Specialty1 = useRef<HTMLDivElement>(null);
  const doctor2Specialty2 = useRef<HTMLDivElement>(null);
  
  // Decorative layers for parallax depth
  const decorCircle1 = useRef<HTMLDivElement>(null);
  const decorCircle2 = useRef<HTMLDivElement>(null);
  const decorCircle3 = useRef<HTMLDivElement>(null);
  const decorCircle4 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Doctor 1 - Each word moves at different speed for parallax effect
      gsap.to(doctor1FirstName.current, {
        y: -150,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(doctor1LastName.current, {
        y: -250,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(doctor1Specialty.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      // Doctor 2 - Opposite direction parallax
      gsap.to(doctor2FirstName.current, {
        y: -200,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      gsap.to(doctor2LastName.current, {
        y: -300,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2.5,
        },
      });

      gsap.to(doctor2Specialty1.current, {
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(doctor2Specialty2.current, {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      // Decorative circles - Multi-layer parallax for depth
      gsap.to(decorCircle1.current, {
        y: 400,
        x: -150,
        rotate: 180,
        scale: 1.3,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.3,
        },
      });

      gsap.to(decorCircle2.current, {
        y: -300,
        x: 200,
        rotate: -120,
        scale: 0.8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.8,
        },
      });

      gsap.to(decorCircle3.current, {
        y: 250,
        x: 100,
        rotate: 90,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2.2,
        },
      });

      gsap.to(decorCircle4.current, {
        y: -180,
        x: -80,
        rotate: -60,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef} id="doctors"
      className="relative min-h-[150vh] py-32 overflow-hidden bg-background"
    >
      {/* Multi-layered decorative circles for parallax depth */}
      <div
        ref={decorCircle1}
        className="absolute top-[10%] left-[5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        style={{ willChange: "transform" }}
      />
      <div
        ref={decorCircle2}
        className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-secondary/15 rounded-full blur-3xl"
        style={{ willChange: "transform" }}
      />
      <div
        ref={decorCircle3}
        className="absolute bottom-[20%] left-[15%] w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        style={{ willChange: "transform" }}
      />
      <div
        ref={decorCircle4}
        className="absolute top-[60%] right-[5%] w-72 h-72 bg-primary/8 rounded-full blur-3xl"
        style={{ willChange: "transform" }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Single Section with Both Doctors */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          
          {/* Doctor 1 - Female Dermatologist */}
          <div className="space-y-6">
            <div ref={doctor1FirstName} className="overflow-hidden">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight text-foreground">
                Dr. Muneeba 
              </h2>
            </div>
            <div ref={doctor1LastName} className="overflow-hidden">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ahmer
              </h2>
            </div>
            <div ref={doctor1Specialty} className="overflow-hidden space-y-4 pt-6">
              <p className="text-2xl md:text-3xl text-primary font-semibold">
                Dermatologist
              </p>
              <div className="space-y-2">
                <p className="text-lg md:text-xl text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  MBBS
                </p>
                <p className="text-lg md:text-xl text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  RMP
                </p>
                <p className="text-lg md:text-xl text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  PMDC No: 51948-5
                </p>
              </div>
            </div>
          </div>

          {/* Doctor 2 - Male General & Orthopedic Surgeon and Family Physician */}
          <div className="space-y-6 md:pt-20">
            <div ref={doctor2FirstName} className="overflow-hidden">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight text-foreground">
                Dr. Ahmer
              </h2>
            </div>
            <div ref={doctor2LastName} className="overflow-hidden">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Furqan
              </h2>
            </div>
<div className="overflow-hidden space-y-4 pt-6">
  <div ref={doctor2Specialty1}>
    <p className="text-2xl md:text-3xl text-secondary font-semibold">
      General & Orthopedic Surgeon
    </p>
    <p className="text-xl md:text-2xl text-secondary/80 font-medium">
      Family Physician
    </p>
  </div>

  <div ref={doctor2Specialty2} className="space-y-2">
    <p className="text-lg md:text-xl text-muted-foreground flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
      MBBS
    </p>
    <p className="text-lg md:text-xl text-muted-foreground flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
      MCPS (Surgery)
    </p>
    <p className="text-lg md:text-xl text-muted-foreground flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
      RMP
    </p>
    <p className="text-lg md:text-xl text-muted-foreground flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
      PMDC No: 37794-P
    </p>
  </div>
</div>

          </div>
        </div>
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
    </section>
  );
};

export default DoctorsParallax;
