'use client';

import { Calendar, FileText, Pill, Bell, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguageStore } from '@/store/language-store';
import { SectionHeading } from '@/components/ui-custom/SectionHeading';
import { AnimatedSection } from '@/components/ui-custom/AnimatedSection';

const appFeatures = [
  { icon: Calendar, labelKey: 'app.appointments' },
  { icon: FileText, labelKey: 'app.reports' },
  { icon: Pill, labelKey: 'app.prescriptions' },
  { icon: Bell, labelKey: 'app.notifications' },
];

export function MobileAppSection() {
  const { t, language } = useLanguageStore();
  const isRTL = language === 'ar';

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Blue gradient background */}
      <div className="bg-gradient-to-br from-hospital-blue via-hospital-blue to-deep-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
              {/* Text content */}
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                  {t('app.title')}
                </h2>
                <div className={`w-16 h-1 bg-cta-orange rounded-full mb-6 ${isRTL ? 'ml-auto' : ''}`} />
                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
                  {t('app.subtitle')}
                </p>

                {/* Feature icons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {appFeatures.map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={feature.labelKey}
                        className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm"
                      >
                        <Icon className="size-6 text-white mx-auto mb-2" />
                        <span className="text-white text-xs font-medium">{t(feature.labelKey)}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Store buttons */}
                <div className={`flex flex-wrap gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Button
                    size="lg"
                    className="bg-white text-deep-navy hover:bg-white/90 font-semibold rounded-xl px-6"
                  >
                    <Smartphone className="size-5" />
                    App Store
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 font-semibold rounded-xl px-6"
                  >
                    <Smartphone className="size-5" />
                    Google Play
                  </Button>
                </div>
              </div>

              {/* Phone mockup placeholder */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="w-64 h-[500px] bg-white/10 rounded-[2.5rem] border-4 border-white/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <Smartphone className="size-16 text-white/40 mx-auto mb-4" />
                    <p className="text-white/40 text-sm">{t('app.getApp')}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
