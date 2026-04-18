import React from 'react';
import { Github, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-32 border-t border-white/10 bg-[#020202] pt-24 pb-12 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-accent/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          {/* Left Branding */}
          <div className="max-w-md">
            <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">
              Let's build something <br/>
              <span className="text-gray-500">that actually works.</span>
            </h2>
            <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8">
              Whether you have a raw idea or a scaling hurdle, let's map out the architecture. Stop hunting for code monkeys. Get a technical partner.
            </p>
            <a 
              href="mailto:vaigandla.durgesh@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00f0ff] text-black font-black uppercase text-sm tracking-widest hover:bg-white transition-colors"
            >
              Discuss Your Project <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Right Links & Socials */}
          <div className="flex flex-wrap gap-16 md:gap-24">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 border-b border-white/10 pb-2">Navigation</span>
              <a href="#work" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Case Studies</a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Services</a>
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
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]"></span>
            </span>
            <span>Systems Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
