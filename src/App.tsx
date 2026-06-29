import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Components
import ThreeBackground from './components/ThreeBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import CaseStudies from './components/CaseStudies';
import SignalHub from './components/SignalHub';
import Footer from './components/Footer';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Sync theme with document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // GSAP Entrance Animations
  useGSAP(() => {
    // Animate all sections with class 'gsap-section'
    const sections = gsap.utils.toArray<HTMLElement>('.gsap-section');
    
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { 
          opacity: 0, 
          y: 40 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%', // Trigger when the top of the section hits 85% of the viewport height
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, { scope: containerRef });

  // Smooth scroll helper for navigation
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div ref={containerRef} className="relative min-h-screen w-full bg-brand-bg text-brand-text-primary select-none overflow-x-hidden transition-colors duration-300">
      {/* High-End 3D Background */}
      <ThreeBackground theme={theme} />

      {/* Fixed Navigation Header with Theme Shifter */}
      <Header 
        onNavClick={handleScrollToSection} 
        theme={theme}
        onThemeToggle={handleThemeToggle}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 w-full pt-[80px]">
        {/* Hero Section */}
        <Hero onExploreClick={() => handleScrollToSection('case-studies')} />

        {/* Technical Case Studies (Systems & Projects Grid) */}
        <div className="gsap-section">
          <CaseStudies />
        </div>

        {/* Technical Signal Hub */}
        <div className="gsap-section">
          <SignalHub />
        </div>

        {/* Professional Experience / Open Source Contributions */}
        <div className="gsap-section">
          <Experience />
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
