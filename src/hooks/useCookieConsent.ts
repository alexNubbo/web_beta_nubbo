import { useEffect, useState } from 'react';

export const useCookieConsent = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookies-accepted');
    if (accepted) {
      setCookiesAccepted(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setCookiesAccepted(true);
  };

  return {
    cookiesAccepted,
    acceptCookies,
  };
};
