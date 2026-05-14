import React from 'react';
import { Cloud, Linkedin, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useModal } from '../../context/ModalContext';

export const Footer = () => {
  const { content } = useLanguage();
  const { openModal } = useModal();
  const t = content.footer;

  return (
    <footer id="footer" className="container mx-auto px-10 pt-20 pb-10">
      <div className="grid md:grid-cols-5 gap-8 mb-12 text-white/80">
        <div className="col-span-2 space-y-6">
          <div className="flex items-center gap-2">
            <div className="h-11 rounded-xl flex items-center justify-center transform rotate-3 overflow-hidden">
              <img
                src="/assets/logos/logo_nubbo_icon.png"
                alt="Logo Icon"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <Cloud className="hidden text-white w-6 h-6" />
            </div>
          </div>
          <p className="max-w-xs font-medium">{t.description}</p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/nubbo/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 cursor-pointer transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/nubbo.io/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 cursor-pointer transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@nubbo8727" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 cursor-pointer transition-all">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <h5 className="text-white font-bold uppercase text-xs tracking-widest">{t.productTitle}</h5>
          <ul className="space-y-2 text-sm font-medium">
            <li><a href="#services" className="hover:text-white transition-colors">{t.productLinks[0]}</a></li>
            <li><a href="#nubboapp" className="hover:text-white transition-colors">{t.productLinks[1]}</a></li>
            <li><a href="#clients" className="hover:text-white transition-colors">{t.productLinks[2]}</a></li>
            <li><a href="#testimonials" className="hover:text-white transition-colors">{t.productLinks[3]}</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h5 className="text-white font-bold uppercase text-xs tracking-widest">{t.companyTitle}</h5>
          <ul className="space-y-2 text-sm font-medium">
            <li><a href="#about2" className="hover:text-white transition-colors">{t.companyLinks[0]}</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h5 className="text-white font-bold uppercase text-xs tracking-widest">{t.legalTitle}</h5>
          <ul className="space-y-2 text-sm font-medium">
            <li><button onClick={() => openModal('privacy')} className="hover:text-white transition-colors cursor-pointer">{t.legalLinks[0]}</button></li>
            <li><button onClick={() => openModal('cookies')} className="hover:text-white transition-colors cursor-pointer">{t.legalLinks[1]}</button></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/10 text-center text-white/40 text-xs font-bold uppercase tracking-widest">
        © {new Date().getFullYear()} Nubbo Software. {t.rights}
      </div>
    </footer>
  );
};
