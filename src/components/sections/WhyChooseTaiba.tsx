'use client';

import { ShieldCheck, Sparkles, Stethoscope, HeartHandshake, Globe, PhoneCall } from 'lucide-react';
import { useLanguageStore } from '@/store/language-store';
import { AnimatedSection } from '@/components/ui-custom/AnimatedSection';

const features = [
  {
    icon: ShieldCheck,
    titleKey: 'why.accredited',
    descKey: 'why.accreditedDesc',
  },
  {
    icon: Sparkles,
    titleKey: 'why.technology',
    descKey: 'why.technologyDesc',
  },
  {
    icon: Stethoscope,
    titleKey: 'why.doctors',
    descKey: 'why.doctorsDesc',
  },
  {
    icon: HeartHandshake,
    titleKey: 'why.patientFirst',
    descKey: 'why.patientFirstDesc',
  },
  {
    icon: Globe,
    titleKey: 'why.multilingual',
    descKey: 'why.multilingualDesc',
  },
  {
    icon: PhoneCall,
    titleKey: 'why.easyBooking',
    descKey: 'why.easyBookingDesc',
  },
];

export function WhyChooseTaiba() {
  const { t } = useLanguageStore();

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title with Accent Line */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D2A44] tracking-tight mb-3">
            {t('why.title')}
          </h2>
          <div className="w-14 h-[3px] bg-[#80C3D9] rounded-full mx-auto" />
        </div>

        {/* 6 Responsive Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimatedSection key={feature.titleKey} delay={index * 0.06}>
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center h-full group hover:-translate-y-1">
                  <div className="w-14 h-14 mb-4 flex items-center justify-center">
                    <Icon className="w-10 h-10 sm:w-11 sm:h-11 text-[#007B99] stroke-[1.5] group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-[#0D2A44] mb-2 font-heading leading-tight min-h-[40px] flex items-center justify-center">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-normal">
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

