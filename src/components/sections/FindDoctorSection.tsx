'use client';

import { useRef } from 'react';
import { useLanguageStore } from '@/store/language-store';
import { DoctorCard } from '@/components/ui-custom/DoctorCard';
import { doctors } from '@/data/hospital-data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function FindDoctorSection() {
  const { language } = useLanguageStore();
  const isRTL = language === 'ar';
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      const targetScroll = isRTL ? -scrollAmount : scrollAmount;
      scrollContainerRef.current.scrollBy({ left: targetScroll, behavior: 'smooth' });
    }
  };

  return (
    <section id="doctors" className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row: Title on Left, View All Button on Right */}
        <div className={`flex items-center justify-between mb-8 sm:mb-10 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D2A44] tracking-tight font-heading">
            {isRTL ? 'أطباؤنا الخبراء' : 'Our Expert Doctors'}
          </h2>

          <a
            href="#doctors"
            className={`border border-[#007B99] text-[#007B99] hover:bg-[#007B99] hover:text-white rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 shrink-0 ${
              isRTL ? 'flex-row-reverse' : ''
            }`}
          >
            <span>{isRTL ? 'عرض جميع الأطباء' : 'View All Doctors'}</span>
            <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </a>
        </div>

        {/* Carousel Container with Left/Right Arrows */}
        <div className="relative group/carousel">
          
          {/* Left Navigation Arrow */}
          <button
            type="button"
            onClick={() => scroll('left')}
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-200/90 shadow-md flex items-center justify-center text-[#007B99] hover:bg-[#007B99] hover:text-white active:scale-95 transition-all focus:outline-none cursor-pointer"
            aria-label="Previous doctor"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            type="button"
            onClick={() => scroll('right')}
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-200/90 shadow-md flex items-center justify-center text-[#007B99] hover:bg-[#007B99] hover:text-white active:scale-95 transition-all focus:outline-none cursor-pointer"
            aria-label="Next doctor"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Doctors Grid / Scroll Area */}
          <div
            ref={scrollContainerRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-2 px-1 overflow-x-auto scrollbar-none scroll-smooth"
          >
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
