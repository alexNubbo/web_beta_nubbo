import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const CtaSection = () => {
  const { content } = useLanguage();

  return (
    <section id="cta" className="container mx-auto px-6 py-20 text-center text-white space-y-8">
      <h2 className="text-3xl md:text-5xl font-display font-bold max-w-3xl mx-auto">{content.cta.title}</h2>
      <p className="text-xl text-white/80 max-w-2xl mx-auto">{content.cta.desc}</p>
      <div className="h-px w-24 bg-white/30 mx-auto" />
    </section>
  );
};
