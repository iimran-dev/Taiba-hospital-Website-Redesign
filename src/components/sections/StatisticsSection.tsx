'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useLanguageStore } from '@/store/language-store';
import { Stethoscope, UserRound, Clock, Users } from 'lucide-react';

const statsData = [
  { value: 23, suffix: '+', labelKey: 'stats.specialties', icon: Stethoscope },
  { value: 100, suffix: '+', labelKey: 'stats.doctors', icon: UserRound },
  { value: 20, suffix: '+', labelKey: 'stats.years', icon: Clock },
  { value: 50, suffix: 'K+', labelKey: 'stats.patients', icon: Users },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function StatisticsSection() {
  const { t, language } = useLanguageStore();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isRTL = language === 'ar';

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Blue gradient background */}
      <div className="bg-gradient-to-br from-hospital-blue via-deep-navy to-hospital-blue py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statsData.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.labelKey}
                  className={`text-center`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Icon className="size-8 text-white/80" />
                  </div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-2">
                    {isInView && <AnimatedCounter target={stat.value} suffix={stat.suffix} />}
                  </div>
                  <p className="text-white/70 text-sm md:text-base">{t(stat.labelKey)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
