export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-12 px-6 md:px-12 z-10 border-t border-brand-gray bg-brand-darker/20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-xs tracking-widest text-brand-text-secondary uppercase">03 // Open Source</span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        {/* Compact Contribution Row */}
        <div className="glass-panel p-5 rounded border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-white/10 transition-all duration-300">
          
          {/* Left: Role Info */}
          <div className="md:w-1/4 shrink-0">
            <div className="inline-flex items-center px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-brand-text-primary mb-2.5">
              <span>GSSoC 2025</span>
            </div>
            <h3 className="text-lg font-bold text-brand-text-primary">
              Open Source Contributor
            </h3>
            <p className="text-xs font-mono text-brand-text-secondary mt-0.5">
              Vehigo & SentiLog-AI
            </p>
          </div>

          {/* Right: GPO Framework in a Compact 3-Column Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
            
            {/* Goal */}
            <div className="space-y-1">
              <span className="font-mono text-brand-text-secondary/60 uppercase tracking-wider block">
                Goal
              </span>
              <p className="text-brand-text-secondary leading-relaxed font-light">
                Enhance production UI and secure authentication flows.
              </p>
            </div>

            {/* Problem */}
            <div className="space-y-1">
              <span className="font-mono text-brand-text-secondary/60 uppercase tracking-wider block">
                Problem
              </span>
              <p className="text-brand-text-secondary leading-relaxed font-light">
                Legacy signup lacked OAuth; SentiLog-AI needed a themed rich text editor.
              </p>
            </div>

            {/* Outcome */}
            <div className="space-y-1">
              <span className="font-mono text-brand-text-primary uppercase tracking-wider block">
                Outcome
              </span>
              <p className="text-brand-text-primary leading-relaxed font-normal">
                Shipped Google Sign-In; integrated react-quill-new with glass-morphism.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
