'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/9651808088"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-30 md:bottom-8 md:right-8 bg-trust-green hover:bg-trust-green/90 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="size-7" />
    </a>
  );
}
