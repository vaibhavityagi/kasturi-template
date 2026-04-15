import React, { useEffect, useState } from 'react';

const leftImages = [
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/location-flowers.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/Group_147_1.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/Shop-all_1.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/Group_185_1.webp"
];

const rightImages = [
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/Vanilla_flower_asset3.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/f1.webp",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/f4.avif",
  "https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/f3.webp"
];

interface CornerElement {
  position: string;
  src: string;
}

interface DecorativeCornersProps {
  exclude?: string[];
}

const DEFAULT_EXCLUDE: string[] = [];

export default function DecorativeCorners({ exclude = DEFAULT_EXCLUDE }: DecorativeCornersProps) {
  const [corners, setCorners] = useState<CornerElement[]>([]);

  useEffect(() => {
    const allCorners = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
    
    // Filter out excluded corners
    const availableCorners = allCorners.filter(c => !exclude.includes(c));
    
    // Randomly select 1 to 3 corners from the available ones
    const numCorners = Math.min(Math.floor(Math.random() * 3) + 1, availableCorners.length);
    const shuffledCorners = availableCorners.sort(() => 0.5 - Math.random()).slice(0, numCorners);

    const selected = shuffledCorners.map(corner => {
      const isLeft = corner.includes('left');
      const imgArray = isLeft ? leftImages : rightImages;
      const randomImg = imgArray[Math.floor(Math.random() * imgArray.length)];
      return { position: corner, src: randomImg };
    });

    setCorners(selected);
  }, [exclude.join(',')]); // Use joined string to ensure value-based comparison

  return (
    <>
      {corners.map((corner, i) => {
        let positionClasses = "";
        switch(corner.position) {
          case 'top-left': positionClasses = "top-0 left-0 -translate-x-4 -translate-y-4 md:-translate-x-8 md:-translate-y-8"; break;
          case 'top-right': positionClasses = "top-0 right-0 translate-x-4 -translate-y-4 md:translate-x-8 md:-translate-y-8"; break;
          case 'bottom-left': positionClasses = "bottom-0 left-0 -translate-x-4 translate-y-4 md:-translate-x-8 md:translate-y-8"; break;
          case 'bottom-right': positionClasses = "bottom-0 right-0 translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8"; break;
        }
        return (
          <img 
            key={i} 
            src={corner.src} 
            alt="Decorative Element" 
            className={`absolute z-20 w-24 md:w-32 lg:w-48 pointer-events-none object-contain ${positionClasses}`} 
          />
        );
      })}
    </>
  );
}
