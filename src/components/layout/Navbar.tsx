import React, { useEffect, useState } from 'react';
import { Cloud, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, content } = useLanguage();
  const t = content.nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, href: '#hero' },
    { name: t.benefits, href: '#values' },
    { name: t.features, href: '#services' },
    { name: t.demo, href: '#nubboapp' },
    { name: t.about, href: '#about2' },
    { name: t.clients, href: '#clients' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-morphism py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <div className="h-11 rounded-xl flex items-center justify-center transform rotate-3 overflow-hidden">
            <img
              src="/assets/logos/logo_nubbo_icon_negro.png"
              alt="Logo Icon"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <Cloud className="hidden text-white w-6 h-6" />
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary-blue ${scrolled ? 'text-gray-600' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}

          <div className="flex items-center gap-4 ml-4">
            <div className={`flex backdrop-blur-sm rounded-full p-1 border transition-colors ${scrolled ? 'bg-gray-100 border-gray-200' : 'bg-white/10 border-white/20'}`}>
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'es' ? 'bg-primary-blue text-white' : scrolled ? 'text-gray-500 hover:text-gray-900' : 'text-white/60 hover:text-white'}`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'en' ? 'bg-primary-blue text-white' : scrolled ? 'text-gray-500 hover:text-gray-900' : 'text-white/60 hover:text-white'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('it')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'it' ? 'bg-primary-blue text-white' : scrolled ? 'text-gray-500 hover:text-gray-900' : 'text-white/60 hover:text-white'}`}
              >
                IT
              </button>
            </div>

            <a
              href="#contact"
              className="bg-primary-blue text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:shadow-primary-blue/30 transition-all hover:scale-105 active:scale-95"
            >
              {t.tryDemo}
            </a>
          </div>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <div className={`flex backdrop-blur-sm rounded-full p-1 border transition-colors ${scrolled ? 'bg-gray-100 border-gray-200' : 'bg-white/10 border-white/20'}`}>
            <button
              onClick={() => setLanguage('es')}
              className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all ${language === 'es' ? 'bg-primary-blue text-white' : scrolled ? 'text-gray-400 hover:text-gray-900' : 'text-white/60 hover:text-white'}`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all ${language === 'en' ? 'bg-primary-blue text-white' : scrolled ? 'text-gray-400 hover:text-gray-900' : 'text-white/60 hover:text-white'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('it')}
              className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all ${language === 'it' ? 'bg-primary-blue text-white' : scrolled ? 'text-gray-400 hover:text-gray-900' : 'text-white/60 hover:text-white'}`}
            >
              IT
            </button>
          </div>
          <button className="p-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl p-6 lg:hidden flex flex-col gap-4 border-t border-gray-100"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium p-2 hover:bg-gray-50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-primary-blue text-white py-4 rounded-xl font-bold mt-4 shadow-lg">{t.requestDemo}</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
