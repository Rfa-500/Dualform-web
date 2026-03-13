export const CTA = () => {
  return (
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
  );
};
