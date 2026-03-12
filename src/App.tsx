import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Twitter, Moon, ArrowUpRight, LayoutGrid, Info, Plus, Layers, Box, PenTool, CheckCircle2 } from "lucide-react";

interface Hotspot {
  id: number;
  top: string;
  left: string;
  title: string;
  description: string;
}

const hotspots: Hotspot[] = [
  { 
    id: 1, 
    top: "22%", 
    left: "18%", 
    title: "Smart Interface", 
    description: "Intuitive touch-screen control panel for seamless operation and real-time analytics." 
  },
  { 
    id: 2, 
    top: "52%", 
    left: "48%", 
    title: "Build Chamber", 
    description: "Precision-engineered environment for high-performance additive manufacturing." 
  },
  { 
    id: 3, 
    top: "38%", 
    left: "82%", 
    title: "Material System", 
    description: "Advanced material handling and filtration system for consistent output quality." 
  }
];

export default function App() {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center transition-colors">
                <img 
                  src="https://lh3.googleusercontent.com/d/1uEYPmLjm7B-ckoi5eysie5mLmEy1nB-W" 
                  alt="Dualform Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-bold text-xl tracking-tight">Dualform</span>
            </a>
            
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-black/60">
              <a href="#" className="hover:text-black transition-colors">Inicio</a>
              <a href="#inyeccion" className="hover:text-black transition-colors">Moldeo por Inyección</a>
              <a href="#impresion3d" className="hover:text-black transition-colors">Impresión 3D</a>
              <a href="#aplicaciones" className="hover:text-black transition-colors">Aplicaciones</a>
              <a href="#capacidades" className="hover:text-black transition-colors">Capacidades</a>
              <a href="#contacto" className="hover:text-black transition-colors">Contacto</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <Moon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-8 z-10 relative">
            <motion.a 
              href="#contacto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 text-xs font-medium text-black/60 mt-16 mb-8 hover:border-brand/30 hover:bg-brand/5 transition-all cursor-pointer group bg-white/50 backdrop-blur-sm"
            >
              <span>Dualform</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-8"
            >
              Fabricación de Piezas <br />
              Plásticas <span className="text-brand">a Medida</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-black/60 leading-relaxed mb-10 max-w-xl"
            >
              <span className="font-bold text-black">Moldeo por inyección e impresión 3D</span> para prototipos, piezas funcionales y producción industrial.
              <br /><br />
              Fabricamos piezas plásticas utilizando dos tecnologías: inyección de plástico para producción repetitiva e impresión 3D para prototipos y piezas personalizadas.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#procesos" className="px-8 py-4 bg-brand text-white font-semibold rounded-xl hover:bg-brand/90 transition-colors shadow-lg shadow-brand/20 active:scale-95">
                Ver Procesos
              </a>
              <a href="#contacto" className="px-8 py-4 bg-white text-black border border-black/10 font-semibold rounded-xl hover:bg-black/5 transition-colors active:scale-95">
                Solicitar Cotización
              </a>
            </motion.div>
          </div>

          {/* Machine Image with Hotspots */}
          <div className="lg:col-span-4 relative lg:-ml-[32rem] xl:-ml-[36rem] z-20 pointer-events-none">
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              {/* The Machine Image */}
              <div className="relative">
                <img 
                  src="https://lh3.googleusercontent.com/d/1LEG2j-i8bkaFoR_nYI7-Dy2Rqqieqnlt" 
                  alt="Industrial Machine"
                  className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] scale-105 lg:scale-135 origin-left pointer-events-none"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>

              {/* Hotspots */}
              {hotspots.map((spot) => (
                <div 
                  key={spot.id}
                  className="absolute cursor-pointer z-30 pointer-events-auto"
                  style={{ top: spot.top, left: spot.left }}
                  onMouseEnter={() => setActiveHotspot(spot)}
                  onMouseLeave={() => setActiveHotspot(null)}
                >
                  <motion.div 
                    animate={{ 
                      scale: activeHotspot?.id === spot.id ? 1.4 : 1,
                      backgroundColor: activeHotspot?.id === spot.id ? "#2541b2" : "rgba(255,255,255,0.8)",
                      boxShadow: activeHotspot?.id === spot.id ? "0 0 20px rgba(37,65,178,0.4)" : "0 4px 12px rgba(0,0,0,0.1)"
                    }}
                    className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-md transition-colors"
                  >
                    <Plus className={`w-5 h-5 transition-transform ${activeHotspot?.id === spot.id ? 'text-white rotate-45' : 'text-black'}`} />
                  </motion.div>

                  {/* Tooltip */}
                  <AnimatePresence>
                    {activeHotspot?.id === spot.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-72 bg-white/95 backdrop-blur-xl p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-black/5 z-50 pointer-events-none"
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
            {/* Bloque 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[3rem] bg-black/5 border border-black/5 hover:border-brand/20 transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/d/1LEG2j-i8bkaFoR_nYI7-Dy2Rqqieqnlt" 
                  alt="Moldeo por Inyección"
                  className="w-full h-full object-cover scale-110 transition-transform duration-700 group-hover:scale-125"
                  referrerPolicy="no-referrer"
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

            {/* Bloque 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden rounded-[3rem] bg-black/5 border border-black/5 hover:border-brand/20 transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/d/1XW4d1B1mgtjLR0TM6DomaoYzpTUZh84F" 
                  alt="Impresión 3D"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
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

      {/* Detailed Processes Section */}
      <section id="inyeccion" className="bg-white py-24 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
              />
            </div>
          </div>
        </div>
      </section>

      <section id="impresion3d" className="bg-black/5 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl aspect-square">
              <img 
                src="https://lh3.googleusercontent.com/d/1XW4d1B1mgtjLR0TM6DomaoYzpTUZh84F" 
                alt="Impresión 3D"
                className="w-full h-full object-contain p-4"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">Impresión 3D</h2>
              <p className="text-lg text-black/60 mb-8 leading-relaxed">
                Fabricación de piezas capa por capa sin necesidad de molde. Este proceso permite desarrollar prototipos, 
                hacer pruebas funcionales, validar diseños y producir piezas personalizadas o series cortas con mayor rapidez.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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

      {/* Applications Section */}
      <section id="aplicaciones" className="bg-white py-24 border-t border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Aplicaciones de Fabricación Plástica
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            Nuestros procesos permiten desarrollar piezas para diferentes usos industriales, comerciales y funcionales, desde prototipos hasta componentes terminados.
          </p>
        </div>

        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex gap-8 py-4 group-hover:[animation-play-state:paused]">
            {[
              { title: "Componentes industriales", seed: "industrial-part" },
              { title: "Carcasas y cubiertas plásticas", seed: "plastic-case" },
              { title: "Piezas funcionales a medida", seed: "custom-part" },
              { title: "Prototipos de desarrollo", seed: "prototype" },
              { title: "Accesorios técnicos", seed: "technical-accessory" },
              { title: "Componentes para productos de consumo", seed: "consumer-product" },
              // Duplicate for seamless loop
              { title: "Componentes industriales", seed: "industrial-part" },
              { title: "Carcasas y cubiertas plásticas", seed: "plastic-case" },
              { title: "Piezas funcionales a medida", seed: "custom-part" },
              { title: "Prototipos de desarrollo", seed: "prototype" },
              { title: "Accesorios técnicos", seed: "technical-accessory" },
              { title: "Componentes para productos de consumo", seed: "consumer-product" }
            ].map((app, index) => (
              <div key={index} className="inline-block w-80 shrink-0">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-black/5 border border-black/5 aspect-[4/3] group/item">
                  <img
                    src={`https://picsum.photos/seed/${app.seed}/800/600`}
                    alt={app.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                    <h3 className="text-white font-bold text-lg leading-tight">{app.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacidades de Producción Section */}
      <section id="capacidades" className="bg-black/5 py-24 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
                Capacidades de Producción
              </h2>
              <p className="text-lg text-black/60 mb-8 leading-relaxed">
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
              
              <div className="space-y-4 p-8 rounded-[2rem] bg-white border border-black/5 shadow-sm">
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
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl"
            >
              <img 
                src="https://lh3.googleusercontent.com/d/1BHTbQGwIhR-NsMjHVPhEJUPwgtNG_Yk5" 
                alt="Capacidades de Producción"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-10">
                <p className="text-white font-bold text-xl max-w-xs">Fabricamos piezas plásticas mediante moldeo por inyección e impresión 3D.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contacto" className="bg-brand py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Cuéntanos qué pieza necesitas fabricar
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
            Te ayudamos a definir el proceso adecuado según el tipo de pieza, volumen requerido y nivel de desarrollo del proyecto.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-white text-brand font-bold rounded-2xl hover:bg-white/90 transition-all shadow-xl active:scale-95">
              Solicitar Cotización
            </button>
            <button className="px-10 py-5 bg-transparent text-white border-2 border-white/30 font-bold rounded-2xl hover:bg-white/10 transition-all active:scale-95">
              Hablar con Nosotros
            </button>
          </div>
        </div>
      </section>

      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/10 blur-[100px] rounded-full" />
      </div>
    </div>
  );
}
