import { useState } from "react";
import { NavLink } from "../types";
import { LayoutGrid, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  scrolled: boolean;
  links: NavLink[];
}

export const Navbar = ({ scrolled, links }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav 
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[calc(100%-2rem)] max-w-7xl rounded-2xl border border-black/5 ${
          scrolled ? "bg-white/80 shadow-lg py-3" : "bg-white/50 shadow-sm py-4"
        } backdrop-blur-xl will-change-transform`}
      >
        <div className="px-6 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="/" className="flex items-center gap-3 md:gap-4 group cursor-pointer">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
                <img 
                  src="https://lh3.googleusercontent.com/d/1uEYPmLjm7B-ckoi5eysie5mLmEy1nB-W" 
                  alt="Dualform Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-bold text-lg md:text-xl tracking-tight">Dualform</span>
            </a>
            
            <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-black/60">
              {links.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="relative py-2 transition-all hover:text-brand whitespace-nowrap group"
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] transition-all duration-300 group-hover:w-full overflow-hidden rounded-full">
                    <div className="absolute inset-0 w-[200%] bg-[linear-gradient(90deg,#2541b2,#60a5fa,#2541b2)] animate-marquee" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <a 
              href="#contacto"
              className="hidden md:block relative group p-[3px] rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand/10"
            >
              <div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#2541b2_0%,#60a5fa_50%,#2541b2_100%)] animate-rotate-gradient group-hover:animate-rotate-burst" />
              <div className="relative flex items-center justify-center px-6 py-2.5 bg-white rounded-[9px] text-brand font-bold text-sm transition-colors overflow-hidden">
                <span className="relative z-10">Solicitar Cotización</span>
              </div>
            </a>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 hover:bg-black/5 rounded-xl transition-colors text-black/70"
            >
              {isOpen ? <X className="w-6 h-6" /> : <LayoutGrid className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-white/60 backdrop-blur-2xl" />
            <div className="relative pt-32 px-6 pb-12 h-full flex flex-col">
              <div className="flex flex-col gap-4">
                {links.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-5 rounded-2xl bg-white border border-black/5 shadow-sm text-lg font-bold text-black/80 hover:bg-brand/5 hover:text-brand transition-all"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-5 h-5 opacity-30" />
                  </motion.a>
                ))}
              </div>
              
              <div className="mt-auto">
                <a 
                  href="#contacto"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full py-5 bg-brand text-white font-bold rounded-2xl shadow-xl shadow-brand/20 active:scale-95 transition-transform"
                >
                  Solicitar Cotización
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
