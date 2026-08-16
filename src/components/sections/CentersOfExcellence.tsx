'use client';

import { Button } from '@/components/ui/button';
import { useLanguageStore } from '@/store/language-store';
import { SectionHeading } from '@/components/ui-custom/SectionHeading';
import { specialties } from '@/data/hospital-data';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export function CentersOfExcellence() {
  const { t, language } = useLanguageStore();
  const isRTL = language === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="departments" className="py-16 md:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading titleKey="centers.title" subtitleKey="centers.subtitle" />

        <div
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin"
          style={{ scrollbarWidth: 'thin' }}
        >
          {specialties.map((specialty) => (
            <article
              key={specialty.id}
              className="snap-start shrink-0 w-72 md:w-80 bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={specialty.image}
                  alt={specialty.name[language]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/40 to-transparent" />
              </div>
              <div className={`p-5 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2">
                  {specialty.name[language]}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {specialty.description[language]}
                </p>
                <Button
                  variant="ghost"
                  className={`text-hospital-blue font-medium p-0 h-auto hover:bg-transparent ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {t('centers.explore')}
                  <ArrowIcon className="size-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
