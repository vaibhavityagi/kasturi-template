import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import DecorativeCorners from './DecorativeCorners';

const products = [
  {
    id: 1,
    name: "Gulaab Glow",
    price: "₹249",
    badge: "Best Seller",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/38ca31287bcd3be346ce4ee507cbd6e9.webp",
    desc: "Soft floral glow with pure desi rose essence."
  },
  {
    id: 2,
    name: "Haldi Bright",
    price: "₹249",
    badge: "New!",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/932a0961971ebb3d941b1659ffc6e2ca.webp",
    desc: "Golden turmeric for radiant, even-toned skin."
  },
  {
    id: 3,
    name: "Chandan Calm",
    price: "₹249",
    badge: "Classic",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/38ca31287bcd3be346ce4ee507cbd6e9.webp",
    desc: "Cooling sandalwood for a soothing cleanse."
  },
  {
    id: 4,
    name: "Neem Purify",
    price: "₹249",
    badge: "Restocked",
    image: "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/932a0961971ebb3d941b1659ffc6e2ca.webp",
    desc: "Clarifying neem and tulsi for clear skin."
  }
];

interface ReviewsWithProductsProps {
  onAddToCart?: (item: any) => void;
}

export default function ReviewsWithProducts({ onAddToCart }: ReviewsWithProductsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-kasturi-cream overflow-hidden border-t border-kasturi-green/10 relative">
      {/* Exclude bottom-left corner element */}
      <DecorativeCorners exclude={['bottom-left']} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Content - Testimonial */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex text-kasturi-pink mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-kasturi-dark/60 leading-tight mb-8">
                "Smells like my dadi's bathroom but make it modern. I didn't expect soap to feel this special."
              </h2>
              <p className="font-heading font-bold text-2xl text-kasturi-dark mb-8">
                Ananya Sharma
              </p>
              
              <button className="bg-kasturi-pink hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full uppercase tracking-wider text-sm transition-colors w-max mb-12">
                Shop Kasturi
              </button>

              <div className="pt-8 border-t border-kasturi-dark/10">
                <p className="text-sm text-kasturi-dark/50 uppercase tracking-wider mb-4">Also seen on</p>
                <div className="flex gap-6 items-center opacity-60 grayscale">
                  <span className="font-heading font-bold text-xl">VOGUE</span>
                  <span className="font-heading font-bold text-xl">GQ</span>
                  <span className="font-heading font-bold text-xl">ELLE</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Product Carousel */}
          <div className="w-full lg:w-2/3 relative">
            <div className="flex justify-end gap-4 mb-6 pr-4">
              <button 
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full border border-kasturi-dark/20 flex items-center justify-center hover:bg-kasturi-dark hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full border border-kasturi-dark/20 flex items-center justify-center hover:bg-kasturi-dark hover:text-white transition-colors"
              >
                <ArrowRight size={20} />
              </button>
            </div>

            <div 
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8"
            >
              {products.map((product, index) => (
                <motion.div 
                  key={product.id}
                  className="min-w-[280px] md:min-w-[320px] snap-start flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-kasturi-green/5"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative aspect-[4/5] bg-gray-100">
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-kasturi-green text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                        {product.badge}
                      </span>
                    </div>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col h-[200px] justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-kasturi-dark mb-2">{product.name}</h3>
                      <p className="text-sm text-kasturi-dark/70 font-body line-clamp-2">{product.desc}</p>
                    </div>
                    <div>
                      <p className="font-bold text-lg text-kasturi-dark mb-4">{product.price}</p>
                      <button 
                        onClick={() => onAddToCart && onAddToCart({
                          id: `rwp-${product.id}`,
                          name: product.name,
                          price: parseInt(product.price.match(/\d+/)?.[0] || '0', 10),
                          image: product.image
                        })}
                        className="w-full bg-kasturi-pink hover:bg-pink-600 text-white font-bold py-3 rounded-md uppercase tracking-wider text-sm transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
