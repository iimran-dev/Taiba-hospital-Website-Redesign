'use client';

import { useLanguageStore } from '@/store/language-store';

interface SectionHeadingProps {
  titleKey: string;
  subtitleKey: string;
  className?: string;
  light?: boolean;
}

export function SectionHeading({ titleKey, subtitleKey, className = '', light = false }: SectionHeadingProps) {
  const { t } = useLanguageStore();

  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2
        className={`text-3xl md:text-4xl font-heading font-bold mb-4 ${
          light ? 'text-white' : 'text-deep-navy'
        }`}
      >
        {t(titleKey)}
      </h2>
      <div className="w-16 h-1 bg-hospital-blue mx-auto rounded-full mb-4" />
      <p
        className={`text-base md:text-lg max-w-2xl mx-auto ${
          light ? 'text-white/80' : 'text-muted-foreground'
        }`}
      >
        {t(subtitleKey)}
      </p>
    </div>
  );
}
