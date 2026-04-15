import React, { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import ProductGrid from './components/ProductGrid';
import ReviewsWithProducts from './components/ReviewsWithProducts';
import BrandStory from './components/BrandStory';
import VideoTicker from './components/VideoTicker';
import CTABanner from './components/CTABanner';
import TruckSection from './components/TruckSection';
import Footer from './components/Footer';

// Import new Cart & Checkout components
import CartDrawer from './components/CartDrawer';
import CheckoutPage from './components/CheckoutPage';
import SuccessScreen from './components/SuccessScreen';

export interface CartItem {
  id: string | number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'checkout' | 'success'>('home');

  // Section References for smooth scrolling
  const aboutRef = useRef<HTMLElement>(null);
  const productGridRef = useRef<HTMLElement>(null);
  const brandStoryRef = useRef<HTMLElement>(null);
  const videoTickerRef = useRef<HTMLElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigateSection = (section: string) => {
    if (section === 'shop') scrollToRef(productGridRef);
    if (section === 'ingredients') scrollToRef(aboutRef);
    if (section === 'story') scrollToRef(brandStoryRef);
    if (section === 'testimonials') scrollToRef(videoTickerRef);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (product: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string | number, delta: number) => {
    setCartItems(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(0, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCurrentView('checkout');
  };

  const handlePaymentSuccess = () => {
    setCurrentView('success');
    setCartItems([]); // Clear cart after successful payment
  };

  return (
    <div className="min-h-screen bg-kasturi-cream selection:bg-kasturi-pink selection:text-white relative">
      <Navbar 
        cartCount={cartCount} 
        onOpenCart={() => setIsCartOpen(true)} 
        onNavigateHome={() => {
          setCurrentView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} 
        onNavigateSection={handleNavigateSection}
      />
      
      {/* Main content remains untouched and always renders underneath overlays */}
      <main>
        <Hero />
        <Ticker />
        <About ref={aboutRef} />
        <ProductGrid ref={productGridRef} onAddToCart={handleAddToCart} />
        <ReviewsWithProducts onAddToCart={handleAddToCart} />
        <BrandStory ref={brandStoryRef} />
        <VideoTicker ref={videoTickerRef} />
        <CTABanner onShopClick={() => scrollToRef(productGridRef)} />
        <TruckSection />
      </main>
      <Footer />

      {/* Layered Cart & Checkout UI */}
      <AnimatePresence>
        {isCartOpen && (
          <CartDrawer 
            items={cartItems} 
            onClose={() => setIsCartOpen(false)} 
            onUpdateQuantity={handleUpdateQuantity}
            onCheckout={handleCheckout}
          />
        )}
        {currentView === 'checkout' && (
          <CheckoutPage 
            items={cartItems} 
            onBack={() => setCurrentView('home')} 
            onSuccess={handlePaymentSuccess} 
          />
        )}
        {currentView === 'success' && (
          <SuccessScreen 
            onHome={() => setCurrentView('home')} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
