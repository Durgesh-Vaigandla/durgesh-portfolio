'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const images = [
  {
    src: '/Durgesh@SHF2K25-TeachingParticipants.png',
    alt: 'Teaching and mentoring participants at hackathon',
    label: 'Mentoring Future Developers'
  },
  {
    src: '/Durgesh@SHF2K25-LightningLamp.png',
    alt: 'Lightning the innovation lamp',
    label: 'Igniting Innovation'
  },
  {
    src: '/Durgesh@Google.jpeg',
    alt: 'At Google event',
    label: 'Learning & Growing'
  }
];

const ThreeModel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-16 md:py-24 bg-space">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Grid Layout: Text on Left, Image Carousel on Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* LEFT SIDE: Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="order-2 md:order-1"
          >
            <motion.span
              className="text-accent text-xs md:text-sm font-mono block mb-3 tracking-widest uppercase font-semibold"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              ✦ Growth Mindset
            </motion.span>

            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Always{' '}
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Climbing
              </span>
              <br />
              to New Heights
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-lg font-light mb-8">
              Every challenge drives growth. Whether mentoring developers or architecting scalable systems, I embrace continuous learning and push toward excellence.
            </p>

            <div className="flex gap-4">
              <motion.a
                href="#about"
                className="px-8 py-3 bg-accent text-black font-bold rounded-lg hover:bg-accent/90 transition-all text-sm md:text-base"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
              <motion.a
                href="#work"
                className="px-8 py-3 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent/10 transition-all text-sm md:text-base"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                View Work
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="order-1 md:order-2"
          >
            <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden border border-accent/30 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm shadow-2xl">
              {/* Image Carousel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    fill
                    className="object-cover"
                    priority={currentIndex === 0}
                  />
                  
                  {/* Gradient Overlay for Better Text Visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Image Label */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-white text-lg md:text-xl font-bold"
                    >
                      {images[currentIndex].label}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="absolute bottom-6 right-6 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-accent w-8'
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-tr from-accent/10 via-transparent to-secondary/10" />
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            </div>

            {/* Info Badge Below Box */}
            <div className="mt-4 flex items-center gap-2 text-accent text-xs md:text-sm font-mono justify-center md:justify-start">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>Auto-rotating showcase • Click dots to navigate</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Ambient Effects */}
      <div className="absolute top-1/2 -left-96 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none opacity-30" />
      <div className="absolute bottom-1/2 -right-96 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none opacity-30" />
    </section>
  );
};

export default ThreeModel;
