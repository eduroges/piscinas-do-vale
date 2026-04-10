import SectionTitle from "./SectionTitle";

const brands = [
  "Deca", "Jacuzzi", "Sodramar", "Fibra Mix", "Sibrape",
  "Nautilus", "Pentair", "Fluidra", "IGUi", "Astralpool",
];

const BrandsSection = () => (
  <section className="py-24 md:py-32 bg-mesh-gradient relative overflow-hidden">
    <div className="container relative z-10">
      <div className="animate-on-scroll">
        <SectionTitle
          subtitle="Parceiros"
          title="Marcas & Fornecedores"
          description="Trabalhamos apenas com as melhores marcas do mercado para garantir qualidade e durabilidade."
        />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 max-w-4xl mx-auto mt-8">
        {brands.map((brand, index) => (
          <div
            key={brand}
            className="px-8 py-4 border border-border bg-white/40 backdrop-blur-sm text-muted-foreground font-display text-lg font-medium hover:border-accent/50 hover:text-foreground transition-all hover:scale-105 animate-on-scroll"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {brand}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandsSection;
