'use client';

import { Badge } from '@/components/ui/badge';
import { Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguageStore } from '@/store/language-store';
import { SectionHeading } from '@/components/ui-custom/SectionHeading';
import { AnimatedSection } from '@/components/ui-custom/AnimatedSection';
import { articles } from '@/data/hospital-data';

export function HealthArticles() {
  const { t, language } = useLanguageStore();
  const isRTL = language === 'ar';
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="media" className="py-16 md:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading titleKey="articles.title" subtitleKey="articles.subtitle" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <AnimatedSection key={article.id} delay={index * 0.1}>
              <article className="bg-white rounded-xl border border-gray-100 overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} bg-hospital-blue text-white text-xs font-medium`}>
                    {article.category}
                  </Badge>
                </div>
                <div className={`p-5 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <div className={`flex items-center gap-2 text-xs text-muted-foreground mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Clock className="size-3" />
                    <span>{article.readingTime} {t('articles.minRead')}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-base text-deep-navy mb-2 line-clamp-2 leading-snug">
                    {article.title[language]}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                    {article.excerpt[language]}
                  </p>
                  <a
                    href="#"
                    className={`inline-flex items-center gap-1 text-sm font-medium text-hospital-blue hover:underline ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    {t('articles.readArticle')}
                    <ArrowIcon className="size-4" />
                  </a>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
