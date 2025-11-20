import { CompanyInfo, ServiceCategory } from './types';

export const COMPANY_INFO: CompanyInfo = {
  nameAr: "تخصيص",
  nameEn: "TAKHSEES",
  fullName: "تخصيص لخدمات رجال الأعمال ذ.م.م",
  taglineAr: "خدمات متابعة المعاملات",
  taglineEn: "TRANSACTIONS FOLLOW UP SERVICES",
  additional: "TAKHSEES BUSINESSMEN SERVICES L.L.C.",
  location: "الشامخة، أبوظبي",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.2687272837335!2d54.7098883!3d24.3718693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e478416966805%3A0x429a77b700dd29f1!2z2KqY2KXYtdmK2LMg2YTYrtiv2YXYp9iqINix2KzYp9mEINin2YTYudmF2KfZhCDZgS5ZouC5hQ!5e0!3m2!1sen!2sae!4v1708900000000!5m2!1sen!2sae",
  phone: "+971500000000" 
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'residency',
    title: 'إقامة / هوية',
    icon: 'id-card',
    items: [
      { name: 'إقامة / هوية (Residency & Emirates ID)', price: 150 },
      { name: 'استلام تصريح عمل استمرارية', price: 200 },
      { name: 'إصدار إقامة', price: 250 },
      { name: 'إصدار إقامة وهوية', price: 300 },
      { name: 'إصدار الإقامة', price: 250 },
      { name: 'إصدار هوية', price: 150 },
      { name: 'إقامة', price: 250 },
      { name: 'اقامه', price: 250 },
      { name: 'تجديد إقامة', price: 200 },
      { name: 'تجديد إقامة وهوية', price: 250 },
      { name: 'تجديد الإقامة', price: 200 },
      { name: 'تجديد هوية', price: 150 },
      { name: 'تجديد هوية وإقامة', price: 250 },
      { name: 'إلغاء إقامة', price: 150 },
      { name: 'طلب هوية', price: 150 },
      { name: 'طلب هوية مع غرامة', price: 200 },
      { name: 'طلب هوية وإقامة', price: 300 },
      { name: 'استلام إقامة', price: 100 },
      { name: 'هوية', price: 150 },
      { name: 'مبروك ماياك هوية', price: 150 },
      { name: 'هويه وكالة عامة', price: 200 },
      { name: 'تعديل البيانات', price: 150 },
    ]
  },
  {
    id: 'work_permits',
    title: 'تصاريح عمل / بطاقات',
    icon: 'briefcase',
    items: [
      { name: 'إصدار تصريح زيارة نزيل', price: 200 },
      { name: 'إصدار تصريح عمل', price: 300 },
      { name: 'تصريح العمل جديد', price: 300 },
      { name: 'تصريح عمل جديد', price: 300 },
      { name: 'تصريح عمل جدد', price: 250 },
      { name: 'طلب تصريح عمل', price: 250 },
      { name: 'طلب تصريح عمل جديد', price: 300 },
      { name: 'طلب تصريح عمل مواطن', price: 200 },
      { name: 'طلب ضمان جديد (مرتبط بتصريح العمل)', price: 150 },
      { name: 'استلام تصريح عمل', price: 100 },
      { name: 'طلب الغاء بطاقة عمل', price: 150 },
      { name: 'الغاء بطاقة عمل', price: 150 },
      { name: 'تعديل وضع', price: 200 },
    ]
  },
  {
    id: 'visas',
    title: 'تأشيرات',
    icon: 'globe',
    items: [
      { name: 'إصدار تأشيرة', price: 250 },
      { name: 'تاشيرة', price: 250 },
      { name: 'تأشيرة', price: 250 },
      { name: 'تجديد تأشيرة الثقة (ثقه)', price: 200 },
      { name: 'تجديد ثقه', price: 200 },
      { name: 'الغاء تأشيرة', price: 150 },
      { name: 'شهادة تسفير (متعلقة بالتأشيرات)', price: 150 },
    ]
  },
  {
    id: 'insurance',
    title: 'ضمان / تأمين',
    icon: 'shield-check',
    items: [
      { name: 'تامين التعطل', price: 150 },
      { name: 'تأمين دبي', price: 200 },
      { name: 'تأمين دبي كير (فيشنو)', price: 200 },
      { name: 'تجديد ضمان', price: 150 },
      { name: 'تجديد ضمان جديد', price: 150 },
      { name: 'ضمان', price: 150 },
      { name: 'الضمان الصحي', price: 150 },
      { name: 'رابط ضمان', price: 100 },
      { name: 'ربط ضمان', price: 100 },
      { name: 'دفع ضمان الصحي', price: 100 },
      { name: 'دفع رسوم ضمان', price: 100 },
    ]
  },
  {
    id: 'fines',
    title: 'مخالفات / غرامات',
    icon: 'alert-triangle',
    items: [
      { name: 'تحويل المخالفات المرورية', price: 100 },
      { name: 'تحويل مخالفات نيابه', price: 100 },
      { name: 'تخفيض مخالفات مرورية', price: 150 },
      { name: 'دفع الغرامة', price: 50 },
      { name: 'دفع غرامة', price: 50 },
      { name: 'دفع غرامة ضمان', price: 100 },
      { name: 'دفع مخالفة', price: 50 },
      { name: 'غرامة', price: 50 },
      { name: 'غرامة ضمان', price: 100 },
    ]
  },
  {
    id: 'education',
    title: 'خدمات التعليم / المنازل',
    icon: 'graduation-cap',
    items: [
      { name: 'تسجيل دراسة منازل', price: 200 },
      { name: 'تسجيل منازل', price: 150 },
      { name: 'دراسة منازل', price: 200 },
      { name: 'تسجيل في أكاديمية أبوظبي البحرية', price: 250 },
    ]
  },
  {
    id: 'passports',
    title: 'جوازات',
    icon: 'book-user',
    items: [
      { name: 'تجديد جواز', price: 200 },
    ]
  },
  {
    id: 'licenses',
    title: 'رخص / مركبات',
    icon: 'car',
    items: [
      { name: 'إصدار رخصة جديدة', price: 200 },
      { name: 'إصدار رخصة دولية', price: 250 },
      { name: 'فك حجز سيارة', price: 150 },
      { name: 'فحص الطبي (مرتبط بالرخص)', price: 150 },
    ]
  },
  {
    id: 'complaints',
    title: 'شكاوى / ديوان',
    icon: 'message-circle',
    items: [
      { name: 'رساله للديوان', price: 100 },
      { name: 'حالة وإعالة وحضانة', price: 150 },
    ]
  },
  {
    id: 'commercial',
    title: 'معاملات تجارية',
    icon: 'building',
    items: [
      { name: 'فتح حساب منشأة', price: 300 },
      { name: 'فتح ملف كفالة', price: 250 },
      { name: 'فتح منشأة', price: 300 },
      { name: 'حجز اسم التجاري', price: 200 },
    ]
  },
  {
    id: 'contracts',
    title: 'عقود / أملاك',
    icon: 'file-signature',
    items: [
      { name: 'عقد شراكة', price: 200 },
      { name: 'شهادة أملاك', price: 150 },
      { name: 'شهادة خلو الأرض من المباني', price: 150 },
    ]
  },
  {
    id: 'travel',
    title: 'سفر',
    icon: 'plane',
    items: [
      { name: 'تذكرة فلبينه', price: 100 },
    ]
  },
  {
    id: 'personal',
    title: 'وثائق شخصية',
    icon: 'user-round',
    items: [
      { name: 'رقم شخصي وتفويض إلكتروني سكان', price: 100 },
    ]
  },
  {
    id: 'reports',
    title: 'كشف / متابعة',
    icon: 'list-checks',
    items: [
      { name: 'كشف عمال', price: 150 },
      { name: 'كشف مخالفات', price: 100 },
    ]
  }
];