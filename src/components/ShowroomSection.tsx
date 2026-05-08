import SectionTitle from "./SectionTitle";

const ShowroomSection = () => {
  return (
    <section id="showroom" className="py-24 md:py-32 bg-dark-mesh relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container relative z-10">
        <SectionTitle
          subtitle="Showroom & Loja"
          title="Venha Conhecer nosso Espaço"
          description="Visite nossa loja em São José dos Campos e inspire-se com nossos projetos em exposição. Temos uma estrutura completa para te atender com o luxo e a exclusividade que você merece."
          light={true}
        />
        
        <div className="max-w-5xl mx-auto animate-on-scroll delay-200">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
            {/* Inner Border/Glow effect */}
            <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-3xl z-20" />
            
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/k2El6gz8Iy4?autoplay=0&rel=0"
              title="Showroom Piscinas do Vale"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="relative z-10 w-full h-full"
            ></iframe>

            {/* Subtle Gradient Overlay on top to soften the video edges if needed, but iframe usually handles it */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent z-15" />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm animate-on-scroll delay-300">
              <h4 className="text-accent font-display text-lg mb-2">Ambientes Reais</h4>
              <p className="text-dark-surface-foreground/60 text-sm font-light">Visualize como nossos projetos se integram perfeitamente ao ambiente.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm animate-on-scroll delay-400">
              <h4 className="text-accent font-display text-lg mb-2">Materiais Nobres</h4>
              <p className="text-dark-surface-foreground/60 text-sm font-light">Toque e sinta a qualidade dos revestimentos e acabamentos que utilizamos.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm animate-on-scroll delay-500">
              <h4 className="text-accent font-display text-lg mb-2">Atendimento VIP</h4>
              <p className="text-dark-surface-foreground/60 text-sm font-light">Consultores especializados para orientar cada detalhe do seu projeto.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowroomSection;
