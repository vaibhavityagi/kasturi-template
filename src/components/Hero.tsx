import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const backgroundImages = [
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/haldi.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/rose.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/chandan.webp"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Preload images for smooth transitions
  useEffect(() => {
    backgroundImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Handle the 4-second looping carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden -mb-1 w-full">
      
      {/* Dynamic Background Image Carousel */}
      <div className="absolute inset-0 z-0 bg-black">
        {backgroundImages.map((src, index) => (
          <img 
            key={src}
            src={src} 
            alt={`Kasturi Hero Background ${index + 1}`} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {/* 40% Black Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* Left-Aligned Content Container */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-start justify-center text-left h-full">
        
        <div className="max-w-3xl text-white flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-kasturi-yellow/20 text-kasturi-yellow text-sm font-bold tracking-wider uppercase mb-6 border border-kasturi-yellow/30 backdrop-blur-sm">
              Handcrafted Ayurvedic Soaps
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.1] mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Bathing, the <br className="md:hidden"/>
            <span className="text-kasturi-yellow italic md:pl-4">Kasturi</span> way.
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-10 max-w-lg font-body leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Rooted in tradition. Made for today. Discover bold Indian fragrances crafted into everyday rituals.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="bg-kasturi-pink hover:bg-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-kasturi-pink/30">
              Shop Soaps
            </button>
            <button className="bg-transparent border-2 border-white/50 hover:border-white text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-white/10 backdrop-blur-sm">
              Explore Ingredients
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Divider Image - Positioned exactly at the bottom to connect seamlessly */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-20 translate-y-[30%]">
        <img 
          src="https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/Group-1321318581-1-1.webp" 
          alt="Wave Separator" 
          className="w-full h-auto object-cover block"
        />
      </div>
    </section>
  );
}
