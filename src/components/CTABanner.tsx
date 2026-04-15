import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import DecorativeCorners from './DecorativeCorners';

interface CTABannerProps {
  onShopClick?: () => void;
}

export default function CTABanner({ onShopClick }: CTABannerProps) {
  return (
    <section className="py-24 bg-kasturi-yellow relative overflow-hidden">
      <DecorativeCorners />
      
      {/* Decorative Icons */}
      <div className="absolute top-10 left-10 text-kasturi-green/20 animate-pulse">
        <Sparkles size={48} />
      </div>
      <div className="absolute bottom-10 right-10 text-kasturi-pink/20 animate-bounce">
        <Sparkles size={64} />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white/30 backdrop-blur-sm p-12 rounded-[3rem] border border-white/50 shadow-xl"
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-kasturi-green mb-6 leading-tight">
            Your shower <br className="hidden md:block"/> deserves better.
          </h2>
          <p className="text-xl md:text-2xl text-kasturi-green/80 font-body mb-10">
            Upgrade your everyday ritual with Kasturi.
          </p>
          <button 
            onClick={onShopClick}
            className="bg-kasturi-dark hover:bg-kasturi-green text-white font-bold py-5 px-12 rounded-full text-lg uppercase tracking-widest transition-all hover:shadow-xl hover:-translate-y-1"
          >
            Shop All Soaps
          </button>
        </motion.div>
      </div>
    </section>
  );
}
