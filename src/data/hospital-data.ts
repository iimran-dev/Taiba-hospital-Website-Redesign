export interface Doctor {
  id: string;
  name: { en: string; ar: string };
  nameAr?: string;
  photo: string;
  specialty: { en: string; ar: string };
  qualification: { en: string; ar: string };
  experience: number;
  languages: string[];
  gender: 'male' | 'female';
  available: boolean;
}

export interface Specialty {
  id: string;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  image: string;
  icon: string;
}

export interface Package {
  id: string;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  duration: string;
  benefits: string[];
  color: string;
}

export interface Article {
  id: string;
  title: { en: string; ar: string };
  category: string;
  readingTime: number;
  image: string;
  excerpt: { en: string; ar: string };
  author: string;
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: { en: string; ar: string };
  specialty: string;
  rating: number;
}

export const doctors: Doctor[] = [
  {
    id: '1',
    name: { en: 'Dr. Ahmad Al-Sabah', ar: 'د. أحمد الصباح' },
    photo: '/images/doctors/doctor-1.png',
    specialty: { en: 'Cardiology', ar: 'أمراض القلب' },
    qualification: { en: 'MD, FACC, Board Certified Cardiologist', ar: 'دكتوراه، زميل الكلية الأمريكية لأمراض القلب' },
    experience: 18,
    languages: ['English', 'Arabic'],
    gender: 'male',
    available: true,
  },
  {
    id: '2',
    name: { en: 'Dr. Fatima Al-Harbi', ar: 'د. فاطمة الحربي' },
    photo: '/images/doctors/doctor-2.png',
    specialty: { en: 'Pediatrics', ar: 'طب الأطفال' },
    qualification: { en: 'MD, FAAP, Board Certified Pediatrician', ar: 'دكتوراه، زميل الأكاديمية الأمريكية لطب الأطفال' },
    experience: 12,
    languages: ['English', 'Arabic', 'French'],
    gender: 'female',
    available: true,
  },
  {
    id: '3',
    name: { en: 'Dr. Mohammad Al-Ali', ar: 'د. محمد العلي' },
    photo: '/images/doctors/doctor-3.png',
    specialty: { en: 'Orthopedics', ar: 'جراحة العظام' },
    qualification: { en: 'MD, FRCS, Board Certified Orthopedic Surgeon', ar: 'دكتوراه، زميل الكلية الملكية للجراحين' },
    experience: 22,
    languages: ['English', 'Arabic'],
    gender: 'male',
    available: true,
  },
  {
    id: '4',
    name: { en: 'Dr. Sara Al-Nasser', ar: 'د. سارة الناصر' },
    photo: '/images/doctors/doctor-4.png',
    specialty: { en: 'Neurology', ar: 'الأعصاب' },
    qualification: { en: 'MD, Board Certified Neurologist', ar: 'دكتوراه، طبيبة أعصاب معتمدة' },
    experience: 15,
    languages: ['English', 'Arabic'],
    gender: 'female',
    available: false,
  },
];

export const specialties: Specialty[] = [
  {
    id: 'cardiology',
    name: { en: 'Cardiology', ar: 'أمراض القلب' },
    description: { en: 'Advanced cardiac care including interventional cardiology and cardiac surgery.', ar: 'رعاية قلبية متقدمة تشمل تدخلات القلب وجراحة القلب.' },
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=600&q=80',
    icon: 'Heart',
  },
  {
    id: 'orthopedics',
    name: { en: 'Orthopedics', ar: 'جراحة العظام' },
    description: { en: 'Comprehensive bone, joint, and musculoskeletal care with minimally invasive techniques.', ar: 'رعاية شاملة للعظام والمفاصل بأساليب طفيفة التوغل.' },
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
    icon: 'Bone',
  },
  {
    id: 'womens-health',
    name: { en: 'Obstetrics & Gynecology', ar: 'أمراض النساء والتوليد' },
    description: { en: 'Complete obstetrics, gynecology, and reproductive health services.', ar: 'خدمات التوليد وأمراض النساء والصحة الإنجابية الشاملة.' },
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
    icon: 'Baby',
  },
  {
    id: 'pediatrics',
    name: { en: 'Pediatrics', ar: 'طب الأطفال' },
    description: { en: 'Specialized healthcare for infants, children, and adolescents.', ar: 'رعاية صحية متخصصة للرضع والأطفال والمراهقين.' },
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1cdb?auto=format&fit=crop&w=600&q=80',
    icon: 'Stethoscope',
  },
  {
    id: 'neurology',
    name: { en: 'Neurology', ar: 'الأعصاب' },
    description: { en: 'Expert diagnosis and treatment of neurological disorders.', ar: 'تشخيص وعلاج متقدم لاضطرابات الجهاز العصبي.' },
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
    icon: 'Brain',
  },
  {
    id: 'dermatology',
    name: { en: 'Dermatology', ar: 'الجلدية' },
    description: { en: 'Advanced skin care, cosmetic dermatology, and laser treatments.', ar: 'رعاية متقدمة للبشرة وعلاج الليزر والتجميل.' },
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
    icon: 'Sparkles',
  },
];

export const packages: Package[] = [
  {
    id: 'executive',
    name: { en: 'Executive Health Check', ar: 'فحص شامل للمديرين' },
    description: { en: 'Complete health assessment including cardiac screening, blood work, and imaging.', ar: 'تقييم صحي شامل يتضمن فحص القلب والتحاليل والتصوير.' },
    duration: '2-3 hours',
    benefits: ['Complete Blood Count', 'Cardiac Screening', 'Liver & Kidney Function', 'Chest X-Ray', 'General Consultation'],
    color: 'bg-hospital-blue',
  },
  {
    id: 'womens-health',
    name: { en: "Women's Health Package", ar: 'باقة صحة المرأة' },
    description: { en: 'Specialized screening including mammography, bone density, and hormonal panel.', ar: 'فحص متخصص يتضمن التصوير الشعاعي وكثافة العظام.' },
    duration: '2-3 hours',
    benefits: ['Mammography', 'Bone Density Scan', 'Hormonal Panel', 'Pelvic Ultrasound', 'Gynecology Consultation'],
    color: 'bg-rose-500',
  },
  {
    id: 'diabetes',
    name: { en: 'Diabetes Screening', ar: 'فحص السكري' },
    description: { en: 'Comprehensive diabetes evaluation with HbA1c, lipid profile, and retinal exam.', ar: 'تقييم شامل للسكري مع HbA1c وملف الدهون.' },
    duration: '1-2 hours',
    benefits: ['HbA1c Test', 'Fasting Blood Sugar', 'Lipid Profile', 'Retinal Examination', 'Endocrinology Consultation'],
    color: 'bg-amber-500',
  },
  {
    id: 'cardiac',
    name: { en: 'Cardiac Screening', ar: 'فحص القلب' },
    description: { en: 'Advanced cardiac assessment including ECG, echocardiogram, and stress test.', ar: 'تقييم قلبي متقدم يتضمن ECG وتخطيط صدى القلب.' },
    duration: '2-3 hours',
    benefits: ['ECG', 'Echocardiogram', 'Stress Test', 'Cardiac Markers', 'Cardiology Consultation'],
    color: 'bg-red-500',
  },
];

export const articles: Article[] = [
  {
    id: '1',
    title: { en: 'Understanding Heart Health: A Guide to Prevention', ar: 'فهم صحة القلب: دليل للوقاية' },
    category: 'Cardiology',
    readingTime: 5,
    image: '/images/articles/heart-health.png',
    excerpt: { en: 'Learn about the key factors that affect your heart health and practical steps you can take to prevent cardiovascular disease.', ar: 'تعرّف على العوامل الرئيسية التي تؤثر على صحة قلبك وخطوات عملية للوقاية.' },
    author: 'Dr. Ahmad Al-Sabah',
    date: '2025-01-15',
  },
  {
    id: '2',
    title: { en: 'Managing Diabetes: Lifestyle Changes That Matter', ar: 'إدارة مرض السكري: تغييرات نمط الحياة المهمة' },
    category: 'Endocrinology',
    readingTime: 7,
    image: '/images/articles/diabetes.png',
    excerpt: { en: 'Discover evidence-based lifestyle modifications that can help manage diabetes effectively and improve quality of life.', ar: 'اكتشف تعديلات نمط الحياة المبنية على الأدلة التي تساعد في إدارة السكري.' },
    author: 'Dr. Layla Al-Mansour',
    date: '2025-01-10',
  },
  {
    id: '3',
    title: { en: 'Nutrition for Wellness: Building Healthy Eating Habits', ar: 'التغذية للصحة: بناء عادات أكل صحية' },
    category: 'Nutrition',
    readingTime: 4,
    image: '/images/articles/nutrition.png',
    excerpt: { en: 'Practical nutrition advice from our clinical dietitians to help you build sustainable healthy eating habits.', ar: 'نصائح تغذية عملية من أخصائيي التغذية لبناء عادات أكل صحية مستدامة.' },
    author: 'Dr. Noor Al-Ahmad',
    date: '2025-01-05',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Patient A',
    quote: { en: 'The care I received at Taiba Hospital was exceptional. From the moment I walked in, the staff made me feel comfortable and well taken care of. The cardiac team was thorough and professional throughout my treatment.', ar: 'الرعاية التي تلقيتها في مستشفى طيبة كانت استثنائية. فريق القلب كان شاملاً ومحترفاً.' },
    specialty: 'Cardiology',
    rating: 5,
  },
  {
    id: '2',
    name: 'Patient B',
    quote: { en: 'I brought my daughter here for a pediatric consultation and was impressed by how the doctors engaged with her. They explained everything clearly and made the entire experience stress-free.', ar: 'أحضرت ابنتي لاستشارة طب الأطفال وكان الأطباء رائعين في التعامل معها.' },
    specialty: 'Pediatrics',
    rating: 5,
  },
  {
    id: '3',
    name: 'Patient C',
    quote: { en: 'After my knee surgery, the rehabilitation team at Taiba Hospital helped me recover faster than expected. Their physiotherapy program was well-structured and effective.', ar: 'بعد جراحة الركبة، ساعدني فريق التأهيل في التعافي بشكل أسرع من المتوقع.' },
    specialty: 'Orthopedics',
    rating: 5,
  },
];

export const stats = {
  specialties: 23,
  doctors: 100,
  years: 20,
  patients: 50000,
};

export const insuranceProviders = [
  'BUPA Arabia', 'Gulf Takaful', 'AXA Gulf', 'Allianz',
  'MetLife Alico', 'AIG', 'Zurich', 'Qatar Insurance',
];

