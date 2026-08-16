'use client';

import { useRef } from 'react';
import { useLanguageStore } from '@/store/language-store';
import { specialties } from '@/data/hospital-data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function CentersOfExcellence() {
  const { t, language } = useLanguageStore();
  const isRTL = language === 'ar';
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      const targetScroll = isRTL ? -scrollAmount : scrollAmount;
      scrollContainerRef.current.scrollBy({ left: targetScroll, behavior: 'smooth' });
    }
  };

  return (
    <section id="departments" className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row: Title on Left, View All Button on Right */}
        <div className={`flex items-center justify-between mb-8 sm:mb-10 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D2A44] tracking-tight font-heading">
            {t('centers.title')}
          </h2>

          <a
            href="#doctors"
            className={`border border-[#007B99] text-[#007B99] hover:bg-[#007B99] hover:text-white rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 shrink-0 ${
              isRTL ? 'flex-row-reverse' : ''
            }`}
          >
            <span>{t('centers.viewAll')}</span>
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
            aria-label="Previous specialty"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            type="button"
            onClick={() => scroll('right')}
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-200/90 shadow-md flex items-center justify-center text-[#007B99] hover:bg-[#007B99] hover:text-white active:scale-95 transition-all focus:outline-none cursor-pointer"
            aria-label="Next specialty"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Responsive Cards Grid / Scroll Area */}
          <div
            ref={scrollContainerRef}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 py-2 px-1"
          >
            {specialties.map((specialty) => (
              <article
                key={specialty.id}
                className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer flex flex-col justify-between h-full"
              >
                {/* Specialty Image Header */}
                <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                  <img
                    src={specialty.image}
                    alt={specialty.name[language]}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `/images/specialties/${specialty.id}.png`;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Specialty Title Footer */}
                <div className="py-4 px-2 sm:px-3 bg-white text-center flex items-center justify-center min-h-[56px] border-t border-gray-100">
                  <h3 className="font-bold text-xs sm:text-sm md:text-base text-[#0D2A44] leading-tight font-heading">
                    {specialty.name[language]}
                  </h3>
                </div>
              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

