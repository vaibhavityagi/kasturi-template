import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Plus, Minus, Trash2, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../App';

interface CartDrawerProps {
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (id: string | number, delta: number) => void;
  onCheckout: () => void;
}

export default function CartDrawer({ items, onClose, onUpdateQuantity, onCheckout }: CartDrawerProps) {
  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      {/* Drawer */}
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle2 size={20} />
            <span className="font-body font-medium text-sm">
              {items.length > 0 ? `${items.reduce((a, b) => a + b.quantity, 0)} item(s) added to your bag` : 'Your bag is empty'}
            </span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-800 transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center">
                <Trash2 size={32} className="opacity-20" />
              </div>
              <p className="font-body">Looks like you haven't added anything yet.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-white">
                <div className="w-24 h-24 bg-[#F8F5F0] rounded-lg overflow-hidden flex-shrink-0 p-2">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h4 className="font-heading font-bold text-kasturi-dark text-lg leading-tight">{item.name}</h4>
                    <p className="text-sm font-bold text-kasturi-dark mt-1">₹ {item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-gray-200 rounded-full">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-kasturi-dark transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm font-bold text-kasturi-dark">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-kasturi-dark transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, -item.quantity)}
                      className="text-gray-400 hover:text-red-500 transition-colors text-sm underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50/50">
          <div className="flex justify-between items-center mb-6">
            <span className="font-body text-gray-600">Subtotal</span>
            <span className="font-heading font-bold text-xl text-kasturi-dark">₹ {subtotal.toFixed(2)}</span>
          </div>
          <div className="space-y-3">
            <button 
              onClick={onCheckout}
              disabled={items.length === 0}
              className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-md transition-colors uppercase tracking-wider text-sm"
            >
              Checkout
            </button>
            <button 
              onClick={onClose}
              className="w-full bg-white border border-black hover:bg-gray-50 text-black font-bold py-4 rounded-md transition-colors uppercase tracking-wider text-sm"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
