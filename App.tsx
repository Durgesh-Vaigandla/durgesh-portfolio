
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import ThreeHero from './components/ThreeHero';
import ProjectSpotlight from './components/ProjectSpotlight';
import ProjectArchive from './components/ProjectArchive';
import AboutTimeline from './components/AboutTimeline';
import Skills from './components/Skills';
import ThreeModel from './components/ThreeModel';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Stats from './components/Stats';
import FAQ from './components/FAQ';
import Preloader from './components/Preloader';
import TechTicker from './components/TechTicker';
import WhyMe from './components/WhyMe';
import { PROJECTS } from './constants';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const featuredProjects = PROJECTS.filter(p => p.featured).slice(0, 6);
  const archiveProjects = PROJECTS; 

  // Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (isLoading) return;

        // Don't trigger if user is typing in an input
        const target = e.target as HTMLElement;
        if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

        switch(e.key) {
            case '1':
                window.scrollTo({ top: 0, behavior: 'smooth' });
                break;
            case '2':
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                break;
            case '3':
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                break;
            case '4':
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                break;
            case '5':
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                break;
        }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLoading]);

  return (
    <div className="bg-space min-h-screen text-gray-200 selection:bg-accent/30 selection:text-white relative">
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {isLoading && (
            <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}>
          <Navbar />

          <main>
            {/* Hero Section */}
            <ThreeHero />
            
            {/* Trust Signals */}
            <Stats />

            {/* Tech Ticker */}
            <TechTicker />

            <div className="relative z-10 pt-24 space-y-12 md:space-y-24">
                <ProjectSpotlight projects={featuredProjects} />
                <Services />
                <WhyMe />
                <Process />
                <Testimonials />
                
                <div id="about">
                  <AboutTimeline />
                  <Skills />
                  <ThreeModel />
                </div>

                <div id="archive">
                   <ProjectArchive projects={archiveProjects} />
                </div>
                
                <FAQ />
                <Contact />
            </div>
          </main>

          {/* Premium Engineered Footer */}
          <footer className="relative mt-32 border-t border-white/10 bg-[#020202] pt-24 pb-12 overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-accent/5 blur-[120px] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
                    
                    {/* Left Branding */}
                    <div className="max-w-md">
                        <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">
                            Ready to Build <br/>
                            <span className="text-gray-500">The Future?</span>
                        </h2>
                        <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8">
                            A highly optimized, scalable, and beautifully designed web presence is your ultimate competitive advantage. Let's make it happen.
                        </p>
                        <a 
                            href="mailto:vaigandla.durgesh@gmail.com"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold font-mono text-sm tracking-widest hover:bg-gray-200 transition-colors"
                        >
                            START A PROJECT <ArrowUpRight size={16} />
                        </a>
                    </div>

                    {/* Right Links & Socials */}
                    <div className="flex flex-wrap gap-16 md:gap-24">
                        <div className="flex flex-col gap-4">
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 border-b border-white/10 pb-2">Navigation</span>
                            <a href="#work" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Work</a>
                            <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Services</a>
                            <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">About</a>
                        </div>
                        
                        <div className="flex flex-col gap-4">
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 border-b border-white/10 pb-2">Connect</span>
                            <a href="https://linkedin.com/in/vaigandladurgesh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
                                <Linkedin size={14} /> LinkedIn
                            </a>
                            <a href="https://github.com/Durgesh-Vaigandla/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2">
                                <Github size={14} /> GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 text-xs font-mono text-gray-600 uppercase tracking-widest">
                    <p>© {new Date().getFullYear()} Durgesh Vaigandla.</p>
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span>Systems Online</span>
                    </div>
                </div>
            </div>
          </footer>
      </div>
    </div>
  );
};

export default App;
