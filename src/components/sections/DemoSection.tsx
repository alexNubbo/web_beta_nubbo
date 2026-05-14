import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';

export const DemoSection = () => {
  const [activeDemoTab, setActiveDemoTab] = useState(0);
  const { content } = useLanguage();
  const demoTabs = content.demoSection.tabs;

  return (
    <section id="nubboapp" className="bg-white py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-display font-bold">{content.demoSection.title}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">{content.demoSection.desc}</p>
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex flex-wrap justify-center gap-4">
            {demoTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveDemoTab(index)}
                className={`px-6 py-3 rounded-full text-xs md:text-sm font-bold transition-all ${activeDemoTab === index
                  ? 'bg-primary-blue text-white shadow-lg shadow-primary-blue/20'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDemoTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <span className="text-primary-blue font-bold uppercase text-xs tracking-[0.2em]">
                  {demoTabs[activeDemoTab].scenario}
                </span>
                <h3 className="text-3xl font-display font-bold">{demoTabs[activeDemoTab].title}</h3>
                <p className="text-gray-600 font-medium italic">{demoTabs[activeDemoTab].subtitle}</p>
                <ul className="space-y-4">
                  {demoTabs[activeDemoTab].bullets.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start font-medium text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeDemoTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative group"
              >
                <div className="relative bg-white overflow-hidden italic rounded-3xl border border-gray-100">
                  <img
                    key={demoTabs[activeDemoTab].video}
                    src={demoTabs[activeDemoTab].video}
                    alt={demoTabs[activeDemoTab].title}
                    className="w-full aspect-video object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full">
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Video Demo</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
