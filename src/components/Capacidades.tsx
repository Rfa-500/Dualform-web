import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export const Capacidades = () => {
  return (
    <section id="capacidades" className="bg-black/5 py-16 md:py-24 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-6">
              Capacidades de Producción
            </h2>
            <p className="text-base md:text-lg text-black/60 mb-8 leading-relaxed">
              Contamos con capacidades de fabricación orientadas tanto al desarrollo de piezas nuevas como a la producción de componentes plásticos mediante procesos de inyección e impresión 3D.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Fabricación mediante moldeo por inyección e impresión 3D",
                "Piezas de tamaño pequeño y mediano (hasta aprox. 30 × 30 cm)",
                "Producción de prototipos funcionales",
                "Series cortas o producción repetitiva",
                "Fabricación en distintos polímeros",
                "Desarrollo de piezas personalizadas"
              ].map((cap) => (
                <div key={cap} className="flex items-start gap-3 text-sm font-medium text-black/80">
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-4 p-6 md:p-8 rounded-[2rem] bg-white border border-black/5 shadow-sm">
              <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-black/40 mb-4">Especificaciones provisionales:</h4>
              <ul className="space-y-3">
                {[
                  "Piezas de hasta 30 x 30 cm en fabricación general",
                  "Prototipado rápido en 24 a 72 horas según complejidad",
                  "Series cortas desde 1 unidad",
                  "Producción escalable para proyectos repetitivos",
                  "Amplia variedad de geometrías y diseños personalizados"
                ].map(spec => (
                  <li key={spec} className="flex items-start gap-3 text-sm text-black/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl"
          >
            <img 
              src="https://lh3.googleusercontent.com/d/1BHTbQGwIhR-NsMjHVPhEJUPwgtNG_Yk5" 
              alt="Capacidades de Producción"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8 md:p-10">
              <p className="text-white font-bold text-lg md:text-xl max-w-xs">Fabricamos piezas plásticas mediante moldeo por inyección e impresión 3D.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
