import React from 'react';

export default function TruckSection() {
  return (
    <section className="relative w-full z-30 overflow-hidden bg-black">
      <video
        src="https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/Comp-1-1.webm"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto object-cover pointer-events-none"
      />
    </section>
  );
}
