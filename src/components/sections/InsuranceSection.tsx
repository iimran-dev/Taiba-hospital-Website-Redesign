'use client';

import { useState } from 'react';
import { Search, ShieldCheck } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useLanguageStore } from '@/store/language-store';
import { SectionHeading } from '@/components/ui-custom/SectionHeading';
import { AnimatedSection } from '@/components/ui-custom/AnimatedSection';
import { insuranceProviders } from '@/data/hospital-data';

export function InsuranceSection() {
  const { t, language } = useLanguageStore();
  const isRTL = language === 'ar';
  const [searchValue, setSearchValue] = useState('');

  const filteredProviders = insuranceProviders.filter((provider) =>
    provider.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <section id="insurance" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <AnimatedSection>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-deep-navy mb-4">
                {t('insurance.title')}
              </h2>
              <div className={`w-16 h-1 bg-hospital-blue rounded-full mb-4 ${isRTL ? 'ml-auto' : ''}`} />
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {t('insurance.subtitle')}
              </p>
            </div>
          </AnimatedSection>

          {/* Right: Search */}
          <AnimatedSection delay={0.15}>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 md:p-8">
              <div className={`flex gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="relative flex-1">
                  <Search className={`absolute top-1/2 -translate-y-1/2 size-4 text-muted-foreground ${isRTL ? 'right-3' : 'left-3'}`} />
                  <Input
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder={t('insurance.searchPlaceholder')}
                    className={`h-11 ${isRTL ? 'pr-10 text-right' : 'pl-10'} border-gray-200 focus:border-hospital-blue`}
                  />
                </div>
                <Button className="bg-hospital-blue hover:bg-hospital-blue/90 text-white font-medium px-6 shrink-0">
                  {t('insurance.checkCoverage')}
                </Button>
              </div>

              {/* Provider info */}
              <div className={`text-center mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                <p className="text-sm text-muted-foreground">
                  {t('insurance.partneredWith')}{' '}
                  <span className="text-hospital-blue font-semibold text-lg">{filteredProviders.length}+</span>{' '}
                  {t('insurance.insuranceProviders')}
                </p>
              </div>

              {/* Provider logos/names */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {filteredProviders.slice(0, 8).map((provider) => (
                  <div
                    key={provider}
                    className="flex items-center justify-center gap-2 bg-gray-50 rounded-lg p-3 border border-gray-100 hover:border-hospital-blue/30 transition-colors"
                  >
                    <ShieldCheck className="size-4 text-hospital-blue" />
                    <span className="text-xs font-medium text-deep-navy truncate">{provider}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
