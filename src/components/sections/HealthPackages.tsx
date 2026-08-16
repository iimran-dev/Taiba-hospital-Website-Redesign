'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { useLanguageStore } from '@/store/language-store';
import { SectionHeading } from '@/components/ui-custom/SectionHeading';
import { AnimatedSection } from '@/components/ui-custom/AnimatedSection';
import { packages as healthPackages } from '@/data/hospital-data';

export function HealthPackages() {
  const { t, language } = useLanguageStore();
  const isRTL = language === 'ar';

  return (
    <section id="packages" className="py-16 md:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading titleKey="packages.title" subtitleKey="packages.subtitle" />

        <div
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'thin' }}
        >
          {healthPackages.map((pkg, index) => (
            <AnimatedSection key={pkg.id} delay={index * 0.1}>
              <article className="snap-start shrink-0 w-80 bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Colored top bar */}
                <div className={`h-2 ${pkg.color}`} />

                <div className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2">
                    {pkg.name[language]}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {pkg.description[language]}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-2.5 mb-6">
                    {pkg.benefits.map((benefit) => (
                      <li key={benefit} className={`flex items-start gap-2 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <CheckCircle className="size-4 text-hospital-blue shrink-0 mt-0.5" />
                        <span className="text-deep-navy">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-hospital-blue hover:bg-hospital-blue/90 text-white font-medium">
                    {t('packages.bookPackage')}
                  </Button>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
