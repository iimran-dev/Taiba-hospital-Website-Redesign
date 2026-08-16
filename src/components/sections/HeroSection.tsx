'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  UserCheck,
  Clock,
  Search,
  ChevronDown,
  PhoneCall,
  CalendarCheck,
  MessageCircle,
} from 'lucide-react';
import { useLanguageStore } from '@/store/language-store';
import { specialties } from '@/data/hospital-data';

export function HeroSection() {
  const { t, language } = useLanguageStore();
  const isRTL = language === 'ar';

  const [activeTab, setActiveTab] = useState<'doctor' | 'department' | 'symptom'>('doctor');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const doctorSection = document.getElementById('doctors');
    if (doctorSection) {
      doctorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden pt-28 sm:pt-36 lg:pt-40 pb-8 sm:pb-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/hero/hospital-exterior.png)',
      }}
    >
      {/* Dynamic Gradient Overlay */}
      <div
        className={`absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-[#092942] via-[#0a3556]/92 to-[#092942]/20 ${
          isRTL ? 'bg-gradient-to-l from-[#092942] via-[#0a3556]/92 to-[#092942]/20' : ''
        }`}
      />

      {/* Main Grid Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subheading & Stats */}
          <div className={`lg:col-span-7 ${isRTL ? 'text-right' : 'text-left'}`}>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[54px] text-white leading-[1.12] tracking-tight mb-6">
                {isRTL ? (
                  <>
                    رعاية إنسانية. <br />
                    رعاية صحية متقدمة.
                  </>
                ) : (
                  <>
                    Compassionate <br />
                    Care. Advanced <br />
                    Healthcare.
                  </>
                )}
              </h1>

              <p className="text-white/90 text-base sm:text-lg lg:text-[19px] max-w-xl mb-10 leading-relaxed font-normal">
                {t('hero.subheading')}
              </p>

              {/* Stats Indicators */}
              <div className={`flex flex-wrap items-center gap-6 sm:gap-10 pt-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                
                {/* Stat 1 */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-white leading-tight">23+</div>
                    <div className="text-xs sm:text-sm text-white/80 font-medium">
                      {t('hero.statSpecialties')}
                    </div>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <UserCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-white leading-tight">100+</div>
                    <div className="text-xs sm:text-sm text-white/80 font-medium">
                      {t('hero.statDoctors')}
                    </div>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-white leading-tight">24/7</div>
                    <div className="text-xs sm:text-sm text-white/80 font-medium">
                      {t('hero.statEmergency')}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Care Search Box */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
              className="bg-white rounded-[28px] p-6 sm:p-8 shadow-2xl shadow-black/30 border border-white/60 w-full max-w-md lg:max-w-[460px] mx-auto lg:ms-auto"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-[#0D2A44] mb-5">
                {t('hero.cardTitle')}
              </h2>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2 mb-5">
                <button
                  type="button"
                  onClick={() => setActiveTab('doctor')}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    activeTab === 'doctor'
                      ? 'bg-[#007B99] text-white shadow-md shadow-[#007B99]/20'
                      : 'bg-transparent text-gray-600 hover:text-gray-900 border border-gray-200/90 hover:bg-gray-50'
                  }`}
                >
                  {t('hero.findDoctorTab')}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('department')}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    activeTab === 'department'
                      ? 'bg-[#007B99] text-white shadow-md shadow-[#007B99]/20'
                      : 'bg-transparent text-gray-600 hover:text-gray-900 border border-gray-200/90 hover:bg-gray-50'
                  }`}
                >
                  {t('hero.findDepartmentTab')}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('symptom')}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    activeTab === 'symptom'
                      ? 'bg-[#007B99] text-white shadow-md shadow-[#007B99]/20'
                      : 'bg-transparent text-gray-600 hover:text-gray-900 border border-gray-200/90 hover:bg-gray-50'
                  }`}
                >
                  {t('hero.searchSymptomTab')}
                </button>
              </div>

              {/* Form Controls */}
              <form onSubmit={handleSearch} className="space-y-4">
                
                {/* Main Input Field */}
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={
                      activeTab === 'doctor'
                        ? t('hero.searchDoctorPlaceholder')
                        : activeTab === 'department'
                        ? t('hero.searchDeptPlaceholder')
                        : t('hero.searchSymptomPlaceholder')
                    }
                    className={`w-full bg-gray-50/80 border border-gray-200 rounded-2xl py-3.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#007B99]/30 focus:border-[#007B99] transition-all ${
                      isRTL ? 'pl-11 pr-4 text-right' : 'pr-11 pl-4'
                    }`}
                  />
                  <Search
                    className={`w-5 h-5 text-gray-400 absolute top-1/2 -translate-y-1/2 pointer-events-none ${
                      isRTL ? 'left-4' : 'right-4'
                    }`}
                  />
                </div>

                {/* Dropdowns Grid */}
                <div className="grid grid-cols-2 gap-3">
                  
                  {/* Specialty Dropdown */}
                  <div className="relative">
                    <select
                      value={selectedSpecialty}
                      onChange={(e) => setSelectedSpecialty(e.target.value)}
                      className={`w-full appearance-none bg-gray-50/80 border border-gray-200 rounded-2xl py-3 text-xs sm:text-sm text-gray-700 font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#007B99]/30 focus:border-[#007B99] transition-all ${
                        isRTL ? 'pl-8 pr-3 text-right' : 'pr-8 pl-3'
                      }`}
                    >
                      <option value="">{t('hero.allSpecialties')}</option>
                      {specialties.map((spec) => (
                        <option key={spec.id} value={spec.id}>
                          {spec.name[language]}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 absolute top-1/2 -translate-y-1/2 pointer-events-none ${
                        isRTL ? 'left-3' : 'right-3'
                      }`}
                    />
                  </div>

                  {/* Language Dropdown */}
                  <div className="relative">
                    <select
                      value={selectedLanguage}
                      onChange={(e) => setSelectedLanguage(e.target.value)}
                      className={`w-full appearance-none bg-gray-50/80 border border-gray-200 rounded-2xl py-3 text-xs sm:text-sm text-gray-700 font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#007B99]/30 focus:border-[#007B99] transition-all ${
                        isRTL ? 'pl-8 pr-3 text-right' : 'pr-8 pl-3'
                      }`}
                    >
                      <option value="">{t('hero.allLanguages')}</option>
                      <option value="en">English</option>
                      <option value="ar">العربية</option>
                      <option value="fr">Français</option>
                    </select>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 absolute top-1/2 -translate-y-1/2 pointer-events-none ${
                        isRTL ? 'left-3' : 'right-3'
                      }`}
                    />
                  </div>

                </div>

                {/* Primary Button */}
                <button
                  type="submit"
                  className="w-full bg-[#007B99] hover:bg-[#006882] active:scale-[0.99] text-white font-semibold text-base py-3.5 rounded-2xl transition-all shadow-md shadow-[#007B99]/25 flex items-center justify-center"
                >
                  {t('hero.findDoctorBtn')}
                </button>

              </form>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Floating Action Bar */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 lg:mt-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-950/10 border border-gray-100 overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse divide-gray-100"
        >
          
          {/* Tile 1: Emergency Call */}
          <a
            href="tel:1808088"
            className="bg-[#D9383A] hover:bg-[#c82f31] text-white p-4 sm:p-5 flex items-center gap-4 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <PhoneCall className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-white/90">
                {t('hero.quickEmergency')}
              </div>
              <div className="text-xl sm:text-2xl font-extrabold tracking-wide text-white">
                {t('hero.quickEmergencyNumber')}
              </div>
            </div>
          </a>

          {/* Tile 2: Book Appointment */}
          <a
            href="#doctors"
            className="bg-white hover:bg-slate-50/80 text-gray-900 p-4 sm:p-5 flex items-center gap-4 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#007B99]/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <CalendarCheck className="w-6 h-6 text-[#007B99]" />
            </div>
            <div>
              <div className="text-base font-bold text-[#0D2A44] group-hover:text-[#007B99] transition-colors">
                {t('hero.quickBook')}
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                {t('hero.quickBookSub')}
              </div>
            </div>
          </a>

          {/* Tile 3: WhatsApp Us */}
          <a
            href="https://wa.me/9651808088"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-slate-50/80 text-gray-900 p-4 sm:p-5 flex items-center gap-4 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#007B99]/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <MessageCircle className="w-6 h-6 text-[#007B99]" />
            </div>
            <div>
              <div className="text-base font-bold text-[#0D2A44] group-hover:text-[#007B99] transition-colors">
                {t('hero.quickWhatsapp')}
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                {t('hero.quickWhatsappSub')}
              </div>
            </div>
          </a>

          {/* Tile 4: Insurance Check */}
          <a
            href="#insurance"
            className="bg-white hover:bg-slate-50/80 text-gray-900 p-4 sm:p-5 flex items-center gap-4 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#007B99]/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6 text-[#007B99]" />
            </div>
            <div>
              <div className="text-base font-bold text-[#0D2A44] group-hover:text-[#007B99] transition-colors">
                {t('hero.quickInsurance')}
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                {t('hero.quickInsuranceSub')}
              </div>
            </div>
          </a>

        </motion.div>
      </div>
    </section>
  );
}

