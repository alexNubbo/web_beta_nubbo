import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const AboutSection = () => {
  const { content } = useLanguage();

  return (
    <section id="about2" className="bg-[#d5e5f6] py-24 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2340"
              alt="Team working"
              className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-2xl max-w-[200px]">
              <p className="text-4xl font-display font-bold text-primary-blue">+10</p>
              <p className="text-xs uppercase font-bold text-gray-400 mt-1">{content.about.experience}</p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-display font-bold">{content.about.title}</h2>
            <p className="text-lg text-gray-600 font-medium leading-relaxed">{content.about.desc}</p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-primary-blue uppercase text-xs mb-2">{content.about.visionTitle}</h4>
                <p className="text-sm text-gray-500">{content.about.visionDesc}</p>
              </div>
              <div>
                <h4 className="font-bold text-primary-blue uppercase text-xs mb-2">{content.about.valuesTitle}</h4>
                <p className="text-sm text-gray-500">{content.about.valuesDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
