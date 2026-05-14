import React, { FormEvent, useMemo, useState } from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

type SubmitState = 'idle' | 'validating' | 'success' | 'error';

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  message: '',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactSection = () => {
  const { language, content } = useLanguage();
  const [formState, setFormState] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const messages = useMemo(() => {
    if (language === 'en') {
      return {
        required: 'This field is required.',
        invalidEmail: 'Please enter a valid email.',
        shortMessage: 'Please write at least 10 characters.',
        success: 'Thanks! Your message has been prepared and is ready for backend integration.',
        failed: 'An unexpected error occurred. Please try again.',
      };
    }

    if (language === 'it') {
      return {
        required: 'Questo campo è obbligatorio.',
        invalidEmail: 'Inserisci una email valida.',
        shortMessage: 'Scrivi almeno 10 caratteri.',
        success: 'Grazie! Il tuo messaggio è pronto per l\'integrazione backend.',
        failed: 'Si è verificato un errore inatteso. Riprova.',
      };
    }

    return {
      required: 'Este campo es obligatorio.',
      invalidEmail: 'Ingresa un email válido.',
      shortMessage: 'Escribe al menos 10 caracteres.',
      success: 'Gracias. Tu mensaje quedó listo para integrar con backend.',
      failed: 'Ocurrió un error inesperado. Inténtalo nuevamente.',
    };
  }, [language]);

  const validate = (values: FormState) => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = messages.required;
    }
    if (!values.email.trim()) {
      nextErrors.email = messages.required;
    } else if (!EMAIL_REGEX.test(values.email)) {
      nextErrors.email = messages.invalidEmail;
    }
    if (!values.message.trim()) {
      nextErrors.message = messages.required;
    } else if (values.message.trim().length < 10) {
      nextErrors.message = messages.shortMessage;
    }

    return nextErrors;
  };

  const onChange = (key: keyof FormState, value: string) => {
    setFormState((prev) => ({ ...prev, [key]: value }));

    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
    if (submitState !== 'idle') {
      setSubmitState('idle');
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState('validating');

    const nextErrors = validate(formState);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState('error');
      return;
    }

    try {
      const response = await fetch('https://api-tickets.nubbo.io/api/mail/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message
        })
      });

      if (response.ok) {
        setSubmitState('success');
        setFormState(INITIAL_FORM);
        setTimeout(() => {
          setSubmitState('idle');
        }, 3000);
      } else {
        throw new Error('Error en el envío');
      }
    } catch (error) {
      setSubmitState('error');
      console.error('Error:', error);
    }
  };

  return (
    <section id="contact" className="bg-white py-24 px-6 mt-32">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-10">
            <div className="space-y-4">
              <h4 className="text-primary-blue font-bold uppercase text-xs tracking-widest">{content.contact.tag}</h4>
              <h2 className="text-4xl md:text-5xl font-display font-bold">{content.contact.title}</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-blue/5 rounded-xl flex items-center justify-center text-primary-blue">
                  <Mail />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">{content.contact.writeUs}</p>
                  <p className="font-bold text-gray-800">info@nubbo.io</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-blue/5 rounded-xl flex items-center justify-center text-primary-blue">
                  <Phone />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">{content.contact.callUs}</p>
                  <p className="font-bold text-gray-800">+54 11 1234 5678</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-blue/5 rounded-xl flex items-center justify-center text-primary-blue">
                  <MessageSquare />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">{content.contact.support}</p>
                  <p className="font-bold text-gray-800">{content.contact.helpCenter}</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-primary-blue rounded-3xl text-white space-y-4 shadow-xl shadow-primary-blue/20">
              <h4 className="text-xl font-bold italic">{content.contact.implementation}</h4>
              <p className="text-sm opacity-80">{content.contact.implementationDesc}</p>
            </div>
          </div>

          <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-inner border border-gray-100">
            <form className="space-y-6" onSubmit={onSubmit} noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase ml-1" htmlFor="name">{content.contact.form.name}</label>
                  <input
                    id="name"
                    type="text"
                    placeholder={content.contact.form.placeholderName}
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all"
                    value={formState.name}
                    onChange={(event) => onChange('name', event.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && <p id="name-error" className="text-xs text-red-500 font-medium ml-1">{errors.name}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase ml-1" htmlFor="email">{content.contact.form.email}</label>
                <input
                  id="email"
                  type="email"
                  placeholder={content.contact.form.placeholderEmail}
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all"
                  value={formState.email}
                  onChange={(event) => onChange('email', event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && <p id="email-error" className="text-xs text-red-500 font-medium ml-1">{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase ml-1" htmlFor="message">{content.contact.form.message}</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder={content.contact.form.placeholderMessage}
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all resize-none"
                  value={formState.message}
                  onChange={(event) => onChange('message', event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && <p id="message-error" className="text-xs text-red-500 font-medium ml-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-primary-blue text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-primary-blue/30 transition-all active:scale-[0.98] disabled:opacity-70"
                disabled={submitState === 'validating'}
              >
                {submitState === 'validating' ? '...' : content.contact.form.send}
              </button>

              {submitState === 'success' && <p className="text-sm text-green-600 font-semibold">{messages.success}</p>}
              {submitState === 'error' && Object.keys(errors).length === 0 && (
                <p className="text-sm text-red-600 font-semibold">{messages.failed}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
