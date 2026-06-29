export default function SignalHub() {
  const capabilities = [
    {
      title: 'Distributed Telemetry & Observability',
      description: 'Designing low-overhead telemetry sidecars in Go. Expert in implementing concurrent statistical algorithms (CUSUM, EWMA) for real-time anomaly and drift detection without false positives.'
    },
    {
      title: 'System Concurrency & RPC',
      description: 'Building highly concurrent, non-blocking pipelines. Experienced in structuring low-latency inter-service communication using gRPC, protocol buffers, and optimized parallel fetch patterns.'
    },
    {
      title: 'Quantitative RAG Optimization',
      description: 'Systematic evaluation of LLM retrieval pipelines. Executing multi-variable grid searches across chunk sizes, overlap ratios, and embedding models, benchmarked quantitatively using RAGAS.'
    }
  ];

  const techStack = [
    {
      category: 'Engineering Core',
      items: [
        { name: 'Go', detail: 'Channels, Goroutines, Low-Latency Sidecars' },
        { name: 'TypeScript', detail: 'Type-Safe APIs, Node.js, React' },
        { name: 'Python', detail: 'AI Pipelines, Data Structures, Scripts' },
        { name: 'gRPC', detail: 'Proto3, High-Performance Serialization' }
      ]
    },
    {
      category: 'Infrastructure & Intelligence',
      items: [
        { name: 'Docker', detail: 'Multi-Stage Builds, Container Security' },
        { name: 'Prometheus & Grafana', detail: 'Custom Metrics, Alerting Rules' },
        { name: 'LlamaIndex & Pinecone', detail: 'Vector Indexing, Hybrid Search' },
        { name: 'RAGAS', detail: 'Algorithmic LLM Evaluation' }
      ]
    }
  ];

  return (
    <section id="signal-hub" className="relative w-full py-24 px-6 md:px-12 z-10 border-t border-brand-gray bg-brand-darker/20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-brand-text-secondary uppercase">02 // Technical Signal Hub</span>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Architectural Capabilities (How I Build) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="font-mono text-[10px] text-brand-text-secondary/50 uppercase tracking-widest block mb-2">
                Core Competencies
              </span>
              <h3 className="text-2xl font-bold text-brand-text-primary tracking-tight">
                Architectural Capabilities
              </h3>
              <p className="text-xs text-brand-text-secondary mt-1 max-w-md">
                Rigorous engineering practices applied to distributed systems and intelligence pipelines.
              </p>
            </div>

            <div className="space-y-6">
              {capabilities.map((cap) => (
                <div key={cap.title} className="p-4 rounded border border-white/5 bg-brand-bg/40">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-brand-text-primary">
                      {cap.title}
                    </h4>
                    <p className="text-xs text-brand-text-secondary leading-relaxed font-light">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Technology Matrix & Academic Proof */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Tech Matrix */}
            <div className="space-y-6">
              {techStack.map((group) => (
                <div key={group.category} className="glass-panel p-5 rounded border border-white/5">
                  <span className="block font-mono text-[10px] text-brand-text-secondary/60 uppercase tracking-wider mb-4">
                    {group.category}
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {group.items.map((item) => (
                      <div 
                        key={item.name}
                        className="p-3 rounded bg-brand-darker/60 border border-brand-gray/40 hover:border-white/20 transition-colors duration-200"
                      >
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="font-mono text-xs font-semibold text-brand-text-primary">
                            {item.name}
                          </span>
                        </div>
                        <span className="text-[10px] text-brand-text-secondary font-light">
                          {item.detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Academic Proof */}
            <div className="glass-panel p-5 rounded border border-white/10 bg-gradient-to-br from-brand-bg to-[#0F1420]/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div className="flex gap-4">
                <div>
                  <span className="block text-[9px] font-mono text-brand-text-secondary/40 uppercase tracking-wider">
                    Academic Proof
                  </span>
                  <h4 className="text-sm font-semibold text-brand-text-primary">
                    B.Tech Computer Science
                  </h4>
                  <p className="text-xs text-brand-text-secondary font-light">
                    Specialized in Artificial Intelligence and Machine Learning
                  </p>
                </div>
              </div>

              <div className="sm:text-right shrink-0">
                <span className="block text-[9px] font-mono text-brand-text-secondary/40 uppercase tracking-wider">
                  Quantitative Metric
                </span>
                <div className="flex items-baseline gap-1 sm:justify-end">
                  <span className="text-2xl font-mono font-bold text-brand-text-primary text-glow">
                    8.51
                  </span>
                  <span className="text-xs font-mono text-brand-text-secondary">
                    GPA
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
