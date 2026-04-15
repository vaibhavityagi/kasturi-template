import React from 'react';
import { Sparkles, Droplets, Leaf, Heart } from 'lucide-react';

export default function Ticker() {
  const items = [
    { text: "Loved by 10,000+ happy bathers", icon: Heart },
    { text: "Smells like nostalgia", icon: Sparkles },
    { text: "Made for everyday rituals", icon: Droplets },
    { text: "Indian ingredients reimagined", icon: Leaf },
    { text: "Your shower just got better", icon: Sparkles },
  ];

  // 4 sets for seamless -50% translation loop
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-kasturi-yellow py-4 overflow-hidden flex relative z-20 border-b-4 border-kasturi-green/10">
      <div className="flex w-max animate-marquee items-center">
        {duplicatedItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center mx-8 text-kasturi-green">
              <Icon size={20} className="mr-3 text-kasturi-pink" />
              <span className="text-xl md:text-2xl font-heading font-bold uppercase tracking-wide whitespace-nowrap">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
