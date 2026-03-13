import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export const Inyeccion = () => {
  return (
    <section id="inyeccion" className="bg-white py-24 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">Moldeo por Inyección de Plástico</h2>
            <p className="text-lg text-black/60 mb-8 leading-relaxed">
              Fabricación de piezas mediante inyección de polímeros fundidos dentro de moldes diseñados para producir componentes con precisión, repetibilidad y eficiencia. 
              Es la mejor opción para proyectos con necesidad de uniformidad y producción escalable.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-black/40">Ideal para:</h4>
                <ul className="space-y-2">
                  {["Producción en serie", "Piezas repetitivas", "Componentes funcionales", "Productos con requerimiento de estabilidad dimensional"].map(i => (
                    <li key={i} className="flex items-start gap-2 text-sm font-medium text-black/80">
                      <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-black/40">Características:</h4>
                <ul className="space-y-2">
                  {["Alta precisión", "Repetibilidad en producción", "Buen acabado superficial", "Eficiencia en ciclos de fabricación", "Amplia posibilidad de materiales", "Escalable para mayores volúmenes"].map(c => (
                    <li key={c} className="flex items-start gap-2 text-sm font-medium text-black/80">
                      <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
          <div className="order-1 lg:order-2 rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl aspect-square bg-white p-12">
            <img 
              src="https://lh3.googleusercontent.com/d/17KeK0ewsCNI0FlCrowXrD7JNLlXT0rbh" 
              alt="Moldeo por Inyección"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
