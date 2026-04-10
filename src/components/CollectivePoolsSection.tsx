import SectionTitle from "./SectionTitle";
import collectiveImg from "@/assets/pool-collective.jpg";

const CollectivePoolsSection = () => (
  <section className="py-24 md:py-32 bg-dark-mesh relative overflow-hidden">
    <div className="container relative z-10">
      <div className="animate-on-scroll">
        <SectionTitle
          subtitle="Projetos Especiais"
          title="Piscinas Coletivas"
          description="Soluções para condomínios, clubes, academias e hotéis. Projetos que atendem normas técnicas com acabamento de alto padrão."
          light
        />
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="overflow-hidden animate-on-scroll">
          <img
            src={collectiveImg}
            alt="Piscina coletiva profissional"
            className="w-full h-auto object-cover shadow-2xl transition-transform duration-700 hover:scale-105"
            loading="lazy"
            width={800}
            height={600}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            { title: "Condomínios", desc: "Piscinas adulto e infantil com área de lazer completa." },
            { title: "Clubes & Academias", desc: "Piscinas semiolímpicas e olímpicas com raias profissionais." },
            { title: "Hotéis & Resorts", desc: "Projetos exclusivos que encantam hóspedes e valorizam o empreendimento." },
          ].map((item, index) => (
            <div 
              key={item.title} 
              className="p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm animate-on-scroll transition-all hover:border-accent/40"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <h3 className="font-display text-lg font-semibold text-dark-surface-foreground mb-2">{item.title}</h3>
              <p className="text-dark-surface-foreground/60 font-light text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CollectivePoolsSection;
