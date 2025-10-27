import { useEffect, useRef, useState, memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Clock, CheckCircle2, Sparkles, Heart, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const CALENDLY_URL = "https://calendly.com/doctoratalshifaclinic01/";

const BookingSection = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [shouldLoadIframe, setShouldLoadIframe] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  // ✅ Lazy load Calendly
  useEffect(() => {
    const calTarget = calendarRef.current;
    if (!calTarget) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoadIframe(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    obs.observe(calTarget);
    const fallback = setTimeout(() => setShouldLoadIframe(true), 2000);
    return () => {
      obs.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  // ✅ Animate elements
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-animate]").forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: i * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    // Force recalculation of ScrollTrigger positions
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  // ✅ When Calendly finishes loading, refresh triggers again
  useEffect(() => {
    if (iframeLoaded) {
      ScrollTrigger.refresh();
    }
  }, [iframeLoaded]);

  return (
    <section
      id="booking"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-secondary via-background to-secondary/40"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div
            data-animate
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Easy Online Booking</span>
          </div>

          <h2 data-animate className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer">
              Book Your Appointment
            </span>
          </h2>

          <p
            data-animate
            className="text-lg md:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed"
          >
            Schedule your consultation in just a few clicks. Pick a time that works perfectly for you.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Calendar, title: "Flexible Scheduling", desc: "Choose times that fit your lifestyle" },
            { icon: Shield, title: "Secure & Private", desc: "Your info stays safe with encrypted connections" },
            { icon: Heart, title: "Personalized Care", desc: "Every consultation is tailored to you" },
          ].map((feature, i) => (
            <Card
              data-animate
              key={i}
              className="p-8 bg-card/70 border border-primary/10 hover:border-primary/30 transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.desc}</p>
            </Card>
          ))}
        </div>

        {/* Calendly Embed */}
        <div ref={calendarRef} className="max-w-5xl mx-auto">
          <Card className="relative p-2 bg-card/70 border border-primary/20 shadow-md">
            {!iframeLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/60">
                <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            )}

            {shouldLoadIframe && (
              <iframe
                title="Book Appointment"
                src={CALENDLY_URL}
                loading="lazy"
                onLoad={() => setIframeLoaded(true)}
                width="100%"
                height="680"
                className={`w-full transition-opacity duration-500 ${iframeLoaded ? "opacity-100" : "opacity-0"}`}
                style={{
                  border: "none",
                  willChange: "opacity",
                  transform: "translateZ(0)",
                }}
                allow="fullscreen"
              />
            )}
          </Card>

          {/* Trust Indicators */}
          <div
            data-animate
            className="flex flex-wrap justify-center gap-6 mt-10 text-foreground/80"
          >
            {[
              { icon: CheckCircle2, text: "Instant Confirmation" },
              { icon: Clock, text: "No Wait Times" },
              { icon: Shield, text: "100% Confidential" },
            ].map((i, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <i.icon className="w-5 h-5 text-primary" />
                <span>{i.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(BookingSection);
