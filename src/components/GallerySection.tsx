import { useState, useEffect, useCallback } from "react";
import SectionTitle from "./SectionTitle";
import { ChevronLeft, ChevronRight, X, Plus } from "lucide-react";
import g1 from "@/assets/pool-gallery1.jpg";
import g2 from "@/assets/pool-gallery2.jpg";
import g3 from "@/assets/pool-gallery3.webp";
import g4 from "@/assets/pool-masonry.jpg";
import g5 from "@/assets/pool-concrete.jpg";
import g6 from "@/assets/pool-vinyl.jpg";

const images = [g1, g2, g3, g4, g5, g6];

const GallerySection = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

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
    setSelectedIdx((prev) => (prev === null || prev === images.length - 1 ? 0 : prev + 1));
  }, []);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIdx((prev) => (prev === null || prev === 0 ? images.length - 1 : prev - 1));
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
    <section id="gallery" className="py-24 md:py-32 bg-mesh-gradient relative overflow-hidden">
      <div className="container relative z-10">
        <div className="animate-on-scroll">
          <SectionTitle
            subtitle="Portfólio"
            title="Galeria de Projetos"
            description="Conheça alguns dos nossos projetos já realizados e inspire-se para o seu."
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
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

        <div className="mt-16 text-center animate-on-scroll delay-300">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-transparent border border-accent/30 text-accent px-10 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            Ver mais projetos
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
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
              src={images[selectedIdx]}
              alt={`Projeto de piscina ampliado ${selectedIdx + 1}`}
              className="max-w-full max-h-full object-contain shadow-2xl rounded-sm border border-white/10"
            />
            
            <div className="absolute -bottom-10 left-0 right-0 text-center">
              <p className="text-white/60 text-sm tracking-widest uppercase font-light">
                Projeto {selectedIdx + 1} de {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
