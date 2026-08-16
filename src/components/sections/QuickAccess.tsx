'use client';

import { Siren, CalendarCheck, MessageCircle, ShieldCheck } from 'lucide-react';
import { useLanguageStore } from '@/store/language-store';
import { AnimatedSection } from '@/components/ui-custom/AnimatedSection';

const quickCards = [
  {
    icon: Siren,
    titleKey: 'quick.emergency',
    descKey: 'quick.emergencyDesc',
    accent: 'bg-emergency-red',
    hoverBg: 'group-hover:bg-emergency-red',
    href: 'tel:1808088',
  },
  {
    icon: CalendarCheck,
    titleKey: 'quick.bookAppointment',
    descKey: 'quick.bookDesc',
    accent: 'bg-hospital-blue',
    hoverBg: 'group-hover:bg-hospital-blue',
    href: '#appointment',
  },
  {
    icon: MessageCircle,
    titleKey: 'quick.whatsapp',
    descKey: 'quick.whatsappDesc',
    accent: 'bg-trust-green',
    hoverBg: 'group-hover:bg-trust-green',
    href: 'https://wa.me/9651808088',
  },
  {
    icon: ShieldCheck,
    titleKey: 'quick.insurance',
    descKey: 'quick.insuranceDesc',
    accent: 'bg-cta-orange',
    hoverBg: 'group-hover:bg-cta-orange',
    href: '#insurance',
  },
];

export function QuickAccess() {
  const { t, language } = useLanguageStore();

  return (
    <section className="py-16 md:py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <AnimatedSection key={card.titleKey} delay={index * 0.1}>
                <a
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group block bg-white rounded-xl p-6 border border-gray-100 hover:-translate-y-[10px] hover:shadow-xl transition-all duration-300 h-full"
                >
                  <div
                    className={`w-12 h-12 ${card.accent} rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${card.hoverBg}`}
                  >
                    <Icon className="size-6 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-deep-navy mb-2">
                    {t(card.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(card.descKey)}
                  </p>
                </a>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
