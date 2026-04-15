import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface SuccessScreenProps {
  onHome: () => void;
}

export default function SuccessScreen({ onHome }: SuccessScreenProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] bg-kasturi-cream flex flex-col items-center justify-center p-6"
    >
      <div className="bg-white p-10 md:p-16 rounded-3xl shadow-2xl max-w-md w-full text-center flex flex-col items-center">
        
        {/* Animated Checkmark */}
        <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-8">
          <motion.svg 
            viewBox="0 0 50 50" 
            className="w-12 h-12 text-green-600"
          >
            <motion.path
              d="M 14.1 27.2 l 7.1 7.2 16.7 -16.8"
              fill="transparent"
              strokeWidth="4"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            />
          </motion.svg>
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl font-heading font-bold text-kasturi-dark mb-4"
        >
          Payment Successful!
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-gray-600 font-body mb-10"
        >
          Thank you for your order. We're getting your Kasturi soaps ready for their journey to you.
        </motion.p>

        <motion.button 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          onClick={onHome}
          className="w-full bg-kasturi-pink hover:bg-pink-600 text-white font-bold py-4 rounded-full uppercase tracking-wider text-sm transition-colors shadow-lg shadow-pink-500/30"
        >
          Return to Homepage
        </motion.button>
      </div>
    </motion.div>
  );
}
