import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const skinScrollRef = useRef<HTMLDivElement>(null);
  const orthoScrollRef = useRef<HTMLDivElement>(null);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const skinServices = [
    { 
      name: "Laser Hair Removal", 
      short: "Advanced laser technology for permanent hair reduction",
      details: "Our state-of-the-art laser system safely targets hair follicles while protecting surrounding skin. Suitable for all skin types with minimal discomfort and downtime.",
      duration: "30-60 min",
      sessions: "6-8 sessions"
    },
    { 
      name: "PRP Therapy", 
      short: "Platelet Rich Plasma for skin rejuvenation",
      details: "Harness your body's natural healing power. PRP stimulates collagen production, reduces fine lines, and improves skin texture using your own blood platelets.",
      duration: "60 min",
      sessions: "3-4 sessions"
    },
    { 
      name: "Mole Excision", 
      short: "Safe and precise mole removal",
      details: "Expert surgical removal of benign or suspicious moles with minimal scarring. All specimens are sent for histopathological examination for your safety.",
      duration: "15-30 min",
      sessions: "1 session"
    },
    { 
      name: "Chemical Peel", 
      short: "Medical-grade skin resurfacing",
      details: "Customized peels to address acne, pigmentation, and aging. We use professional-strength formulations for dramatic yet safe results.",
      duration: "30-45 min",
      sessions: "4-6 sessions"
    },
    { 
      name: "Micro Needling", 
      short: "Collagen induction therapy",
      details: "Controlled micro-injuries stimulate natural collagen and elastin production. Improves acne scars, fine lines, and overall skin texture with minimal downtime.",
      duration: "45-60 min",
      sessions: "4-6 sessions"
    },
    { 
      name: "Hydra Facial", 
      short: "Deep cleansing and hydration",
      details: "Multi-step treatment that cleanses, exfoliates, extracts impurities, and infuses skin with intensive serums. Instant glow with zero downtime.",
      duration: "45 min",
      sessions: "Monthly"
    },
    { 
      name: "Oxygeno Facial", 
      short: "Oxygen-infused rejuvenation",
      details: "Revolutionary treatment that delivers pressurized oxygen and specialized serums deep into the skin for immediate plumping and radiance.",
      duration: "50 min",
      sessions: "Monthly"
    },
    { 
      name: "Vampire Facial", 
      short: "PRP-enhanced microneedling",
      details: "Combines micro-needling with PRP for amplified results. The ultimate anti-aging treatment for dramatic skin transformation and collagen boost.",
      duration: "90 min",
      sessions: "3-4 sessions"
    },
    { 
      name: "BB Glow Facial", 
      short: "Semi-permanent foundation",
      details: "Innovative Korean treatment infusing skin with tinted serum for natural-looking coverage. Reduces appearance of pores and evens skin tone for months.",
      duration: "60 min",
      sessions: "2-3 sessions"
    },
    { 
      name: "Electro Cautery", 
      short: "Precision skin tag removal",
      details: "Quick and effective removal of skin tags, warts, and minor skin imperfections using controlled electrical current. Minimal to no scarring.",
      duration: "15-20 min",
      sessions: "1 session"
    },
    { 
      name: "Mesotherapy", 
      short: "Targeted nutrient injection",
      details: "Micro-injections of vitamins, minerals, and hyaluronic acid directly into the skin. Treats hair loss, cellulite, and provides deep skin rejuvenation.",
      duration: "30-45 min",
      sessions: "4-8 sessions"
    },
    { 
      name: "Anti-Aging Treatment", 
      short: "Comprehensive age management",
      details: "Customized protocols combining multiple modalities to address wrinkles, volume loss, and skin laxity. Tailored to your unique aging concerns.",
      duration: "60-90 min",
      sessions: "Varies"
    },
    { 
      name: "Acne Scar Treatment", 
      short: "Advanced scar reduction",
      details: "Combination therapy using lasers, chemical peels, and micro-needling to significantly reduce acne scarring. Visible improvement after first session.",
      duration: "45-60 min",
      sessions: "6-10 sessions"
    },
    { 
      name: "Skin Consultation", 
      short: "Personalized analysis and planning",
      details: "Comprehensive skin assessment using advanced imaging. Receive a customized treatment plan designed specifically for your skin concerns and goals.",
      duration: "30 min",
      sessions: "Initial visit"
    }
  ];

  const orthoServices = [
    { 
      name: "Bone Fracture Treatment", 
      short: "Expert fracture care and healing",
      details: "Comprehensive management from diagnosis to rehabilitation. We use advanced techniques including casting, splinting, and when necessary, surgical fixation.",
      duration: "Varies",
      recovery: "6-12 weeks"
    },
    { 
      name: "Joint Replacement", 
      short: "Advanced hip and knee surgery",
      details: "Minimally invasive joint replacement using latest prosthetic technology. Restore mobility and eliminate chronic joint pain with rapid recovery protocols.",
      duration: "2-3 hours",
      recovery: "3-6 months"
    },
    { 
      name: "Sports Injury Care", 
      short: "Specialized athletic injury treatment",
      details: "Rapid assessment and treatment of sports-related injuries. From ligament tears to stress fractures, get back in the game with expert orthopedic care.",
      duration: "30-60 min",
      recovery: "Varies"
    },
    { 
      name: "Arthritis Management", 
      short: "Comprehensive pain relief",
      details: "Multi-modal approach to arthritis including medications, injections, physical therapy, and lifestyle modifications. Preserve joint function and reduce pain.",
      duration: "45 min",
      recovery: "Ongoing"
    },
{
  name: "Intra-Articular Injection",
  short: "Precision joint therapy",
  details: "A brief, image-assisted procedure delivering medication directly into the joint capsule to reduce inflammation and improve function. Options include corticosteroids, hyaluronic acid, or biologic injections (e.g., PRP), and the technique may be guided by ultrasound or fluoroscopy for accuracy. Used for diagnostic relief and symptom control in conditions such as osteoarthritis, inflammatory arthritis, bursitis, and joint effusions.",
  duration: "5-20 minutes",
  recovery: "Varies"
}
,
   {
  name: "Clubfoot Treatment",
  short: "Rehabilitation and recovery",
  details: "Comprehensive physiotherapy and guided exercise programs designed to support recovery after clubfoot correction. Focused on improving strength, flexibility, and mobility of the affected foot and leg, with manual therapy and personalized care to enhance long-term function and prevent relapse.",
  duration: "45-60 min",
  recovery: "Varies "
}

  ];

  useEffect(() => {
    if (!containerRef.current || !skinScrollRef.current || !orthoScrollRef.current || isMobile) return;

    const ctx = gsap.context(() => {
      // Horizontal scroll for skin services
      const skinCards = skinScrollRef.current?.querySelectorAll(".service-card");
      if (skinCards && skinCards.length > 0) {
        const skinContainer = skinScrollRef.current;
        const scrollWidth = skinContainer ? skinContainer.scrollWidth - skinContainer.clientWidth : 0;

        gsap.to(skinCards, {
          x: -scrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: skinContainer,
            start: "top 20%",
            end: () => `+=${scrollWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true
          }
        });

        // Individual card parallax
        skinCards.forEach((card, i) => {
          gsap.fromTo(card,
            {
              opacity: 0.6,
              scale: 0.9,
              rotateY: -15
            },
            {
              opacity: 1,
              scale: 1,
              rotateY: 0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: skinContainer,
                start: "top 60%",
                end: "bottom 40%",
                scrub: 1
              }
            }
          );
        });
      }

      // Horizontal scroll for orthopedic services
      const orthoCards = orthoScrollRef.current?.querySelectorAll(".service-card");
      if (orthoCards && orthoCards.length > 0) {
        const orthoContainer = orthoScrollRef.current;
        const scrollWidth = orthoContainer ? orthoContainer.scrollWidth - orthoContainer.clientWidth : 0;

        gsap.to(orthoCards, {
          x: -scrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: orthoContainer,
            start: "top 20%",
            end: () => `+=${scrollWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true
          }
        });

        // Individual card parallax
        orthoCards.forEach((card, i) => {
          gsap.fromTo(card,
            {
              opacity: 0.6,
              scale: 0.9,
              rotateY: 15
            },
            {
              opacity: 1,
              scale: 1,
              rotateY: 0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: orthoContainer,
                start: "top 60%",
                end: "bottom 40%",
                scrub: 1
              }
            }
          );
        });
      }

      // Background parallax effect
      gsap.to(".parallax-bg", {
        xPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <div ref={containerRef} className="relative bg-background overflow-hidden">
      {/* Animated background elements */}
      <div className="parallax-bg fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      {/* Skin Care Section */}
      <section className="min-h-screen py-20 relative" id="services">
        <div className="max-w-[90vw] mx-auto px-8">
          <div className="mb-12">
            <div className="inline-block">
              <h2 className="text-6xl md:text-7xl font-bold text-primary mb-2">
                Skin Care Clinic
              </h2>
              <div className="h-2 w-full bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>
            <p className="text-xl text-muted-foreground mt-4 max-w-2xl">
              Transform your skin with our advanced dermatological treatments
            </p>
          </div>

          <div ref={skinScrollRef} className="overflow-hidden">
            <div className={`flex gap-6 ${isMobile ? 'flex-col items-center' : ''}`} style={!isMobile ? { width: "max-content" } : {}}>
              {skinServices.map((service, index) => {
                const cardId = `skin-${index}`;
                const isExpanded = expandedCard === cardId;
                
                return (
                  <div
                    key={index}
                    className={`service-card ${isMobile ? '' : 'group'} w-full md:w-[400px] relative cursor-pointer transition-all duration-300`}
                    style={!isMobile ? { perspective: "1000px" } : {}}
                    onClick={() => isMobile && setExpandedCard(isExpanded ? null : cardId)}
                  >
                    <div className={`relative bg-card rounded-3xl border-2 border-border overflow-hidden transition-all duration-500 ${isMobile ? (isExpanded ? 'border-primary shadow-lg' : '') : 'hover:border-primary hover:shadow-[var(--shadow-glow)] group-hover:border-primary'} ${isMobile ? 'h-auto' : 'h-[500px]'}`}>
                      {/* Card number */}
                      <div className="absolute top-4 md:top-6 right-4 md:right-6 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg md:text-xl z-10 shadow-lg">
                        {(index + 1).toString().padStart(2, '0')}
                      </div>

                      {/* Content */}
                      <div className="relative h-full p-6 md:p-8 flex flex-col">
                        {/* Title section - always visible */}
                        <div className="mb-4 md:mb-6">
                          <h3 className={`text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-3 transition-colors ${isMobile ? (isExpanded ? 'text-primary' : '') : 'group-hover:text-primary'}`}>
                            {service.name}
                          </h3>
                          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                            {service.short}
                          </p>
                        </div>

                        {/* Expandable details */}
                        {isMobile ? (
                          isExpanded && (
                            <div className="bg-gradient-to-b from-transparent via-secondary/50 to-secondary rounded-2xl p-4 mb-4 animate-fade-in">
                              <p className="text-foreground leading-relaxed mb-4">
                                {service.details}
                              </p>
                              <div className="flex flex-wrap gap-3 text-sm">
                                <div className="bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                                  <span className="text-primary font-semibold">⏱ {service.duration}</span>
                                </div>
                                <div className="bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
                                  <span className="text-accent font-semibold">📅 {service.sessions}</span>
                                </div>
                              </div>
                            </div>
                          )
                        ) : (
                          <div className="flex-1 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/50 to-secondary rounded-2xl p-6 transform translate-y-[80%] group-hover:translate-y-0 transition-transform duration-500">
                              <div className="h-full flex flex-col justify-between">
                                <p className="text-foreground leading-relaxed mb-4">
                                  {service.details}
                                </p>
                                <div className="flex gap-4 text-sm">
                                  <div className="bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                                    <span className="text-primary font-semibold">⏱ {service.duration}</span>
                                  </div>
                                  <div className="bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
                                    <span className="text-accent font-semibold">📅 {service.sessions}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Gradient overlay for desktop */}
                        {!isMobile && (
                          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
                        )}
                        
                        {/* Tap indicator for mobile */}
                        {isMobile && !isExpanded && (
                          <div className="text-center text-sm text-muted-foreground mt-2">
                            Tap to view details
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Orthopedic Section */}
      <section className="min-h-screen py-20 relative">
        <div className="max-w-[90vw] mx-auto px-8">
          <div className="mb-12">
            <div className="inline-block">
              <h2 className="text-6xl md:text-7xl font-bold text-accent mb-2">
                Orthopedic Clinic
              </h2>
              <div className="h-2 w-full bg-gradient-to-r from-accent to-primary rounded-full" />
            </div>
            <p className="text-xl text-muted-foreground mt-4 max-w-2xl">
              Expert bone and joint care for optimal mobility and pain relief
            </p>
          </div>

          <div ref={orthoScrollRef} className="overflow-hidden">
            <div className={`flex gap-6 ${isMobile ? 'flex-col items-center' : ''}`} style={!isMobile ? { width: "max-content" } : {}}>
              {orthoServices.map((service, index) => {
                const cardId = `ortho-${index}`;
                const isExpanded = expandedCard === cardId;
                
                return (
                  <div
                    key={index}
                    className={`service-card ${isMobile ? '' : 'group'} w-full md:w-[400px] relative cursor-pointer transition-all duration-300`}
                    style={!isMobile ? { perspective: "1000px" } : {}}
                    onClick={() => isMobile && setExpandedCard(isExpanded ? null : cardId)}
                  >
                    <div className={`relative bg-card rounded-3xl border-2 border-border overflow-hidden transition-all duration-500 ${isMobile ? (isExpanded ? 'border-accent shadow-lg' : '') : 'hover:border-accent hover:shadow-[var(--shadow-glow)] group-hover:border-accent'} ${isMobile ? 'h-auto' : 'h-[500px]'}`}>
                      {/* Card number */}
                      <div className="absolute top-4 md:top-6 right-4 md:right-6 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-lg md:text-xl z-10 shadow-lg">
                        {(index + 1).toString().padStart(2, '0')}
                      </div>

                      {/* Content */}
                      <div className="relative h-full p-6 md:p-8 flex flex-col">
                        {/* Title section */}
                        <div className="mb-4 md:mb-6">
                          <h3 className={`text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-3 transition-colors ${isMobile ? (isExpanded ? 'text-accent' : '') : 'group-hover:text-accent'}`}>
                            {service.name}
                          </h3>
                          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                            {service.short}
                          </p>
                        </div>

                        {/* Expandable details */}
                        {isMobile ? (
                          isExpanded && (
                            <div className="bg-gradient-to-b from-transparent via-secondary/50 to-secondary rounded-2xl p-4 mb-4 animate-fade-in">
                              <p className="text-foreground leading-relaxed mb-4">
                                {service.details}
                              </p>
                              <div className="flex flex-wrap gap-3 text-sm">
                                <div className="bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
                                  <span className="text-accent font-semibold">⏱ {service.duration}</span>
                                </div>
                                <div className="bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                                  <span className="text-primary font-semibold">🔄 {service.recovery}</span>
                                </div>
                              </div>
                            </div>
                          )
                        ) : (
                          <div className="flex-1 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/50 to-secondary rounded-2xl p-6 transform translate-y-[80%] group-hover:translate-y-0 transition-transform duration-500">
                              <div className="h-full flex flex-col justify-between">
                                <p className="text-foreground leading-relaxed mb-4">
                                  {service.details}
                                </p>
                                <div className="flex gap-4 text-sm">
                                  <div className="bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
                                    <span className="text-accent font-semibold">⏱ {service.duration}</span>
                                  </div>
                                  <div className="bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                                    <span className="text-primary font-semibold">🔄 {service.recovery}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Gradient overlay for desktop */}
                        {!isMobile && (
                          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
                        )}
                        
                        {/* Tap indicator for mobile */}
                        {isMobile && !isExpanded && (
                          <div className="text-center text-sm text-muted-foreground mt-2">
                            Tap to view details
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
