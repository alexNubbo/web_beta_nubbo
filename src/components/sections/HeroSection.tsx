import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

export const HeroSection = () => {
  const { language, content } = useLanguage();
  const t = content.hero;

  return (
    <section id="hero" className="pt-32 pb-16 px-6 container mx-auto flex flex-col lg:flex-row items-center gap-12 min-h-[90vh]">
      <motion.div
        initial={false}
        className="lg:w-1/2 space-y-8"
      >
        <div className="flex flex-col gap-3 items-start">
          <div className="inline-flex items-center gap-2 bg-primary-blue/40 backdrop-blur-sm text-white px-4 py-2 rounded-full shadow-lg shadow-primary-blue/20 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            {t.badge1}
          </div>
          <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-sm text-primary-blue px-4 py-2 rounded-full shadow-lg shadow-white/10 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 bg-primary-blue rounded-full animate-pulse" />
            {t.badge2}
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
          {language === 'es' ? (
            <>Centraliza tu <span className="text-white drop-shadow-sm">{t.highlight}</span> en un solo lugar.</>
          ) : language === 'en' ? (
            <>Centralize your <span className="text-white drop-shadow-sm">{t.highlight}</span> in one place.</>
          ) : (
            <>Centralizza la tua <span className="text-white drop-shadow-sm">{t.highlight}</span> in un unico posto.</>
          )}
        </h1>

        <p className="text-xl text-white/90 font-medium max-w-xl">{t.desc}</p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="#contact"
            className="bg-white text-primary-blue px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-white/20 transition-all flex items-center justify-center gap-2"
          >
            {t.startNow}
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#nubboapp"
            className="bg-primary-blue/20 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            {t.viewDemo}
          </a>
        </div>

        <div className="flex items-center gap-6 pt-8">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-primary-blue bg-white overflow-hidden shadow-md">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="User" loading="lazy" />
              </div>
            ))}
          </div>
          <p className="text-sm text-white/80 font-medium">
            <span className="text-white font-bold">{t.stats}</span> {t.statsDesc}
          </p>
        </div>
      </motion.div>

      <div className="relative">
        <img
          src="/assets/videos/drag_days_and_services.webp"
          alt="Product Dashboard"
          className="rounded-3xl shadow-2xl w-full object-cover aspect-video"
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </section>
  );
};
