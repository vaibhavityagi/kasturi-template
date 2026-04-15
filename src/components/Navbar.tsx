import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  cartCount?: number;
  onOpenCart?: () => void;
  onNavigateHome?: () => void;
  onNavigateSection?: (section: string) => void;
}

export default function Navbar({ cartCount = 0, onOpenCart, onNavigateHome, onNavigateSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Shop', id: 'shop' },
    { name: 'Ingredients', id: 'ingredients' },
    { name: 'Our Story', id: 'story' },
    { name: 'Testimonials', id: 'testimonials' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-kasturi-green/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); onNavigateHome?.(); }} 
          className="flex items-center"
        >
          <img 
            src="https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/logo-white-1-3x.webp" 
            alt="KASTURI" 
            className="h-8 md:h-10 object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigateSection?.(item.id);
              }}
              className="text-white/90 hover:text-kasturi-yellow font-medium text-sm tracking-wide transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4 text-white">
          <button className="hover:text-kasturi-yellow transition-colors">
            <Search size={20} />
          </button>
          <button 
            onClick={onOpenCart}
            className="hover:text-kasturi-yellow transition-colors relative"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-kasturi-pink text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-kasturi-green shadow-xl border-t border-white/10"
        >
          <div className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateSection?.(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className="text-white text-lg font-heading py-2 border-b border-white/10"
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
