import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  theme: 'dark' | 'light';
  onThemeToggle: () => void;
}

export default function Header({ onNavClick, theme, onThemeToggle }: HeaderProps) {
  const handleDownloadResume = () => {
  const a = document.createElement("a");
  a.href = "/Resume_Prajwal.pdf";
  a.download = "Prajwal_Resume.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 z-50 glass-nav flex items-center justify-between px-6 md:px-12 transition-all duration-300">
      {/* Left: Name */}
      <div 
        className="flex items-center cursor-pointer group"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="font-bold text-brand-text-primary text-base md:text-lg tracking-wider hover:text-brand-accent-dim transition-colors">
          Prajwal Benedict Norman
        </span>
      </div>

      {/* Right: Navigation Links & Shifter */}
      <div className="flex items-center gap-4 md:gap-8">
        <nav className="hidden md:flex items-center gap-6 md:gap-8">
          <button 
            onClick={() => onNavClick('case-studies')} 
            className="text-sm font-medium text-brand-text-secondary hover:text-brand-text-primary transition-colors cursor-pointer"
          >
            Technical Proof
          </button>
          <button 
            onClick={() => onNavClick('signal-hub')} 
            className="text-sm font-medium text-brand-text-secondary hover:text-brand-text-primary transition-colors cursor-pointer"
          >
            Skills
          </button>
          <button 
            onClick={() => onNavClick('experience')} 
            className="text-sm font-medium text-brand-text-secondary hover:text-brand-text-primary transition-colors cursor-pointer"
          >
            Contributions
          </button>
        </nav>

        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={onThemeToggle}
            className="p-2 rounded border border-brand-border bg-brand-bg/40 text-brand-text-secondary hover:text-brand-text-primary hover:border-brand-accent-dim transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          {/* Primary CTA Button */}
          <button
            onClick={handleDownloadResume}
            className="relative overflow-hidden group px-4 py-2 rounded border border-brand-border bg-brand-bg/40 text-xs md:text-sm font-semibold text-brand-text-primary hover:border-brand-accent-dim hover:text-brand-accent hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Download Technical Resume
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-linear-to-r from-brand-accent/5 to-brand-accent/10 transition-transform duration-300 -z-0" />
          </button>
        </div>
      </div>
    </header>
  );
}
