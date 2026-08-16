'use client';

import { useLanguageStore } from '@/store/language-store';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';

const quickLinks = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.departments', href: '#departments' },
  { key: 'nav.doctors', href: '#doctors' },
  { key: 'nav.contact', href: '#contact' },
];

const services = [
  { labelKey: 'nav.emergency', href: '#emergency' },
  { labelKey: 'nav.insurance', href: '#insurance' },
  { labelKey: 'nav.packages', href: '#packages' },
  { label: 'Lab', href: '#lab' },
  { label: 'Pharmacy', href: '#pharmacy' },
  { label: 'Radiology', href: '#radiology' },
];

export function Footer() {
  const { t, language } = useLanguageStore();
  const isRTL = language === 'ar';

  return (
    <footer className="bg-deep-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Overview */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <div className={`flex items-center gap-2 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-10 h-10 bg-hospital-blue rounded-xl flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">T</span>
              </div>
              <span className="font-heading font-bold text-lg">
                {isRTL ? 'مستشفى طيبة' : 'Taiba Hospital'}
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              {t('footer.overview')}
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-hospital-blue transition-colors"
                  aria-label="Social media"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="font-heading font-semibold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="font-heading font-semibold text-lg mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.labelKey || item.label}>
                  <a
                    href={item.href}
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {item.labelKey ? t(item.labelKey) : item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="font-heading font-semibold text-lg mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <MapPin className="size-4 text-hospital-blue shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">{t('footer.address')}</span>
              </li>
              <li className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Phone className="size-4 text-hospital-blue shrink-0" />
                <a href="tel:1808088" className="text-white/70 text-sm hover:text-white transition-colors">
                  1808088
                </a>
              </li>
              <li className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Mail className="size-4 text-hospital-blue shrink-0" />
                <a href="mailto:info@taibahospital.com" className="text-white/70 text-sm hover:text-white transition-colors">
                  info@taibahospital.com
                </a>
              </li>
              <li className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Clock className="size-4 text-hospital-blue shrink-0" />
                <span className="text-white/70 text-sm">
                  {t('nav.emergency')} 24/7
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className={`flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/60 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <p>
              © {new Date().getFullYear()} {isRTL ? 'مستشفى طيبة' : 'Taiba Hospital'}. {t('footer.rights')}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="hover:text-white transition-colors">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
