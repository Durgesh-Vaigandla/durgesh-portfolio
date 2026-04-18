import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Smartphone, TerminalSquare } from 'lucide-react';

const CurrentlyBuilding: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-12 w-full max-w-7xl mx-auto relative z-10 border-t border-white/5">
      
      {/* Header */}
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
          <span className="text-transparent" style={{ WebkitTextStroke: '1px #00f0ff' }}>03.</span> Currently Building
        </h2>
        <p className="text-gray-500 font-mono text-sm max-w-xl border-l-2 border-[#00f0ff] pl-4">
            Active products in development. I stay sharp by operating as a founder and shipping continuous SaaS and mobile solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brandforge */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-[#0a0a0a] border border-white/10 group hover:border-[#00f0ff]/50 transition-colors flex flex-col items-start h-full relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00f0ff]/10 blur-3xl group-hover:bg-[#00f0ff]/20 transition-colors pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6 w-full justify-between">
                <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-[#00f0ff] transition-colors rounded">
                    <TerminalSquare size={18} />
                </div>
                <span className="px-2 py-1 text-[9px] font-black uppercase tracking-[0.2em] bg-[#00f0ff]/10 text-[#00f0ff] rounded">
                    Active Alpha
                </span>
            </div>

            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-3">Brandforge</h3>
            <p className="text-sm text-gray-400 leading-relaxed font-light mb-6 flex-grow">
                A high-performance personal LinkedIn management and scheduling platform. Features live analytics, intelligent media publishing, and AI-driven script studios.
            </p>

            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest border-t border-white/10 w-full pt-4 mt-auto">
                Goal: Lead Gen Automation
            </span>
        </motion.div>

        {/* Aavanto Global */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 bg-[#0a0a0a] border border-white/10 group hover:border-[#00f0ff]/50 transition-colors flex flex-col items-start h-full relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00f0ff]/10 blur-3xl group-hover:bg-[#00f0ff]/20 transition-colors pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6 w-full justify-between">
                <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-[#00f0ff] transition-colors rounded">
                    <Smartphone size={18} />
                </div>
                <span className="px-2 py-1 text-[9px] font-black uppercase tracking-[0.2em] bg-white/5 text-gray-300 rounded">
                    Pre-Release
                </span>
            </div>

            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-3">Aavanto Mobile Apps</h3>
            <p className="text-sm text-gray-400 leading-relaxed font-light mb-6 flex-grow">
                Cross-platform mobile architecture scaling the Aavanto Global and Aavanto IELTS platforms, bringing their enterprise educational infrastructure natively to iOS and Android.
            </p>

            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest border-t border-white/10 w-full pt-4 mt-auto">
                Goal: Multi-platform scale
            </span>
        </motion.div>

        {/* Scalable Next.js Templates */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 bg-[#0a0a0a] border border-white/10 group hover:border-[#00f0ff]/50 transition-colors flex flex-col items-start h-full relative overflow-hidden border-dashed"
        >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 blur-3xl group-hover:bg-white/10 transition-colors pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6 w-full justify-between">
                <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white transition-colors rounded">
                    <Settings size={18} />
                </div>
                <span className="px-2 py-1 text-[9px] font-black uppercase tracking-[0.2em] bg-white/5 text-gray-400 rounded">
                    R&D
                </span>
            </div>

            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-3">Enterprise SaaS Boilerplate</h3>
            <p className="text-sm text-gray-400 leading-relaxed font-light mb-6 flex-grow">
                Constantly refining an internal robust Next.js / TypeScript / Firebase foundation to accelerate delivery times for client projects by 40% without losing quality.
            </p>

            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest border-t border-white/5 w-full pt-4 mt-auto opacity-70">
                Next-Gen Infrastructure
            </span>
        </motion.div>

      </div>
    </section>
  );
};

export default CurrentlyBuilding;
