'use client';

import { useLanguageStore } from '@/store/language-store';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { UserRound } from 'lucide-react';
import type { Doctor } from '@/data/hospital-data';

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  const { t, language } = useLanguageStore();

  return (
    <article className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
        <img
          src={doctor.photo}
          alt={doctor.name[language]}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {!doctor.available && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="bg-white/90 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium">
              {language === 'ar' ? 'غير متاح حالياً' : 'Currently Unavailable'}
            </span>
          </div>
        )}
      </div>
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-heading font-semibold text-lg text-deep-navy">
            {doctor.name[language]}
          </h3>
          <p className="text-sm text-muted-foreground">{doctor.specialty[language]}</p>
          <p className="text-xs text-muted-foreground mt-1">{doctor.qualification[language]}</p>
        </div>
        <p className="text-sm text-hospital-blue font-medium">
          {doctor.experience}+ {t('doctors.yearsExp')}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {doctor.languages.map((lang) => (
            <Badge key={lang} variant="secondary" className="text-xs font-normal">
              {lang}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2 pt-1">
          <Button variant="outline" size="sm" className="flex-1 text-sm">
            {t('doctors.viewProfile')}
          </Button>
          <Button size="sm" className="flex-1 text-sm bg-hospital-blue hover:bg-hospital-blue/90 text-white">
            {t('doctors.bookAppointment')}
          </Button>
        </div>
      </div>
    </article>
  );
}
