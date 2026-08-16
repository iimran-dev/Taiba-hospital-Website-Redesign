'use client';

import { useState } from 'react';
import { useLanguageStore } from '@/store/language-store';
import { ChevronRight } from 'lucide-react';
import type { Doctor } from '@/data/hospital-data';

interface DoctorCardProps {
  doctor: Doctor;
}

const PLACEHOLDER_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300" fill="none"><rect width="400" height="300" fill="%23edf2f7"/><circle cx="200" cy="110" r="50" fill="%23cbd5e1"/><path d="M100 280C100 210 145 180 200 180C255 180 300 210 300 280" fill="%23cbd5e1"/></svg>`;

export function DoctorCard({ doctor }: DoctorCardProps) {
  const { language } = useLanguageStore();
  const isRTL = language === 'ar';
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group bg-white rounded-2xl border border-gray-200/80 p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full cursor-pointer">
      <div>
        {/* Doctor Image Header with Light Blue Background & Image Fallback Placeholder */}
        <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#edf2f7] mb-4 flex items-center justify-center">
          <img
            src={imageError ? PLACEHOLDER_SVG : doctor.photo}
            alt={doctor.name[language] || doctor.name.en}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          {!doctor.available && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                {isRTL ? 'غير متاح حالياً' : 'Currently Unavailable'}
              </span>
            </div>
          )}
        </div>

        {/* Doctor Name & Role */}
        <div className="space-y-1 mb-3">
          <h3 className="font-bold text-base sm:text-lg text-[#0D2A44] leading-snug font-heading">
            {doctor.name[language] || doctor.name.en}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed line-clamp-2 min-h-[38px]">
            {doctor.qualification[language] || doctor.specialty[language]}
          </p>
        </div>
      </div>

      {/* Footer Row: Experience & Arrow Circle Button */}
      <div className={`flex items-center justify-between pt-2 border-t border-gray-100/60 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <span className="text-xs sm:text-sm font-semibold text-[#007B99]">
          {doctor.experience}+ {isRTL ? 'سنوات خبرة' : 'Years Experience'}
        </span>

        <div className="w-8 h-8 rounded-full border border-[#007B99]/40 text-[#007B99] flex items-center justify-center group-hover:bg-[#007B99] group-hover:text-white group-hover:border-[#007B99] transition-all">
          <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
        </div>
      </div>
    </article>
  );
}
