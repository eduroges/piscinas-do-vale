import { useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import saunaImg from "@/assets/sauna.webp";
import saunaUmidaImg from "@/assets/sauna_umida.webp";
import { cn } from "@/lib/utils";

const SaunasSection = () => {
  const [activeTab, setActiveTab] = useState<'seca' | 'umida'>('seca');
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === 'seca' ? 'umida' : 'seca'));
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-24 md:py-32 bg-mesh-gradient relative overflow-hidden">
      <div className="container relative z-10">
        <div className="animate-on-scroll">
          <SectionTitle
            subtitle="Bem-estar"
            title="Saunas"
            description="Complemente seu espaço de lazer com saunas projetadas para proporcionar relaxamento e saúde."
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-on-scroll delay-100">
              <div 
                onMouseEnter={() => { setActiveTab('seca'); setIsPaused(true); }}
                onMouseLeave={() => setIsPaused(false)}
                className={cn(
                  "p-8 border transition-all duration-500 backdrop-blur-sm cursor-default",
                  activeTab === 'seca' 
                    ? "bg-white/60 border-primary/20 shadow-lg scale-[1.02] ring-1 ring-primary/10" 
                    : "bg-white/40 border-border shadow-sm grayscale-[0.3] opacity-80"
                )}
              >
                <h3 className={cn(
                  "font-display text-2xl font-semibold mb-3 transition-colors duration-500",
                  activeTab === 'seca' ? "text-primary" : "text-foreground"
                )}>
                  Sauna Seca
                </h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  Temperaturas elevadas com baixa umidade. Ideal para relaxamento muscular profundo e desintoxicação. Revestimentos em cedro rosa ou canadense.
                </p>
              </div>
            </div>

            <div className="animate-on-scroll delay-200">
              <div 
                onMouseEnter={() => { setActiveTab('umida'); setIsPaused(true); }}
                onMouseLeave={() => setIsPaused(false)}
                className={cn(
                  "p-8 border transition-all duration-500 backdrop-blur-sm cursor-default",
                  activeTab === 'umida' 
                    ? "bg-white/60 border-primary/20 shadow-lg scale-[1.02] ring-1 ring-primary/10" 
                    : "bg-white/40 border-border shadow-sm grayscale-[0.3] opacity-80"
                )}
              >
                <h3 className={cn(
                  "font-display text-2xl font-semibold mb-3 transition-colors duration-500",
                  activeTab === 'umida' ? "text-primary" : "text-foreground"
                )}>
                  Sauna Úmida
                </h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  Vapor terapêutico para alívio respiratório e hidratação da pele. Acabamentos em porcelanato e iluminação ambiente personalizada.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden aspect-[4/3] rounded-2xl shadow-2xl animate-on-scroll delay-300 group">
            <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out" style={{ opacity: activeTab === 'seca' ? 1 : 0 }}>
              <img
                src={saunaImg}
                alt="Sauna Seca de luxo"
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out" style={{ opacity: activeTab === 'umida' ? 1 : 0 }}>
              <img
                src={saunaUmidaImg}
                alt="Sauna Úmida de luxo"
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                loading="lazy"
              />
            </div>
            
            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaunasSection;

