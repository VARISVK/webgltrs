import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import AdminPanel from './components/AdminPanel';
import Location from './components/Location';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="font-tajawal bg-white text-brand-navy min-h-screen selection:bg-brand-gold selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Highlights />

        {/* About Section (Mini) */}
        <section id="about" className="py-16 bg-white relative">
          <div className="container mx-auto px-4 text-center relative z-10">
             <h2 className="text-3xl font-bold mb-6 text-brand-navy">من نحن</h2>
             <p className="max-w-3xl mx-auto text-brand-gray text-lg leading-relaxed font-medium">
               نحن "تخصيص"، شركة رائدة مقرها الشامخة، أبوظبي، متخصصة في تقديم خدمات رجال الأعمال وتخليص المعاملات الحكومية. نتميز بالدقة في العمل، السرعة في الإنجاز، والشفافية في الأسعار. هدفنا تسهيل إجراءاتكم الحكومية لتتفرغوا لما هو أهم.
             </p>
          </div>
          {/* Decorative element */}
          <div className="absolute left-0 top-0 w-32 h-32 bg-brand-gold/5 rounded-br-full"></div>
        </section>

        <Services />
        <ContactForm />
        <AdminPanel />
        <Location />
      </main>

      <Footer />

      {/* Sticky WhatsApp Button */}
      <a
        href="https://wa.me/971557011188" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg shadow-green-500/30 transition-all hover:scale-110 hover:-translate-y-1 flex items-center justify-center group"
        aria-label="Contact on WhatsApp"
      >
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:animate-ping"></div>
        <MessageCircle size={28} fill="white" className="text-white relative z-10" />
      </a>
    </div>
  );
};

export default App;