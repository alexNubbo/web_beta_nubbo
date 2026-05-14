import React from 'react';
import { Clock, Layout, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const BenefitsSection = () => {
  const { content } = useLanguage();

  const items = [
    {
      icon: <Layout className="w-12 h-12" />,
      title: content.benefits.title1,
      desc: content.benefits.desc1,
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: content.benefits.title2,
      desc: content.benefits.desc2,
    },
    {
      icon: <ShieldCheck className="w-12 h-12" />,
      title: content.benefits.title3,
      desc: content.benefits.desc3,
    },
  ];

  return (
    <section id="values" className="bg-white py-24 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-16">
          {items.map((item, i) => (
            <div key={i} className="space-y-6 text-center md:text-left group">
              <div className="w-24 h-24 bg-primary-blue/5 text-primary-blue rounded-[2.5rem] flex items-center justify-center mx-auto md:mx-0 shadow-inner group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-3xl font-display font-bold tracking-tight">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium text-lg">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
