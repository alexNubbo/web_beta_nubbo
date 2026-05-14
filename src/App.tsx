/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  ChevronRight,
  CheckCircle2,
  Users,
  Cloud,
  Map,
  BarChart3,
  Globe,
  MessageSquare,
  X,
  Mail,
  Phone,
  ArrowRight,
  Menu,
  Layout,
  Clock,
  ShieldCheck,
  Smartphone,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

// --- Translations ---

const translations = {
  es: {
    nav: {
      home: 'Inicio',
      benefits: 'Beneficios',
      features: 'Funcionalidades',
      demo: 'Demo',
      about: 'Nosotros',
      clients: 'Clientes',
      contact: 'Contacto',
      tryDemo: 'Probar Demo',
      requestDemo: 'Solicitar Demo'
    },
    hero: {
      badge1: 'Plan base con 6 usuarios incluidos',
      badge2: 'Sin costo de implementación',
      title: 'Centraliza tu operación turística en un solo lugar.',
      highlight: 'operación turística',
      desc: 'Diseñado específicamente para DMCs y agencias receptivas. Nubbo te ayuda a crear itinerarios complejos, gestionar reservas y automatizar tu logística sin esfuerzo.',
      startNow: 'Comenzar ahora',
      viewDemo: 'Ver Demo',
      stats: '+100.000 itinerarios',
      statsDesc: 'creados con nubbbo'
    },
    cta: {
      title: 'Deja atrás el desorden de los archivos Excel y las horas perdidas en cotizaciones manuales.',
      desc: 'Nubbo nace para resolver los "dolores" reales de los operadores turísticos: falta de seguimiento, errores de carga y pérdida de información.'
    },
    benefits: {
      title1: 'Itinerarios Dinámicos',
      desc1: 'Crea experiencias personalizadas en minutos. Genera PDFs y versiones online que enamoran a tus clientes.',
      title2: 'Operación en Tiempo Real',
      desc2: 'Control total de tus traslados, guías y proveedores desde cualquier dispositivo. Sin sorpresas de último momento.',
      title3: 'Nube Segura',
      desc3: 'Toda la información de tu agencia centralizada y accesible 24/7 con los más altos estándares de seguridad.'
    },
    features: {
      tag: 'Funcionalidades',
      title: 'Herramientas diseñadas por expertos en turismo.',
      desc: 'Resolvemos la complejidad de la logística multi-destino y los viajes tailor-made.',
      items: [
        { title: "Gestión de DMCs", icon: <Globe />, text: "Especializado para agencias de turismo receptivo y operadores locales." },
        { title: "Vouchers Automáticos", icon: <ArrowRight />, text: "Generación instantánea de documentos oficiales para tus pasajeros." },
        { title: "Base de Proveedores", icon: <Users />, text: "Directorio centralizado con tarifarios y contactos de servicios." },
        { title: "CRM y herramientas extras", icon: <Zap />, text: "Gestión de Vamoos, AI, Arca, contactos y administración centralizada." },
        { title: "Itinerarios webs automáticos", icon: <Layout />, text: "Propuestas dinámicas y profesionales que tus clientes pueden consultar online." },
        { title: "Reportes Avanzados", icon: <BarChart3 />, text: "Analiza tu productividad y rentabilidad en tiempo real." }
      ]
    },
    demoSection: {
      title: 'Un producto real, maduro y robusto.',
      desc: 'Explora cómo funciona Nubbo en diferentes escenarios operativos.',
      tabs: [
        {
          id: 'reorder-city',
          label: 'Reordenar por ciudad',
          scenario: 'Escenario: Operación Logística',
          title: 'Re-ordenar por ciudad',
          subtitle: 'Optimiza la ruta de tus pasajeros instantáneamente.',
          bullets: [
            "Cambia el orden de los destinos con un solo click.",
            "Recálculo automático de traslados.",
            "Ajuste dinámico de servicios asociados."
          ],
          video: '/assets/videos/reorder-city.webp'
        },
        {
          id: 'trip-summary',
          label: 'Resumen de viaje',
          scenario: 'Escenario: Resumen de Itinerario',
          title: 'Resumen del viaje',
          subtitle: 'Vista panorámica de todo el itinerario.',
          bullets: [
            "Visualización clara de días y noches.",
            "Balance de servicios por destino.",
            "Exportación rápida para revisión interna."
          ],
          video: '/assets/videos/trip-summary.webp'
        },
        {
          id: 'multi-quotes',
          label: 'Multi-cotizaciones',
          scenario: 'Escenario: Ventas & Cotización',
          title: 'Multi-cotizaciones',
          subtitle: 'Ofrece opciones sin duplicar el trabajo.',
          bullets: [
            "Gestiona diferentes escenarios de precios.",
            "Comparativas automáticas para el cliente.",
            "Facilidad para elegir la mejor opción."
          ],
          video: '/assets/videos/multi-quotes.webp'
        },
        {
          id: 'add-reorder-services',
          label: 'Añadir y reordenar',
          scenario: 'Escenario: Carga de Itinerario',
          title: 'Añadir y re-ordenar servicios',
          subtitle: 'Flexibilidad total en la carga de componentes.',
          bullets: [
            "Interfaz intuitiva de búsqueda de servicios.",
            "Drag & drop para jerarquizar actividades.",
            "Sincronización inmediata con el itinerario."
          ],
          video: '/assets/videos/add-reorder-services.webp'
        },
        {
          id: 'drag-days-services',
          label: 'Arrastrar días',
          scenario: 'Escenario: Edición Dinámica',
          title: 'Arrastrar días y servicios',
          subtitle: 'Control táctil y visual de la logística.',
          bullets: [
            "Mueve bloques completos de días entre fechas.",
            "Re-ubicación inteligente de logística.",
            "Alertas de conflictos de horarios."
          ],
          video: '/assets/videos/drag_days_and_services.webp'
        }
      ]
    },
    about: {
      title: 'Nuestra misión es profesionalizar tu operación turística.',
      desc: 'Nacimos de la necesidad real de herramientas digitales modernas en el sector. Nuestra visión es ser el estándar tecnológico para DMCs y agencias que buscan excelencia operativa.',
      experience: 'Años transformando el turismo',
      visionTitle: 'Visión',
      visionDesc: 'Liderar la digitalización del sector receptivo global.',
      valuesTitle: 'Valores',
      valuesDesc: 'Transparencia, innovación y enfoque en el usuario.'
    },
    testimonials: {
      title: 'Lo que dicen nuestros partners.',
      desc: 'Validación real de agencias que han escalado sus operaciones gracias a Nubbo.',
      items: [
        { name: "Carlos Mendoza", role: "CEO @ TravelAndes", text: "Nubbo cambió radicalmente nuestra forma de trabajar. Redujimos el tiempo de cotización en un 60%." },
        { name: "Lucía Paredes", role: "Directora Operativa", text: "La app para pasajeros es un plus increíble. Nuestros clientes se sienten cuidados en cada paso." },
        { name: "Andrés Silva", role: "Gerente de Operaciones", text: "La mejor decisión tecnológica que hemos tomado. Soporte técnico de primera y plataforma robusta." }
      ]
    },
    contact: {
      tag: 'Contacto',
      title: 'Hablemos de cómo Nubbo puede potenciar tu negocio.',
      writeUs: 'Escríbenos',
      callUs: 'Llámanos',
      support: 'Soporte',
      helpCenter: 'Centro de ayuda 24/7',
      implementation: '"La implementación no tiene costo adicional"',
      implementationDesc: 'Nos aseguramos de que tu equipo esté listo para operar desde el primer día sin cobros ocultos.',
      form: {
        name: 'Nombre',
        email: 'Email Corporativo',
        agency: 'Agencia',
        message: 'Mensaje',
        send: 'Enviar Mensaje',
        placeholderName: 'Ej. Juan Pérez',
        placeholderAgency: 'Tu DMC',
        placeholderEmail: 'juan@tuagencia.com',
        placeholderMessage: '¿En qué podemos ayudarte?'
      }
    },
    cookies: {
      title: 'Privacidad & Cookies',
      text: 'Utilizamos cookies para mejorar tu experiencia y analizar nuestro tráfico. Al continuar navegando, aceptas nuestra política de privacidad.',
      accept: 'Aceptar',
      settings: 'Configurar'
    }
  },
  en: {
    nav: {
      home: 'Home',
      benefits: 'Benefits',
      features: 'Features',
      demo: 'Demo',
      about: 'About Us',
      clients: 'Clients',
      contact: 'Contact',
      tryDemo: 'Try Demo',
      requestDemo: 'Request Demo'
    },
    hero: {
      badge1: 'Base plan with 6 users included',
      badge2: 'No implementation cost',
      title: 'Centralize your tourism operation in one place.',
      highlight: 'tourism operation',
      desc: 'Designed specifically for DMCs and inbound agencies. Nubbo helps you create complex itineraries, manage bookings, and automate your logistics effortlessly.',
      startNow: 'Get Started',
      viewDemo: 'Watch Demo',
      stats: '+100 agencies',
      statsDesc: 'already optimize with Nubbo'
    },
    cta: {
      title: 'Leave behind the clutter of Excel files and hours lost in manual quoting.',
      desc: 'Nubbo was born to solve the real "pain points" of tour operators: lack of tracking, entry errors, and lost information.'
    },
    benefits: {
      title1: 'Dynamic Itineraries',
      desc1: 'Create personalized experiences in minutes. Generate PDFs and online versions that delight your clients.',
      title2: 'Real-Time Operation',
      desc2: 'Full control of your transfers, guides, and providers from any device. No last-minute surprises.',
      title3: 'Secure Cloud',
      desc3: 'All your agency information centralized and accessible 24/7 with the highest security standards.'
    },
    features: {
      tag: 'Features',
      title: 'Tools designed by tourism experts.',
      desc: 'We solve the complexity of multi-destination logistics and tailor-made trips.',
      items: [
        { title: "DMC Management", icon: <Globe />, text: "Specialized for inbound tourism agencies and local operators." },
        { title: "Automatic Vouchers", icon: <ArrowRight />, text: "Instant generation of official documents for your passengers." },
        { title: "Supplier Database", icon: <Users />, text: "Centralized directory with rates and service contacts." },
        { title: "CRM & Extra Tools", icon: <Zap />, text: "Management of Vamoos, AI, Arca, contacts, and centralized administration." },
        { title: "Auto Web Itineraries", icon: <Layout />, text: "Dynamic and professional proposals that your clients can consult online." },
        { title: "Advanced Reports", icon: <BarChart3 />, text: "Analyze your productivity and profitability in real time." }
      ]
    },
    demoSection: {
      title: 'A real, mature, and robust product.',
      desc: 'Explore how Nubbo works in different operational scenarios.',
      tabs: [
        {
          id: 'reorder-city',
          label: 'Reorder by city',
          scenario: 'Scenario: Logistics Operation',
          title: 'Reorder by city',
          subtitle: 'Optimize your passengers\' route instantly.',
          bullets: [
            "Change destination order with a single click.",
            "Automatic recalculation of transfers.",
            "Dynamic adjustment of associated services."
          ],
          video: '/assets/videos/reorder-city.webp'
        },
        {
          id: 'trip-summary',
          label: 'Trip summary',
          scenario: 'Scenario: Itinerary Summary',
          title: 'Trip summary',
          subtitle: 'Panoramic view of the entire itinerary.',
          bullets: [
            "Clear visualization of days and nights.",
            "Balance of services per destination.",
            "Quick export for internal review."
          ],
          video: '/assets/videos/trip-summary.webp'
        },
        {
          id: 'multi-quotes',
          label: 'Multi-quotes',
          scenario: 'Scenario: Sales & Quoting',
          title: 'Multi-quotes',
          subtitle: 'Offer options without duplicating work.',
          bullets: [
            "Manage different pricing scenarios.",
            "Automatic comparisons for the client.",
            "Ease of choosing the best option."
          ],
          video: '/assets/videos/multi-quotes.webp'
        },
        {
          id: 'add-reorder-services',
          label: 'Add and reorder',
          scenario: 'Scenario: Itinerary Loading',
          title: 'Add and reorder services',
          subtitle: 'Total flexibility in component loading.',
          bullets: [
            "Intuitive service search interface.",
            "Drag & drop to prioritize activities.",
            "Immediate sync with the itinerary."
          ],
          video: '/assets/videos/add-reorder-services.webp'
        },
        {
          id: 'drag-days-services',
          label: 'Drag days',
          scenario: 'Scenario: Dynamic Editing',
          title: 'Drag days and services',
          subtitle: 'Tactile and visual logistics control.',
          bullets: [
            "Move complete blocks of days between dates.",
            "Intelligent logistics relocation.",
            "Schedule conflict alerts."
          ],
          video: '/assets/videos/drag_days_and_services.webp'
        }
      ]
    },
    about: {
      title: 'Our mission is to professionalize your tourism operation.',
      desc: 'We were born from the real need for modern digital tools in the sector. Our vision is to be the technological standard for DMCs and agencies seeking operational excellence.',
      experience: 'Years transforming tourism',
      visionTitle: 'Vision',
      visionDesc: 'Leading the digitalization of the global inbound sector.',
      valuesTitle: 'Values',
      valuesDesc: 'Transparency, innovation, and user focus.'
    },
    testimonials: {
      title: 'What our partners say.',
      desc: 'Real validation from agencies that have scaled their operations with Nubbo.',
      items: [
        { name: "Carlos Mendoza", role: "CEO @ TravelAndes", text: "Nubbo radically changed our way of working. We reduced quoting time by 60%." },
        { name: "Lucia Paredes", role: "Operations Director", text: "The passenger app is an incredible plus. Our clients feel taken care of at every step." },
        { name: "Andres Silva", role: "Operations Manager", text: "The best technological decision we've made. Top-notch technical support and robust platform." }
      ]
    },
    contact: {
      tag: 'Contact',
      title: 'Let\'s talk about how Nubbo can boost your business.',
      writeUs: 'Email us',
      callUs: 'Call us',
      support: 'Support',
      helpCenter: '24/7 Help center',
      implementation: '"Implementation has no additional cost"',
      implementationDesc: 'We make sure your team is ready to operate from day one without hidden charges.',
      form: {
        name: 'Name',
        email: 'Work Email',
        agency: 'Agency',
        message: 'Message',
        send: 'Send Message',
        placeholderName: 'e.g. John Doe',
        placeholderAgency: 'Your DMC',
        placeholderEmail: 'john@youragency.com',
        placeholderMessage: 'How can we help you?'
      }
    },
    cookies: {
      title: 'Privacy & Cookies',
      text: 'We use cookies to improve your experience and analyze our traffic. By continuing to browse, you accept our privacy policy.',
      accept: 'Accept',
      settings: 'Configure'
    }
  },
  it: {
    nav: {
      home: 'Inizio',
      benefits: 'Benefici',
      features: 'Funzionalità',
      demo: 'Demo',
      about: 'Chi Siamo',
      clients: 'Clienti',
      contact: 'Contatti',
      tryDemo: 'Prova Demo',
      requestDemo: 'Richiedi Demo'
    },
    hero: {
      badge1: 'Piano base con 6 utenti inclusi',
      badge2: 'Senza costi di implementazione',
      title: 'Centralizza la tua operazione turistica in un unico posto.',
      highlight: 'operazione turistica',
      desc: 'Progettato specificamente per DMC e agenzie ricettive. Nubbo ti aiuta a creare itinerari complessi, gestire prenotazioni e automatizzare la tua logistica senza sforzo.',
      startNow: 'Inizia ora',
      viewDemo: 'Guarda Demo',
      stats: '+100 agenzie',
      statsDesc: 'ottimizzano già con Nubbo'
    },
    cta: {
      title: 'Lasciati alle spalle il disordine dei file Excel e le ore perse in preventivi manuali.',
      desc: 'Nubbo nasce per risolvere i reali "punti critici" dei tour operator: mancanza di tracciamento, errori di inserimento e perdita di informazioni.'
    },
    benefits: {
      title1: 'Itinerari Dinamici',
      desc1: 'Crea esperienze personalizzate in pochi minuti. Genera PDF e versioni online che deliziano i tuoi clienti.',
      title2: 'Operazione in Tempo Reale',
      desc2: 'Controllo totale dei tuoi trasferimenti, guide e fornitori da qualsiasi dispositivo. Nessuna sorpresa dell\'ultimo minuto.',
      title3: 'Cloud Sicuro',
      desc3: 'Tutte le informazioni della tua agenzia centralizzate e accessibili 24/7 con i più alti standard di sicurezza.'
    },
    features: {
      tag: 'Funzionalità',
      title: 'Strumenti progettati da esperti del turismo.',
      desc: 'Risolviamo la complessità della logistica multi-destinazione e dei viaggi su misura.',
      items: [
        { title: "Gestione DMC", icon: <Globe />, text: "Specializzato per agenzie di turismo ricettivo e operatori locali." },
        { title: "Voucher Automatici", icon: <ArrowRight />, text: "Generazione istantanea di documenti ufficiali per i tuoi passeggeri." },
        { title: "Database Fornitori", icon: <Users />, text: "Directory centralizzata con tariffe e contatti dei servizi." },
        { title: "CRM e strumenti extra", icon: <Zap />, text: "Gestione di Vamoos, AI, Arca, contatti e amministrazione centralizzata." },
        { title: "WebService Itinerari", icon: <Layout />, text: "Proposte dinamiche e professionali che i tuoi clienti possono consultare online." },
        { title: "Report Avanzati", icon: <BarChart3 />, text: "Analizza la tua produttività e redditività in tempo reale." }
      ]
    },
    demoSection: {
      title: 'Un prodotto reale, maturo e robusto.',
      desc: 'Scopri come funziona Nubbo in diversi scenari operativi.',
      tabs: [
        {
          id: 'reorder-city',
          label: 'Riordina per città',
          scenario: 'Scenario: Operazione Logistica',
          title: 'Riordina per città',
          subtitle: 'Ottimizza istantaneamente il percorso dei tuoi passeggeri.',
          bullets: [
            "Cambia l'ordine delle destinazioni con un solo click.",
            "Ricalcolo automatico dei trasferimenti.",
            "Regolazione dinamica dei servizi associati."
          ],
          video: '/assets/videos/reorder-city.webp'
        },
        {
          id: 'trip-summary',
          label: 'Riepilogo viaggio',
          scenario: 'Scenario: Riepilogo Itinerario',
          title: 'Riepilogo del viaggio',
          subtitle: 'Vista panoramica dell\'intero itinerario.',
          bullets: [
            "Visualizzazione chiara di giorni e notti.",
            "Bilanciamento dei servizi per destinazione.",
            "Esportazione rapida per revisione interna."
          ],
          video: '/assets/videos/trip-summary.webp'
        },
        {
          id: 'multi-quotes',
          label: 'Multi-preventivi',
          scenario: 'Scenario: Vendite e Preventivi',
          title: 'Multi-preventivi',
          subtitle: 'Offri opzioni senza duplicare il lavoro.',
          bullets: [
            "Gestisci diversi scenari di prezzo.",
            "Confronti automatici per il cliente.",
            "Facilità nella scelta della migliore opzione."
          ],
          video: '/assets/videos/multi-quotes.webp'
        },
        {
          id: 'add-reorder-services',
          label: 'Aggiungi e riordina',
          scenario: 'Scenario: Caricamento Itinerario',
          title: 'Aggiungi e riordina servizi',
          subtitle: 'Flessibilità totale nel caricamento dei componenti.',
          bullets: [
            "Interfaccia di ricerca servizi intuitiva.",
            "Drag & drop per gerarchizzare le attività.",
            "Sincronizzazione immediata con l'itinerario."
          ],
          video: '/assets/videos/add-reorder-services.webp'
        },
        {
          id: 'drag-days-services',
          label: 'Trascina giorni',
          scenario: 'Scenario: Editing Dinamico',
          title: 'Trascina giorni e servizi',
          subtitle: 'Controllo logistico tattile e visivo.',
          bullets: [
            "Sposta interi blocchi di giorni tra le date.",
            "Ricollocamento intelligente della logistica.",
            "Avvisi per conflitti di orario."
          ],
          video: '/assets/videos/drag_days_and_services.webp'
        }
      ]
    },
    about: {
      title: 'La nostra missione è professionalizzare la tua operazione turistica.',
      desc: 'Siamo nati dalla reale necessità di strumenti digitali moderni nel settore. La nostra visione è essere lo standard tecnologico per DMC e agenzie che cercano l\'eccellenza operativa.',
      experience: 'Anni trasformando il turismo',
      visionTitle: 'Visione',
      visionDesc: 'Guidare la digitalizzazione del settore ricettivo globale.',
      valuesTitle: 'Valori',
      valuesDesc: 'Trasparenza, innovazione e attenzione all\'utente.'
    },
    testimonials: {
      title: 'Cosa dicono i nostri partner.',
      desc: 'Validazione reale da agenzie che hanno scalato le loro operazioni con Nubbo.',
      items: [
        { name: "Carlos Mendoza", role: "CEO @ TravelAndes", text: "Nubbo ha cambiato radicalmente il nostro modo di lavorare. Abbiamo ridotto il tempo di preventivazione del 60%." },
        { name: "Lucia Paredes", role: "Direttrice Operativa", text: "L'app per i passeggeri è un plus incredibile. I nostri clienti si sentono seguiti in ogni fase." },
        { name: "Andres Silva", role: "Responsabile Operazioni", text: "La migliore decisione tecnologica che abbiamo preso. Supporto tecnico di prim'ordine e piattaforma robusta." }
      ]
    },
    contact: {
      tag: 'Contatti',
      title: 'Parliamo di come Nubbo può potenziare il tuo business.',
      writeUs: 'Scrivici',
      callUs: 'Chiamaci',
      support: 'Supporto',
      helpCenter: 'Centro assistenza 24/7',
      implementation: '"L\'implementazione non ha costi aggiuntivi"',
      implementationDesc: 'Ci assicuriamo che il tuo team sia pronto a operare dal primo giorno senza costi nascosti.',
      form: {
        name: 'Nome',
        email: 'Email aziendale',
        agency: 'Agenzia',
        message: 'Messaggio',
        send: 'Invia Messaggio',
        placeholderName: 'es. Mario Rossi',
        placeholderAgency: 'Il tuo DMC',
        placeholderEmail: 'mario@tuaagenzia.com',
        placeholderMessage: 'Come possiamo aiutarti?'
      }
    },
    cookies: {
      title: 'Privacy e Cookie',
      text: 'Utilizziamo i cookie per migliorare la tua esperienza e analizzare il nostro traffico. Continuando a navigare, accetti la nostra politica sulla privacy.',
      accept: 'Accetta',
      settings: 'Configura'
    }
  }
};

const Navbar = ({ language, setLanguage }: { language: 'es' | 'en' | 'it', setLanguage: (lang: 'es' | 'en' | 'it') => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, href: '#hero' },
    { name: t.benefits, href: '#values' },
    { name: t.features, href: '#services' },
    { name: t.demo, href: '#nubboapp' },
    { name: t.about, href: '#about2' },
    { name: t.clients, href: '#clients' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-morphism py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <div className="h-11 rounded-xl flex items-center justify-center transform rotate-3 overflow-hidden">
            <img
              src="/assets/logos/logo_nubbo_icon_negro.png"
              alt="Logo Icon"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <Cloud className="hidden text-white w-6 h-6" />
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary-blue ${scrolled ? 'text-gray-600' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}

          <div className="flex items-center gap-4 ml-4">
            {/* Language Selector */}
            <div className={`flex backdrop-blur-sm rounded-full p-1 border transition-colors ${scrolled ? 'bg-gray-100 border-gray-200' : 'bg-white/10 border-white/20'}`}>
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'es' ? 'bg-primary-blue text-white' : scrolled ? 'text-gray-500 hover:text-gray-900' : 'text-white/60 hover:text-white'}`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'en' ? 'bg-primary-blue text-white' : scrolled ? 'text-gray-500 hover:text-gray-900' : 'text-white/60 hover:text-white'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('it')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${language === 'it' ? 'bg-primary-blue text-white' : scrolled ? 'text-gray-500 hover:text-gray-900' : 'text-white/60 hover:text-white'}`}
              >
                IT
              </button>
            </div>

            <a
              href="#contact"
              className="bg-primary-blue text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:shadow-primary-blue/30 transition-all hover:scale-105 active:scale-95"
            >
              {t.tryDemo}
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <div className={`flex backdrop-blur-sm rounded-full p-1 border transition-colors ${scrolled ? 'bg-gray-100 border-gray-200' : 'bg-white/10 border-white/20'}`}>
            <button
              onClick={() => setLanguage('es')}
              className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all ${language === 'es' ? 'bg-primary-blue text-white' : scrolled ? 'text-gray-400 hover:text-gray-900' : 'text-white/60 hover:text-white'}`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all ${language === 'en' ? 'bg-primary-blue text-white' : scrolled ? 'text-gray-400 hover:text-gray-900' : 'text-white/60 hover:text-white'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('it')}
              className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all ${language === 'it' ? 'bg-primary-blue text-white' : scrolled ? 'text-gray-400 hover:text-gray-900' : 'text-white/60 hover:text-white'}`}
            >
              IT
            </button>
          </div>
          <button
            className="p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl p-6 lg:hidden flex flex-col gap-4 border-t border-gray-100"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium p-2 hover:bg-gray-50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-primary-blue text-white py-4 rounded-xl font-bold mt-4 shadow-lg">
              {t.requestDemo}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Section = ({ id, children, className = "", whiteBg = false }: { id: string, children: React.ReactNode, className?: string, whiteBg?: boolean }) => {
  return (
    <section
      id={id}
      className={`relative mx-4 md:mx-10 my-16 md:my-24 p-10 md:p-20 section-float ${whiteBg ? 'bg-white' : 'glass-morphism'} ${className}`}
    >
      {children}
    </section>
  );
};

export default function App() {
  const [language, setLanguage] = useState<'es' | 'en' | 'it'>('es');
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [activeDemoTab, setActiveDemoTab] = useState(0);

  const t = translations[language].hero;
  const demoTabs = translations[language].demoSection.tabs;

  useEffect(() => {
    const accepted = localStorage.getItem('cookies-accepted');
    if (accepted) setCookiesAccepted(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setCookiesAccepted(true);
  };

  return (
    <div className="min-h-screen bg-nubbo-gradient pb-20 overflow-x-hidden">
      <Navbar language={language} setLanguage={setLanguage} />

      <main id="main">
        {/* --- Hero Section --- */}
        <section id="hero" className="pt-32 pb-16 px-6 container mx-auto flex flex-col lg:flex-row items-center gap-12 min-h-[90vh]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="flex flex-col gap-3 items-start">
              <div className="inline-flex items-center gap-2 bg-primary-blue/40 backdrop-blur-sm text-white px-4 py-2 rounded-full shadow-lg shadow-primary-blue/20 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                {t.badge1}
              </div>
              <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-sm text-primary-blue px-4 py-2 rounded-full shadow-lg shadow-white/10 text-xs font-bold uppercase tracking-wider font-bold">
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

            <p className="text-xl text-white/90 font-medium max-w-xl">
              {t.desc}
            </p>

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
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-primary-blue bg-white overflow-hidden shadow-md">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="User" />
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
            />
          </div>
        </section>

        {/* --- CTA Value Section --- */}
        <section id="cta" className="container mx-auto px-6 py-20 text-center text-white space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold max-w-3xl mx-auto">
            {translations[language].cta.title}
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {translations[language].cta.desc}
          </p>
          <div className="h-px w-24 bg-white/30 mx-auto" />
        </section>

        {/* --- Benefits / Values --- */}
        <section id="values" className="bg-white py-24 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-16">
              {[
                {
                  icon: <Layout className="w-12 h-12" />,
                  title: translations[language].benefits.title1,
                  desc: translations[language].benefits.desc1
                },
                {
                  icon: <Clock className="w-12 h-12" />,
                  title: translations[language].benefits.title2,
                  desc: translations[language].benefits.desc2
                },
                {
                  icon: <ShieldCheck className="w-12 h-12" />,
                  title: translations[language].benefits.title3,
                  desc: translations[language].benefits.desc3
                }
              ].map((v, i) => (
                <div key={i} className="space-y-6 text-center md:text-left group">
                  <div className="w-24 h-24 bg-primary-blue/5 text-primary-blue rounded-[2.5rem] flex items-center justify-center mx-auto md:mx-0 shadow-inner group-hover:scale-110 transition-transform duration-500">
                    {v.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-3xl font-display font-bold tracking-tight">{v.title}</h3>
                    <p className="text-gray-500 leading-relaxed font-medium text-lg">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Services / Features --- */}
        <section 
          id="services" 
          className="relative py-24 px-6 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to bottom right, rgba(15, 23, 42, 0.9), rgba(30, 64, 175, 0.85), rgba(59, 130, 246, 0.8)), url('/assets/images/travel-concept-with-landmarks.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="container mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="space-y-4 max-w-xl">
                <h4 className="text-white/80 font-bold tracking-widest uppercase text-sm">{translations[language].features.tag}</h4>
                <h2 className="text-4xl font-display font-bold text-white">{translations[language].features.title}</h2>
              </div>
              <p className="text-white/70 max-w-sm font-medium">
                {translations[language].features.desc}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {translations[language].features.items.map((s, i) => (
                <div key={i} className="group p-8 rounded-[2.5rem] bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all shadow-xl border border-white/20">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl shadow-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">{s.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- NubboApp / Demo Tabs --- */}
        <section id="nubboapp" className="bg-white py-24 px-6">
          <div className="container mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-display font-bold">{translations[language].demoSection.title}</h2>
              <p className="text-gray-500 max-w-2xl mx-auto font-medium">
                {translations[language].demoSection.desc}
              </p>
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
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <span className="text-primary-blue font-bold uppercase text-xs tracking-[0.2em]">
                      {demoTabs[activeDemoTab].scenario}
                    </span>
                    <h3 className="text-3xl font-display font-bold">
                      {demoTabs[activeDemoTab].title}
                    </h3>
                    <p className="text-gray-600 font-medium italic">
                      {demoTabs[activeDemoTab].subtitle}
                    </p>
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
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative group"
                  >
                    <div className="relative bg-white overflow-hidden italic rounded-3xl border border-gray-100">
                      <img
                        key={demoTabs[activeDemoTab].video}
                        src={demoTabs[activeDemoTab].video}
                        alt={demoTabs[activeDemoTab].title}
                        className="w-full aspect-video object-cover"
                      />
                      {/* Video Label / Badge */}
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

        {/* --- About Section --- */}
        <section id="about2" className="glass-morphism py-24 px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2340"
                  alt="Team working"
                  className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-2xl max-w-[200px]">
                  <p className="text-4xl font-display font-bold text-primary-blue">+10</p>
                  <p className="text-xs uppercase font-bold text-gray-400 mt-1">{translations[language].about.experience}</p>
                </div>
              </div>
              <div className="space-y-8">
                <h2 className="text-4xl font-display font-bold">{translations[language].about.title}</h2>
                <p className="text-lg text-gray-600 font-medium leading-relaxed">
                  {translations[language].about.desc}
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-primary-blue uppercase text-xs mb-2">{translations[language].about.visionTitle}</h4>
                    <p className="text-sm text-gray-500">{translations[language].about.visionDesc}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-blue uppercase text-xs mb-2">{translations[language].about.valuesTitle}</h4>
                    <p className="text-sm text-gray-500">{translations[language].about.valuesDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Clients --- */}
        <section id="clients" className="bg-white py-24 overflow-hidden relative group">
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex whitespace-nowrap min-w-max gap-20 items-center px-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[
              { name: "Argentina on the Go", file: "aotg.png" },
              { name: "Designer Trips", file: "dstrip.png" },
              { name: "Innovart", file: "innova.png" },
              { name: "Mater", file: "mater.png" },
              { name: "New World", file: "nwtd.png" },
              { name: "Quarum", file: "quarum.png" },
              { name: "Raja Tours", file: "raja.png" },
              { name: "Signature DMC", file: "signa.png" },
              { name: "Africale", file: "africale.png"},
              { name: "Gador", file: "gador.png"},
              { name: "Priority", file: "priority.png"}
            ].concat([
              { name: "Argentina on the Go", file: "aotg.png" },
              { name: "Designer Trips", file: "dstrip.png" },
              { name: "Innovart", file: "innova.png" },
              { name: "Mater", file: "mater.png" },
              { name: "New World", file: "nwtd.png" },
              { name: "Quarum", file: "quarum.png" },
              { name: "Raja Tours", file: "raja.png" },
              { name: "Signature DMC", file: "signa.png" }
            ]).map((client, idx) => (
              <div key={`${client.name}-${idx}`} className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100 flex-shrink-0 cursor-pointer">
                <div className="h-14 w-40 flex items-center justify-center px-4">
                  <img
                    src={`/assets/logos/${client.file}`}
                    alt={client.name}
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
        </section>

        {/* --- Testimonials --- */}
        <section id="testimonials" className="container mx-auto px-6 py-20 overflow-hidden">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-white text-4xl font-display font-bold">{translations[language].testimonials.title}</h2>
            <p className="text-white/70 max-w-xl mx-auto font-medium">{translations[language].testimonials.desc}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {translations[language].testimonials.items.map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-xl flex flex-col justify-between hover:-translate-y-2 transition-transform">
                <div className="space-y-4">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map(star => <span key={star}>★</span>)}
                  </div>
                  <p className="italic text-gray-600 font-medium">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-4 pt-8">
                  <div className="w-12 h-12 rounded-full bg-primary-blue/10 flex items-center justify-center font-bold text-primary-blue">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">{t.name}</h5>
                    <p className="text-xs text-gray-400 font-bold">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Contact --- */}
        <section id="contact" className="bg-white py-24 px-6 mt-32">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-20">
              <div className="space-y-10">
                <div className="space-y-4">
                  <h4 className="text-primary-blue font-bold uppercase text-xs tracking-widest">{translations[language].contact.tag}</h4>
                  <h2 className="text-4xl md:text-5xl font-display font-bold">{translations[language].contact.title}</h2>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-blue/5 rounded-xl flex items-center justify-center text-primary-blue">
                      <Mail />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase">{translations[language].contact.writeUs}</p>
                      <p className="font-bold text-gray-800">info@nubbo.io</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-blue/5 rounded-xl flex items-center justify-center text-primary-blue">
                      <Phone />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase">{translations[language].contact.callUs}</p>
                      <p className="font-bold text-gray-800">+54 11 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-blue/5 rounded-xl flex items-center justify-center text-primary-blue">
                      <MessageSquare />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase">{translations[language].contact.support}</p>
                      <p className="font-bold text-gray-800">{translations[language].contact.helpCenter}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-primary-blue rounded-3xl text-white space-y-4 shadow-xl shadow-primary-blue/20">
                  <h4 className="text-xl font-bold italic">La implementación no tiene costo adicional</h4>
                  <p className="text-sm opacity-80">{translations[language].contact.implementationDesc}</p>
                </div>
              </div>

              <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-inner border border-gray-100">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase ml-1">{translations[language].contact.form.name}</label>
                      <input type="text" placeholder={translations[language].contact.form.placeholderName} className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase ml-1">{translations[language].contact.form.agency}</label>
                      <input type="text" placeholder={translations[language].contact.form.placeholderAgency} className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase ml-1">{translations[language].contact.form.email}</label>
                    <input type="email" placeholder={translations[language].contact.form.placeholderEmail} className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase ml-1">{translations[language].contact.form.message}</label>
                    <textarea rows={4} placeholder={translations[language].contact.form.placeholderMessage} className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-primary-blue text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-primary-blue/30 transition-all active:scale-[0.98]">
                    {translations[language].contact.form.send}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer id="footer" className="container mx-auto px-10 pt-20 pb-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12 text-white/80">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-11 rounded-xl flex items-center justify-center transform rotate-3 overflow-hidden">
                <img
                  src="/assets/logos/logo_nubbo_icon.png"
                  alt="Logo Icon"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <Cloud className="hidden text-white w-6 h-6" />
              </div>
            </div>
            <p className="max-w-xs font-medium">Liderando la innovación tecnológica para el turismo receptivo en Latinoamérica y el mundo.</p>
            <div className="flex gap-4">
              {/* Social icons placeholders */}
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-all">
                  <Globe className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h5 className="text-white font-bold uppercase text-xs tracking-widest">Producto</h5>
            <ul className="space-y-2 text-sm font-medium">
              <li><a href="#services" className="hover:text-white transition-colors">Funcionalidades</a></li>
              <li><a href="#nubboapp" className="hover:text-white transition-colors">App Móvil</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integraciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Seguridad</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-white font-bold uppercase text-xs tracking-widest">Empresa</h5>
            <ul className="space-y-2 text-sm font-medium">
              <li><a href="#about2" className="hover:text-white transition-colors">Sobre nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Prensa</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-xs font-bold uppercase tracking-widest">
          © {new Date().getFullYear()} Nubbo Software. Todos los derechos reservados.
        </div>
      </footer>

      {/* --- Cookies Modal --- */}
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
                <h4 className="font-bold text-sm">{translations[language].cookies.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{translations[language].cookies.text}</p>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                onClick={acceptCookies}
                className="flex-1 bg-primary-blue text-white py-3 rounded-xl text-xs font-bold shadow-lg shadow-primary-blue/20"
              >
                {translations[language].cookies.accept}
              </button>
              <button
                className="flex-1 bg-gray-100 py-3 rounded-xl text-xs font-bold"
              >
                {translations[language].cookies.settings}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
