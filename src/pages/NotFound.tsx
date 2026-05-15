import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.webp";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
      {/* Background elements to match the site theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20"
          style={{ background: "hsl(var(--accent))" }}
        />
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20"
          style={{ background: "hsl(var(--accent))" }}
        />
      </div>

      <div className="container relative z-10 px-6 py-12 flex flex-col items-center text-center">
        <Link to="/" className="mb-12 animate-in fade-in slide-in-from-top duration-700">
          <img src={logo} alt="Piscinas do Vale" className="h-24 w-auto" />
        </Link>
        
        <div className="max-w-2xl animate-in fade-in zoom-in duration-1000">
          <h1 className="text-8xl md:text-[12rem] font-display font-bold text-white/10 leading-none mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-primary-foreground mb-6">
            Página não encontrada
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/60 font-light mb-12 max-w-md mx-auto leading-relaxed">
            Ops! Parece que você se perdeu no caminho da piscina dos seus sonhos. 
            Não se preocupe, podemos te levar de volta.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-xl"
            >
              <Home size={18} />
              Voltar ao Início
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
            >
              <ArrowLeft size={18} />
              Voltar Página
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
