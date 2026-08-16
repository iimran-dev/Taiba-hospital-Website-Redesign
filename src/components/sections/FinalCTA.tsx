'use client';

import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguageStore } from '@/store/language-store';
import { AnimatedSection } from '@/components/ui-custom/AnimatedSection';

export function FinalCTA() {
  const { t, language } = useLanguageStore();
  const isRTL = language === 'ar';

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-deep-navy mb-6 leading-tight">
            {t('cta.title')}
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('cta.subtitle')}
          </p>

          <div className={`flex flex-wrap gap-4 justify-center ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Button
              size="lg"
              className="bg-hospital-blue hover:bg-hospital-blue/90 text-white font-semibold px-8 py-6 text-base rounded-xl"
            >
              {t('cta.bookAppointment')}
            </Button>
            <a href="tel:1808088">
              <Button
                size="lg"
                variant="outline"
                className="border-deep-navy text-deep-navy hover:bg-deep-navy hover:text-white font-semibold px-8 py-6 text-base rounded-xl"
              >
                <Phone className="size-4" />
                {t('cta.callUs')} 1808088
              </Button>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
