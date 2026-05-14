'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Shield, 
  FileText, 
  Scale, 
  CheckCircle2,
  Users,
  Briefcase,
  Globe,
  Share2,
  Lock,
  MessageSquare
} from 'lucide-react';

// Components
import SmoothScroll from '../components/SmoothScroll';
import GlassButton from '../components/ui/GlassButton';
import SectionWrapper from '../components/ui/SectionWrapper';
import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/Navbar';
import WaitlistModal from '../components/WaitlistModal';
import { useStore } from '../store/useStore';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const { openWaitlist } = useStore();
  const [inquiryType, setInquiryType] = useState('business');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Reveal animations
    const reveals = document.querySelectorAll('.reveal-up');
    reveals.forEach((el) => {
      gsap.fromTo(el, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          }
        }
      );
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      type: inquiryType
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  if (isSubmitted) {
    return (
      <SmoothScroll>
        <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6">
          <div className="max-w-2xl w-full glass-card p-12 md:p-20 rounded-[40px] text-center relative overflow-hidden border-gold/20">
             <div className="absolute inset-0 bg-gold/5 blur-[80px] rounded-full animate-pulse" />
             <div className="relative z-10">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-8">
                   <CheckCircle2 className="w-10 h-10 text-black" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Message <span className="text-gold-gradient">Sent</span>.</h1>
                <p className="text-white/60 text-lg mb-10 leading-relaxed">
                   Thank you for reaching out. A member of our team will be in contact with you shortly regarding your inquiry.
                </p>
                <GlassButton variant="primary" onClick={() => window.location.href = '/'}>
                   Return Home <ArrowRight className="ml-2 w-5 h-5" />
                </GlassButton>
             </div>
          </div>
        </div>
      </SmoothScroll>
    );
  }

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
        <WaitlistModal />
        
        <Navbar />

        {/* Hero */}
        <SectionWrapper className="pt-40 pb-20 md:pt-52 md:pb-32 text-center">
          <div className="max-w-4xl mx-auto reveal-up">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
               Communication & Legal Hub
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.95]">
              Let's <span className="text-gold-gradient italic">Connect</span>.
            </h1>
            <p className="text-lg md:text-2xl text-white/30 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Connect with our team for business inquiries, partnerships, or legal information. We're here to help you orchestrate the future.
            </p>
          </div>
        </SectionWrapper>

        {/* Contact & Inquiry Section */}
        <SectionWrapper id="contact" className="pb-32">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              
              {/* Info & Categories */}
              <div className="reveal-up space-y-12">
                 <div>
                    <h2 className="text-gold uppercase tracking-[0.3em] font-bold text-xs mb-6">Contact Channels</h2>
                    <h3 className="text-4xl md:text-6xl font-bold mb-8">How can we <span className="text-gold-gradient">help</span>?</h3>
                    <p className="text-white/40 text-lg leading-relaxed max-w-md">
                       Select the category that best describes your inquiry to ensure you're connected with the right department.
                    </p>
                 </div>

                 <div className="grid grid-cols-1 gap-4">
                    {[
                      { id: 'business', label: 'Business Inquiries', icon: <Briefcase />, desc: 'For enterprise sales and platform questions.' },
                      { id: 'partners', label: 'Partnerships', icon: <Globe />, desc: 'For banking and technical integration partners.' },
                      { id: 'media', label: 'Press & Media', icon: <Share2 />, desc: 'For media inquiries and brand assets.' },
                      { id: 'general', label: 'General Information', icon: <MessageSquare />, desc: 'For all other general questions.' }
                    ].map((cat) => (
                      <button 
                        key={cat.id}
                        onClick={() => setInquiryType(cat.id)}
                        className={cn(
                          "flex items-center gap-6 p-6 rounded-3xl border transition-all text-left group",
                          inquiryType === cat.id ? "bg-gold/10 border-gold/30" : "bg-white/[0.02] border-white/5 hover:border-white/10"
                        )}
                      >
                         <div className={cn(
                           "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                           inquiryType === cat.id ? "bg-gold text-black" : "bg-white/5 text-white/30 group-hover:text-gold"
                         )}>
                            {cat.icon}
                         </div>
                         <div>
                            <h4 className={cn("font-bold", inquiryType === cat.id ? "text-gold" : "text-white")}>{cat.label}</h4>
                            <p className="text-xs text-white/30">{cat.desc}</p>
                         </div>
                      </button>
                    ))}
                 </div>

                 <div className="pt-8 border-t border-white/5 space-y-6">
                    <div className="flex items-center gap-4 text-white/60 group">
                       <Mail className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
                       <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-widest text-white/20">Direct Email</span>
                          <span>hello@purside.com</span>
                       </div>
                    </div>
                    <div className="flex items-center gap-4 text-white/60 group">
                       <MapPin className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
                       <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-widest text-white/20">Global Presence</span>
                          <span>London â€¢ Manila</span>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Contact Form */}
              <div className="reveal-up">
                 <form onSubmit={handleSubmit} className="glass-card p-10 md:p-14 rounded-[40px] border-white/10 relative overflow-hidden bg-gradient-to-br from-white/[0.02] to-transparent">
                    <div className="relative z-10 space-y-6">
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Full Name</label>
                          <div className="relative">
                             <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                             <input required name="name" type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 focus:border-gold/50 focus:outline-none transition-all" />
                          </div>
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Work Email</label>
                          <div className="relative">
                             <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                             <input required name="email" type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 focus:border-gold/50 focus:outline-none transition-all" />
                          </div>
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Message</label>
                          <div className="relative">
                             <MessageSquare className="absolute left-4 top-6 w-4 h-4 text-white/20" />
                             <textarea required name="message" rows={5} placeholder="How can we help?" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 focus:border-gold/50 focus:outline-none transition-all resize-none" />
                          </div>
                       </div>
                       <div className="flex items-start gap-4 p-4 bg-white/[0.02] rounded-2xl border border-white/5">
                          <input required type="checkbox" id="consent" className="mt-1 accent-gold" />
                          <label htmlFor="consent" className="text-[10px] text-white/30 leading-relaxed">
                             I consent to Purside Ltd handling my data in accordance with the <a href="/legal" className="text-gold hover:underline transition-all">Privacy Policy</a> and contacting me regarding this inquiry.
                          </label>
                       </div>
                       <GlassButton type="submit" className="w-full py-8 text-xl">
                          Send Message <ArrowRight className="ml-2 w-6 h-6" />
                       </GlassButton>
                    </div>
                 </form>
              </div>
           </div>
        </SectionWrapper>

        {/* Final CTA */}
        <SectionWrapper className="pb-40">
           <div className="glass-card p-12 md:p-24 rounded-[40px] text-center max-w-6xl mx-auto relative overflow-hidden border-gold/10">
              <div className="absolute inset-0 bg-gold/5 pointer-events-none" />
              <div className="relative z-10">
                 <h2 className="text-4xl md:text-7xl font-bold mb-8">Ready to <span className="text-gold-gradient italic">Begin</span>?</h2>
                 <p className="text-xl text-white/40 mb-12 max-w-2xl mx-auto">
                    Secure your priority spot in the future of finance. Join the exclusive waitlist today.
                 </p>
                 <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <GlassButton onClick={() => window.location.href = '/waitlist'} className="px-12 py-8 text-xl">
                       Apply for Early Access <ArrowRight className="ml-2 w-6 h-6" />
                    </GlassButton>
                 </div>
              </div>
           </div>
        </SectionWrapper>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
