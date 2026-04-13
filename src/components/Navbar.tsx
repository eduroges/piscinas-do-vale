import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.webp";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Piscinas", href: "#pool-types" },
  { label: "Diferenciais", href: "#differentials" },
  { label: "Serviços", href: "#services" },
  { label: "Galeria", href: "#gallery" },
  { label: "Contato", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="relative z-10 block transition-transform hover:scale-105 active:scale-95">
          <img 
            src={logo} 
            alt="Piscinas do Vale" 
            className={`w-auto transition-all duration-500 opacity-85 ${
              scrolled ? "h-12 md:h-14" : "h-20 md:h-24"
            }`}
          />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:scale-105"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/551232078038?text=Olá.%20Estou%20vindo%20do%20site%20e%20gostaria%20de%20um%20orçamento"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-6 py-2.5 text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg active:scale-95"
          >
            Orçamento
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-primary-foreground transition-transform hover:scale-110 active:scale-90"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-primary/95 backdrop-blur-md px-6 pb-8 pt-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium tracking-widest uppercase border-b border-primary-foreground/10 transition-all hover:pl-2"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/551232078038?text=Olá.%20Estou%20vindo%20do%20site%20e%20gostaria%20de%20um%20orçamento"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 block bg-accent text-accent-foreground px-8 py-4 text-center text-sm font-bold tracking-widest uppercase transition-all active:scale-95"
          >
            Solicitar Orçamento
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;