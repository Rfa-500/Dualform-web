import { useState, useEffect, useCallback, memo } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Procesos } from "./components/Procesos";
import { Inyeccion } from "./components/Inyeccion";
import { Impresion3D } from "./components/Impresion3D";
import { Aplicaciones } from "./components/Aplicaciones";
import { Capacidades } from "./components/Capacidades";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { HOTSPOTS, NAV_LINKS } from "./constants";
import { Hotspot } from "./types";

// Memoized sections for performance
const MemoProcesos = memo(Procesos);
const MemoInyeccion = memo(Inyeccion);
const MemoImpresion3D = memo(Impresion3D);
const MemoAplicaciones = memo(Aplicaciones);
const MemoCapacidades = memo(Capacidades);
const MemoCTA = memo(CTA);
const MemoFooter = memo(Footer);

export default function App() {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSetHotspot = useCallback((spot: Hotspot | null) => {
    setActiveHotspot(spot);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 antialiased">
      <Navbar scrolled={scrolled} links={NAV_LINKS} />
      
      <Hero 
        hotspots={HOTSPOTS} 
        activeHotspot={activeHotspot} 
        setActiveHotspot={handleSetHotspot} 
      />

      <MemoProcesos />
      <MemoInyeccion />
      <MemoImpresion3D />
      <MemoAplicaciones />
      <MemoCapacidades />
      <MemoCTA />
      <MemoFooter />

      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/10 blur-[100px] rounded-full" />
      </div>
    </div>
  );
}
