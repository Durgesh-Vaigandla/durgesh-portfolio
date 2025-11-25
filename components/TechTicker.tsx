
import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'framer-motion';

// Tech Stack Data
const TECH_ROW_1 = [
  { name: 'Next.js', slug: 'nextdotjs' },
  { name: 'React', slug: 'react' },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'Tailwind CSS', slug: 'tailwindcss' },
  { name: 'Node.js', slug: 'nodedotjs' },
  { name: 'Python', slug: 'python' },
  { name: 'TensorFlow', slug: 'tensorflow' },
  { name: 'OpenAI', slug: 'openai' },
];

const TECH_ROW_2 = [
  { name: 'Firebase', slug: 'firebase' },
  { name: 'MongoDB', slug: 'mongodb' },
  { name: 'PostgreSQL', slug: 'postgresql' },
  { name: 'Three.js', slug: 'threedotjs' },
  { name: 'Framer', slug: 'framer' },
  { name: 'Docker', slug: 'docker' },
  { name: 'Figma', slug: 'figma' },
  { name: 'Git', slug: 'git' },
  { name: 'GitHub', slug: 'github' },
];

// Wrap utility for infinite loop
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ParallaxTextProps {
  children: React.ReactNode;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxTextProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  /**
   * We wrap the x value between -25% and 0%.
   * Since we render the children 4 times, moving by 25% creates a seamless loop.
   */
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Dynamic velocity based on scroll direction
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden m-0 flex flex-nowrap whitespace-nowrap">
      <motion.div className="flex flex-nowrap gap-8" style={{ x }}>
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

const TechCard: React.FC<{ tech: { name: string; slug: string } }> = ({ tech }) => (
  <div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full backdrop-blur-md hover:bg-white/10 hover:border-accent/30 hover:shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-all duration-300 group cursor-default min-w-[160px]">
    <div className="w-8 h-8 flex items-center justify-center bg-black/30 rounded-full p-1.5 group-hover:scale-110 transition-transform">
      <img
        src={`https://cdn.simpleicons.org/${tech.slug}/ffffff`}
        alt={tech.name}
        className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity"
        title={tech.name}
      />
    </div>
    <span className="text-sm font-mono font-bold tracking-wide text-gray-400 group-hover:text-accent transition-colors">
      {tech.name}
    </span>
  </div>
);

const TechTicker: React.FC = () => {
  return (
    <div className="w-full bg-[#050505] border-y border-white/5 py-16 relative z-10 select-none overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-full bg-accent/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-full bg-secondary/5 blur-[100px] pointer-events-none" />

      {/* Fade Gradients for smooth edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />
      
      <div className="flex flex-col gap-12">
        {/* Row 1 - Moves Right, accelerates on scroll */}
        <ParallaxText baseVelocity={-3}>
          <div className="flex gap-8 px-4">
             {TECH_ROW_1.map((tech, index) => (
                <TechCard key={`r1-${index}`} tech={tech} />
             ))}
          </div>
        </ParallaxText>

        {/* Row 2 - Moves Left, accelerates on scroll */}
        <ParallaxText baseVelocity={3}>
           <div className="flex gap-8 px-4">
             {TECH_ROW_2.map((tech, index) => (
                <TechCard key={`r2-${index}`} tech={tech} />
             ))}
          </div>
        </ParallaxText>
      </div>
    </div>
  );
};

export default TechTicker;
