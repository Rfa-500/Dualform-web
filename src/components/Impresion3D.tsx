import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export const Impresion3D = () => {
  return (
    <section id="impresion3d" className="bg-black/5 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl aspect-square bg-white">
            <img 
              src="https://lh3.googleusercontent.com/d/1XW4d1B1mgtjLR0TM6DomaoYzpTUZh84F" 
              alt="Impresión 3D"
              className="w-full h-full object-contain p-4 md:p-8"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-6">Impresión 3D</h2>
            <p className="text-base md:text-lg text-black/60 mb-8 leading-relaxed">
              Fabricación de piezas capa por capa sin necesidad de molde. Este proceso permite desarrollar prototipos, 
              hacer pruebas funcionales, validar diseños y producir piezas personalizadas o series cortas con mayor rapidez.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-4">
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-black/40">Ideal para:</h4>
                <ul className="space-y-2">
                  {["Prototipos", "Desarrollo de producto", "Piezas únicas o personalizadas", "Producción de bajo volumen", "Pruebas de diseño y validación"].map(i => (
                    <li key={i} className="flex items-start gap-2 text-sm font-medium text-black/80">
                      <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-black/40">Beneficios:</h4>
                <ul className="space-y-2">
                  {["Fabricación sin molde", "Menor tiempo de desarrollo", "Mayor flexibilidad geométrica", "Ajustes rápidos en diseño", "Ideal para iteraciones de producto", "Solución eficiente para lotes pequeños"].map(b => (
                    <li key={b} className="flex items-start gap-2 text-sm font-medium text-black/80">
                      <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
