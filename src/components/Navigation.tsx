import { Menu, X, Calendar } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent, id: string, fallback?: string) => {
    const targetId = id.replace(/^#/, "");
    const el = document.getElementById(targetId);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      try {
        history.replaceState(null, "", `#${targetId}`);
      } catch {}
      setIsMenuOpen(false);
      return;
    }
    if (fallback) {
      return; // allow default anchor behavior or server navigation if href points to fallback
    }
    // if no element and no fallback, let the anchor update the hash (no preventDefault)
  };

  return (
    <>
      <style>{`
        @keyframes shine { 0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); } 100% { transform: translateX(100%) translateY(100%) rotate(45deg); } }
        @keyframes glow-pulse { 0%,100% { opacity: 0.5 } 50% { opacity: 1 } }
        .nav-link-fire { position: relative; transition: all .3s cubic-bezier(.4,0,.2,1); cursor: pointer; text-decoration: none; display: inline-flex; align-items: center; gap: .25rem; }
        .nav-link-fire::before { content:''; position:absolute; inset:-8px; border-radius:12px; opacity:0; background: radial-gradient(circle at center, rgba(66,153,225,.4) 0%, rgba(66,153,225,.2) 50%, transparent 70%); filter: blur(12px); z-index:-1; transition: all .3s ease-out; transform: scale(.8); }
        .nav-link-fire:hover::before { opacity:1; transform: scale(1.3); animation: glow-pulse 2s infinite; }
        .nav-link-fire:hover { color:#2563eb; text-shadow: 0 0 20px rgba(37,99,235,.6); transform: translateY(-2px) scale(1.05); }
        .btn-fire { position:relative; overflow:hidden; background: linear-gradient(135deg,#4299e1 0%,#3182ce 100%); color:white; border:none; padding:.5rem 1rem; border-radius:.375rem; font-weight:500; font-size:.875rem; cursor:pointer; display:inline-flex; align-items:center; gap:.5rem; text-decoration:none; }
        .btn-fire::before { content:''; position:absolute; inset:0; opacity:0; background: linear-gradient(135deg, rgba(66,153,225,.4) 0%, rgba(66,153,225,.6) 50%, rgba(66,153,225,.4) 100%); filter: blur(20px); transform: scale(1.5); transition: opacity .5s; }
        .btn-fire::after { content:''; position:absolute; inset:0; opacity:0; background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,.5) 50%, transparent 70%); animation: shine 2.5s infinite; transition: opacity .3s; }
        .btn-fire:hover::before { opacity:1 } .btn-fire:hover::after { opacity:1 }
        .mobile-link-fire { display:block; width:100%; text-align:left; padding:.75rem 1rem; font-size:.875rem; font-weight:500; position:relative; transition: all .3s ease-out; cursor:pointer; border-radius:.375rem; text-decoration:none; color:inherit; }
        @media (prefers-reduced-motion: reduce) { .nav-link-fire, .btn-fire, .mobile-link-fire { transition:none; animation:none; } .nav-link-fire::before, .btn-fire::before, .btn-fire::after, .mobile-link-fire::before { animation:none; } }
      `}</style>

      <nav className="bg-white border-b shadow-sm" style={{ borderColor: "#e2e8f0" }}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="text-2xl font-bold" style={{ color: "#4299e1", textDecoration: "none" }}>
              Al-Shifa Clinic
            </a>

            <div className="hidden md:flex items-center gap-8">
              <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="nav-link-fire" style={{ color: "#1e293b" }}>
                Home
              </a>
              <a href="#services" onClick={(e) => handleNavClick(e, "services", "/services")} className="nav-link-fire" style={{ color: "#1e293b" }}>
                Services
              </a>
              <a href="#doctors" onClick={(e) => handleNavClick(e, "doctors", "/doctors")} className="nav-link-fire" style={{ color: "#1e293b" }}>
                Doctors
              </a>
              <a href="#reviews" onClick={(e) => handleNavClick(e, "reviews", "/reviews")} className="nav-link-fire" style={{ color: "#1e293b" }}>
                Reviews
              </a>
              <a href="#booking" onClick={(e) => handleNavClick(e, "booking", "/booking")} className="btn-fire" style={{ marginLeft: "1rem" }}>
                <Calendar style={{ width: "1rem", height: "1rem" }} />
                Book An Appointment
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden" style={{ padding: "0.5rem", color: "#1e293b" }} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="mobile-link-fire" style={{ color: "#1e293b" }}>
                Home
              </a>
              <a href="#services" onClick={(e) => handleNavClick(e, "services", "/services")} className="mobile-link-fire" style={{ color: "#1e293b" }}>
                Services
              </a>
              <a href="#doctors" onClick={(e) => handleNavClick(e, "doctors", "/doctors")} className="mobile-link-fire" style={{ color: "#1e293b" }}>
                Doctors
              </a>
              <a href="#reviews" onClick={(e) => handleNavClick(e, "reviews", "/reviews")} className="mobile-link-fire" style={{ color: "#1e293b" }}>
                Reviews
              </a>
              <a href="#booking" onClick={(e) => handleNavClick(e, "booking", "/booking")} className="btn-fire" style={{ width: "100%", justifyContent: "center" }}>
                <Calendar style={{ width: "1rem", height: "1rem" }} />
                Book An Appointment
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
