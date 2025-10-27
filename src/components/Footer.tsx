import { Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {


  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook", color: "#1877F2" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "#E4405F" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "#1DA1F2" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "#0A66C2" },
  ];

  // Replace with your actual clinic location coordinates
  const clinicLocation = "Al-Shifa Clinic Vehari Rd, Walayatabad No II Wilayatabad Colony, Multan, 60000";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${clinicLocation}`;

  return (
    <footer className="bg-gradient-to-r from-primary to-accent text-white py-8 font-poppins">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Side - Footer Content */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Clinic Name & Tagline */}
            <div className="animate-fade-in-up">
              <a href="#home" className="inline-block group">
                <h2 className="text-xl font-bold text-white mb-1 group-hover:scale-105 transition-transform duration-300">
                   Al-Shifa Clinic
                </h2>
              </a>
              <p className="text-white/80 text-xs">
                Family care under one roof
              </p>
            </div>


            {/* Working Hours */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-sm font-semibold mb-2 text-white flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Hours
              </h3>
              <div className="space-y-1 text-xs">
                <div className="text-white/80">
                  <div className="font-medium text-white">Mon-Sat</div>
                  <div>6:30 PM - 10:00 PM</div>
                </div>
                <div className="text-white/80">
                  <div className="font-medium text-white">Sunday</div>
                  <div>Closed</div>
                </div>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-sm font-semibold mb-2 text-white">Contact</h3>
              <div className="space-y-2 text-xs mb-3">
                <a
                  href="tel:+923003660674"
                  className="flex items-center gap-1 text-white/80 hover:text-white transition-colors group"
                >
                  <Phone className="w-3 h-3" />
                  <span> +923003660674</span>
                </a>
                <a
                  href="mailto:doctoratalshifaclinic.com"
                  className="flex items-center gap-1 text-white/80 hover:text-white transition-colors group break-all"
                >
                  <Mail className="w-3 h-3 flex-shrink-0" />
                  <span>doctoralshifaclinic01@gmail.com</span>
                </a>
              </div>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Google Maps */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-sm font-semibold mb-2 text-white">Location</h3>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative aspect-video bg-white/10">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?q=Al-Shifa%20ClinicVehari%20Rd%2C%20Walayatabad%20No%20II%20Wilayatabad%20Colony%2C%20Multan%2C%2060000&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title=" Al-Shifa Clinic Location"
                />
                <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Click to open in Google Maps</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-4 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/80 animate-fade-in">
          <p>© {new Date().getFullYear()} Al-Shifa Clinic.All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
