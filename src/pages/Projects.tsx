import { useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { ChevronLeft, ChevronRight, X, Plus, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import useScrollAnimation from "@/hooks/useScrollAnimation";

// Existing images
import g1 from "@/assets/pool-gallery1.jpg";
import g2 from "@/assets/pool-gallery2.webp";
import g3 from "@/assets/pool-gallery3.webp";
import g4 from "@/assets/pool-masonry.webp";
import g5 from "@/assets/pool-concrete.webp";
import g6 from "@/assets/pool-vinyl.webp";

// New images
import pg4 from "@/assets/pool-gallery4.webp";
import pg5 from "@/assets/pool-gallery5.webp";
import pg6 from "@/assets/pool-gallery6.webp";
import pg7 from "@/assets/pool-gallery7.webp";

const allImages = [g1, g2, g3, g4, g5, g6, pg4, pg5, pg6, pg7];

const Projects = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  useScrollAnimation();

  const openLightbox = (index: number) => {
    setSelectedIdx(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setSelectedIdx(null);
    document.body.style.overflow = "unset";
  }, []);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIdx((prev) => (prev === null || prev === allImages.length - 1 ? 0 : prev + 1));
  }, []);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIdx((prev) => (prev === null || prev === 0 ? allImages.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, nextImage, prevImage, closeLightbox]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-dark-mesh">
      {/* Decorative Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 glow-element"
          style={{ background: "hsl(var(--accent))" }}
        />
        <div 
          className="absolute top-[40%] -right-[10%] w-[35%] h-[35%] rounded-full blur-[100px] opacity-10 glow-element"
          style={{ background: "hsl(var(--primary))", animationDelay: "-2s" }}
        />
        <div 
          className="absolute -bottom-[5%] left-[20%] w-[30%] h-[30%] rounded-full blur-[110px] opacity-15 glow-element"
          style={{ background: "hsl(var(--accent))", animationDelay: "-4s" }}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        
        <main className="pt-32 pb-24 md:pb-32">
          <div className="container">
            <div className="mb-12">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors group mb-8"
              >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                Voltar para Home
              </Link>
              
              <SectionTitle
                subtitle="Portfólio Completo"
                title="Nossos Projetos"
                description="Explore nossa galeria completa de projetos realizados, desde piscinas residenciais de luxo até complexos coletivos."
                light={true}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allImages.map((img, i) => (
                <div
                  key={i}
                  onClick={() => openLightbox(i)}
                  className="overflow-hidden aspect-[4/3] group animate-on-scroll shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer rounded-sm"
                  style={{ transitionDelay: `${(i % 3) * 150}ms` }}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={img}
                      alt={`Projeto de piscina ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transform scale-90 group-hover:scale-100 transition-transform">
                        <Plus size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-primary/95 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors z-10 bg-white/5 rounded-full backdrop-blur-md"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 md:left-8 p-3 text-white/50 hover:text-white transition-colors z-10 bg-white/5 rounded-full backdrop-blur-md"
            onClick={prevImage}
          >
            <ChevronLeft size={40} />
          </button>

          <button
            className="absolute right-4 md:right-8 p-3 text-white/50 hover:text-white transition-colors z-10 bg-white/5 rounded-full backdrop-blur-md"
            onClick={nextImage}
          >
            <ChevronRight size={40} />
          </button>

          <div
            className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center animate-in zoom-in-95 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={allImages[selectedIdx]}
              alt={`Projeto de piscina ampliado ${selectedIdx + 1}`}
              className="max-w-full max-h-full object-contain shadow-2xl rounded-sm border border-white/10"
            />

            <div className="absolute -bottom-10 left-0 right-0 text-center">
              <p className="text-white/60 text-sm tracking-widest uppercase font-light">
                Projeto {selectedIdx + 1} de {allImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
