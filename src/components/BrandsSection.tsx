import SectionTitle from "./SectionTitle";
import domclor from "@/assets/domclor.webp";
import genco from "@/assets/genco.webp";
import hth from "@/assets/hth.webp";
import maresias from "@/assets/maresias.webp";
import panozon from "@/assets/panozon.webp";
import sodramar from "@/assets/sodramar.webp";
import syllent from "@/assets/syllent.webp";
import tholz from "@/assets/tholz.webp";

const partnerLogos = [
  { name: "Sodramar", src: sodramar },
  { name: "HTH", src: hth },
  { name: "Genco", src: genco },
  { name: "Tholz", src: tholz },
  { name: "Panozon", src: panozon },
  { name: "Domclor", src: domclor },
  { name: "Maresias", src: maresias },
  { name: "Syllent", src: syllent },
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
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-5xl mx-auto mt-12">
        {partnerLogos.map((brand, index) => (
          <div
            key={brand.name}
            className="flex items-center justify-center px-8 py-6 bg-white/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-accent/50 transition-all hover:scale-105 animate-on-scroll group"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <img
              src={brand.src}
              alt={brand.name}
              className="h-14 md:h-16 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandsSection;

