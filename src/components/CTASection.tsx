const CTASection = () => (
  <section id="contact" className="py-24 md:py-32 bg-dark-mesh relative overflow-hidden">
    <div className="container relative z-10 text-center max-w-3xl">
      <div className="animate-on-scroll">
        <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-medium">Vamos conversar</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-dark-surface-foreground mb-6">
          Transforme seu Espaço em um Refúgio de Luxo
        </h2>
        <p className="text-dark-surface-foreground/70 font-body text-lg font-light leading-relaxed mb-10">
          Entre em contato e receba um projeto personalizado para a piscina dos seus sonhos. Orçamento sem compromisso.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll delay-200">
        <a
          href="https://wa.me/551232078038?text=Olá.%20Estou%20vindo%20do%20site%20e%20gostaria%20de%20um%20orçamento"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent text-accent-foreground px-10 py-4 text-sm font-semibold tracking-widest uppercase hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg"
        >
          WhatsApp
        </a>
        <a
          href="tel:+551232078038"
          className="inline-block border border-dark-surface-foreground/30 text-dark-surface-foreground px-10 py-4 text-sm font-semibold tracking-widest uppercase hover:border-accent hover:text-accent transition-all hover:scale-105 active:scale-95"
        >
          Ligar Agora
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
