'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, Compass } from 'lucide-react';
import Link from 'next/link';
import CustomCursor from '../components/CustomCursor';
import './globals.css';

export default function NotFound() {
  return (
    <div className="bg-[#050505] min-h-screen text-gray-200 selection:bg-accent/30 selection:text-white flex flex-col items-center justify-center relative overflow-hidden font-mono">
      <CustomCursor />
      
      {/* Background Decor Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.15)_0%,rgba(0,0,0,0)_60%)]" />
        <div 
            className="absolute inset-0 opacity-[0.3]" 
            style={{ 
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, 
                backgroundSize: '40px 40px' 
            }} 
        />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-2xl text-center px-6">
        
        {/* Radar Animation Graphic */}
        <motion.div 
            className="relative w-40 h-40 mb-12 flex items-center justify-center opacity-80"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 0.8 }}
        >
            <div className="absolute inset-0 rounded-full border border-white/5 bg-[#0a0a0a]" />
            <motion.div 
                className="absolute inset-0 rounded-full border-t-2 border-b-2"
                style={{ borderColor: '#00f0ff' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
                className="absolute inset-4 rounded-full border-l border-r"
                style={{ borderColor: '#00f0ff', opacity: 0.5 }}
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            <Compass size={40} className="text-[#00f0ff] opacity-80" />
        </motion.div>

        {/* 404 Text */}
        <motion.h1 
            className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
        >
            404
        </motion.h1>

        <motion.div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/5 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
        >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]"></span>
            </span>
            <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-widest">Signal Lost</span>
        </motion.div>

        <motion.p 
            className="text-gray-400 text-sm md:text-base leading-relaxed mb-12 max-w-md mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
        >
            You've drifted into uncharted space. The requested module could not be found in our database index. Return to base to explore featured works.
        </motion.p>

        {/* Call to Actions */}
        <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
        >
            <Link 
                href="/" 
                className="w-full sm:w-auto flex flex-row items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold text-xs tracking-widest uppercase hover:bg-gray-200 transition-colors"
            >
                <Home size={16} /> Return to Base
            </Link>
            <button 
                onClick={() => window.history.back()}
                className="w-full sm:w-auto flex flex-row items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border border-white/20 font-bold text-xs tracking-widest uppercase hover:bg-white/5 transition-colors"
            >
                <ArrowLeft size={16} /> Go Back
            </button>
        </motion.div>
        
      </div>
    </div>
  );
}
