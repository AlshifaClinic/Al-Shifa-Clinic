import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
//import { DoctorsSection } from "@/components/Experience";
import { ReviewsSection } from "@/components/VASection";
//import { Footer } from "@/components/Footer";
import  Footer  from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";


import BookingSection from "@/components/BookingSection"; // <- add this
import DoctorsSection from "@/components/Experience";
import Services from "@/components/services";
import AboutUs from "@/components/Aboutus";

const Index = () => {
  useScrollAnimation();
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      <AboutUs />
      <DoctorsSection />
      <Services />
     <BookingSection /> 
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Index;

