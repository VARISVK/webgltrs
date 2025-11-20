import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, ShieldCheck, WifiOff } from 'lucide-react';
import { supabase } from '../supabaseClient';
import type { CustomerLead } from '../types';

const localStorageKey = 'takhsees-offline-leads';

const AdminPanel: React.FC = () => {
  const [leads, setLeads] = useState<CustomerLead[]>([]);
  const [status, setStatus] = useState<'connected' | 'offline' | 'error'>('offline');
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const fetchLeads = async () => {
    setLoading(true);
    try {
      if (supabase) {
        const { data, error } = await supabase
          .from('leads')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(200);

        if (error) throw error;
        setLeads((data ?? []) as CustomerLead[]);
        setStatus('connected');
      } else if (typeof window !== 'undefined') {
        const cached = JSON.parse(localStorage.getItem(localStorageKey) ?? '[]');
        setLeads(cached);
        setStatus('offline');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const filteredLeads = useMemo(() => {
    if (!search) return leads;
    return leads.filter((lead) =>
      [lead.full_name, lead.phone, lead.service].some((value) =>
        value?.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [leads, search]);

  return (
    <section id="admin" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 mb-10 text-right">
          <div>
            <p className="text-sm font-bold text-brand-gold mb-2 flex items-center gap-2 justify-end">
              <ShieldCheck size={18} />
              لوحة متابعة العملاء (عرض داخلي)
            </p>
            <h2 className="text-4xl font-extrabold text-brand-navy">رصُد التحويلات الجديدة بسهولة</h2>
            <p className="text-brand-gray text-lg mt-2">
              يتم تحديث الجدول فور استقبال طلب جديد من النموذج أو واتساب المتصل بالمنصة.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${
                status === 'connected'
                  ? 'bg-green-100 text-green-700'
                  : status === 'offline'
                  ? 'bg-amber-100 text-amber-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {status === 'connected' ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  متصل بـ Supabase
                </>
              ) : status === 'offline' ? (
                <>
                  <WifiOff size={16} />
                  وضع تجريبي (محلي)
                </>
              ) : (
                <>
                  <WifiOff size={16} />
                  خطأ في الاتصال
                </>
              )}
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={fetchLeads}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 text-brand-navy font-bold hover:border-brand-gold transition-colors"
              >
                <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
                تحديث الآن
              </button>
              <input
                type="search"
                placeholder="ابحث بالاسم أو الخدمة"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 md:w-72 border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-gold bg-gray-50"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-lg shadow-gray-100">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-brand-slate">
              <tr>
                {['الاسم', 'الهاتف', 'الخدمة', 'الوصف', 'التاريخ'].map((header) => (
                  <th
                    key={header}
                    className="px-4 py-3 text-right text-xs font-bold text-brand-gray uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredLeads.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-center text-brand-gray">
                    {loading ? 'جاري تحميل البيانات...' : 'لا توجد سجلات بعد.'}
                  </td>
                </tr>
              )}
              {filteredLeads.map((lead) => (
                <motion.tr
                  key={lead.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="hover:bg-brand-slate/60 transition-colors"
                >
                  <td className="px-4 py-4 text-brand-navy font-bold">{lead.full_name}</td>
                  <td className="px-4 py-4 text-brand-gray">{lead.phone}</td>
                  <td className="px-4 py-4">
                    <span className="inline-flex px-3 py-1 rounded-full bg-brand-slate text-brand-navy text-sm font-bold">
                      {lead.service}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-brand-gray text-sm whitespace-pre-wrap">
                    {lead.notes || '—'}
                  </td>
                  <td className="px-4 py-4 text-brand-gray text-sm">
                    {new Date(lead.created_at).toLocaleString('ar-AE', {
                      dateStyle: 'medium',
                      timeStyle: 'short',
                    })}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;

