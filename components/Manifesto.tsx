import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Rocket } from 'lucide-react';

const Manifesto: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-12 w-full max-w-7xl mx-auto relative z-10">
      
      {/* Header */}
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
          <span className="text-transparent" style={{ WebkitTextStroke: '1px #00f0ff' }}>02.</span> Manifesto
        </h2>
        <p className="text-gray-500 font-mono text-sm max-w-xl border-l-2 border-[#00f0ff] pl-4">
            Execution &gt; Theory. Why I build, how I scale, and the philosophy behind my engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: The Core Statement */}
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
            <h3 className="text-4xl md:text-6xl font-black text-white leading-[0.9] uppercase tracking-tighter mb-8">
                I don't just <br/>
                <span className="text-[#00f0ff]">write code.</span> <br/>
                I launch <br/>
                <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Products.</span>
            </h3>
            
            <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed max-w-lg">
                <p>
                    The tech industry is obsessed with chasing the latest shiny frameworks. I am obsessed with <strong className="text-white font-medium">momentum, systems, and hard business metrics.</strong>
                </p>
                <p>
                    I over-index on real-world impact because an application is only as valuable as the revenue it generates or the users it acquires.
                </p>
            </div>
            
            <div className="mt-12 flex gap-4">
                <a href="#contact" className="px-6 py-3 bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-gray-200 transition-colors">
                    Work With Me
                </a>
            </div>
        </motion.div>

        {/* Right: Pillars */}
        <div className="grid grid-cols-1 gap-6">
            
            <motion.div 
                className="p-8 border border-white/10 bg-[#0a0a0a] hover:border-[#00f0ff]/30 transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-[#00f0ff]/10 group-hover:text-[#00f0ff] transition-colors rounded">
                        <Rocket size={20} className="text-white/50 group-hover:text-[#00f0ff]" />
                    </div>
                    <h4 className="text-xl font-bold text-white uppercase tracking-wider">Speed to Market</h4>
                </div>
                <p className="text-sm font-mono text-gray-500 leading-relaxed">
                    Perfection is the enemy of shipment. Getting an optimized MVP into the hands of real users out-values theoretical scalable architecture built in a vacuum.
                </p>
            </motion.div>

            <motion.div 
                className="p-8 border border-white/10 bg-[#0a0a0a] hover:border-[#00f0ff]/30 transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-[#00f0ff]/10 group-hover:text-[#00f0ff] transition-colors rounded">
                        <Target size={20} className="text-white/50 group-hover:text-[#00f0ff]" />
                    </div>
                    <h4 className="text-xl font-bold text-white uppercase tracking-wider">User-Centric Growth</h4>
                </div>
                <p className="text-sm font-mono text-gray-500 leading-relaxed">
                    If the user is confused, the underlying infrastructure doesn't matter. I bridge the gap between heavy backend systems and seamless, high-converting UX.
                </p>
            </motion.div>

            <motion.div 
                className="p-8 border border-white/10 bg-[#0a0a0a] hover:border-[#00f0ff]/30 transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-[#00f0ff]/10 group-hover:text-[#00f0ff] transition-colors rounded">
                        <Zap size={20} className="text-white/50 group-hover:text-[#00f0ff]" />
                    </div>
                    <h4 className="text-xl font-bold text-white uppercase tracking-wider">Ruthless Execution</h4>
                </div>
                <p className="text-sm font-mono text-gray-500 leading-relaxed">
                    Startups die from lack of momentum. I operate exclusively on high-impact engineering—building features that move the needle and removing blockers.
                </p>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Manifesto;
