export default function CaseStudies() {
  const cases = [
    {
      id: 'queryguard',
      title: 'QueryGuard',
      subtitle: 'Distributed Observability',
      abbr: 'QG',
      metric: '18%',
      metricLabel: 'Cosine Drop Detected',
      signal: 'Go sidecar utilizing concurrent CUSUM/EWMA algorithms.',
      outcome: '18% cosine similarity drop detection with 0% false positives.',
      tags: ['Go', 'CUSUM', 'EWMA', 'Prometheus','Docker'],
      url: 'https://github.com/PrajwalBenedictNorman/QueryGuard'
    },
    {
      id: 'mcp-testing',
      title: 'MCP Testing Platform',
      subtitle: 'Model Context Protocol Sandbox',
      abbr: 'MP',
      metric: '30x',
      metricLabel: 'Concurrent Calls',
      signal: 'Load testing framework for MCP servers supporting stdio and HTTP Streamable transports.',
      outcome: 'Uses LLM validation to verify tool outputs are semantically correct not just that they respond.',
      tags: ['TypeScript', 'MCP', 'LLM Tools', 'Node.js'],
      url: 'https://github.com/PrajwalBenedictNorman/mcp-testing'
    },
    {
      id: 'rag-pipeline',
      title: 'Self-Improving RAG Pipeline',
      subtitle: 'AI Optimization',
      abbr: 'RG',
      metric: '0.776',
      metricLabel: 'RAGAS Score',
      signal: '18-config grid search across chunking and embedding variants.',
      outcome: 'Achieved a 0.776 RAGAS composite score with auto-reoptimization triggers.',
      tags: ['Python', 'LlamaIndex', 'RAGAS', 'Gemini API'],
      url: 'https://github.com/PrajwalBenedictNorman/Self_Improve_Rag'
    },
    {
      id: 'ethlink',
      title: 'EthLink',
      subtitle: 'Self-Custodial Architecture',
      abbr: 'EL',
      metric: '0.5x',
      metricLabel: 'Latency Reduced',
      signal: 'Cryptographic system across 14 REST API endpoints.',
      outcome: 'Parallel fetch pattern halved history load time. Live on Vercel.',
      tags: ['TypeScript', 'Cryptography', 'REST API', 'PostgreSQL','React'],
      url: 'https://github.com/PrajwalBenedictNorman/EthLink'
    },
    {
      id: 'orderbook',
      title: 'Order Book Visualizer',
      subtitle: 'Real-time Market Depth',
      abbr: 'OB',
      metric: 'Canvas',
      metricLabel: 'Pure Math Rendering',
      signal: 'Real-time market depth, rendered tick-by-tick on raw Canvas — no chart libraries, just WebSockets and math.',
      outcome: 'React + TypeScript (Vite) utilizing Binance WebSocket API (live market data) and HTML5 Canvas (custom depth chart renderer, hover crosshair).',
      tags: ['React', 'TypeScript', 'Binance API', 'HTML5 Canvas'],
      url: 'https://github.com/PrajwalBenedictNorman/orderBook'
    }
  ];

  return (
    <section id="case-studies" className="relative w-full py-24 px-6 md:px-12 z-10 border-t border-brand-gray">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-brand-text-secondary uppercase">01 // Systems & Projects</span>
          <div className="h-px flex-1 bg-gradient-to-r from-brand-gray to-transparent" />
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text-primary tracking-tight mb-3">
            Systems & Projects Grid
          </h2>
          <p className="text-sm md:text-base text-brand-text-secondary max-w-2xl">
            A selective showcase of core infrastructure, algorithmic engines, and AI orchestration frameworks.
          </p>
        </div>

        {/* Halpin-style "Maker" Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div 
              key={c.id}
              className="glass-panel rounded flex flex-col justify-between p-6 relative overflow-hidden transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Card Corner Graphic (Maker Aesthetic) */}
              <div className="absolute top-0 right-0 w-8 h-8 opacity-45 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-text-primary" />
                <div className="absolute top-0 right-0 w-4 h-px bg-brand-text-primary/20" />
                <div className="absolute top-0 right-0 w-px h-4 bg-brand-text-primary/20" />
              </div>

              <div>
                {/* Abbreviation & Subtitle */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded border border-brand-border bg-brand-darker flex items-center justify-center font-mono text-xs font-semibold text-brand-text-secondary">
                    {c.abbr}
                  </div>
                  <span className="font-mono text-[10px] text-brand-text-secondary/50 uppercase tracking-widest">
                    {c.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-brand-text-primary mb-6 flex items-center gap-2 group-hover:text-brand-accent-dim transition-colors">
                  {c.title}
                </h3>

                {/* Big Metric Display */}
                <div className="mb-6 bg-brand-darker border border-brand-border rounded p-4 flex items-baseline gap-2.5">
                  <span className="text-3xl font-mono font-bold text-brand-text-primary text-glow">
                    {c.metric}
                  </span>
                  <span className="text-[10px] font-mono text-brand-text-secondary uppercase tracking-wider">
                    {c.metricLabel}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-4 text-xs">
                  <div>
                    <span className="block font-mono text-brand-text-secondary/60 uppercase tracking-wider mb-1">
                      Factual Signal:
                    </span>
                    <p className="text-brand-text-secondary leading-relaxed font-light">
                      {c.signal}
                    </p>
                  </div>
                  
                  <div className="pt-2 border-t border-brand-border">
                    <span className="block font-mono text-brand-text-secondary/80 uppercase tracking-wider mb-1">
                      Outcome:
                    </span>
                    <p className="text-brand-text-primary leading-relaxed font-normal">
                      {c.outcome}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tags & GitHub Link */}
              <div className="mt-8 flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {c.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-[10px] font-mono bg-brand-darker text-brand-text-secondary/80 px-2 py-0.5 rounded border border-brand-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {c.url && (
                  <a 
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono text-brand-text-secondary hover:text-brand-text-primary flex items-center gap-0.5 shrink-0 transition-colors"
                  >
                    <span>Source ↗</span>
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
