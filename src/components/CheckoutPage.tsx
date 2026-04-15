import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, Lock } from 'lucide-react';
import { CartItem } from '../App';

interface CheckoutPageProps {
  items: CartItem[];
  onBack: () => void;
  onSuccess: () => void;
}

export default function CheckoutPage({ items, onBack, onSuccess }: CheckoutPageProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 50; // Flat shipping rate
  const total = subtotal + shipping;

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess();
    }, 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 z-[70] bg-white flex flex-col md:flex-row overflow-y-auto"
    >
      {/* Left Column - Order Summary */}
      <div className="w-full md:w-[45%] lg:w-[40%] bg-[#FAFAFA] border-r border-gray-200 p-8 md:p-12 lg:p-16 flex flex-col">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-12 w-max"
        >
          <ArrowLeft size={16} />
          <span className="font-medium text-sm">Back to Kasturi</span>
        </button>

        <div className="mb-8">
          <p className="text-gray-500 text-sm mb-2">Pay Kasturi</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-black">₹ {total.toFixed(2)}</h1>
        </div>

        <div className="flex-1 overflow-y-auto pr-4 space-y-6 mb-8">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white border border-gray-200 rounded-md p-1 relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {item.quantity}
                </span>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-sm text-gray-900">{item.name}</h4>
                <p className="text-xs text-gray-500">Qty {item.quantity}</p>
              </div>
              <p className="font-medium text-sm text-gray-900">₹ {(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-6 space-y-3 text-sm">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span className="font-medium text-gray-900">₹ {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <div className="flex flex-col">
              <span>Shipping</span>
              <span className="text-xs text-gray-400">Standard delivery (3-5 business days)</span>
            </div>
            <span className="font-medium text-gray-900">₹ {shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-black font-bold pt-4 border-t border-gray-200 text-base">
            <span>Total due</span>
            <span>₹ {total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Right Column - Payment Form */}
      <div className="w-full md:w-[55%] lg:w-[60%] bg-white p-8 md:p-12 lg:p-16">
        <form onSubmit={handlePay} className="max-w-xl mx-auto">
          
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4">Contact information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                <input required type="email" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all" placeholder="you@example.com" />
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4">Shipping address</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
                <input required type="text" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all" placeholder="Ananya Sharma" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input required type="text" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all" placeholder="123 Main Street" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input required type="text" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all" placeholder="Mumbai" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Postal code</label>
                  <input required type="text" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all" placeholder="400001" />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4">Payment details</h2>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-600">
                <Lock size={16} />
                <span className="text-sm font-medium">Secure encrypted connection</span>
              </div>
              <div className="flex gap-1">
                <div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center text-[8px] text-white font-bold italic">VISA</div>
                <div className="w-8 h-5 bg-orange-500 rounded flex items-center justify-center text-[8px] text-white font-bold italic">MC</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card number</label>
                <div className="relative">
                  <input required type="text" maxLength={19} className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all font-mono" placeholder="0000 0000 0000 0000" />
                  <CreditCard size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiration date</label>
                  <input required type="text" maxLength={5} className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all font-mono" placeholder="MM / YY" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                  <input required type="text" maxLength={4} className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all font-mono" placeholder="123" />
                </div>
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isProcessing}
            className="w-full bg-[#2D2D2D] hover:bg-black text-white font-bold py-4 rounded-md transition-all flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg"
          >
            {isProcessing ? (
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
              />
            ) : (
              `Pay ₹ ${total.toFixed(2)}`
            )}
          </button>
          
          <p className="text-center text-xs text-gray-400 mt-6">Powered by secure payment infrastructure</p>
        </form>
      </div>
    </motion.div>
  );
}
