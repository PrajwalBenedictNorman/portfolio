interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <section className="relative w-full h-screen flex flex-col justify-between pt-[80px] pb-12 px-6 md:px-12 z-10 overflow-hidden">
      {/* Top 1/3: Primary Headline */}
      <div className="flex-1 flex flex-col justify-center max-w-5xl mx-auto text-center md:text-left pt-12 md:pt-16">
        <div className="inline-flex items-center px-3 py-1 rounded bg-brand-darker border border-brand-border text-[10px] md:text-xs text-brand-text-secondary uppercase tracking-widest mb-6 w-fit mx-auto md:mx-0">
          <span>System Architect & Engineer</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-text-primary leading-[1.08] mb-8">
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-text-primary via-neutral-400 to-neutral-600 text-glow">resilient</span>, AI-integrated infrastructure and high-performance distributed systems.
        </h1>
      </div>

      {/* Middle/Bottom: Centered Subtext */}
      <div className="max-w-3xl mx-auto text-center mt-auto pb-8">
        <p className="text-base md:text-lg text-brand-text-secondary leading-relaxed font-light mb-8 max-w-2xl mx-auto">
          Focused on Go, Node.js, and specialized AI pipelines that reduce technical drift and maximize system reliability.
        </p>

        {/* Micro-interactions & Indicators */}
        <div className="flex justify-center gap-6 text-xs text-brand-text-secondary/60 font-mono mb-8">
          <span>GO / NODE.JS</span>
          <span className="text-brand-text-secondary/20">•</span>
          <span>DISTRIBUTED SYSTEMS</span>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={onExploreClick}
          className="inline-flex flex-col items-center gap-2 text-xs font-mono tracking-widest uppercase text-brand-text-secondary hover:text-brand-text-primary transition-colors cursor-pointer group"
        >
          <span>Scroll to Discover</span>
          <span className="text-sm font-light group-hover:translate-y-1 transition-transform duration-300">↓</span>
        </button>
      </div>
    </section>
  );
}
