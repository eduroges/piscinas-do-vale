import SectionTitle from "./SectionTitle";
import poolMasonry from "@/assets/pool-masonry.webp";
import poolConcrete from "@/assets/pool-concrete.webp";
import poolVinyl from "@/assets/pool-vinyl.jpg";

const pools = [
  {
    title: "Alvenaria",
    desc: "Construídas em alvenaria estrutural com acabamentos nobres. Máxima durabilidade e possibilidade de formatos personalizados.",
    img: poolMasonry,
  },
  {
    title: "Concreto Armado",
    desc: "Estrutura monolítica de alta resistência. Ideal para projetos de grande porte com formas complexas e bordas infinitas.",
    img: poolConcrete,
  },
  {
    title: "Vinil",
    desc: "Revestimento em vinil premium com ampla variedade de estampas. Excelente custo-benefício sem abrir mão da qualidade.",
    img: poolVinyl,
  },
];

const PoolTypesSection = () => (
  <section id="pool-types" className="py-24 md:py-32 bg-mesh-gradient relative overflow-hidden">
    <div className="container relative z-10">
      <div className="animate-on-scroll">
        <SectionTitle
          subtitle="Nossas Especialidades"
          title="Tipos de Piscinas"
          description="Cada projeto é único. Oferecemos soluções sob medida para atender às suas necessidades e superar suas expectativas."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pools.map((pool, index) => (
          <div
            key={pool.title}
            className="group overflow-hidden bg-white/40 backdrop-blur-sm border border-border shadow-sm hover:shadow-xl transition-all duration-500 animate-on-scroll"
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="overflow-hidden aspect-[4/3]">
              <img
                src={pool.img}
                alt={`Piscina de ${pool.title}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <div className="p-8">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">{pool.title}</h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">{pool.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PoolTypesSection;
