import SectionTitle from "./SectionTitle";
import { Gem, Palette, Droplets, Layers, Sparkles, Sun } from "lucide-react";

const items = [
  { icon: Gem, title: "Pastilhas Importadas", desc: "Revestimentos cerâmicos e de vidro das melhores marcas internacionais." },
  { icon: Palette, title: "Design Exclusivo", desc: "Projetos arquitetônicos personalizados com acabamento impecável." },
  { icon: Droplets, title: "Borda Infinita", desc: "Efeito visual deslumbrante que integra piscina e paisagem." },
  { icon: Layers, title: "Pedras Naturais", desc: "Acabamentos em mármore, granito e quartzito selecionados." },
  { icon: Sparkles, title: "Iluminação LED", desc: "Sistemas de iluminação subaquática com controle de cores." },
  { icon: Sun, title: "Prainha & Spa", desc: "Áreas de descanso integradas com hidromassagem e deck molhado." },
];

const DifferentialsSection = () => (
  <section id="differentials" className="py-24 md:py-32 bg-dark-mesh relative overflow-hidden">
    <div className="container relative z-10">
      <div className="animate-on-scroll">
        <SectionTitle
          subtitle="Por que nos escolher"
          title="Diferenciais & Acabamentos"
          description="Cada detalhe é pensado para criar experiências sensoriais únicas."
          light
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div 
            key={item.title} 
            className="p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-accent/40 transition-all group animate-on-scroll"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <item.icon className="w-8 h-8 text-accent mb-5 group-hover:scale-110 transition-transform" strokeWidth={1.2} />
            <h3 className="font-display text-xl font-semibold text-dark-surface-foreground mb-3">{item.title}</h3>
            <p className="text-dark-surface-foreground/60 font-light text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialsSection;
