import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Heart, Brain, Bone, Stethoscope, Pill, Activity } from "lucide-react";
import { useFadeIn } from "@/hooks/useScrollAnimation";

const services = [
  { icon: Brain, name: "Neurology" },
  { icon: Heart, name: "Cardiology" },
  { icon: Bone, name: "Orthopedics" },
  { icon: Stethoscope, name: "Surgery" },
  { icon: Activity, name: "Radiology" },
  { icon: Pill, name: "Medicine" }
];

const cardiologyServices = [
  "Electrocardiogram (ECG)",
  "Echocardiogram",
  "Color Doppler Echo",
  "Dobutamine Stress Echo (DSE)",
  "Transesophageal Echo (TEE)",
  "Exercise Tolerance Test (ETT/TMT)",
  "Halter monitor",
  "24 Hour Ambulatory BP monitor"
];

export const ServicesSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  
  useFadeIn(headerRef, "up");
  useFadeIn(servicesRef, "up", 0.1);
  useFadeIn(detailsRef, "up", 0.2);
  
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Services
          </h2>
        </div>
        
        <div ref={servicesRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-xl hover:-translate-y-2 hover:bg-primary/5 transition-all duration-300 cursor-pointer group"
            >
              <service.icon className="w-12 h-12 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-semibold">
                {service.name}
              </p>
            </Card>
          ))}
        </div>
        
        <div ref={detailsRef} className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12">
            <h3 className="text-3xl font-bold text-primary mb-6">
              Cardiology Department
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {cardiologyServices.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <p className="text-foreground">{service}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
