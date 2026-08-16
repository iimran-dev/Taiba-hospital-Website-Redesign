'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguageStore } from '@/store/language-store';
import { SectionHeading } from '@/components/ui-custom/SectionHeading';
import { DoctorCard } from '@/components/ui-custom/DoctorCard';
import { doctors, specialties } from '@/data/hospital-data';

export function FindDoctorSection() {
  const { t, language } = useLanguageStore();
  const isRTL = language === 'ar';
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDoctors = doctors.filter((doc) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      doc.name.en.toLowerCase().includes(query) ||
      doc.name.ar.includes(query) ||
      doc.specialty.en.toLowerCase().includes(query) ||
      doc.specialty.ar.includes(query)
    );
  });

  return (
    <section id="doctors" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading titleKey="doctors.title" subtitleKey="doctors.subtitle" />

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className={`absolute top-1/2 -translate-y-1/2 size-5 text-muted-foreground ${isRTL ? 'right-3' : 'left-3'}`} />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('doctors.searchPlaceholder')}
              className={`h-12 pl-11 ${isRTL ? 'pr-11 text-right' : ''} border-gray-200 text-base focus:border-hospital-blue`}
            />
          </div>
        </div>

        {/* Filters */}
        <div className={`flex flex-wrap gap-3 mb-8 justify-center ${isRTL ? 'flex-row-reverse' : ''}`}>
          <Select>
            <SelectTrigger className="w-[160px] h-10 border-gray-200">
              <SelectValue placeholder={t('doctors.allSpecialties')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('doctors.allSpecialties')}</SelectItem>
              {specialties.map((spec) => (
                <SelectItem key={spec.id} value={spec.id}>
                  {spec.name[language]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[140px] h-10 border-gray-200">
              <SelectValue placeholder={t('doctors.allGenders')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('doctors.allGenders')}</SelectItem>
              <SelectItem value="male">{language === 'ar' ? 'ذكر' : 'Male'}</SelectItem>
              <SelectItem value="female">{language === 'ar' ? 'أنثى' : 'Female'}</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[160px] h-10 border-gray-200">
              <SelectValue placeholder={t('doctors.allLanguages')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('doctors.allLanguages')}</SelectItem>
              <SelectItem value="en">{language === 'ar' ? 'الإنجليزية' : 'English'}</SelectItem>
              <SelectItem value="ar">{language === 'ar' ? 'العربية' : 'Arabic'}</SelectItem>
              <SelectItem value="fr">{language === 'ar' ? 'الفرنسية' : 'French'}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}
