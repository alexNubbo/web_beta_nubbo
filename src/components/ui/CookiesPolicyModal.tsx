import React from 'react';
import { Modal } from './Modal';
import { useModal } from '../../context/ModalContext';
import { useLanguage } from '../../context/LanguageContext';

export const CookiesPolicyModal: React.FC = () => {
  const { activeModal, closeModal } = useModal();
  const { content } = useLanguage();
  const t = content.cookiesPolicy;

  const isOpen = activeModal === 'cookies';

  return (
    <Modal title={t.title} isOpen={isOpen}>
      <div className="space-y-8">
        <p className="text-gray-600 leading-relaxed font-medium">{t.intro}</p>

        {/* Analytics */}
        <div className="space-y-3 border-l-4 border-primary-blue pl-4">
          <h3 className="font-bold text-gray-900">{t.analyticsTitle}</h3>
          <p className="text-sm text-gray-600">{t.analyticsDesc}</p>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>• Google Analytics (_ga, _gat, _gid)</li>
            <li>• Identificador único de usuario</li>
            <li>• Conteo de visitas y fechas</li>
          </ul>
        </div>

        {/* Technical */}
        <div className="space-y-3 border-l-4 border-secondary-blue pl-4">
          <h3 className="font-bold text-gray-900">{t.technicalTitle}</h3>
          <p className="text-sm text-gray-600">{t.technicalDesc}</p>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>• Balanceo de carga</li>
            <li>• reCaptcha y Google</li>
            <li>• Siteimprove</li>
          </ul>
        </div>

        {/* Management */}
        <div className="space-y-3 border-l-4 border-accent-blue pl-4">
          <h3 className="font-bold text-gray-900">{t.ownCookiesTitle}</h3>
          <p className="text-sm text-gray-600">{t.ownCookiesDesc}</p>
        </div>

        {/* Session */}
        <div className="space-y-3 border-l-4 border-primary-blue pl-4">
          <h3 className="font-bold text-gray-900">{t.sessionTitle}</h3>
          <p className="text-sm text-gray-600">{t.sessionDesc}</p>
        </div>

        {/* Social */}
        <div className="space-y-3 border-l-4 border-secondary-blue pl-4">
          <h3 className="font-bold text-gray-900">{t.socialTitle}</h3>
          <p className="text-sm text-gray-600">{t.socialDesc}</p>
        </div>

        {/* Third Party */}
        <div className="space-y-3 bg-gray-50 rounded-xl p-4">
          <h3 className="font-bold text-gray-900">{t.thirdPartyTitle}</h3>
          <p className="text-sm text-gray-600">{t.thirdPartyDesc}</p>
        </div>

        {/* Acceptance */}
        <div className="space-y-3 bg-primary-blue/5 rounded-xl p-4 border border-primary-blue/10">
          <h3 className="font-bold text-gray-900">{t.acceptanceTitle}</h3>
          <p className="text-sm text-gray-600">{t.acceptanceDesc}</p>
        </div>

        {/* Management */}
        <div className="space-y-3">
          <h3 className="font-bold text-gray-900">{t.manageTitle}</h3>
          <p className="text-sm text-gray-600">{t.manageDesc}</p>
        </div>
      </div>
    </Modal>
  );
};
