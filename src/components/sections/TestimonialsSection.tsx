import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const TestimonialsSection = () => {
  const { content } = useLanguage();

  return (
    <section id="testimonials" className="container mx-auto px-6 py-20 overflow-hidden">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-white text-4xl font-display font-bold">{content.testimonials.title}</h2>
        <p className="text-white/70 max-w-xl mx-auto font-medium">{content.testimonials.desc}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.testimonials.items.map((item, i) => (
          <div key={i} className="bg-white p-10 rounded-3xl shadow-xl flex flex-col justify-between hover:-translate-y-2 transition-transform">
            <div className="space-y-4">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star}>★</span>
                ))}
              </div>
              <p className="italic text-gray-600 font-medium">"{item.text}"</p>
            </div>
            <div className="flex items-center gap-4 pt-8">
              <div className="w-12 h-12 rounded-full bg-primary-blue/10 flex items-center justify-center font-bold text-primary-blue">
                {item.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')}
              </div>
              <div>
                <h5 className="font-bold text-sm">{item.name}</h5>
                <p className="text-xs text-gray-400 font-bold">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
