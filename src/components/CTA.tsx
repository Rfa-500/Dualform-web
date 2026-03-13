import { MapPin, Phone, MessageSquare, FileText } from "lucide-react";

export const CTA = () => {
  return (
    <section id="contacto" className="bg-brand py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Soluciones de Fabricación Industrial a su Medida
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Optimice su cadena de suministro con piezas plásticas de alta precisión. Nuestro equipo técnico está listo para asesorarle en su próximo proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-bold mb-1">Ubicación</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Parque Industrial Sur, <br />
                Ciudad de Panamá, Panamá
              </p>
            </div>
            
            <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-bold mb-1">Contacto Directo</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                +507 833-9200 <br />
                ventas@dualform.com
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4">
            <button className="group relative flex items-center justify-between px-8 py-5 bg-white text-brand font-bold rounded-2xl hover:bg-white/95 transition-all shadow-2xl active:scale-[0.98] overflow-hidden">
              <div className="flex items-center gap-4">
                <FileText className="w-6 h-6" />
                <span className="text-lg">Iniciar Proyecto</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <MessageSquare className="w-4 h-4" />
              </div>
            </button>
            
            <button className="flex items-center justify-center gap-4 px-8 py-5 bg-transparent text-white border-2 border-white/30 font-bold rounded-2xl hover:bg-white/10 transition-all active:scale-[0.98]">
              <Phone className="w-5 h-5" />
              <span className="text-lg">Consultoría Técnica</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
