'use client';

import { useLanguageStore } from '@/store/language-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Search } from 'lucide-react';
import { specialties } from '@/data/hospital-data';

export function CareSearch() {
  const { t, language } = useLanguageStore();
  const isRTL = language === 'ar';

  return (
    <section className="relative z-20 -mt-16 md:-mt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 md:p-8">
        <Tabs defaultValue="find-doctor" className="w-full">
          <TabsList className="w-full h-auto flex bg-gray-100 p-1 mb-6">
            <TabsTrigger value="find-doctor" className="flex-1 py-2.5 text-sm font-medium rounded-lg">
              {t('search.findDoctor')}
            </TabsTrigger>
            <TabsTrigger value="find-department" className="flex-1 py-2.5 text-sm font-medium rounded-lg">
              {t('search.findDepartment')}
            </TabsTrigger>
            <TabsTrigger value="search-symptoms" className="flex-1 py-2.5 text-sm font-medium rounded-lg">
              {t('search.searchSymptoms')}
            </TabsTrigger>
          </TabsList>

          {/* Find Doctor Tab */}
          <TabsContent value="find-doctor">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <Label className="text-sm font-medium text-deep-navy mb-1.5 block">
                  {t('search.doctorName')}
                </Label>
                <Input
                  placeholder={t('search.doctorName')}
                  className="h-11 border-gray-200 focus:border-hospital-blue"
                />
              </div>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <Label className="text-sm font-medium text-deep-navy mb-1.5 block">
                  {t('search.specialty')}
                </Label>
                <Select>
                  <SelectTrigger className="h-11 w-full border-gray-200">
                    <SelectValue placeholder={t('search.specialty')} />
                  </SelectTrigger>
                  <SelectContent>
                    {specialties.map((spec) => (
                      <SelectItem key={spec.id} value={spec.id}>
                        {spec.name[language]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <Label className="text-sm font-medium text-deep-navy mb-1.5 block">
                  {t('search.language')}
                </Label>
                <Select>
                  <SelectTrigger className="h-11 w-full border-gray-200">
                    <SelectValue placeholder={t('search.language')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">{language === 'ar' ? 'الإنجليزية' : 'English'}</SelectItem>
                    <SelectItem value="ar">{language === 'ar' ? 'العربية' : 'Arabic'}</SelectItem>
                    <SelectItem value="fr">{language === 'ar' ? 'الفرنسية' : 'French'}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>

          {/* Find Department Tab */}
          <TabsContent value="find-department">
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <Label className="text-sm font-medium text-deep-navy mb-1.5 block">
                {t('search.departmentName')}
              </Label>
              <Input
                placeholder={t('search.departmentName')}
                className="h-11 border-gray-200 focus:border-hospital-blue"
              />
            </div>
          </TabsContent>

          {/* Search Symptoms Tab */}
          <TabsContent value="search-symptoms">
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <Label className="text-sm font-medium text-deep-navy mb-1.5 block">
                {t('search.symptoms')}
              </Label>
              <Textarea
                placeholder={t('search.symptoms')}
                className="min-h-[80px] border-gray-200 focus:border-hospital-blue resize-none"
              />
            </div>
          </TabsContent>
        </Tabs>

        <Button className="w-full md:w-auto mt-6 bg-hospital-blue hover:bg-hospital-blue/90 text-white font-semibold h-11 px-8">
          <Search className="size-4" />
          {t('search.findCare')}
        </Button>
      </div>
    </section>
  );
}
