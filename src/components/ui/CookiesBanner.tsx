import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { useCookieConsent } from '../../hooks/useCookieConsent';

export const CookiesBanner = () => {
  const { cookiesAccepted, acceptCookies } = useCookieConsent();
  const { content } = useLanguage();

  return (
    <AnimatePresence>
      {!cookiesAccepted && (
        <motion.div
          id="cookies"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:w-[400px] z-50 p-6 glass-morphism rounded-3xl shadow-2xl space-y-4"
        >
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center text-primary-blue flex-shrink-0">
              <ShieldCheck />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sm">{content.cookies.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{content.cookies.text}</p>
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button
              onClick={acceptCookies}
              className="flex-1 bg-primary-blue text-white py-3 rounded-xl text-xs font-bold shadow-lg shadow-primary-blue/20"
            >
              {content.cookies.accept}
            </button>
            <button className="flex-1 bg-gray-100 py-3 rounded-xl text-xs font-bold">{content.cookies.settings}</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
