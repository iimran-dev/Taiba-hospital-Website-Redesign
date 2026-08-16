'use client';

import { Phone, MessageCircle, CalendarPlus } from 'lucide-react';
import { useLanguageStore } from '@/store/language-store';

export function MobileBottomNav() {
  const { t, language } = useLanguageStore();
  const isRTL = language === 'ar';

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.08)] md:hidden ${
        isRTL ? 'flex-row-reverse' : ''
      }`}
      aria-label="Quick actions"
    >
      <div className="grid grid-cols-3 h-16">
        <a
          href="tel:1808088"
          className="flex flex-col items-center justify-center gap-1 text-emergency-red hover:bg-red-50 transition-colors min-h-[44px]"
        >
          <Phone className="size-5" />
          <span className="text-[10px] font-medium">{t('mobile.call')}</span>
        </a>
        <a
          href="https://wa.me/9651808088"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-trust-green hover:bg-green-50 transition-colors min-h-[44px]"
        >
          <MessageCircle className="size-5" />
          <span className="text-[10px] font-medium">{t('mobile.whatsapp')}</span>
        </a>
        <a
          href="#appointment"
          className="flex flex-col items-center justify-center gap-1 text-hospital-blue hover:bg-blue-50 transition-colors min-h-[44px]"
        >
          <CalendarPlus className="size-5" />
          <span className="text-[10px] font-medium">{t('mobile.appointment')}</span>
        </a>
      </div>
    </nav>
  );
}
