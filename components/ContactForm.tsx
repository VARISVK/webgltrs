import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, SendHorizontal, Sparkles } from 'lucide-react';
import { SERVICE_CATEGORIES, COMPANY_INFO } from '../constants';
import { supabase } from '../supabaseClient';

const localStorageKey = 'takhsees-offline-leads';

interface FormState {
  fullName: string;
  phone: string;
  service: string;
  notes: string;
}

const initialState: FormState = {
  fullName: '',
  phone: '',
  service: '',
  notes: '',
};

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string>('');

  const services = useMemo(
    () =>
      SERVICE_CATEGORIES.flatMap((category) =>
        category.items.map((item) => ({
          label: `${item.name} – ${category.title}`,
          value: item.name,
        }))
      ),
    []
  );

  const persistOffline = (payload: any) => {
    if (typeof window === 'undefined') return;
    const existing = JSON.parse(localStorage.getItem(localStorageKey) ?? '[]');
    existing.unshift({ ...payload, id: crypto.randomUUID(), created_at: new Date().toISOString() });
    localStorage.setItem(localStorageKey, JSON.stringify(existing));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.fullName || !form.phone) {
      setMessage('الرجاء تعبئة الاسم ورقم الهاتف');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setMessage('');

    const payload = {
      full_name: form.fullName,
      phone: form.phone,
      service: form.service || 'تواصل عام',
      notes: form.notes,
      channel: 'website',
      status: 'new',
    };

    try {
      if (supabase) {
        const { error } = await supabase.from('leads').insert(payload);
        if (error) throw error;
        setMessage('تم إرسال طلبك وسنعاود الاتصال بك قريباً.');
      } else {
        persistOffline(payload);
        setMessage('تم حفظ طلبك محلياً. اربط Supabase لحفظه في قاعدة البيانات.');
      }

      setStatus('success');
      setForm(initialState);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage('حدث خطأ أثناء إرسال الطلب. حاول مجدداً.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-24 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-slate text-brand-gold font-bold text-sm mb-4">
              <Sparkles size={16} />
              منصة العملاء
            </p>
            <h2 className="text-4xl font-extrabold text-brand-navy mb-4">احجز اتصالاً فورياً</h2>
            <p className="text-brand-gray text-lg">
              أرسل تفاصيلك وسيقوم فريق تخصيص بالتواصل معك خلال 2–5 ساعات عمل لتأكيد الخدمة وإرسال التكلفة النهائية.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl shadow-brand-slate"
          >
            <div className="grid gap-6">
              <label className="flex flex-col text-right">
                <span className="text-brand-navy font-bold mb-2">الاسم الكامل</span>
                <input
                  type="text"
                  className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold bg-gray-50"
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  placeholder="اكتب اسمك الثلاثي"
                  required
                />
              </label>

              <label className="flex flex-col text-right">
                <span className="text-brand-navy font-bold mb-2">رقم الهاتف</span>
                <input
                  type="tel"
                  className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold bg-gray-50"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+971 50 000 0000"
                  required
                />
              </label>

              <label className="flex flex-col text-right">
                <span className="text-brand-navy font-bold mb-2">الخدمة المطلوبة</span>
                <select
                  className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold bg-gray-50"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                >
                  <option value="">حدد الخدمة</option>
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col text-right">
                <span className="text-brand-navy font-bold mb-2">ملاحظات إضافية</span>
                <textarea
                  className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold bg-gray-50 min-h-[140px]"
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="أخبرنا عن حالة الإقامة أو نوع المعاملة بالتفصيل"
                />
              </label>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === 'loading'}
              className="mt-8 w-full bg-brand-navy text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-brand-navy/20 disabled:opacity-60"
            >
              {status === 'loading' ? 'جاري الإرسال...' : 'أرسل الطلب الآن'}
              <SendHorizontal size={20} />
            </motion.button>

            {message && (
              <p
                className={`mt-4 text-sm font-bold ${
                  status === 'success' ? 'text-green-600' : status === 'error' ? 'text-red-500' : 'text-brand-gray'
                }`}
              >
                {message}
              </p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-brand-slate rounded-3xl p-8 border border-white shadow-inner"
          >
            <h3 className="text-brand-navy text-2xl font-extrabold mb-4">تواصل فوري عبر واتساب</h3>
            <p className="text-brand-gray mb-6">
              تحتاج إجابة سريعة؟ راسل فريق خدمة العملاء مباشرة، سنرسل لك قائمة المتطلبات والأسعار خلال دقائق.
            </p>

            <motion.a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="flex items-center justify-between bg-green-500 text-white px-5 py-4 rounded-2xl font-bold shadow-lg shadow-green-500/30"
            >
              <span>دردشة واتساب</span>
              <PhoneCall size={24} />
            </motion.a>

            <div className="mt-10 space-y-4 text-brand-gray text-sm">
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <p className="font-bold text-brand-navy mb-1">ساعات العمل</p>
                <p>السبت - الخميس · 8:00 صباحاً - 10:00 مساءً</p>
              </div>
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <p className="font-bold text-brand-navy mb-1">المتابعة</p>
                <p>يتم تحديث حالة المعاملات في لوحة المتابعة فور استلام طلبك.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

