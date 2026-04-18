import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Presentation, Calendar, Mail, Home } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Durgesh Vaigandla | Links',
  description: 'Connect with Durgesh Vaigandla, Product Builder & Growth Partner.',
};

export default function LinkedinLinkTree() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[100px]" />
        <div 
          className="absolute inset-0 opacity-[0.2]" 
          style={{ 
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, 
              backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="w-full max-w-md relative z-10 flex flex-col items-center">
        
        {/* Profile Identity */}
        <div className="w-24 h-24 mb-6 rounded-full border-2 border-[#00f0ff] p-1 relative">
            <div className="absolute inset-0 rounded-full border border-white/20 animate-spin-slow pointer-events-none" />
            <img 
                src="/D.png" 
                alt="Durgesh Vaigandla" 
                className="w-full h-full rounded-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
            />
        </div>

        <h1 className="text-3xl font-black uppercase tracking-tighter mb-2 text-center">
            Durgesh Vaigandla
        </h1>
        <p className="text-[#00f0ff] font-mono text-xs uppercase tracking-widest mb-8 text-center bg-[#00f0ff]/10 px-3 py-1 rounded">
            Product Builder & Growth Partner
        </p>
        
        <p className="text-gray-400 text-sm mb-12 text-center max-w-xs leading-relaxed font-light">
            I engineer systems that scale businesses. Stop hunting for developers. Partner with a builder.
        </p>

        {/* Links Container */}
        <div className="w-full space-y-4">
            
            <Link href="/book-call" className="group relative block w-full p-4 bg-[#0a0a0a] border border-white/10 hover:border-[#00f0ff] hover:bg-[#00f0ff]/5 transition-all text-left overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-white/5 text-white group-hover:text-[#00f0ff] transition-colors rounded">
                            <Calendar size={18} />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-white uppercase tracking-tighter text-sm">Book a Strategy Call</span>
                            <span className="text-[10px] text-gray-500 font-mono tracking-widest">Discuss tech architecture</span>
                        </div>
                    </div>
                    <ArrowUpRight size={18} className="text-gray-600 group-hover:text-[#00f0ff] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
            </Link>

            <Link href="/#work" className="group relative block w-full p-4 bg-[#0a0a0a] border border-white/10 hover:border-[#00f0ff] hover:bg-[#00f0ff]/5 transition-all text-left overflow-hidden">
                <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-white/5 text-white group-hover:text-[#00f0ff] transition-colors rounded">
                            <Presentation size={18} />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-white uppercase tracking-tighter text-sm">Read Case Studies</span>
                            <span className="text-[10px] text-gray-500 font-mono tracking-widest">How I generate revenue</span>
                        </div>
                    </div>
                    <ArrowUpRight size={18} className="text-gray-600 group-hover:text-[#00f0ff] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
            </Link>
            
            <Link href="/" className="group relative block w-full p-4 bg-[#0a0a0a] border border-white/10 hover:border-[#00f0ff] hover:bg-[#00f0ff]/5 transition-all text-left overflow-hidden">
                <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-white/5 text-white group-hover:text-[#00f0ff] transition-colors rounded">
                            <Home size={18} />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-white uppercase tracking-tighter text-sm">Main Portfolio</span>
                            <span className="text-[10px] text-gray-500 font-mono tracking-widest">Full engineering scope</span>
                        </div>
                    </div>
                    <ArrowUpRight size={18} className="text-gray-600 group-hover:text-[#00f0ff] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
            </Link>

            <a href="mailto:vaigandla.durgesh@gmail.com" className="group relative block w-full p-4 bg-[#0a0a0a] border border-white/10 hover:border-white hover:bg-white/5 transition-all text-left overflow-hidden mt-8">
                <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-white/5 text-white group-hover:text-white transition-colors rounded">
                            <Mail size={18} />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-white uppercase tracking-tighter text-sm">Email Me Directly</span>
                            <span className="text-[10px] text-gray-500 font-mono tracking-widest">vaigandla.durgesh@gmail.com</span>
                        </div>
                    </div>
                    <ArrowUpRight size={18} className="text-gray-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
            </a>

        </div>

      </div>
    </div>
  );
}
