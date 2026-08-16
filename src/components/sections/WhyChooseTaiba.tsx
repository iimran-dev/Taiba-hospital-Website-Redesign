'use client';

import { Award, Cpu, UserCheck, HeartHandshake, Languages, CalendarClock } from 'lucide-react';
import { useLanguageStore } from '@/store/language-store';
import { SectionHeading } from '@/components/ui-custom/SectionHeading';
import { AnimatedSection } from '@/components/ui-custom/AnimatedSection';

const features = [
  {
    icon: Award,
    titleKey: 'why.accredited',
    descKey: 'why.accreditedDesc',
  },
  {
    icon: Cpu,
    titleKey: 'why.technology',
    descKey: 'why.technologyDesc',
  },
  {
    icon: UserCheck,
    titleKey: 'why.doctors',
    descKey: 'why.doctorsDesc',
  },
  {
    icon: HeartHandshake,
    titleKey: 'why.patientFirst',
    descKey: 'why.patientFirstDesc',
  },
  {
    icon: Languages,
    titleKey: 'why.multilingual',
    descKey: 'why.multilingualDesc',
  },
  {
    icon: CalendarClock,
    titleKey: 'why.easyBooking',
    descKey: 'why.easyBookingDesc',
  },
];

export function WhyChooseTaiba() {
  const { t } = useLanguageStore();

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading titleKey="why.title" subtitleKey="why.subtitle" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimatedSection key={feature.titleKey} delay={index * 0.08}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-hospital-blue-light rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="size-7 text-hospital-blue" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {t(feature.descKey)}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
