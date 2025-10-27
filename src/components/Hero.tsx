"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  ArrowUp,
  Calendar,
  HeartPulse, // 🫀 replaced Heart with HeartPulse
  Activity,
  Stethoscope,
  Syringe,
  Pill,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import medicalBg from "@/assets/video2.mp4.mp4";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const icon1Ref = useRef<HTMLDivElement>(null);
  const icon2Ref = useRef<HTMLDivElement>(null);
  const icon3Ref = useRef<HTMLDivElement>(null);
  const icon4Ref = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const heartbeatRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text and button parallax
      gsap.to(titleRef.current, {
        y: 200,
        scale: 0.8,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1 },
      });
      gsap.to(subtitleRef.current, {
        y: 300,
        opacity: 0,
        filter: "blur(10px)",
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1 },
      });
      gsap.to(ctaRef.current, {
        y: 350,
        opacity: 0,
        scale: 0.5,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1 },
      });

      // Floating icons animations
      gsap.to(icon1Ref.current, {
        y: -150,
        x: -80,
        rotation: 360,
        scale: 1.2,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 2 },
      });
      gsap.to(icon2Ref.current, {
        y: 250,
        x: 120,
        rotation: -540,
        scale: 0.5,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1.5 },
      });
      gsap.to(icon3Ref.current, {
        y: -150,
        x: 80,
        rotation: 900,
        scale: 1.8,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 2.5 },
      });
      gsap.to(icon4Ref.current, {
        y: 180,
        x: -120,
        rotation: -720,
        scale: 0.7,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1.8 },
      });

      // Heartbeat line parallax
      gsap.to(heartbeatRef.current, {
        y: 100,
        opacity: 0,
        scale: 1.2,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1.2 },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // ✅ Smooth scroll to booking section
  const scrollToAppointment = () => {
    const bookingSection = document.querySelector("#booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn("Booking section not found. Make sure it has id='booking'.");
    }
  };

  return (
   <section
  id="home"
  ref={heroRef}
  className="relative min-h-[150vh] flex items-center justify-center overflow-hidden"
>

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={medicalBg}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px] z-10" />

      {/* Floating Medical Icons (Parallax) */}
      <div
        ref={icon1Ref}
        className="absolute top-20 left-[10%] opacity-40 z-20 animate-pulse"
      >
        <HeartPulse className="w-24 h-24 text-blue-600" /> {/* 🫀 new heartbeat icon */}
      </div>

      <div ref={icon2Ref} className="absolute top-40 right-[15%] opacity-25 z-20">
        <Activity className="w-32 h-32 text-blue-500" />
      </div>
      <div ref={icon3Ref} className="absolute bottom-40 left-[15%] opacity-30 z-20">
        <Stethoscope className="w-40 h-40 text-blue-700" />
      </div>
      <div ref={icon4Ref} className="absolute bottom-32 right-[10%] opacity-35 z-20">
        <Syringe className="w-28 h-28 text-blue-600" />
      </div>

      {/* Extra subtle icons */}
      <div className="absolute top-1/3 right-[8%] opacity-20 z-20">
        <Pill className="w-16 h-16 text-blue-400" />
      </div>
      <div className="absolute bottom-1/3 left-[8%] opacity-20 z-20">
        <Sparkles className="w-20 h-20 text-blue-500" />
      </div>

      {/* Heartbeat Line */}
      <svg
        ref={heartbeatRef}
        className="absolute top-1/2 left-0 w-full opacity-10 z-20"
        viewBox="0 0 1200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,50 L200,50 L230,20 L250,80 L270,50 L400,50 L430,30 L450,70 L470,50 L600,50 L630,25 L650,75 L670,50 L800,50 L830,35 L850,65 L870,50 L1200,50"
          stroke="rgb(37, 99, 235)"
          strokeWidth="4"
        />
      </svg>

      {/* Content Section */}
      <div className="relative z-30 container mx-auto px-6 py-20 flex items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight"
          >
            <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-4 drop-shadow-sm">
              YOUR HEALTH,
            </span>
            <span className="block text-gray-900 drop-shadow-sm">OUR PRIORITY</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Experience world-class healthcare with cutting-edge technology and compassionate care.
            Book your appointment today.
          </p>

          <div ref={ctaRef} className="flex flex-col items-center gap-4 pt-8">
            <Button
              onClick={scrollToAppointment}
              size="lg"
              className="group relative px-8 py-6 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all duration-300 hover:scale-105"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Appointment Now
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>

            <p className="text-sm text-gray-600 flex items-center gap-2 font-medium">
              <ArrowUp className="h-4 w-4 animate-bounce text-blue-600" />
              Quick & Easy Booking Process
            </p>

            <div className="pt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-700 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span>Expert Care</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-700 animate-pulse" />
                <span>Modern Facilities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
