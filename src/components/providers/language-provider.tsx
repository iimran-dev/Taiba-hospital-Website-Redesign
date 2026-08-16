'use client';

import { useEffect } from 'react';
import { useLanguageStore } from '@/store/language-store';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { language, direction } = useLanguageStore();

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    document.body.style.fontFamily = language === 'ar' 
      ? 'var(--font-cairo), sans-serif' 
      : 'var(--font-inter), sans-serif';
  }, [language, direction]);

  return (
    <div dir={direction} className={language === 'ar' ? 'font-arabic' : 'font-sans'}>
      {children}
    </div>
  );
}
