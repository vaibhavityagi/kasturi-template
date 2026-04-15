import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Wheat, Brain, Leaf } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Gulaab Glow Bestseller Combo",
    description: "We made sure your mornings get the right amount of love and pure desi rose essence.",
    originalPrice: "Rs. 490.00",
    price: "Rs. 349.00",
    badge: "Kasturi Choice",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/ChatGPT-Image-Mar-28-2026-08_00_42-PM.webp"
  },
  {
    id: 2,
    name: "Haldi Bright Fruit & Nut",
    description: "We made sure your mornings get the right amount of love and golden turmeric.",
    originalPrice: "Rs. 490.00",
    price: "Rs. 349.00",
    badge: "Kasturi Choice",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/15bc35fc-3a92-4aa7-bc8a-31d3fc78a341.webp"
  },
  {
    id: 3,
    name: "Chandan Calm Dark Chocolate",
    description: "We made sure your mornings get the right amount of love and cooling sandalwood.",
    originalPrice: "Rs. 490.00",
    price: "Rs. 339.00",
    badge: "Kasturi Choice",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/fde011c2-55d2-46a7-bae1-b79ad76bd9ee.webp"
  }
];

interface ProductGridProps {
  onAddToCart?: (item: any) => void;
}

const ProductGrid = forwardRef<HTMLElement, ProductGridProps>(({ onAddToCart }, ref) => {
  return (
    <section ref={ref} id="meet-kasturi-bars-section" className="py-24 relative bg-none">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-6xl font-heading font-bold text-kasturi-green uppercase tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Meet the <span className="text-kasturi-pink">Kasturi</span> bars
          </motion.h2>
          <p className="mt-4 text-lg text-gray-600 font-body">From crunch rock to smooth jazz, discover lip-smacking food that'll make your taste buds sing!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              className="flex flex-col group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Arched Image Container */}
              <div className="relative bg-[#F8F5F0] rounded-t-[150px] rounded-b-2xl pt-16 px-8 pb-8 flex flex-col items-center justify-center mb-6 transition-transform duration-300 group-hover:-translate-y-2">
                
                {/* Badge */}
                <div className="absolute top-2 right-2 z-20 w-16 h-16">
                   <svg viewBox="0 0 100 100" className="text-[#1A3626] fill-current w-full h-full drop-shadow-md">
                      <path d="M50 0 L61 15 L79 11 L84 28 L100 38 L90 54 L98 71 L80 78 L72 95 L54 88 L38 100 L28 84 L11 79 L15 61 L0 50 L15 39 L11 21 L28 16 L38 0 L54 12 Z" />
                   </svg>
                   <span className="absolute inset-0 flex items-center justify-center text-white text-[10px] font-bold leading-tight text-center">
                     {product.badge.split(' ')[0]}<br/>{product.badge.split(' ')[1]}
                   </span>
                </div>
                
                {/* White Square with Image */}
                <div className="bg-white w-full aspect-square rounded-2xl shadow-sm p-4 relative z-10 flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Icons */}
                <div className="absolute bottom-4 right-6 flex gap-2 z-20">
                  <div className="w-7 h-7 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center shadow-sm"><Wheat size={14} strokeWidth={2.5}/></div>
                  <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shadow-sm"><Brain size={14} strokeWidth={2.5}/></div>
                  <div className="w-7 h-7 rounded-full bg-green-100 text-green-600 flex items-center justify-center shadow-sm"><Leaf size={14} strokeWidth={2.5}/></div>
                </div>
              </div>

              {/* Text Details */}
              <div className="flex flex-col flex-grow">
                <h3 className="font-heading font-bold text-xl text-kasturi-dark mb-2 leading-tight">{product.name}</h3>
                <p className="text-sm text-gray-600 font-body mb-4 line-clamp-2">{product.description}</p>
                
                <div className="mt-auto">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-gray-400 line-through text-sm font-medium">{product.originalPrice}</span>
                    <span className="font-bold text-lg text-kasturi-dark">From {product.price}</span>
                  </div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-4">Inclusive of All Taxes</p>
                  
                  <button 
                    onClick={() => onAddToCart && onAddToCart({
                      id: `pg-${product.id}`,
                      name: product.name,
                      price: parseInt(product.price.match(/\d+/)?.[0] || '0', 10),
                      image: product.image
                    })}
                    className="w-full bg-[#1A3626] hover:bg-kasturi-green text-white font-bold py-3.5 rounded-full transition-colors text-sm tracking-wide shadow-md"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ProductGrid;
