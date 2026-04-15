import React, { useState, useRef, useEffect, forwardRef } from 'react';

const videos = [
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/From-KlickPin-CF-BLOSSOM-AND-SKY-on-Instagram-Petals-of-Serenity-Butterfly-Pea-Flowers-in-Our-Artisanal-Soap-Indulge-in-the-gentle-soothing-essence-of-Butterfly-Pea-Flowe-Video-Video-_-Soap-Fragrance-.webm",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/From-KlickPin-CF-soap-aesthetic-_.webm",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/From-KlickPin-CF-The-Power-of-Reetha-Soapnut-_-Organic-skin-care-Natural-hair-styles-Hair-care.webm",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/From-KlickPin-CF-Tatiana-Paternina-on-Instagram-natural-soaps-for-skin-care-iyushnaturalsofficial-soap-naturalskincare-viralreels-Video-Video-_-Natural-soaps-recipes-Soap-photography-products-Soap-pho.webm",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/From-KlickPin-CF-Intensive-Hand-Care-With-Handmade-Olive-Oil-Castile-Soap-Video-_-Natural-bar-soap-Soap-photography-Organic-soap.webm",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/From-KlickPin-CF-Pin-su-Salvamentos-r-pidos.webm",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/From-KlickPin-CF-Curious-about-our-Saffron-Cleansing-Bar_-Here-are-answers-to-some-frequently-asked-questions-_-Cold-process-soap-designs-Soap-recipes-Saffron-benefits.webm",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/From-KlickPin-CF-THOMAS-BLONDE-on-Instagram-Smooth-skin_-Count-us-in-Did-you-know_-Our-Exfoliating-Moisturizing-Bar-is-the-perfect-way-to-prep-your-skin-before-applying-s-Video-Video-_-Soap-photograph.webm"
];

const VideoTicker = forwardRef<HTMLElement, {}>((props, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const xPos = useRef(0);
  const speed = useRef(0.8); // Base speed
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const loop = () => {
      // Target speed: 0.8 normal, 0.2 hovered (slows down smoothly without stopping)
      const targetSpeed = isHovered ? 0.2 : 0.8;
      
      // Lerp speed for a smooth transition
      speed.current += (targetSpeed - speed.current) * 0.05;
      xPos.current -= speed.current;

      if (scrollerRef.current) {
        // Since we duplicated the array exactly once and added pr-6 to simulate the final gap, 
        // half of the scrollWidth is exactly the width of one original set.
        const halfWidth = scrollerRef.current.scrollWidth / 2;
        
        if (Math.abs(xPos.current) >= halfWidth) {
          xPos.current = 0; // Reset seamlessly
        }
        
        scrollerRef.current.style.transform = `translateX(${xPos.current}px)`;
      }
      
      requestRef.current = requestAnimationFrame(loop);
    };
    
    requestRef.current = requestAnimationFrame(loop);
    
    return () => cancelAnimationFrame(requestRef.current);
  }, [isHovered]);

  // 2 sets for a seamless translation loop
  const duplicatedVideos = [...videos, ...videos];

  return (
    <section ref={ref} id="real-people-rituals-section" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-kasturi-dark">
          Real people. <span className="text-kasturi-pink italic">Real rituals.</span>
        </h2>
      </div>

      <div 
        className="flex relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          ref={scrollerRef}
          // pr-6 ensures the gap math perfectly aligns when looping back to 0
          className="flex w-max items-center gap-6 pr-6"
        >
          {duplicatedVideos.map((videoSrc, index) => (
            <div 
              key={index} 
              className="relative w-[240px] md:w-[300px] aspect-[9/16] rounded-3xl overflow-hidden flex-shrink-0 shadow-soft cursor-pointer border border-gray-100 group bg-gray-50"
            >
              <video 
                src={videoSrc} 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default VideoTicker;
