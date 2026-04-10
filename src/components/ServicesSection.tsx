import SectionTitle from "./SectionTitle";
import poolServices from "@/assets/pool-services.jpg";
import { Thermometer, Wrench, Filter, Waves } from "lucide-react";

const services = [
  { icon: Thermometer, title: "Aquecimento", desc: "Solar, elétrico e a gás. Soluções para uso o ano todo." },
  { icon: Wrench, title: "Manutenção", desc: "Planos preventivos e corretivos com equipe especializada." },
  { icon: Filter, title: "Tratamento", desc: "Sistemas automatizados de filtragem e cloração." },
  { icon: Waves, title: "Automação", desc: "Controle remoto de iluminação, cascatas e temperatura." },
];

const ServicesSection = () => (
  <section id="services" className="py-24 md:py-32 bg-mesh-gradient relative overflow-hidden">
    <div className="container relative z-10">
      <div className="animate-on-scroll">
        <SectionTitle
          subtitle="Serviços"
          title="Soluções Completas"
          description="Do projeto à manutenção, cuidamos de cada etapa para que você aproveite apenas os momentos de lazer."
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="overflow-hidden aspect-[4/3] animate-on-scroll">
          <img
            src={poolServices}
            alt="Serviços de piscina premium"
            className="w-full h-full object-cover shadow-2xl transition-transform duration-700 hover:scale-105"
            loading="lazy"
            width={800}
            height={600}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((s, index) => (
            <div 
              key={s.title} 
              className="flex gap-4 animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <s.icon className="w-8 h-8 text-accent flex-shrink-0 mt-1" strokeWidth={1.2} />
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
