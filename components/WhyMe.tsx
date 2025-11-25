import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MessageSquare, Zap } from 'lucide-react';

const WhyMe: React.FC = () => {
  const features = [
    {
      icon: <Clock size={32} />,
      title: "I Respect Deadlines",
      description: "No ghosting. No excuses. I deliver on time, every time. You get weekly updates and a clear roadmap from Day 1."
    },
    {
      icon: <MessageSquare size={32} />,
      title: "I Speak Business",
      description: "I don't just write code; I build solutions that solve business problems. I focus on ROI, user conversion, and scalability."
    },
    {
      icon: <Zap size={32} />,
      title: "Lightning Fast Speed",
      description: "My sites score 95+ on Google PageSpeed. Fast load times mean better SEO and higher conversion rates for you."
    }
  ];

  return (
    <section className="py-24 px-4 md:px-12 w-full max-w-6xl mx-auto relative z-10">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Why Work With Me?</h2>
        <p className="text-gray-400 font-mono text-sm max-w-xl mx-auto">
          There are thousands of developers out there. Here is why clients choose me.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-white/5 border border-white/5 p-8 rounded-2xl hover:bg-white/10 hover:border-accent/20 transition-all duration-300 group"
          >
            <div className="mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyMe;