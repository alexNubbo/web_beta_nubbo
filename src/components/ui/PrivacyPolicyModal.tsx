import React from 'react';
import { Modal } from './Modal';
import { useModal } from '../../context/ModalContext';
import { useLanguage } from '../../context/LanguageContext';

export const PrivacyPolicyModal: React.FC = () => {
  const { activeModal } = useModal();
  const { language } = useLanguage();

  const isOpen = activeModal === 'privacy';

  const content = {
    es: {
      title: 'Política de Privacidad',
      intro: 'En Nubbo, nos comprometemos a proteger tu privacidad. Esta política explica cómo recopilamos, utilizamos y protegemos tu información personal.',
      dataCollectionTitle: 'Recopilación de Datos',
      dataCollectionDesc: 'Recopilamos información que nos proporcionas voluntariamente, como tu nombre, correo electrónico, información de tu empresa y consultas. También recopilamos datos de forma automática a través de cookies y tecnologías similares.',
      dataUseTitle: 'Uso de Datos',
      dataUseDesc: 'Utilizamos tus datos para: proporcionar y mejorar nuestros servicios, comunicarnos contigo, procesar tu información, cumplir obligaciones legales, y prevenir fraude.',
      dataProtectionTitle: 'Protección de Datos',
      dataProtectionDesc: 'Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger tu información. Nubbo cumple con regulaciones internacionales de protección de datos.',
      sharingTitle: 'Compartición de Datos',
      sharingDesc: 'No vendemos tu información personal. Solo compartimos datos con terceros necesarios para proporcionar nuestros servicios, como proveedores de hosting y herramientas de análisis.',
      userRightsTitle: 'Tus Derechos',
      userRightsDesc: 'Tienes derecho a acceder, rectificar, eliminar o portabilizar tus datos personales. Contáctanos para ejercer estos derechos.',
      contactTitle: 'Contacto',
      contactDesc: 'Si tienes preguntas sobre esta política, puedes contactarnos en privacy@nubbo.io',
    },
    en: {
      title: 'Privacy Policy',
      intro: 'At Nubbo, we are committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information.',
      dataCollectionTitle: 'Data Collection',
      dataCollectionDesc: 'We collect information you provide to us voluntarily, such as your name, email, company information, and inquiries. We also collect data automatically through cookies and similar technologies.',
      dataUseTitle: 'Data Use',
      dataUseDesc: 'We use your data to: provide and improve our services, communicate with you, process your information, comply with legal obligations, and prevent fraud.',
      dataProtectionTitle: 'Data Protection',
      dataProtectionDesc: 'We implement technical, administrative, and physical security measures to protect your information. Nubbo complies with international data protection regulations.',
      sharingTitle: 'Data Sharing',
      sharingDesc: 'We do not sell your personal information. We only share data with third parties necessary to provide our services, such as hosting providers and analytics tools.',
      userRightsTitle: 'Your Rights',
      userRightsDesc: 'You have the right to access, rectify, delete, or port your personal data. Contact us to exercise these rights.',
      contactTitle: 'Contact',
      contactDesc: 'If you have questions about this policy, you can contact us at privacy@nubbo.io',
    },
    it: {
      title: 'Informativa sulla Privacy',
      intro: 'In Nubbo, ci impegniamo a proteggere la tua privacy. Questa informativa spiega come raccogliamo, utilizziamo e proteggiamo le tue informazioni personali.',
      dataCollectionTitle: 'Raccolta Dati',
      dataCollectionDesc: 'Raccogliamo informazioni che ci fornisci volontariamente, come il tuo nome, email, informazioni sulla tua azienda e domande. Raccogliamo anche dati automaticamente attraverso cookie e tecnologie simili.',
      dataUseTitle: 'Utilizzo dei Dati',
      dataUseDesc: 'Utilizziamo i tuoi dati per: fornire e migliorare i nostri servizi, comunicare con te, elaborare le tue informazioni, rispettare obblighi legali e prevenire frodi.',
      dataProtectionTitle: 'Protezione dei Dati',
      dataProtectionDesc: 'Implementiamo misure di sicurezza tecniche, amministrative e fisiche per proteggere le tue informazioni. Nubbo rispetta le normative internazionali sulla protezione dei dati.',
      sharingTitle: 'Condivisione dei Dati',
      sharingDesc: 'Non vendiamo le tue informazioni personali. Condividiamo dati solo con terze parti necessarie per fornire i nostri servizi, come provider di hosting e strumenti di analisi.',
      userRightsTitle: 'I Tuoi Diritti',
      userRightsDesc: 'Hai il diritto di accedere, rettificare, eliminare o portare i tuoi dati personali. Contattaci per esercitare questi diritti.',
      contactTitle: 'Contatti',
      contactDesc: 'Se hai domande su questa informativa, puoi contattarci a privacy@nubbo.io',
    },
  };

  const t = content[language] || content.es;

  return (
    <Modal title={t.title} isOpen={isOpen}>
      <div className="space-y-8">
        <p className="text-gray-600 leading-relaxed font-medium">{t.intro}</p>

        {/* Data Collection */}
        <div className="space-y-3 border-l-4 border-primary-blue pl-4">
          <h3 className="font-bold text-gray-900">{t.dataCollectionTitle}</h3>
          <p className="text-sm text-gray-600">{t.dataCollectionDesc}</p>
        </div>

        {/* Data Use */}
        <div className="space-y-3 border-l-4 border-secondary-blue pl-4">
          <h3 className="font-bold text-gray-900">{t.dataUseTitle}</h3>
          <p className="text-sm text-gray-600">{t.dataUseDesc}</p>
        </div>

        {/* Data Protection */}
        <div className="space-y-3 border-l-4 border-accent-blue pl-4">
          <h3 className="font-bold text-gray-900">{t.dataProtectionTitle}</h3>
          <p className="text-sm text-gray-600">{t.dataProtectionDesc}</p>
        </div>

        {/* Sharing */}
        <div className="space-y-3 border-l-4 border-primary-blue pl-4">
          <h3 className="font-bold text-gray-900">{t.sharingTitle}</h3>
          <p className="text-sm text-gray-600">{t.sharingDesc}</p>
        </div>

        {/* User Rights */}
        <div className="space-y-3 bg-primary-blue/5 rounded-xl p-4 border border-primary-blue/10">
          <h3 className="font-bold text-gray-900">{t.userRightsTitle}</h3>
          <p className="text-sm text-gray-600">{t.userRightsDesc}</p>
        </div>

        {/* Contact */}
        <div className="space-y-3 bg-gray-50 rounded-xl p-4">
          <h3 className="font-bold text-gray-900">{t.contactTitle}</h3>
          <p className="text-sm text-gray-600">{t.contactDesc}</p>
        </div>
      </div>
    </Modal>
  );
};
