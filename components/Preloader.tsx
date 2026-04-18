import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// ==========================================
// PRELOADER CONFIGURATION
// ==========================================
const CONFIG = {
  themeColor: "#00f0ff", 
  developerName: "DURGESH VAIGANDLA",
  developerRole: "FULL-STACK ENGINEER",
  autoExitDelay: 800, 
  loadSpeedMultiplier: 1.2, 
};

// Natural, professional loading steps
const LOADING_STEPS = [
  "Loading architectural assets...",
  "Rendering interface...",
  "Preparing project archive...",
  "Running final checks...",
  "Almost ready...",
];
// ==========================================

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // Smooth Progress Bar
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsReady(true);
          return 100;
        }
        return prev + Math.floor(Math.random() * 6 * CONFIG.loadSpeedMultiplier) + 1;
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Update text based on progress
  useEffect(() => {
      if (progress < 20) setLogs([LOADING_STEPS[0]]);
      else if (progress < 40) setLogs([LOADING_STEPS[1]]);
      else if (progress < 60) setLogs([LOADING_STEPS[2]]);
      else if (progress < 80) setLogs([LOADING_STEPS[3]]);
      else setLogs([LOADING_STEPS[4]]);
  }, [progress]);

  // Auto-Exit Logic
  useEffect(() => {
    if (isReady && !isExiting) {
      const timeout = setTimeout(() => {
        setIsExiting(true);
        setTimeout(onComplete, 800);
      }, CONFIG.autoExitDelay);
      return () => clearTimeout(timeout);
    }
  }, [isReady, isExiting, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center p-6 md:p-12 font-sans overflow-hidden"
      initial={{ opacity: 1 }}
      animate={isExiting ? { opacity: 0, y: -50 } : { opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{ color: CONFIG.themeColor }}
    >
      <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center">
        
        {/* Simple elegant spinning loader */}
        <motion.div 
            className="w-16 h-16 rounded-full border-2 border-white/5 border-t-[#00f0ff] mb-12"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />

        {/* Identity Text (Clean Fade) */}
        <motion.div 
            className="text-center mb-12 h-24 flex flex-col justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 uppercase break-words w-full px-4 text-center tracking-widest">
            {CONFIG.developerName}
          </h1>
          <p className="text-xs uppercase opacity-70 tracking-[0.2em] font-mono text-gray-400">
            {CONFIG.developerRole}
          </p>
        </motion.div>

        {/* Progress Display */}
        <div className="w-full">
            <div className="flex justify-between items-end mb-3 px-1 text-xs font-mono text-gray-400">
                <span className="opacity-90 max-w-[70%]">
                    {logs.length > 0 ? logs[0] : "Initializing..."}
                </span>
                <span className="font-bold text-white">{progress}%</span>
            </div>
            
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    className="h-full"
                    style={{ backgroundColor: CONFIG.themeColor }}
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "easeInOut", duration: 0.1 }}
                />
            </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Preloader;