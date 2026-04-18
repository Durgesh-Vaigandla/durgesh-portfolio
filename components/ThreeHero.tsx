import React from 'react';
import { motion } from 'framer-motion';
import { MoveRight, Code2, Layers, Cpu, Command } from 'lucide-react';

const ThreeHero: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#050505] text-white flex flex-col font-sans pt-32 overflow-hidden">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 flex justify-between px-6">
          <div className="w-[1px] h-full bg-white shadow-[0_0_15px_#fff]" />
          <div className="w-[1px] h-full bg-white hidden md:block" />
          <div className="w-[1px] h-full bg-white hidden md:block" />
          <div className="w-[1px] h-full bg-white shadow-[0_0_15px_#fff]" />
        </div>
        <div 
          className="absolute inset-0 opacity-[0.2]" 
          style={{ 
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, 
              backgroundSize: '80px 80px' 
          }} 
        />
      </div>

      <div className="flex-1 flex flex-col relative z-10 w-full max-w-7xl mx-auto">
        
        {/* TOP ROW: IDENTITY & STATUS */}
        <div className="px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 border-b border-white/10 pb-12">
          <div className="col-span-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4 text-[#00f0ff] mb-4"
            >
              <Command size={16} />
              <span className="text-[10px] font-mono tracking-[0.5em] uppercase">Status: Available for Work</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]"></span>
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-mono text-gray-500 uppercase tracking-widest leading-relaxed"
            >
              [ Durgesh Vaigandla ] <br />
              Full-Stack Product Engineer <br />
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex flex-col justify-end text-[10px] font-mono text-gray-600 gap-1"
          >
            <span>Located in India</span>
            <span>Building intuitive systems</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-end justify-start md:justify-end"
          >
            <div className="w-16 h-16 border border-[#00f0ff] flex items-center justify-center text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black transition-all">
              <Code2 size={24} />
            </div>
          </motion.div>
        </div>

        {/* MIDDLE ROW: THE CORE STATEMENT */}
        <div className="px-6 flex-1 flex flex-col justify-center py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-tighter leading-[0.85] uppercase mb-8">
              Build <span className="text-transparent" style={{ WebkitTextStroke: '2px #00f0ff' }}>Intelligent</span> <br />
              Digital Goods.
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-2xl border-l-4 border-[#00f0ff] pl-8 py-2 relative"
          >
            <div className="absolute top-0 -left-[2px] w-1 h-4 bg-white shadow-[0_0_10px_#fff] blur-[1px]" />
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
              I transform raw concepts into high-performance products. 
              No templates. No bloated code. Just <span className="text-white font-medium">precision-engineered interfaces</span> that move at the speed of thought.
            </p>
          </motion.div>
        </div>

        {/* BOTTOM ROW: THE SPECS BOXES */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10"
        >
          <div className="p-8 border-b md:border-b-0 md:border-r border-white/10 hover:bg-[#00f0ff]/5 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 text-gray-500 group-hover:text-[#00f0ff] transition-colors">
                <Layers size={18} />
                <span className="text-[10px] font-mono uppercase tracking-widest">Stack Stack</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">React & Next.js</h3>
                <p className="text-sm text-gray-500 font-mono italic">Full-stack deployment at scale.</p>
            </div>
          </div>

          <div className="p-8 border-b md:border-b-0 md:border-r border-white/10 hover:bg-[#00f0ff]/5 transition-all duration-300 relative group overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 text-gray-500 group-hover:text-[#00f0ff] transition-colors">
                <Cpu size={18} />
                <span className="text-[10px] font-mono uppercase tracking-widest">Design Systems</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Modern Interfaces</h3>
                <p className="text-sm text-gray-500 font-mono italic">User-centric and accessible.</p>
             </div>
          </div>

          <a href="#contact" className="p-8 flex items-center justify-between group cursor-pointer bg-[#00f0ff] text-black hover:bg-white transition-colors duration-300">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] block mb-2 opacity-80">Ready to ship?</span>
              <h3 className="text-2xl font-black uppercase tracking-tighter">Start Project</h3>
            </div>
            <MoveRight size={32} className="group-hover:translate-x-4 transition-transform duration-300" />
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default ThreeHero;
