'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguageStore } from '@/store/language-store';

export function HeroSection() {
  const { t, language } = useLanguageStore();
  const isRTL = language === 'ar';

  return (
    <section
      id="home"
      className="relative min-h-[90vh] md:min-h-[90vh] flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero/hospital-exterior.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-deep-navy/60" />

      {/* Content */}
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 ${isRTL ? 'text-right' : 'text-left'}`}>
        <motion.h1
          className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {t('hero.heading')}{' '}
          <span className="text-sky-300">{t('hero.headingHighlight')}</span>
        </motion.h1>

        <motion.p
          className="text-white/80 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          {t('hero.subheading')}
        </motion.p>

        <motion.div
          className={`flex flex-wrap gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
        >
          <Button
            size="lg"
            className="bg-hospital-blue hover:bg-hospital-blue/90 text-white font-semibold px-8 py-6 text-base rounded-xl"
          >
            {t('hero.bookAppointment')}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-base rounded-xl"
          >
            {t('hero.findDoctor')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
