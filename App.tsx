
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import ThreeHero from './components/ThreeHero';
import ProjectSpotlight from './components/ProjectSpotlight';
import ProjectArchive from './components/ProjectArchive';
import Manifesto from './components/Manifesto';
import CurrentlyBuilding from './components/CurrentlyBuilding';
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
import Footer from './components/Footer';
import { PROJECTS } from './constants';
import { Linkedin, Github, ArrowUpRight } from 'lucide-react';

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
                <Manifesto />
                <CurrentlyBuilding />
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
          <Footer />

          {/* Sticky CTA Footer */}
          <div className="fixed bottom-0 left-0 w-full z-50 p-4 pointer-events-none hidden md:flex justify-end">
             <a 
                href="/book-call"
                className="pointer-events-auto flex items-center gap-3 bg-[#0a0a0a] border border-[#00f0ff]/30 px-6 py-4 rounded-t-lg hover:bg-[#00f0ff] hover:text-black hover:border-[#00f0ff] text-white transition-all shadow-[0_-10px_40px_rgba(0,0,0,0.5)] group transform translate-y-1 hover:-translate-y-2"
             >
                <div className="flex flex-col">
                    <span className="text-[10px] font-mono tracking-widest uppercase opacity-70 group-hover:opacity-100">Need tech execution?</span>
                    <span className="font-black uppercase tracking-tighter text-sm">Book Strategy Call</span>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-black/20 flex items-center justify-center">
                    <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
             </a>
          </div>
      </div>
    </div>
  );
};

export default App;
