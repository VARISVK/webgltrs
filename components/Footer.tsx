import React from 'react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy py-16 border-t border-white/5 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-center md:text-right">
            
            <div className="md:w-1/3">
                <h2 className="text-3xl font-bold text-brand-orange mb-2">{COMPANY_INFO.nameAr}</h2>
                <h3 className="text-brand-gold text-sm font-bold tracking-widest mb-4">{COMPANY_INFO.nameEn}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                    شريكك الموثوق لجميع الخدمات الحكومية وخدمات رجال الأعمال في أبوظبي.
                </p>
            </div>

            <div className="md:w-1/3 flex flex-col gap-4">
                <h4 className="text-lg font-bold text-white">روابط سريعة</h4>
                <div className="flex flex-col gap-2 text-gray-400 text-sm">
                    <a href="#hero" className="hover:text-brand-gold transition-colors">الرئيسية</a>
                    <a href="#about" className="hover:text-brand-gold transition-colors">من نحن</a>
                    <a href="#services" className="hover:text-brand-gold transition-colors">الخدمات</a>
                    <a href="#location" className="hover:text-brand-gold transition-colors">تواصل معنا</a>
                </div>
            </div>

             <div className="md:w-1/3 flex flex-col gap-4">
                <h4 className="text-lg font-bold text-white">معلومات الاتصال</h4>
                <div className="flex flex-col gap-2 text-gray-400 text-sm">
                    <p>{COMPANY_INFO.location}</p>
                    <p dir="ltr">{COMPANY_INFO.phone}</p>
                    <a
                      className="text-brand-gold hover:text-white transition-colors"
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      واتساب: {COMPANY_INFO.whatsapp}
                    </a>
                </div>
            </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.fullName}. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;