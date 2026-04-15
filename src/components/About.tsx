import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Droplets, Leaf, Flame } from 'lucide-react';
import DecorativeCorners from './DecorativeCorners';

const About = forwardRef<HTMLElement, {}>((props, ref) => {
  const highlights = [
    { text: "Handcrafted in small batches", icon: Flame },
    { text: "Inspired by Indian ingredients", icon: Leaf },
    { text: "Skin friendly formulations", icon: Droplets },
    { text: "Bold fragrance experience", icon: Sparkles },
  ];

  return (
    <section ref={ref} id="made-with-roots-section" className="py-24 bg-kasturi-cream relative overflow-hidden">
      {/* Background Image with 5% opacity */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none mix-blend-multiply" 
        style={{ 
          backgroundImage: 'url(https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/bggg.webp', 
          opacity: 0.05, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }} 
      />

      <DecorativeCorners />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-6xl font-heading font-bold text-kasturi-green mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Made with roots. <br className="hidden md:block"/>
            <span className="text-kasturi-pink italic">Loved today.</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-2xl text-kasturi-dark/80 font-body leading-relaxed mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Kasturi soaps bring together nostalgic Indian ingredients and modern skincare. From Gulaab to Haldi to Chandan, each bar is handcrafted to turn everyday bathing into a sensory ritual.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center justify-center text-center bg-white p-8 md:p-10 rounded-2xl shadow-lg min-h-[240px] border border-gray-50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                >
                  <div className="w-20 h-20 rounded-full bg-kasturi-yellow/20 flex items-center justify-center mb-6 text-kasturi-green">
                    <Icon size={36} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-kasturi-dark">{item.text}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
