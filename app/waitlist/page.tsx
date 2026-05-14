'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  Star, 
  Crown, 
  ShieldCheck, 
  Rocket, 
  CheckCircle2,
  Users,
  Building2,
  Briefcase,
  Mail,
  ChevronRight,
  MessageSquare
} from 'lucide-react';

// Components
import SmoothScroll from '../components/SmoothScroll';
import GlassButton from '../components/ui/GlassButton';
import SectionWrapper from '../components/ui/SectionWrapper';
import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/Navbar';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger);

export default function WaitlistPage() {
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
      company: formData.get('company'),
      size: formData.get('size'),
      useCase: formData.get('useCase'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('/api/waitlist', {
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
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to the <span className="text-gold-gradient">Elite</span>.</h1>
                <p className="text-white/60 text-lg mb-10 leading-relaxed">
                   Your application for early access has been received. Our founding team will review your requirements and reach out via your work email shortly.
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
        
        <Navbar />

        {/* Hero */}
        <SectionWrapper className="pt-40 pb-20 md:pt-52 md:pb-32 text-center">
          <div className="max-w-4xl mx-auto reveal-up">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-8">
               <Star className="w-3 h-3 fill-gold" /> Founding Member Access
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.95]">
              By Invitation <span className="text-gold-gradient italic">Only</span>.
            </h1>
            <p className="text-lg md:text-2xl text-white/40 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              We are currently onboarding a select group of institutional partners. Join the waitlist to secure your place in the future of financial orchestration.
            </p>
          </div>
        </SectionWrapper>

        {/* Benefits Grid */}
        <SectionWrapper className="py-20">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: <Crown className="w-8 h-8" />, 
                  title: "Founding Member Status", 
                  desc: "Direct access to the founding team and influence over the platform roadmap." 
                },
                { 
                  icon: <ShieldCheck className="w-8 h-8" />, 
                  title: "Priority Compliance Onboarding", 
                  desc: "Dedicated support for complex regulatory setup and rail integration." 
                },
                { 
                  icon: <Rocket className="w-8 h-8" />, 
                  title: "Exclusive Fee Tiers", 
                  desc: "Special founding access pricing and zero-fee windows for early adopters." 
                }
              ].map((benefit, i) => (
                <div key={i} className="glass-card p-10 rounded-3xl border-white/5 hover:border-gold/20 transition-all group">
                   <div className="w-16 h-16 rounded-2xl bg-gold/5 flex items-center justify-center text-gold mb-8 group-hover:scale-110 transition-transform">
                      {benefit.icon}
                   </div>
                   <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                   <p className="text-white/40 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
           </div>
        </SectionWrapper>

        {/* Beta Notice */}
        <SectionWrapper className="py-20">
           <div className="p-8 glass-card border-blue-500/10 rounded-[32px] bg-blue-500/[0.02] flex flex-col md:flex-row items-center gap-8 reveal-up">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                 <Rocket className="w-8 h-8" />
              </div>
              <div className="flex-1 text-center md:text-left">
                 <h4 className="text-xl font-bold mb-2">Future Beta Testing</h4>
                 <p className="text-sm text-white/40 max-w-2xl">
                    Early access members will be the first to test our direct-participation rails and autonomous reconciliation engines before public release.
                 </p>
              </div>
              <div className="px-6 py-2 rounded-full border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                 Coming Q3 2026
              </div>
           </div>
        </SectionWrapper>

        {/* Signup Form */}
        <SectionWrapper id="signup" className="py-32">
           <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div className="reveal-up">
                 <h2 className="text-gold uppercase tracking-[0.3em] font-bold text-xs mb-6">Apply for Access</h2>
                 <h3 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">Secure Your <span className="text-gold-gradient">Priority</span>.</h3>
                 <p className="text-white/40 text-lg mb-12">
                    Please provide your professional details. We prioritize organizations with established payout volumes and complex orchestration needs.
                 </p>
                 
                 <div className="space-y-6">
                    <div className="flex items-center gap-4 text-white/60">
                       <CheckCircle2 className="w-5 h-5 text-gold" />
                       <span className="text-sm">Instant review of technical requirements</span>
                    </div>
                    <div className="flex items-center gap-4 text-white/60">
                       <CheckCircle2 className="w-5 h-5 text-gold" />
                       <span className="text-sm">Priority queue for PH-rail integration</span>
                    </div>
                 </div>
              </div>

              <div className="reveal-up">
                 <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 rounded-[40px] border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />
                    <div className="relative z-10 space-y-6">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                             <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Full Name</label>
                             <div className="relative">
                                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                <input 
                                  required
                                  name="name"
                                  type="text" 
                                  placeholder="John Doe"
                                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 focus:border-gold/50 focus:outline-none transition-all placeholder:text-white/10"
                                />
                             </div>
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Work Email</label>
                             <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                <input 
                                  required
                                  name="email"
                                  type="email" 
                                  placeholder="john@company.com"
                                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 focus:border-gold/50 focus:outline-none transition-all placeholder:text-white/10"
                                />
                             </div>
                          </div>
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                             <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Company Name</label>
                             <div className="relative">
                                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                <input 
                                  required
                                  name="company"
                                  type="text" 
                                  placeholder="Purside Ltd"
                                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 focus:border-gold/50 focus:outline-none transition-all placeholder:text-white/10"
                                />
                             </div>
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Company Size</label>
                             <div className="relative">
                                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                <select 
                                  required
                                  name="size"
                                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 focus:border-gold/50 focus:outline-none transition-all appearance-none text-white/60"
                                >
                                   <option value="" className="bg-[#050505]">Select size...</option>
                                   <option value="1-10" className="bg-[#050505]">1-10 employees</option>
                                   <option value="11-50" className="bg-[#050505]">11-50 employees</option>
                                   <option value="51-200" className="bg-[#050505]">51-200 employees</option>
                                   <option value="201-500" className="bg-[#050505]">201-500 employees</option>
                                   <option value="500+" className="bg-[#050505]">500+ employees</option>
                                </select>
                                <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 rotate-90" />
                             </div>
                          </div>
                       </div>

                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Primary Use Case</label>
                          <select 
                            required
                            name="useCase"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-gold/50 focus:outline-none transition-all appearance-none text-white/60"
                          >
                             <option value="" className="bg-[#050505]">Select use case...</option>
                             <option value="payroll" className="bg-[#050505]">Global Payroll</option>
                             <option value="marketplace" className="bg-[#050505]">Marketplace Payouts</option>
                             <option value="vendors" className="bg-[#050505]">Vendor Payments</option>
                             <option value="contractors" className="bg-[#050505]">Contractor Management</option>
                             <option value="other" className="bg-[#050505]">Other Orchestration</option>
                          </select>
                       </div>

                       <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">Additional Requirements</label>
                          <div className="relative">
                             <MessageSquare className="absolute left-4 top-6 w-4 h-4 text-white/20" />
                             <textarea 
                               name="message"
                               rows={4}
                               placeholder="Tell us about your payout volume and specific needs..."
                               className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 focus:border-gold/50 focus:outline-none transition-all placeholder:text-white/10 resize-none"
                             />
                          </div>
                       </div>

                       <GlassButton type="submit" className="w-full py-8 text-xl mt-4">
                          Apply for Founding Access <ArrowRight className="ml-2 w-6 h-6" />
                       </GlassButton>
                       
                       <p className="text-center text-[10px] text-white/20 uppercase tracking-[0.2em] mt-6">
                          Strictly Invite-Only â€¢ Limited Slots Available
                       </p>
                    </div>
                 </form>
              </div>
           </div>
        </SectionWrapper>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
