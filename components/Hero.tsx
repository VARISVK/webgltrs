import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle, ChevronLeft } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Interactive Network Background Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = width > 768 ? 100 : 50; // Fewer particles on mobile
    const connectionDistance = 150;
    const mouseDistance = 200;

    let mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseDistance) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouseDistance - distance) / mouseDistance;
          
          // Gentle push away
          const directionMultiplier = 0.05 * force;
          this.vx -= forceDirectionX * directionMultiplier;
          this.vy -= forceDirectionY * directionMultiplier;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = '#D4AF37'; // Gold dots
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Draw connections
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            // Opacity based on distance
            const opacity = 1 - (distance / connectionDistance);
            ctx.strokeStyle = `rgba(15, 23, 42, ${opacity * 0.15})`; // Navy lines, low opacity
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-slate-50">
      {/* Interactive Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Soft Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80 z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-brand-gold/30 text-brand-navy text-sm font-bold mb-8 shadow-sm backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            {COMPANY_INFO.fullName}
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-brand-navy leading-tight mb-6 tracking-tight">
            <span className="block text-brand-gold drop-shadow-sm mb-2">{COMPANY_INFO.taglineAr}</span>
            <span className="block text-2xl md:text-4xl font-light text-brand-gray mt-4 uppercase tracking-[0.2em]">{COMPANY_INFO.taglineEn}</span>
          </h1>

          <p className="text-brand-gray text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            نقدم حلولاً متكاملة وموثوقة لتخليص كافة المعاملات الحكومية وشؤون الإقامة والعمل في دولة الإمارات العربية المتحدة. <br className="hidden md:block"/>دقة، سرعة، واحترافية لراحة بالك.
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(212, 175, 55, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto bg-brand-navy text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-brand-navy/20 flex items-center justify-center gap-2 group"
            >
              <span>استعرض خدماتنا</span>
              <ChevronLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
            </motion.a>
            <motion.a
              href="#location"
              whileHover={{ scale: 1.05, backgroundColor: '#F8FAFC' }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto bg-white border border-gray-200 text-brand-navy px-10 py-4 rounded-xl font-bold text-lg shadow-lg shadow-gray-100 hover:border-brand-gold transition-colors"
            >
              موقعنا
            </motion.a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12 text-brand-gray text-sm md:text-base font-semibold">
            <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100">
              <CheckCircle className="text-brand-gold" size={22} />
              <span>أسعار تنافسية</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100">
              <CheckCircle className="text-brand-gold" size={22} />
              <span>سرعة في الإنجاز</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100">
              <CheckCircle className="text-brand-gold" size={22} />
              <span>خبرة واسعة</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-brand-navy/30"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;