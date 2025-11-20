import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICE_CATEGORIES } from '../constants';
import * as LucideIcons from 'lucide-react';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SERVICE_CATEGORIES[0].id);

  // Helper to dynamically get icon component
  const getIcon = (iconName: string) => {
    // @ts-ignore
    const Icon = LucideIcons[iconName.charAt(0).toUpperCase() + iconName.slice(1).replace(/-([a-z])/g, g => g[1].toUpperCase())] || LucideIcons.Briefcase;
    return <Icon size={20} />;
  };

  const activeCategory = SERVICE_CATEGORIES.find(cat => cat.id === activeTab);

  return (
    <section id="services" className="py-24 bg-brand-slate relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white to-transparent opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4"
          >
            خدماتنا الشاملة
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            className="h-1.5 bg-brand-gold mx-auto rounded-full"
          ></motion.div>
          <p className="text-brand-gray mt-6 max-w-2xl mx-auto text-lg">
            نغطي جميع احتياجاتكم الحكومية والإدارية بأعلى معايير الجودة والسرعة
          </p>
          <div className="mt-8 mx-auto max-w-4xl text-right bg-white/90 border border-brand-gold/20 rounded-2xl p-6 shadow-sm">
            <p className="text-brand-navy font-bold text-lg">
              متوسط رسوم الطباعة لعام 2025 لمنطقة الشامخة / أبوظبي
            </p>
            <ul className="mt-3 space-y-2 text-sm text-brand-gray leading-relaxed list-disc list-inside">
              <li>المراجع: بوابات الحكومة الاتحادية (ICP، MOHRE) + أكثر من 38 صفحة مصدقة لمراكز الطباعة (Vision، Ex Arabia، Nirvana، Global Business Setup وغيرها).</li>
              <li>الرسوم المذكورة تخص خدمة الطباعة فقط ولا تشمل الرسوم الحكومية (≈ ‏500–1000 درهم لكل معاملة) أو ضريبة القيمة المضافة 5% أو خدمة الإكسبرس (+50–100 درهم).</li>
              <li>المدة المتوقعة للإنجاز 2–5 أيام عمل، ويمكن الحصول على عروض باقات (مثل إقامة + هوية بـ 400 درهم) بالتواصل المباشر مع تخصيص.</li>
              <li>دائماً نوصي بالحصول على عرض سعر نهائي قبل بدء الخدمة لضمان مطابقة حالتك للوائح المحدثة.</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Category Tabs Sidebar */}
          <div className="lg:w-1/4 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide px-1">
            {SERVICE_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 whitespace-nowrap lg:whitespace-normal text-right w-full border ${
                  activeTab === category.id
                    ? 'bg-brand-navy text-white border-brand-navy shadow-xl shadow-brand-navy/20 transform scale-105'
                    : 'bg-white text-brand-gray border-transparent hover:bg-white hover:border-gray-200 hover:shadow-md'
                }`}
              >
                <span className={`${activeTab === category.id ? 'text-brand-gold' : 'text-gray-400'}`}>
                    {getIcon(category.icon)}
                </span>
                <span className="font-bold">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <div className="lg:w-3/4 min-h-[500px]">
             <AnimatePresence mode='wait'>
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                  {activeCategory?.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
                      className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-gold/30 hover:-translate-y-1 transition-all duration-300 flex justify-between items-center group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-2 h-8 rounded-full bg-gray-100 group-hover:bg-brand-gold transition-colors"></div>
                        <h3 className="text-brand-navy font-bold text-lg">{item.name}</h3>
                      </div>
                      <div className="flex flex-col items-end">
                         <span className="text-2xl font-extrabold text-brand-navy group-hover:text-brand-gold transition-colors">
                           {item.price}
                         </span>
                         <span className="text-xs text-gray-400 font-medium">درهم</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
             </AnimatePresence>
             
             <div className="mt-10 p-4 bg-blue-50 rounded-lg border border-blue-100 text-center lg:text-right">
                <p className="text-sm text-blue-800 font-medium">
                  * الأسعار المذكورة هي متوسط رسوم الطباعة وقد تختلف قليلاً بناءً على تحديثات الجهات المعنية. الرسوم الحكومية تضاف بشكل منفصل.
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;