import { Github, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-black/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
            <img 
              src="https://lh3.googleusercontent.com/d/1uEYPmLjm7B-ckoi5eysie5mLmEy1nB-W" 
              alt="Dualform Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-bold text-lg tracking-tight">Dualform</span>
        </div>

        <div className="flex items-center gap-8 text-sm font-medium text-black/40">
          <a href="#" className="hover:text-brand transition-colors">Privacidad</a>
          <a href="#" className="hover:text-brand transition-colors">Términos</a>
          <a href="#" className="hover:text-brand transition-colors">Cookies</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="p-2 rounded-full hover:bg-black/5 transition-colors text-black/40 hover:text-brand">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 rounded-full hover:bg-black/5 transition-colors text-black/40 hover:text-brand">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-black/5 text-center text-xs text-black/30">
        © {new Date().getFullYear()} Dualform. Todos los derechos reservados.
      </div>
    </footer>
  );
};
