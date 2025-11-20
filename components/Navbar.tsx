import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO } from '../constants';
import logoImage from '../logo.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'الرئيسية', href: '#hero' },
    { title: 'عن الشركة', href: '#about' },
    { title: 'القيمة', href: '#highlights' },
    { title: 'الخدمات', href: '#services' },
    { title: 'تواصل', href: '#contact' },
    { title: 'لوحة المتابعة', href: '#admin' },
    { title: 'الموقع', href: '#location' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 shadow-md backdrop-blur-md py-3' 
          : 'bg-white/50 backdrop-blur-sm py-5 border-b border-gray-100'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button (left on mobile, hidden on desktop) */}
          <button
            className="md:hidden text-brand-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 mr-auto">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-brand-navy/80 hover:text-brand-gold font-bold text-sm lg:text-base transition-colors relative group py-2"
              >
                {link.title}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            <motion.a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-navy text-white px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 hover:bg-brand-gold hover:text-brand-navy transition-all shadow-lg shadow-brand-navy/10"
            >
              <Phone size={18} />
              <span>واتساب مباشر</span>
            </motion.a>
          </div>
          
          {/* Logo Section pinned to the top-right */}
          <div className="flex items-center gap-4 ml-auto">
            <div className="w-14 h-14 md:w-16 md:h-16 relative bg-white rounded-full border border-brand-gold/30 shadow-sm flex items-center justify-center overflow-hidden group">
              <img 
                src={logoImage}
                alt="Takhsees Logo" 
                className="w-full h-full object-contain p-1 opacity-100 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-extrabold text-brand-orange leading-tight tracking-tight">
                {COMPANY_INFO.nameAr}
              </h1>
              <span className="text-xs md:text-sm text-brand-gold font-bold tracking-widest">
                {COMPANY_INFO.nameEn}
              </span>
            </div>
            <motion.a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="hidden lg:inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-xl font-bold shadow-lg shadow-green-500/20"
            >
              <Phone size={16} />
              واتساب
            </motion.a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-brand-navy text-lg font-bold py-3 px-4 rounded-lg hover:bg-brand-slate hover:text-brand-gold transition-colors"
                >
                  {link.title}
                </a>
              ))}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-gold text-white w-full py-3 rounded-lg font-bold mt-2 shadow-lg shadow-brand-gold/20 text-center"
              >
                تواصل واتساب
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;