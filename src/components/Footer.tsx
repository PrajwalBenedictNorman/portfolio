export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full h-[240px] md:h-[200px] border-t border-brand-gray bg-brand-darker/60 flex flex-col justify-between p-8 md:px-12 z-10">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">
        
        {/* Status Indicator (Left) */}
        <div className="md:col-span-6 flex items-center gap-3">
          <div className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </div>
          <p className="text-xs md:text-sm text-brand-text-primary font-medium tracking-wide">
            Currently accepting technical roles or infrastructure consulting.
          </p>
        </div>

        {/* Links & Socials (Right) */}
        <div className="md:col-span-6 flex flex-col md:items-end gap-4">
          <div className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/in/prajwalbnorman/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-mono text-brand-text-secondary hover:text-brand-text-primary transition-colors cursor-pointer"
            >
              LinkedIn ↗
            </a>
            
            <a 
              href="https://github.com/PrajwalBenedictNorman" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-mono text-brand-text-secondary hover:text-brand-text-primary transition-colors cursor-pointer"
            >
              GitHub ↗
            </a>

            <a 
              href="mailto:normanprajwal@gmail.com" 
              className="text-xs font-mono text-brand-text-secondary hover:text-brand-text-primary transition-colors cursor-pointer"
            >
              Email ↗
            </a>
          </div>

          {/* Tech Stack Note */}
          <div className="text-[10px] font-mono text-brand-text-secondary/40">
            Built with React, Tailwind, and React Three Fiber.
          </div>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-6xl w-full mx-auto flex justify-between text-[10px] font-mono text-brand-text-secondary/30 pt-4 border-t border-brand-gray/10">
        <span>© {currentYear} Prajwal Benedict Norman. All rights reserved.</span>
        <span className="hidden sm:inline">v1.0.0 // SHA-256 Verified</span>
      </div>
    </footer>
  );
}
