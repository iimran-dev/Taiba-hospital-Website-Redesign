'use client';

import { useLanguageStore } from '@/store/language-store';

export function InsuranceSection() {
  const { language } = useLanguageStore();
  const isRTL = language === 'ar';

  return (
    <section id="insurance" className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl bg-[#034C60] min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] flex items-center">
          
          {/* Background Family Image */}
          <div className={`absolute top-0 bottom-0 w-full md:w-3/5 lg:w-1/2 h-full z-0 ${isRTL ? 'left-0' : 'right-0'}`}>
            <img
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80"
              alt={isRTL ? 'التأمين والباقات الصحية' : 'Insurance & Health Packages'}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Smooth Gradient Overlay */}
          <div
            className={`absolute inset-0 z-10 w-full md:w-4/5 ${
              isRTL
                ? 'bg-gradient-to-l from-[#034C60] via-[#034C60]/95 via-60% to-transparent'
                : 'bg-gradient-to-r from-[#034C60] via-[#034C60]/95 via-60% to-transparent'
            }`}
          />

          {/* Banner Text Content */}
          <div className={`relative z-20 p-8 sm:p-12 lg:p-16 max-w-xl lg:max-w-2xl ${isRTL ? 'text-right' : 'text-left'}`}>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white tracking-tight font-heading leading-tight mb-3 sm:mb-4">
              {isRTL ? 'التأمين والباقات الصحية' : 'Insurance & Health Packages'}
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-white/90 font-normal leading-relaxed mb-6 sm:mb-8 max-w-xl">
              {isRTL
                ? 'نتعاون مع معظم شركات التأمين الرئيسية في الكويت. تحقق من تغطيتك التأمينية أو استكشف باقاتنا الصحية.'
                : 'We are empanelled with most major insurance companies in Kuwait. Check your coverage or explore our health packages.'}
            </p>

            {/* Buttons Row */}
            <div className={`flex flex-wrap items-center gap-3.5 sm:gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              
              {/* Check Your Insurance Pill Button */}
              <a
                href="#insurance"
                className="bg-white text-[#034C60] hover:bg-white/90 rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer text-center"
              >
                {isRTL ? 'تحقق من التأمين' : 'Check Your Insurance'}
              </a>

              {/* View Packages Outline Pill Button */}
              <a
                href="#packages"
                className="border-2 border-white/80 text-white hover:bg-white/10 rounded-full px-6 sm:px-8 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer text-center"
              >
                {isRTL ? 'استكشف الباقات' : 'View Packages'}
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
