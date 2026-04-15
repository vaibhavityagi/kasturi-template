import React from 'react';
import { Sparkles } from 'lucide-react';

const SocialIcons = {
  Instagram: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  ),
  Facebook: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  ),
  Twitter: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
  ),
  Youtube: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 69.44 69.44 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 69.44 69.44 0 0 1-15 0 2 2 0 0 1-2-2Z"/><path d="m10 15 5-3-5-3z"/></svg>
  ),
  Pinterest: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="16"/><line x1="8" x2="16" y1="12" y2="12"/></svg>
  )
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-kasturi-cream pt-24 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <div className="absolute top-[5%] left-[5%] text-kasturi-yellow"><Sparkles size={48} /></div>
        <div className="absolute bottom-[10%] right-[10%] text-kasturi-pink"><Sparkles size={64} /></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Sign Up & Get 10% Off Section */}
        <div className="bg-kasturi-pink text-white py-12 px-8 rounded-3xl text-center mb-16 shadow-lg relative overflow-hidden">
          
          {/* Decorative Corner Images */}
          <img 
            src="https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/f6.webp" 
            alt="Decorative Left Corner" 
            className="absolute top-0 left-0 w-32 md:w-48 lg:w-56 object-contain pointer-events-none"
          />
          <img 
            src="https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/f5.webp" 
            alt="Decorative Right Corner" 
            className="absolute bottom-0 right-0 w-32 md:w-48 lg:w-56 object-contain pointer-events-none"
          />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">Sign Up & Get 10% Off</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto font-body">
              Get priority access to our new launches + sales, highly cookable recipes, seasonal reading lists and more when you
              sign up for our newsletter. Plus, get 10% off your first order!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-6 py-4 rounded-full text-kasturi-dark focus:outline-none focus:ring-2 focus:ring-kasturi-yellow"
              />
              <button className="bg-kasturi-yellow hover:bg-kasturi-yellow/80 text-kasturi-dark font-bold py-4 px-8 rounded-full uppercase tracking-widest transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-kasturi-dark/10">
          <div className="md:col-span-1">
            <img 
              src="https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/kasturi/logo-black-3x.webp" 
              alt="KASTURI" 
              className="h-10 md:h-12 mb-6 object-contain" 
            />
            <p className="text-sm text-kasturi-dark/70 font-body leading-relaxed">
              We're bringing nostalgic Indian ingredients into modern everyday bathing. Rooted in tradition, made for today.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-kasturi-dark hover:text-kasturi-pink transition-colors"><SocialIcons.Instagram /></a>
              <a href="#" aria-label="Facebook" className="text-kasturi-dark hover:text-kasturi-pink transition-colors"><SocialIcons.Facebook /></a>
              <a href="#" aria-label="Twitter" className="text-kasturi-dark hover:text-kasturi-pink transition-colors"><SocialIcons.Twitter /></a>
              <a href="#" aria-label="Youtube" className="text-kasturi-dark hover:text-kasturi-pink transition-colors"><SocialIcons.Youtube /></a>
              <a href="#" aria-label="Pinterest" className="text-kasturi-dark hover:text-kasturi-pink transition-colors"><SocialIcons.Pinterest /></a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg text-kasturi-dark mb-4">Shop</h4>
            <ul className="space-y-2 text-kasturi-dark/80 font-body">
              <li><a href="#" className="hover:text-kasturi-pink transition-colors">Shop All</a></li>
              <li><a href="#" className="hover:text-kasturi-pink transition-colors">Gulaab Glow</a></li>
              <li><a href="#" className="hover:text-kasturi-pink transition-colors">Haldi Bright</a></li>
              <li><a href="#" className="hover:text-kasturi-pink transition-colors">Chandan Calm</a></li>
              <li><a href="#" className="hover:text-kasturi-pink transition-colors">Gifts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg text-kasturi-dark mb-4">Discover</h4>
            <ul className="space-y-2 text-kasturi-dark/80 font-body">
              <li><a href="#" className="hover:text-kasturi-pink transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-kasturi-pink transition-colors">Ingredients</a></li>
              <li><a href="#" className="hover:text-kasturi-pink transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-kasturi-pink transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg text-kasturi-dark mb-4">Support</h4>
            <ul className="space-y-2 text-kasturi-dark/80 font-body">
              <li><a href="#" className="hover:text-kasturi-pink transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-kasturi-pink transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-kasturi-pink transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-kasturi-pink transition-colors">Wholesale</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm text-kasturi-dark/60 font-body">
          <p>&copy; {currentYear} Kasturi. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-kasturi-dark">Privacy Policy</a>
            <a href="#" className="hover:text-kasturi-dark">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
