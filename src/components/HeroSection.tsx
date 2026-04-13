import { useEffect, useRef } from "react";
import heroVideo from "@/assets/video.mp4";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Subtle slow-motion effect
    }
  }, []);

  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          Seu navegador não suporta vídeos em HTML5.
        </video>
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary/90" />
      </div>
    <div className="relative z-10 text-center max-w-4xl px-6">
      <p className="text-accent font-body text-sm tracking-[0.35em] uppercase mb-6 animate-on-scroll">
        Excelência em piscinas de alto padrão
      </p>
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight mb-8 animate-on-scroll delay-100">
        A Arte de Viver<br />
        <span className="text-gold-gradient">com Elegância</span>
      </h1>
      <p className="text-primary-foreground/70 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-on-scroll delay-200">
        Projetamos e construímos piscinas que transformam seu espaço em um refúgio de sofisticação e bem-estar.
      </p>
      <a
        href="https://wa.me/551232078038?text=Olá.%20Estou%20vindo%20do%20site%20e%20gostaria%20de%20um%20orçamento"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-accent text-accent-foreground px-10 py-4 text-sm font-semibold tracking-widest uppercase hover:opacity-90 hover:scale-105 transition-all animate-on-scroll delay-300 shadow-xl active:scale-95"
      >
        Solicite seu Orçamento
      </a>
    </div>
  </section>
  );
};

export default HeroSection;
