import { motion } from "motion/react";
import { Box, Layers } from "lucide-react";

export const Procesos = () => {
  return (
    <section id="procesos" className="py-24 px-6 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Dos tecnologías de fabricación
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            Utilizamos dos procesos de producción para adaptarnos a cada proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative overflow-hidden rounded-[3rem] bg-black/5 border border-black/5 hover:border-brand/20 transition-all"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/d/1LEG2j-i8bkaFoR_nYI7-Dy2Rqqieqnlt" 
                alt="Moldeo por Inyección"
                className="w-full h-full object-cover scale-110 transition-transform duration-700 group-hover:scale-125"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="p-10">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-6">
                <Box className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Moldeo por Inyección</h3>
              <p className="text-black/60 leading-relaxed">
                Producción de piezas plásticas mediante moldes de precisión, ideal para fabricación repetitiva y producción en volumen.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="group relative overflow-hidden rounded-[3rem] bg-black/5 border border-black/5 hover:border-brand/20 transition-all"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/d/1XW4d1B1mgtjLR0TM6DomaoYzpTUZh84F" 
                alt="Impresión 3D"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="p-10">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Impresión 3D</h3>
              <p className="text-black/60 leading-relaxed">
                Fabricación de prototipos y piezas personalizadas sin necesidad de molde, ideal para desarrollo de productos y series cortas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
