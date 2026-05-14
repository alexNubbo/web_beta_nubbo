import type { ReactNode } from 'react';

export type Language = 'es' | 'en' | 'it';

export interface NavContent {
  home: string;
  benefits: string;
  features: string;
  demo: string;
  about: string;
  clients: string;
  contact: string;
  tryDemo: string;
  requestDemo: string;
}

export interface HeroContent {
  badge1: string;
  badge2: string;
  title: string;
  highlight: string;
  desc: string;
  startNow: string;
  viewDemo: string;
  stats: string;
  statsDesc: string;
}

export interface CtaContent {
  title: string;
  desc: string;
}

export interface BenefitsContent {
  title1: string;
  desc1: string;
  title2: string;
  desc2: string;
  title3: string;
  desc3: string;
}

export interface FeatureItem {
  title: string;
  icon: ReactNode;
  text: string;
}

export interface FeaturesContent {
  tag: string;
  title: string;
  desc: string;
  items: FeatureItem[];
}

export interface DemoTab {
  id: string;
  label: string;
  scenario: string;
  title: string;
  subtitle: string;
  bullets: string[];
  video: string;
}

export interface DemoSectionContent {
  title: string;
  desc: string;
  tabs: DemoTab[];
}

export interface AboutContent {
  title: string;
  desc: string;
  experience: string;
  visionTitle: string;
  visionDesc: string;
  valuesTitle: string;
  valuesDesc: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  text: string;
}

export interface TestimonialsContent {
  title: string;
  desc: string;
  items: TestimonialItem[];
}

export interface ContactFormContent {
  name: string;
  email: string;
  agency: string;
  message: string;
  send: string;
  placeholderName: string;
  placeholderAgency: string;
  placeholderEmail: string;
  placeholderMessage: string;
}

export interface ContactContent {
  tag: string;
  title: string;
  writeUs: string;
  callUs: string;
  support: string;
  helpCenter: string;
  implementation: string;
  implementationDesc: string;
  form: ContactFormContent;
}

export interface CookiesContent {
  title: string;
  text: string;
  accept: string;
  settings: string;
}

export interface CookiesPolicyContent {
  title: string;
  intro: string;
  cookiesTableTitle: string;
  analyticsTitle: string;
  analyticsDesc: string;
  technicalTitle: string;
  technicalDesc: string;
  ownCookiesTitle: string;
  ownCookiesDesc: string;
  sessionTitle: string;
  sessionDesc: string;
  socialTitle: string;
  socialDesc: string;
  thirdPartyTitle: string;
  thirdPartyDesc: string;
  acceptanceTitle: string;
  acceptanceDesc: string;
  manageTitle: string;
  manageDesc: string;
}

export interface FooterContent {
  description: string;
  productTitle: string;
  productLinks: string[];
  companyTitle: string;
  companyLinks: string[];
  legalTitle: string;
  legalLinks: string[];
  rights: string;
}

export interface SiteContent {
  nav: NavContent;
  hero: HeroContent;
  cta: CtaContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  demoSection: DemoSectionContent;
  about: AboutContent;
  testimonials: TestimonialsContent;
  contact: ContactContent;
  cookies: CookiesContent;
  cookiesPolicy: CookiesPolicyContent;
  footer: FooterContent;
}
