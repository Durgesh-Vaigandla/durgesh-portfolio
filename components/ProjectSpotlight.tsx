'use client';

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Project } from '../types';
import { ExternalLink, TrendingUp, Presentation, Briefcase, Command } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="relative w-full max-w-sm min-h-[500px] cursor-hover perspective-1000 flex flex-col"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="relative flex-1 bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden shadow-2xl group transition-all duration-300 hover:border-[#00f0ff]/40 hover:shadow-[0_0_40px_rgba(0,240,255,0.1)] flex flex-col"
        style={{ transform: "translateZ(20px)" }}
      >
        {/* Abstract Backgrounds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#00f0ff]/5 rounded-full blur-[80px]" />
            <div 
                className="absolute inset-0 opacity-[0.03]" 
                style={{ 
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)', 
                    backgroundSize: '30px 30px' 
                }} 
            />
        </div>

        <div className="relative z-10 p-8 flex flex-col h-full">
            {/* Top Bar */}
            <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 rounded-sm text-[10px] font-mono uppercase tracking-widest border border-white/10 bg-white/5 text-gray-400">
                    Client Case Study
                </span>
                <div className="w-10 h-10 p-2 rounded-lg bg-white/5 border border-white/5 group-hover:bg-[#00f0ff]/10 group-hover:text-[#00f0ff] transition-colors text-white/50">
                    <Presentation className="w-full h-full" />
                </div>
            </div>

            {/* Content Header */}
            <div className="mb-6">
                <h3 className="text-3xl font-black text-white leading-tight group-hover:text-[#00f0ff] transition-colors tracking-tighter uppercase">
                    {project.title}
                </h3>
            </div>

            <div className="flex-grow space-y-6">
                
                {/* The Challenge */}
                <div>
                  <span className="text-[10px] text-[#00f0ff] font-black uppercase tracking-[0.2em] block mb-2 opacity-80 flex items-center gap-2">
                    <Command size={10} /> The Challenge
                  </span>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                      {project.description}
                  </p>
                </div>

                {/* The Infrastructure */}
                <div>
                  <span className="text-[10px] text-[#00f0ff] font-black uppercase tracking-[0.2em] block mb-2 opacity-80 flex items-center gap-2">
                    <Briefcase size={10} /> The Infrastructure
                  </span>
                  <p className="text-gray-300 text-xs font-mono border-l-2 border-white/10 pl-3">
                      Built utilizing scalable instances of {project.tech.join(", ")}.
                  </p>
                </div>

                {/* The Impact */}
                {project.impact && (
                    <div className="mt-4 p-5 rounded bg-white/5 border border-[#00f0ff]/20 backdrop-blur-sm group-hover:bg-[#00f0ff]/5 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                            <TrendingUp size={14} className="text-[#00f0ff]" />
                            <span className="text-[10px] uppercase tracking-wider text-white font-black">Business Impact</span>
                        </div>
                        <p className="text-white text-sm font-medium">{project.impact}</p>
                    </div>
                )}
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-white/5">
                <a 
                    href={project.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group/btn text-white w-full bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-3 transition-all"
                >
                    <span className="text-xs font-bold uppercase tracking-widest">Verify Implementation</span>
                    <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectSpotlight: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <motion.section 
      id="work" 
      className="py-24 px-4 md:px-12 w-full max-w-7xl mx-auto relative z-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
          <span className="text-transparent" style={{ WebkitTextStroke: '1px #00f0ff' }}>01.</span> Case Studies
        </h2>
        <p className="text-gray-500 font-mono text-sm max-w-xl border-l-2 border-[#00f0ff] pl-4">
            A selection of scaling solutions, optimized architectures, and user acquisition engines built for actual businesses.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch perspective-1000 w-full">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectSpotlight;
