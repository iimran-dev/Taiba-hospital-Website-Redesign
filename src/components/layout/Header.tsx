'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Menu, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';
import { useLanguageStore } from '@/store/language-store';

const navLinks = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.departments', href: '#departments' },
  { key: 'nav.doctors', href: '#doctors' },
  { key: 'nav.insurance', href: '#insurance' },
  { key: 'nav.packages', href: '#packages' },
  { key: 'nav.media', href: '#media' },
  { key: 'nav.contact', href: '#contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, language, setLanguage } = useLanguageStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between h-16 md:h-20 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-hospital-blue rounded-xl flex items-center justify-center">
              <span className="text-white font-heading font-bold text-lg md:text-xl">T</span>
            </div>
            <div className={`hidden sm:block ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <p className={`font-heading font-bold text-base md:text-lg ${scrolled ? 'text-deep-navy' : 'text-white'} leading-tight`}>
                {language === 'ar' ? 'مستشفى طيبة' : 'Taiba Hospital'}
              </p>
              <p className={`text-[10px] md:text-xs ${scrolled ? 'text-muted-foreground' : 'text-white/80'} leading-tight`}>
                {language === 'ar' ? 'الكويت' : 'Kuwait'}
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-white/20 ${
                  scrolled ? 'text-deep-navy hover:bg-hospital-blue-light' : 'text-white'
                }`}
              >
                {t(link.key)}
              </a>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className={`hidden lg:flex items-center gap-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            {/* Emergency */}
            <a
              href="tel:1808088"
              className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                scrolled ? 'text-emergency-red' : 'text-white'
              }`}
            >
              <Phone className="size-4" />
              <span>1808088</span>
            </a>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                scrolled
                  ? 'border-gray-200 text-deep-navy hover:bg-gray-50'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              <Globe className="size-3.5" />
              {language === 'en' ? 'عربي' : 'EN'}
            </button>

            {/* Book CTA */}
            <Button className="bg-hospital-blue hover:bg-hospital-blue/90 text-white font-medium">
              {t('nav.bookAppointment')}
            </Button>
          </div>

          {/* Mobile Right */}
          <div className={`flex items-center gap-2 lg:hidden ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <a
              href="tel:1808088"
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? 'text-emergency-red hover:bg-red-50' : 'text-white'
              }`}
            >
              <Phone className="size-5" />
            </a>
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium border ${
                scrolled
                  ? 'border-gray-200 text-deep-navy'
                  : 'border-white/30 text-white'
              }`}
            >
              <Globe className="size-3" />
              {language === 'en' ? 'عربي' : 'EN'}
            </button>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <button
                onClick={() => setMobileOpen(true)}
                className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-deep-navy' : 'text-white'}`}
              >
                <Menu className="size-6" />
              </button>
              <SheetContent side={language === 'ar' ? 'left' : 'right'} className="w-80 pt-8">
                <SheetHeader>
                  <SheetTitle className={`font-heading font-bold text-lg ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    {language === 'ar' ? 'مستشفى طيبة' : 'Taiba Hospital'}
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1 mt-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.key}>
                      <a
                        href={link.href}
                        className={`flex items-center px-4 py-3 rounded-lg text-base font-medium text-deep-navy hover:bg-hospital-blue-light transition-colors ${
                          language === 'ar' ? 'justify-end' : ''
                        }`}
                      >
                        {t(link.key)}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-6 px-4">
                  <Button className="w-full bg-hospital-blue hover:bg-hospital-blue/90 text-white font-medium">
                    {t('nav.bookAppointment')}
                  </Button>
                </div>
                <div className={`mt-4 px-4 flex items-center gap-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <Phone className="size-4 text-emergency-red" />
                  <a href="tel:1808088" className="text-sm font-semibold text-emergency-red">
                    1808088 - {t('nav.emergency')}
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
