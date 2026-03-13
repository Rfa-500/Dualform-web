import { Hotspot, NavLink } from "./types";

export const HOTSPOTS: Hotspot[] = [
  { 
    id: 1, 
    top: "34%", 
    left: "40%", 
    title: "Inyección de distintos plásticos", 
    description: "Fabricación de piezas utilizando una amplia variedad de polímeros técnicos según las necesidades del proyecto." 
  },
  { 
    id: 2, 
    top: "52%", 
    left: "56%", 
    title: "Alta precisión dimensional", 
    description: "El proceso de moldeo por inyección permite obtener piezas con excelente precisión y repetibilidad." 
  },
  { 
    id: 3, 
    top: "38%", 
    left: "82%", 
    title: "Producción eficiente", 
    description: "Tecnología diseñada para optimizar tiempos de fabricación y reducir el costo por pieza en producción." 
  }
];

export const NAV_LINKS: NavLink[] = [
  { name: "Inicio", href: "#" },
  { name: "Inyección de Plástico", href: "#inyeccion" },
  { name: "Impresión 3D", href: "#impresion3d" },
  { name: "Aplicaciones", href: "#aplicaciones" },
  { name: "Capacidades", href: "#capacidades" },
  { name: "Contacto", href: "#contacto" }
];
