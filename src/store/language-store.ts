import { create } from 'zustand';

export type Language = 'en' | 'ar';

interface LanguageState {
  language: Language;
  direction: 'ltr' | 'rtl';
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.departments': 'Departments',
    'nav.doctors': 'Doctors',
    'nav.insurance': 'Insurance',
    'nav.packages': 'Packages',
    'nav.media': 'Media',
    'nav.contact': 'Contact',
    'nav.bookAppointment': 'Book Appointment',
    'nav.emergency': 'Emergency',

    // Hero
    'hero.heading': 'Compassionate Care.',
    'hero.headingHighlight': 'Advanced Healthcare.',
    'hero.subheading': 'Providing world-class healthcare with advanced technology and expert specialists.',
    'hero.bookAppointment': 'Book Appointment',
    'hero.findDoctor': 'Find Doctor',

    // Care Search
    'search.findDoctor': 'Find Doctor',
    'search.findDepartment': 'Find Department',
    'search.searchSymptoms': 'Search by Symptoms',
    'search.doctorName': 'Doctor Name',
    'search.specialty': 'Specialty',
    'search.language': 'Language',
    'search.departmentName': 'Department Name',
    'search.symptoms': 'Describe your symptoms...',
    'search.findCare': 'Find Care',

    // Quick Access
    'quick.emergency': 'Emergency 24/7',
    'quick.emergencyDesc': 'Round-the-clock emergency medical services',
    'quick.bookAppointment': 'Book Appointment',
    'quick.bookDesc': 'Schedule your visit online in minutes',
    'quick.whatsapp': 'WhatsApp Us',
    'quick.whatsappDesc': 'Chat with us instantly on WhatsApp',
    'quick.insurance': 'Insurance Check',
    'quick.insuranceDesc': 'Verify your insurance coverage',

    // Why Choose
    'why.title': 'Why Choose Taiba Hospital?',
    'why.subtitle': 'We combine medical excellence with compassionate care to deliver an unmatched healthcare experience.',
    'why.accredited': 'Internationally Accredited',
    'why.accreditedDesc': 'Meeting global standards of healthcare quality and patient safety.',
    'why.technology': 'Advanced Technology',
    'why.technologyDesc': 'State-of-the-art medical equipment and diagnostic tools.',
    'why.doctors': 'Expert Doctors',
    'why.doctorsDesc': 'Highly qualified specialists with international experience.',
    'why.patientFirst': 'Patient First Care',
    'why.patientFirstDesc': 'Every decision centers on your health, comfort, and recovery.',
    'why.multilingual': 'Multi-Language Support',
    'why.multilingualDesc': 'Services available in Arabic, English, and other languages.',
    'why.easyBooking': 'Easy Appointment Booking',
    'why.easyBookingDesc': 'Book online, by phone, or walk in at your convenience.',

    // Centers
    'centers.title': 'Centers of Excellence',
    'centers.subtitle': 'Specialized departments delivering advanced medical care.',
    'centers.explore': 'Explore',
    'centers.cardiology': 'Cardiology',
    'centers.cardiologyDesc': 'Advanced cardiac care including interventional cardiology and cardiac surgery.',
    'centers.orthopedics': 'Orthopedics',
    'centers.orthopedicsDesc': 'Comprehensive bone, joint, and musculoskeletal care with minimally invasive techniques.',
    'centers.womensHealth': "Women's Health",
    'centers.womensHealthDesc': 'Complete obstetrics, gynecology, and reproductive health services.',
    'centers.pediatrics': 'Pediatrics',
    'centers.pediatricsDesc': 'Specialized healthcare for infants, children, and adolescents.',
    'centers.neurology': 'Neurology',
    'centers.neurologyDesc': 'Expert diagnosis and treatment of neurological disorders.',
    'centers.dermatology': 'Dermatology',
    'centers.dermatologyDesc': 'Advanced skin care, cosmetic dermatology, and laser treatments.',

    // Find Doctor
    'doctors.title': 'Find a Doctor',
    'doctors.subtitle': 'Our team of highly qualified specialists is here to provide the care you need.',
    'doctors.searchPlaceholder': 'Search doctors by name or specialty...',
    'doctors.allSpecialties': 'All Specialties',
    'doctors.allGenders': 'All Genders',
    'doctors.allLanguages': 'All Languages',
    'doctors.viewProfile': 'View Profile',
    'doctors.bookAppointment': 'Book Appointment',
    'doctors.yearsExp': 'years experience',

    // Statistics
    'stats.specialties': 'Specialties',
    'stats.doctors': 'Doctors',
    'stats.years': 'Years of Excellence',
    'stats.emergency': 'Emergency Care',
    'stats.patients': 'Patients Served Annually',

    // Insurance
    'insurance.title': 'Insurance Coverage Made Easy',
    'insurance.subtitle': 'We partner with leading insurance providers to ensure you receive the care you need without financial stress.',
    'insurance.searchPlaceholder': 'Enter your insurance provider name...',
    'insurance.checkCoverage': 'Check Coverage',
    'insurance.partneredWith': 'Partnered with',
    'insurance.insuranceProviders': 'leading insurance providers',

    // Packages
    'packages.title': 'Health Packages',
    'packages.subtitle': 'Comprehensive health screening packages designed for your wellbeing.',
    'packages.bookPackage': 'Book Package',
    'packages.executive': 'Executive Health Check',
    'packages.executiveDesc': 'Complete health assessment including cardiac screening, blood work, and imaging.',
    'packages.womensHealth': "Women's Health",
    'packages.womensHealthDesc': 'Specialized screening including mammography, bone density, and hormonal panel.',
    'packages.diabetes': 'Diabetes Screening',
    'packages.diabetesDesc': 'Comprehensive diabetes evaluation with HbA1c, lipid profile, and retinal exam.',
    'packages.cardiac': 'Cardiac Screening',
    'packages.cardiacDesc': 'Advanced cardiac assessment including ECG, echocardiogram, and stress test.',

    // Testimonials
    'testimonials.title': 'Patient Success Stories',
    'testimonials.subtitle': 'Hear from patients who trusted Taiba Hospital for their healthcare journey.',

    // Articles
    'articles.title': 'Health Articles',
    'articles.subtitle': 'Stay informed with the latest health tips and medical insights from our experts.',
    'articles.readArticle': 'Read Article',
    'articles.minRead': 'min read',

    // App
    'app.title': 'Healthcare at Your Fingertips',
    'app.subtitle': 'Download the Taiba Hospital app for seamless appointment booking, medical records access, and more.',
    'app.appointments': 'Book Appointments',
    'app.reports': 'Medical Reports',
    'app.prescriptions': 'Prescriptions',
    'app.notifications': 'Notifications',
    'app.getApp': 'Get the App',

    // CTA
    'cta.title': 'Your Health. Our Priority.',
    'cta.subtitle': 'Experience healthcare that puts you first. Our team of specialists is ready to provide the care you deserve.',
    'cta.bookAppointment': 'Book Appointment',
    'cta.callUs': 'Call',

    // Footer
    'footer.overview': 'Taiba Hospital is a leading private healthcare provider in Kuwait, committed to delivering world-class medical services with compassion and excellence.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact Us',
    'footer.address': 'Jabriya, Kuwait',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',

    // Mobile
    'mobile.call': 'Call',
    'mobile.whatsapp': 'WhatsApp',
    'mobile.appointment': 'Appointment',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'عن المستشفى',
    'nav.departments': 'الأقسام',
    'nav.doctors': 'الأطباء',
    'nav.insurance': 'التأمين',
    'nav.packages': 'الباقات',
    'nav.media': 'الوسائط',
    'nav.contact': 'اتصل بنا',
    'nav.bookAppointment': 'حجز موعد',
    'nav.emergency': 'الطوارئ',

    // Hero
    'hero.heading': 'رعاية إنسانية.',
    'hero.headingHighlight': 'رعاية صحية متقدمة.',
    'hero.subheading': 'نقدم رعاية صحية عالمية المستوى بتقنيات متطورة وأطباء متخصصين.',
    'hero.bookAppointment': 'حجز موعد',
    'hero.findDoctor': 'البحث عن طبيب',

    // Care Search
    'search.findDoctor': 'البحث عن طبيب',
    'search.findDepartment': 'البحث عن قسم',
    'search.searchSymptoms': 'البحث بالأعراض',
    'search.doctorName': 'اسم الطبيب',
    'search.specialty': 'التخصص',
    'search.language': 'اللغة',
    'search.departmentName': 'اسم القسم',
    'search.symptoms': 'صف أعراضك...',
    'search.findCare': 'بحث',

    // Quick Access
    'quick.emergency': 'الطوارئ ٢٤/٧',
    'quick.emergencyDesc': 'خدمات طوارئ طبية على مدار الساعة',
    'quick.bookAppointment': 'حجز موعد',
    'quick.bookDesc': 'احجز زيارتك عبر الإنترنت في دقائق',
    'quick.whatsapp': 'تواصل عبر واتساب',
    'quick.whatsappDesc': 'تحدث معنا فوراً عبر واتساب',
    'quick.insurance': 'التحقق من التأمين',
    'quick.insuranceDesc': 'تحقق من تغطية التأمين الخاصة بك',

    // Why Choose
    'why.title': 'لماذا تختار مستشفى طيبة؟',
    'why.subtitle': 'نجمع بين التميز الطبي والرعاية الإنسانية لتقديم تجربة رعاية صحية لا مثيل لها.',
    'why.accredited': 'معتمد دولياً',
    'why.accreditedDesc': 'نلتزم بمعايير الجودة العالمية وسلامة المرضى.',
    'why.technology': 'تقنيات متقدمة',
    'why.technologyDesc': 'أحدث الأجهزة الطبية وأدوات التشخيص.',
    'why.doctors': 'أطباء خبراء',
    'why.doctorsDesc': 'متخصصون مؤهلون تأهيلاً عالياً ذوو خبرة دولية.',
    'why.patientFirst': 'المرضى أولاً',
    'why.patientFirstDesc': 'كل قرار يركز على صحتك وراحتك وتعافيك.',
    'why.multilingual': 'دعم متعدد اللغات',
    'why.multilingualDesc': 'خدمات متاحة بالعربية والإنجليزية وغيرها.',
    'why.easyBooking': 'حجز سهل',
    'why.easyBookingDesc': 'احجز عبر الإنترنت أو بالهاتف أو زيارة مباشرة.',

    // Centers
    'centers.title': 'مراكز التميز',
    'centers.subtitle': 'أقسام متخصصة تقدم رعاية طبية متقدمة.',
    'centers.explore': 'استكشف',
    'centers.cardiology': 'أمراض القلب',
    'centers.cardiologyDesc': 'رعاية قلبية متقدمة تشمل تدخلات القلب وجراحة القلب.',
    'centers.orthopedics': 'العظام',
    'centers.orthopedicsDesc': 'رعاية شاملة للعظام والمفاصل والعضلات بأساليب طفيفة التوغل.',
    'centers.womensHealth': 'صحة المرأة',
    'centers.womensHealthDesc': 'خدمات التوليد وأمراض النساء والصحة الإنجابية الشاملة.',
    'centers.pediatrics': 'طب الأطفال',
    'centers.pediatricsDesc': 'رعاية صحية متخصصة للرضع والأطفال والمراهقين.',
    'centers.neurology': 'الأعصاب',
    'centers.neurologyDesc': 'تشخيص وعلاج متقدم لاضطرابات الجهاز العصبي.',
    'centers.dermatology': 'الجلدية',
    'centers.dermatologyDesc': 'رعاية متقدمة للبشرة وعلاج الليزر والتجميل.',

    // Find Doctor
    'doctors.title': 'البحث عن طبيب',
    'doctors.subtitle': 'فريقنا من المتخصصين المؤهلين جاهز لتقديم الرعاية التي تحتاجها.',
    'doctors.searchPlaceholder': 'ابحث عن طبيب بالاسم أو التخصص...',
    'doctors.allSpecialties': 'جميع التخصصات',
    'doctors.allGenders': 'الجنس',
    'doctors.allLanguages': 'جميع اللغات',
    'doctors.viewProfile': 'الملف الشخصي',
    'doctors.bookAppointment': 'حجز موعد',
    'doctors.yearsExp': 'سنوات خبرة',

    // Statistics
    'stats.specialties': 'تخصص',
    'stats.doctors': 'طبيب',
    'stats.years': 'عام من التميز',
    'stats.emergency': 'رعاية طوارئ',
    'stats.patients': 'مريض سنوياً',

    // Insurance
    'insurance.title': 'تغطية تأمينية سهلة',
    'insurance.subtitle': 'نتعاون مع مزودي التأمين الرائدين لضمان حصولك على الرعاية التي تحتاجها.',
    'insurance.searchPlaceholder': 'أدخل اسم شركة التأمين...',
    'insurance.checkCoverage': 'تحقق من التغطية',
    'insurance.partneredWith': 'نتعاون مع',
    'insurance.insuranceProviders': 'شركة تأمين رائدة',

    // Packages
    'packages.title': 'باقات صحية',
    'packages.subtitle': 'باقات فحص شاملة مصممة لرفاهيتك الصحية.',
    'packages.bookPackage': 'احجز الباقة',
    'packages.executive': 'فحص شامل للمديرين',
    'packages.executiveDesc': 'تقييم صحي شامل يتضمن فحص القلب والتحاليل والتصوير.',
    'packages.womensHealth': 'صحة المرأة',
    'packages.womensHealthDesc': 'فحص متخصص يتضمن التصوير الشعاعي وكثافة العظام.',
    'packages.diabetes': 'فحص السكري',
    'packages.diabetesDesc': 'تقييم شامل للسكري مع HbA1c وملف الدهون.',
    'packages.cardiac': 'فحص القلب',
    'packages.cardiacDesc': 'تقييم قلبي متقدم يتضمن ECG وتخطيط صدى القلب.',

    // Testimonials
    'testimonials.title': 'قصص نجاح المرضى',
    'testimonials.subtitle': 'استمع لقصص المرضى الذين وثقوا بمستشفى طيبة.',

    // Articles
    'articles.title': 'مقالات صحية',
    'articles.subtitle': 'ابقَ على اطلاع بأحدث النصائح الصحية من خبرائنا.',
    'articles.readArticle': 'اقرأ المقال',
    'articles.minRead': 'دقيقة قراءة',

    // App
    'app.title': 'الرعاية الصحية بين يديك',
    'app.subtitle': 'حمل تطبيق مستشفى طيبة لحجز المواعيد والوصول للسجلات الطبية والمزيد.',
    'app.appointments': 'حجز المواعيد',
    'app.reports': 'التقارير الطبية',
    'app.prescriptions': 'الوصفات الطبية',
    'app.notifications': 'الإشعارات',
    'app.getApp': 'حمّل التطبيق',

    // CTA
    'cta.title': 'صحتك. أولويتنا.',
    'cta.subtitle': 'اختبر رعاية صحية تضعك أولاً. فريقنا من المتخصصين جاهز لتقديم الرعاية التي تستحقها.',
    'cta.bookAppointment': 'حجز موعد',
    'cta.callUs': 'اتصل',

    // Footer
    'footer.overview': 'مستشفى طيبة هي مزود رائد للرعاية الصحية الخاصة في الكويت، ملتزمة بتقديم خدمات طبية عالمية المستوى.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.services': 'الخدمات',
    'footer.contact': 'اتصل بنا',
    'footer.address': 'الجابرية، الكويت',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'الشروط والأحكام',

    // Mobile
    'mobile.call': 'اتصل',
    'mobile.whatsapp': 'واتساب',
    'mobile.appointment': 'موعد',
  },
};

export const useLanguageStore = create<LanguageState>((set, get) => ({
  language: 'en',
  direction: 'ltr',
  setLanguage: (lang: Language) => {
    set({
      language: lang,
      direction: lang === 'ar' ? 'rtl' : 'ltr',
    });
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  },
  t: (key: string) => {
    const lang = get().language;
    return translations[lang]?.[key] || translations['en']?.[key] || key;
  },
}));
