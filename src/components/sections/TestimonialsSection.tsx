'use client';

import { Quote, Star } from 'lucide-react';
import { useLanguageStore } from '@/store/language-store';
import { SectionHeading } from '@/components/ui-custom/SectionHeading';
import { AnimatedSection } from '@/components/ui-custom/AnimatedSection';
import { testimonials } from '@/data/hospital-data';

export function TestimonialsSection() {
  const { t, language } = useLanguageStore();
  const isRTL = language === 'ar';
  const [featured, ...rest] = testimonials;

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading titleKey="testimonials.title" subtitleKey="testimonials.subtitle" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured testimonial */}
          <AnimatedSection className="lg:col-span-2">
            <div className={`bg-gradient-to-br from-hospital-blue to-deep-navy rounded-2xl p-8 md:p-10 text-white h-full flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}>
              <Quote className="size-10 text-white/30 mb-4" />
              <p className="text-lg md:text-xl leading-relaxed font-light mb-6 flex-1">
                &ldquo;{featured.quote[language]}&rdquo;
              </p>
              <div className={`flex items-center justify-between flex-wrap gap-4 border-t border-white/20 pt-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div>
                  <p className="font-semibold text-base">{featured.name}</p>
                  <p className="text-white/70 text-sm">{featured.specialty}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: featured.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-cta-orange text-cta-orange" />
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Smaller testimonial cards */}
          <div className="flex flex-col gap-6">
            {rest.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} delay={index * 0.15}>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
                  <p className="text-sm text-deep-navy leading-relaxed flex-1 mb-4">
                    &ldquo;{testimonial.quote[language]}&rdquo;
                  </p>
                  <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div>
                      <p className="font-semibold text-sm text-deep-navy">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.specialty}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="size-3 fill-cta-orange text-cta-orange" />
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
