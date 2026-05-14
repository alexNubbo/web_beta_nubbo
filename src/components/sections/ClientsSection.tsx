import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

const clients = [
  { name: 'Argentina on the Go', file: 'aotg.png' },
  { name: 'Designer Trips', file: 'dstrip.png' },
  { name: 'Innovart', file: 'innova.png' },
  { name: 'Mater', file: 'mater.png' },
  { name: 'New World', file: 'nwtd.png' },
  { name: 'Quarum', file: 'quarum.png' },
  { name: 'Raja Tours', file: 'raja.png' },
  { name: 'Signature DMC', file: 'signa.png' },
  { name: 'Africale', file: 'africale.png' },
  { name: 'Gador', file: 'gador.png' },
  { name: 'Priority', file: 'priority.png' },
];

export const ClientsSection = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const inView = useInView(containerRef, { amount: 0.1, once: false });
  const prefersReducedMotion = useReducedMotion();

  const marqueeItems = clients.concat(clients);

  return (
    <section id="clients" className="bg-white py-24 overflow-hidden relative group" ref={containerRef}>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {!prefersReducedMotion && inView ? (
        <motion.div
          className="flex whitespace-nowrap min-w-max gap-20 items-center px-10"
          style={{ backfaceVisibility: 'hidden', perspective: 1000 }}
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{
            duration: 40,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
        {marqueeItems.map((client, idx) => (
          <div
            key={`${client.name}-${idx}`}
            className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 flex-shrink-0 cursor-pointer"
          >
            <div className="h-14 w-40 flex items-center justify-center px-4">
              <img
                src={`/assets/logos/${client.file}`}
                alt={client.name}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
                className="max-h-full max-w-full object-contain"
              />
              <span className="hidden text-xl font-bold text-gray-300 tracking-tighter uppercase whitespace-nowrap">{client.name}</span>
            </div>
          </div>
        ))}
        </motion.div>
      ) : (
        <div className="flex whitespace-nowrap min-w-max gap-20 items-center px-10">
          {marqueeItems.map((client, idx) => (
            <div key={`${client.name}-${idx}`} className="flex flex-col items-center gap-2 opacity-40 flex-shrink-0">
              <div className="h-14 w-40 flex items-center justify-center px-4">
                <img
                  src={`/assets/logos/${client.file}`}
                  alt={client.name}
                  loading="lazy"
                  decoding="async"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
