import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Plus, Info } from "lucide-react";
import { Hotspot } from "../types";

interface HeroProps {
  hotspots: Hotspot[];
  activeHotspot: Hotspot | null;
  setActiveHotspot: (spot: Hotspot | null) => void;
}

export const Hero = ({ hotspots, activeHotspot, setActiveHotspot }: HeroProps) => {
  return (
    <main className="pt-24 pb-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Content */}
        <div className="lg:col-span-7 z-30 relative pointer-events-none">
          <motion.a 
            href="#contacto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 text-[11px] font-medium text-black/60 mt-4 mb-7 hover:border-brand/30 hover:bg-brand/5 transition-all cursor-pointer group bg-white/50 backdrop-blur-sm pointer-events-auto"
          >
            <span>Dualform</span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[2.1rem] md:text-[2.8rem] lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.1] mb-7 pointer-events-auto"
          >
            Fabricación de Piezas <br />
            Plásticas <span className="text-brand">a Medida</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[17px] md:text-lg text-black/60 leading-relaxed mb-9 max-w-xl pointer-events-auto"
          >
            <span className="font-bold text-black">Moldeo por inyección e impresión 3D</span> para prototipos, piezas funcionales y producción industrial.
            <br /><br />
            Fabricamos piezas plásticas utilizando dos tecnologías: inyección de plástico para producción repetitiva e impresión 3D para prototipos y piezas personalizadas.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 pointer-events-auto"
          >
            <a href="#procesos" className="button-highlight px-8 py-4 bg-brand text-white font-semibold rounded-xl hover:bg-brand/90 transition-all shadow-lg shadow-brand/20 active:scale-95">
              Ver Procesos
            </a>
            <a href="#contacto" className="px-8 py-4 bg-white text-black border border-black/10 font-semibold rounded-xl hover:bg-black/5 transition-colors active:scale-95">
              Solicitar Cotización
            </a>
          </motion.div>
        </div>

        {/* Machine Image with Hotspots */}
        <div className="lg:col-span-5 relative lg:-ml-[24rem] xl:-ml-[28rem] z-20 pointer-events-none mt-8 lg:mt-20">
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative group"
          >
            <div className="relative">
              <img 
                src="https://lh3.googleusercontent.com/d/1LEG2j-i8bkaFoR_nYI7-Dy2Rqqieqnlt" 
                alt="Industrial Machine"
                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)] scale-100 md:scale-110 lg:scale-[1.42] origin-center lg:origin-left pointer-events-none will-change-transform"
                referrerPolicy="no-referrer"
                loading="eager"
              />
            </div>

            {hotspots.map((spot) => (
              <div 
                key={spot.id}
                className="absolute cursor-pointer z-30 pointer-events-auto p-3 -m-3"
                style={{ top: spot.top, left: spot.left }}
                onClick={() => setActiveHotspot(activeHotspot?.id === spot.id ? null : spot)}
                onMouseEnter={() => window.innerWidth > 1024 && setActiveHotspot(spot)}
                onMouseLeave={() => window.innerWidth > 1024 && setActiveHotspot(null)}
              >
                <motion.div 
                  animate={{ 
                    scale: activeHotspot?.id === spot.id ? 1.3 : 1,
                    backgroundColor: activeHotspot?.id === spot.id ? "#2541b2" : "rgba(255,255,255,0.9)",
                    boxShadow: activeHotspot?.id === spot.id ? "0 0 20px rgba(37,65,178,0.4)" : "0 4px 12px rgba(0,0,0,0.1)"
                  }}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-md transition-colors"
                >
                  <Plus className={`w-4 h-4 md:w-5 md:h-5 transition-transform ${activeHotspot?.id === spot.id ? 'text-white rotate-45' : 'text-black'}`} />
                </motion.div>

                <AnimatePresence>
                  {activeHotspot?.id === spot.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-[70vw] max-w-[320px] bg-white/95 backdrop-blur-xl p-4 md:p-5 rounded-2xl md:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-black/5 z-50 pointer-events-none`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center">
                          <Info className="w-4 h-4 text-brand" />
                        </div>
                        <h3 className="font-bold text-base">{spot.title}</h3>
                      </div>
                      <p className="text-sm text-black/70 leading-relaxed">
                        {spot.description}
                      </p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white/95"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
};
