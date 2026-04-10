import { MapPin, Phone, Mail, Instagram, Facebook, ChevronRight } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => (
  <footer className="bg-primary py-16 relative overflow-hidden">
    <div className="container relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div className="animate-on-scroll">
          <img src={logo} alt="Piscinas do Vale" className="h-12 w-auto mb-6" />
          <p className="text-primary-foreground/60 font-light text-sm leading-relaxed max-w-xs">
            Excelência em piscinas de alto padrão. Projetos que transformam espaços e proporcionam momentos inesquecíveis.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <a 
              href="https://www.instagram.com/piscinasdovale_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:text-accent hover:border-accent transition-all hover:scale-110"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://web.facebook.com/profile.php?id=100071891553388" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:text-accent hover:border-accent transition-all hover:scale-110"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>
        <div className="animate-on-scroll delay-100">
          <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">Contato</h4>
          <div className="space-y-4">
            <a 
              href="https://wa.me/551232078038?text=Olá.%20Estou%20vindo%20do%20site%20e%20gostaria%20de%20um%20orçamento" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors group"
            >
              <div className="p-2 rounded-lg bg-primary-foreground/5 group-hover:bg-accent/10 transition-colors">
                <Phone size={16} className="group-hover:text-accent" strokeWidth={1.5} />
              </div>
              (12) 3207-8038 (WhatsApp)
            </a>
            <a href="mailto:contato@piscinasdovale.com.br" className="flex items-center gap-3 text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors group">
              <div className="p-2 rounded-lg bg-primary-foreground/5 group-hover:bg-accent/10 transition-colors">
                <Mail size={16} className="group-hover:text-accent" strokeWidth={1.5} />
              </div>
              contato@piscinasdovale.com.br
            </a>
            <a 
              href="https://maps.app.goo.gl/17XF2tCuBaty3Lcm6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-primary-foreground/60 hover:text-primary-foreground text-sm group transition-colors"
            >
              <div className="p-2 rounded-lg bg-primary-foreground/5 mt-1 group-hover:bg-accent/10">
                <MapPin size={16} strokeWidth={1.5} className="group-hover:text-accent" />
              </div>
              <p className="leading-relaxed">
                Av. Maria de Lourdes Friggi, 405 <br />
                Urbanova - São José dos Campos – SP
              </p>
            </a>
          </div>
        </div>
        <div className="animate-on-scroll delay-200">
          <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">Links</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {[
              { l: "Início", h: "hero" },
              { l: "Sobre", h: "about" },
              { l: "Piscinas", h: "pool-types" },
              { l: "Diferenciais", h: "differentials" },
              { l: "Serviços", h: "services" },
              { l: "Galeria", h: "gallery" },
              { l: "Contato", h: "contact" }
            ].map((item) => (
              <a 
                key={item.l} 
                href={`#${item.h}`} 
                className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent text-sm transition-all group"
              >
                <ChevronRight size={14} className="text-accent/40 group-hover:text-accent transition-colors" />
                {item.l}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Linha Final Discreta e Copyright */}
      <div className="border-t border-primary-foreground/5 pt-8 text-center">
        <p className="text-primary-foreground/30 text-[10px] md:text-xs tracking-widest uppercase font-light">
          © 2026 Piscinas do Vale. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;