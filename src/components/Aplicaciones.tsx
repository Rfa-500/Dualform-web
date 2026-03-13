export const Aplicaciones = () => {
  const apps = [
    { title: "Componentes industriales", seed: "industrial-part" },
    { title: "Carcasas y cubiertas plásticas", seed: "plastic-case" },
    { title: "Piezas funcionales a medida", seed: "custom-part" },
    { title: "Prototipos de desarrollo", seed: "prototype" },
    { title: "Accesorios técnicos", seed: "technical-accessory" },
    { title: "Componentes para productos de consumo", seed: "consumer-product" },
  ];

  // Double for seamless loop
  const displayApps = [...apps, ...apps];

  return (
    <section id="aplicaciones" className="bg-white py-16 md:py-24 border-t border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16 text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4">
          Aplicaciones de Fabricación Plástica
        </h2>
        <p className="text-base md:text-lg text-black/60 max-w-2xl mx-auto">
          Nuestros procesos permiten desarrollar piezas para diferentes usos industriales, comerciales y funcionales, desde prototipos hasta componentes terminados.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-6 md:gap-8 py-4 group-hover:[animation-play-state:paused] will-change-transform">
          {displayApps.map((app, index) => (
            <div key={index} className="inline-block w-64 md:w-80 shrink-0">
              <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-black/5 border border-black/5 aspect-[4/3] group/item">
                <img
                  src={`https://picsum.photos/seed/${app.seed}/800/600`}
                  alt={app.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 md:p-8">
                  <h3 className="text-white font-bold text-base md:text-lg leading-tight whitespace-normal">{app.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
