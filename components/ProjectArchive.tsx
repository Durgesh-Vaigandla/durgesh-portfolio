import React from 'react';
import { Project } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectArchiveProps {
  projects: Project[];
}

const ProjectArchive: React.FC<ProjectArchiveProps> = ({ projects }) => {
  return (
    <motion.section 
      className="py-24 px-4 md:px-12 w-full max-w-6xl mx-auto relative z-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <span className="text-accent text-xl">06.</span> Project Archive
          </h2>
          <p className="text-gray-400 font-mono text-sm max-w-md">
            Reviewing database entries... Note: Some live links may be temporarily or permanently inactive due to client domain changes or expirations.
          </p>
        </div>
      </div>

      <div className="w-full overflow-x-auto bg-glass rounded-xl border border-white/5 backdrop-blur-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 text-gray-400 font-mono text-xs uppercase tracking-wider">
              <th className="p-6">Project</th>
              <th className="p-6 hidden sm:table-cell w-32 text-right">Link</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence mode='popLayout'>
              {projects.map((project, index) => (
                <motion.tr
                  key={project.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                >
                  <td className="p-6 font-semibold text-white group-hover:text-accent transition-colors flex items-center gap-3">
                    {project.title}
                    {project.impact === 'Launching Soon' && (
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-accent/10 border border-accent/20 text-accent whitespace-nowrap">Coming Soon</span>
                    )}
                  </td>
                  <td className="p-6 hidden sm:table-cell text-right">
                    <a 
                      href={project.link === '#' ? "javascript:void(0)" : project.link} 
                      target={project.link === '#' ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className={`text-gray-400 hover:text-accent cursor-hover transition-colors inline-flex items-center gap-1 ${project.link === '#' ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {project.link === '#' ? 'Unavailable' : 'View'} <ArrowUpRight size={14} />
                    </a>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
        
        {projects.length === 0 && (
          <div className="p-12 text-center text-gray-500 font-mono">
            No projects found.
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default ProjectArchive;