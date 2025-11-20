import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, BadgePercent, TimerReset } from 'lucide-react';

const cards = [
  {
    icon: BadgePercent,
    title: '38+ مرجع سعري محدث',
    description: 'نحتسب متوسط الأسعار من بوابات ICP / MOHRE وأكثر من 20 مركز طباعة في الشامخة.',
  },
  {
    icon: TimerReset,
    title: 'إنجاز خلال 2–5 أيام',
    description: 'تتبع مباشر لكل خدمة، مع إمكانية الإكسبرس مقابل 50–100 درهم إضافية.', 
  },
  {
    icon: BarChart3,
    title: 'تجميع الرسوم الشاملة',
    description: 'نعرض رسوم الطباعة، الرسوم الحكومية المتوقعة، والباقات المجمعة لإقامة + هوية.',
  },
];

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card rounded-3xl p-8 text-right relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-brand-gold/5 pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-brand-slate flex items-center justify-center text-brand-gold mb-4">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-brand-navy mb-3">{card.title}</h3>
                  <p className="text-brand-gray leading-relaxed">{card.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;

