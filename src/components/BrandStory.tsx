import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import DecorativeCorners from "./DecorativeCorners";

const BrandStory = forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <section
      ref={ref}
      id="born-from-indian-rituals-section"
      className="flex flex-col relative overflow-hidden"
    >
      <DecorativeCorners />

      {/* Top Block - Full Width Video */}
      <div className="w-full bg-[#F4F1EA] flex items-center justify-center relative z-10 -mb-1">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full relative leading-[0]"
        >
          <video
            src="https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/b895d7a2c4894084a6267934902dc25b.HD-1080p-7.2Mbps-45136538.webm"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            className="w-full h-auto object-cover block"
            preload="auto"
            // @ts-expect-error - fetchPriority is not yet in react types for video elements
            fetchPriority="high"
            poster="https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/forest.webp"
          />
        </motion.div>
      </div>

      {/* Bottom Block - Solid Color */}
      <div className="w-full bg-kasturi-green text-white p-12 lg:p-24 flex flex-col justify-center items-center text-center relative z-10">
        {/* Abstract Folk Illustration Placeholder */}
        <div className="absolute bottom-0 right-0 opacity-20 pointer-events-none transform translate-x-1/4 translate-y-1/4">
          <svg
            width="400"
            height="400"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FFC72C"
              d="M45.7,-76.3C58.9,-69.3,69.1,-55.3,77.5,-40.7C85.9,-26.1,92.5,-10.9,90.4,3.5C88.3,17.9,77.5,31.5,66.8,43.5C56.1,55.5,45.5,65.9,32.4,72.6C19.3,79.3,3.7,82.3,-10.8,79.6C-25.3,76.9,-38.7,68.5,-51.1,58.4C-63.5,48.3,-74.9,36.5,-81.2,22.1C-87.5,7.7,-88.7,-9.3,-82.5,-23.8C-76.3,-38.3,-62.7,-50.3,-48.6,-57.1C-34.5,-63.9,-19.9,-65.5,-3.8,-60.3C12.3,-55.1,24.6,-43.1,45.7,-76.3Z"
              transform="translate(100 100) scale(1.1)"
            />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight">
            Born from Indian bathing rituals
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-body leading-relaxed mb-8">
            Kasturi started with one idea — bring nostalgic Indian ingredients
            into modern everyday bathing. Inspired by haldi ubtans, rose water
            rituals, and sandalwood pastes, we created soaps that smell like
            home but feel made for today.
          </p>
        </motion.div>
      </div>
    </section>
  );
});

export default BrandStory;

