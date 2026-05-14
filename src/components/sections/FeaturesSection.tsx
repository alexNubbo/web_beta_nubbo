import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const FeaturesSection = () => {
  const { content } = useLanguage();

  return (
    <section
      id="services"
      className="relative py-24 px-6 overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(to bottom right, rgba(15, 23, 42, 0.9), rgba(30, 64, 175, 0.85), rgba(59, 130, 246, 0.8)), url('/assets/images/travel-concept-with-landmarks.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4 max-w-xl">
            <h4 className="text-white/80 font-bold uppercase text-sm">{content.features.tag}</h4>
            <h2 className="text-4xl font-display font-bold text-white">{content.features.title}</h2>
          </div>
          <p className="text-white/70 max-w-sm font-medium">{content.features.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.features.items.map((item, i) => (
            <div key={i} className="group p-8 rounded-[2.5rem] bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors shadow-xl border border-white/20">
              <div className="w-14 h-14 bg-white/20 rounded-2xl shadow-lg flex items-center justify-center text-white mb-6 group-hover:scale-110">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
              <p className="text-white/70 text-sm ">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
