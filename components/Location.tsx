import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { motion } from 'framer-motion';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-white relative border-t border-gray-100">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
                <span className="text-brand-gold font-bold uppercase tracking-wider">تواصل معنا</span>
                <h2 className="text-4xl font-extrabold text-brand-navy mt-2">تفضل بزيارة مكتبنا</h2>
            </div>
            
            <p className="text-brand-gray text-lg leading-relaxed">
              مكتبنا في الشامخة مجهز بأحدث التقنيات لخدمتكم. زورونا لإنجاز معاملاتكم بسرعة وسهولة، أو تواصلوا معنا للاستفسار عن أي خدمة.
            </p>

            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-5 group">
                <div className="p-4 bg-brand-slate rounded-2xl text-brand-navy group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors shadow-sm">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-brand-navy font-bold text-xl">العنوان</h4>
                  <p className="text-gray-600 font-medium">{COMPANY_INFO.location}</p>
                  <p className="text-gray-500 text-sm mt-1">بجانب مركز الشرطة، الشامخة، أبوظبي</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="p-4 bg-brand-slate rounded-2xl text-brand-navy group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors shadow-sm">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-brand-navy font-bold text-xl">اتصل بنا</h4>
                  <p className="text-gray-600 font-medium text-lg" dir="ltr">{COMPANY_INFO.phone}</p>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-bold text-sm"
                  >
                    واتساب: {COMPANY_INFO.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="p-4 bg-brand-slate rounded-2xl text-brand-navy group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors shadow-sm">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-brand-navy font-bold text-xl">ساعات العمل</h4>
                  <p className="text-gray-600 font-medium">السبت - الخميس: 8:00 ص - 9:00 م</p>
                  <p className="text-red-500 font-medium">الجمعة: مغلق</p>
                </div>
              </div>
            </div>

            <a 
                href="https://maps.app.goo.gl/W8sKYhdvTmFAJSwh9?g_st=atm"
                target="_blank"
                rel="noreferrer"
                className="inline-block w-full md:w-auto bg-brand-gold hover:bg-brand-goldDark text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center mt-4"
            >
               احصل على الاتجاهات
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-[450px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white relative group"
          >
            <iframe
              src={COMPANY_INFO.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }} 
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="transition-all duration-500 grayscale hover:grayscale-0"
            ></iframe>
            
            {/* Aesthetic Overlay */}
            <div className="absolute inset-0 pointer-events-none border-4 border-black/5 rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;