import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const CookiesPolicySection = () => {
  const { content } = useLanguage();
  const t = content.cookiesPolicy;

  return (
    <section id="cookies-policy" className="container mx-auto px-6 py-24">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-5xl font-display font-bold text-gray-900">{t.title}</h1>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">{t.intro}</p>
        </div>

        {/* Analytics Cookies */}
        <div className="space-y-4 border-l-4 border-primary-blue pl-6">
          <h2 className="text-2xl font-bold text-gray-900">{t.analyticsTitle}</h2>
          <p className="text-gray-600 leading-relaxed">{t.analyticsDesc}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Google Analytics (_ga, _gat, _gid)</li>
            <li>Generación de identificador único de usuario</li>
            <li>Conteo de visitas y fechas de acceso</li>
            <li>Ubicación geográfica aproximada</li>
          </ul>
        </div>

        {/* Technical Cookies */}
        <div className="space-y-4 border-l-4 border-secondary-blue pl-6">
          <h2 className="text-2xl font-bold text-gray-900">{t.technicalTitle}</h2>
          <p className="text-gray-600 leading-relaxed">{t.technicalDesc}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Balanceo de carga (TS01XXXXXXXX)</li>
            <li>Gestión de sesiones</li>
            <li>reCaptcha y servicios de Google</li>
            <li>Funcionalidades de Siteimprove</li>
          </ul>
        </div>

        {/* Own Management Cookies */}
        <div className="space-y-4 border-l-4 border-accent-blue pl-6">
          <h2 className="text-2xl font-bold text-gray-900">{t.ownCookiesTitle}</h2>
          <p className="text-gray-600 leading-relaxed">{t.ownCookiesDesc}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>cb-enabled2</li>
            <li>cookie-agreed</li>
            <li>cookie-agreed-version</li>
            <li>cookie-agreed-categories</li>
          </ul>
        </div>

        {/* Session Cookies */}
        <div className="space-y-4 border-l-4 border-primary-blue pl-6">
          <h2 className="text-2xl font-bold text-gray-900">{t.sessionTitle}</h2>
          <p className="text-gray-600 leading-relaxed">{t.sessionDesc}</p>
        </div>

        {/* Social Cookies */}
        <div className="space-y-4 border-l-4 border-secondary-blue pl-6">
          <h2 className="text-2xl font-bold text-gray-900">{t.socialTitle}</h2>
          <p className="text-gray-600 leading-relaxed">{t.socialDesc}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>YouTube - Preferencias de reproductor de video</li>
            <li>Twitter - Widget de visualización de tweets</li>
          </ul>
        </div>

        {/* Third Party Services */}
        <div className="space-y-4 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900">{t.thirdPartyTitle}</h2>
          <p className="text-gray-600 leading-relaxed">{t.thirdPartyDesc}</p>
          <div className="space-y-3">
            <p className="text-sm font-bold text-gray-700">Servicios asociados:</p>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="https://twitter.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">
                  Twitter Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://www.google.es/intl/es/policies/technologies/cookies/" target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:underline">
                  Google & YouTube Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Acceptance */}
        <div className="space-y-4 bg-primary-blue/5 rounded-2xl p-8 border border-primary-blue/10">
          <h2 className="text-2xl font-bold text-gray-900">{t.acceptanceTitle}</h2>
          <p className="text-gray-600 leading-relaxed">{t.acceptanceDesc}</p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="font-bold text-primary-blue">✓</span>
              <span className="text-gray-600">Aceptar todas las cookies</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary-blue">✓</span>
              <span className="text-gray-600">Modificar preferencias</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary-blue">✓</span>
              <span className="text-gray-600">Gestionar categorías específicas</span>
            </li>
          </ul>
        </div>

        {/* Management */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">{t.manageTitle}</h2>
          <p className="text-gray-600 leading-relaxed">{t.manageDesc}</p>
          <div className="bg-gray-50 rounded-lg p-6 space-y-3">
            <p className="text-sm font-bold text-gray-700">Guías por navegador:</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <strong>Chrome:</strong> support.google.com/chrome/answer/95647</li>
              <li>• <strong>Firefox:</strong> support.mozilla.org/kb/Borrar_cookies</li>
              <li>• <strong>Safari:</strong> www.apple.com/es/privacy/use-of-cookies/</li>
              <li>• <strong>Internet Explorer:</strong> Configuración → Opciones de Internet</li>
              <li>• <strong>Microsoft Edge:</strong> Configuración → Privacidad</li>
            </ul>
          </div>
        </div>

        {/* Footer note */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 italic">
            Política de Cookies actualizada el {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </section>
  );
};
