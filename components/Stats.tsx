import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Completed', value: '35+' },
  { label: 'Years Experience', value: '3+' },
  { label: 'Happy Clients', value: '30+' },
  { label: 'Hackathon Wins', value: '5+' },
];

const Stats: React.FC = () => {
  return (
    <section className="relative z-20 mt-0 px-4 mb-24 md:mb-12">
      <div className="max-w-5xl mx-auto border-t border-b border-white/10 md:border-none md:bg-white-[0.02] md:backdrop-blur-xl md:rounded-2xl md:p-8 md:border md:border-white/10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-8 md:py-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight drop-shadow-md">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-gray-500 uppercase tracking-widest font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;