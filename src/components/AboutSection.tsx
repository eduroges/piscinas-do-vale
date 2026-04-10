import SectionTitle from "./SectionTitle";
import { Award, Clock, Users, Shield, Waves, Star, Gem, Zap } from "lucide-react";
import { HistoryModal } from "./HistoryModal";
import { useParallax } from "@/hooks/useParallax";
import poolAbout from "@/assets/pool-gallery3.webp";

const AboutSection = () => {
  const parallaxOffset = useParallax(0.1);

  return (
    <section id="about" className="py-24 md:py-32 bg-mesh-gradient relative overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          <div className="lg:col-span-12 xl:col-span-6 animate-on-scroll">
            <div className="text-left max-w-2xl">
              <p className="text-sm tracking-[0.3em] uppercase mb-4 font-medium text-accent">
                Sobre nós
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
                Tradição que molda a <br />
                <span className="text-gold-gradient">Inovação e o Luxo</span>
              </h2>
              <p className="font-body text-lg md:text-xl font-light leading-relaxed text-muted-foreground mb-8">
                Há mais de 20 anos no mercado, a Piscinas do Vale é referência em projetos de piscinas de alto padrão. Combinamos expertise técnica com design sofisticado para entregar experiências únicas que valorizam o seu imóvel.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10 text-sm font-medium tracking-wide uppercase text-primary/70">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent"><Waves size={20} /></div>
                  Bordas Infinitas
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent"><Gem size={20} /></div>
                  Acabamentos Nobres
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent"><Zap size={20} /></div>
                  Automação Smart
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent"><Star size={20} /></div>
                  Projetos Exclusivos
                </div>
              </div>

              <HistoryModal />
            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-6 animate-on-scroll delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video lg:aspect-square xl:aspect-[4/5] group">
              {/* Overlay Colorido Progressivo */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-60" />
              
              <div 
                className="absolute inset-0 transition-transform duration-100 ease-out"
                style={{ transform: `translateY(${parallaxOffset * 0.2}px) scale(1.1)` }}
              >
                <img
                  src={poolAbout}
                  alt="Piscina de alto padrão com borda infinita"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Detalhe de Vidro no Canto */}
              <div className="absolute bottom-8 left-8 right-8 z-20 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl transform transition-all duration-700 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-white text-sm font-light leading-relaxed italic">
                  "O luxo está nos detalhes, e a perfeição na execução cuidadosa de cada projeto."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Award, title: "+20 Anos", desc: "de experiência no mercado premium" },
            { icon: Users, title: "+500 Projetos", desc: "entregues com excelência" },
            { icon: Shield, title: "Garantia", desc: "estendida em todos os projetos" },
            { icon: Clock, title: "Pontualidade", desc: "na entrega de cada obra" },
          ].map((item, index) => (
            <div 
              key={item.title} 
              className="text-center p-8 border border-border bg-white/50 backdrop-blur-sm hover:border-accent/50 hover:-translate-y-2 hover:shadow-xl transition-all duration-500 group animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <item.icon className="w-10 h-10 text-accent mx-auto mb-5 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.2} />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground font-light text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
