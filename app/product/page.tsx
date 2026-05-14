'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  Globe, 
  Zap, 
  Layers, 
  BarChart3, 
  Clock, 
  Lock, 
  ShieldCheck,
  Cpu,
  RefreshCw,
  FileText,
  Workflow,
  History,
  TrendingUp,
  Calendar,
  Users
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import styles
import 'swiper/css';
import 'swiper/css/pagination';

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

export default function ProductPage() {
  const { openWaitlist } = useStore();
  const heroRef = useRef(null);

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

    // Parallax
    const parallaxImgs = document.querySelectorAll('.parallax-img');
    parallaxImgs.forEach((img) => {
      gsap.to(img, {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: img,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });
  }, []);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
        <WaitlistModal />
        
        {/* Decorative Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#D4AF37]/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#D4AF37]/3 blur-[150px] rounded-full" />
        </div>

        <Navbar />

        {/* Product Hero */}
        <SectionWrapper className="pt-40 pb-20 md:pt-52 md:pb-32 flex flex-col items-center text-center">
          <div className="max-w-4xl mx-auto reveal-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
              Engineered for <span className="text-gold-gradient">Scale</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              A comprehensive suite of modules designed to automate, secure, and optimize every aspect of your business payout operations.
            </p>
          </div>

          <div className="w-full max-w-6xl mx-auto mt-20 relative px-4">
             <div className="glass-card aspect-[4/3] md:aspect-[21/9] rounded-3xl md:rounded-[40px] overflow-hidden relative border-white/5 shadow-2xl">
                <img 
                  src="/dashboard.png" 
                  alt="Purside Product Overview" 
                  className="w-full h-full object-cover opacity-40 parallax-img"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 flex flex-col md:flex-row justify-between md:items-end gap-4 md:gap-8">
                   <div className="text-left">
                      <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">Finance OS</h2>
                      <p className="text-white/40 text-xs md:text-sm">Centralized control for decentralized rails.</p>
                   </div>
                   <div className="flex flex-wrap gap-2 md:gap-4">
                      <div className="px-4 py-2 md:px-6 md:py-3 glass-panel rounded-lg md:rounded-xl text-gold font-bold text-xs md:text-base">100+ INTEGRATIONS</div>
                      <div className="px-4 py-2 md:px-6 md:py-3 glass-panel rounded-lg md:rounded-xl text-gold font-bold text-xs md:text-base">99.9% UPTIME</div>
                   </div>
                </div>
             </div>
          </div>
        </SectionWrapper>

        {/* Core Modules Grid */}
        <SectionWrapper id="modules" className="bg-[#080808]">
           <div className="text-center mb-20 reveal-up">
              <h2 className="text-gold uppercase tracking-[0.3em] font-bold text-sm mb-6">Capabilities</h2>
              <h3 className="text-4xl md:text-6xl font-bold mb-8">The Core <span className="text-gold-gradient">Modules</span>.</h3>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Zap />, title: "Intelligent Routing", desc: "Dynamic path-finding for optimal speed and cost." },
                { icon: <Users />, title: "Beneficiary Management", desc: "Automated verification and lifecycle management." },
                { icon: <Calendar />, title: "Scheduling & Recurring", desc: "Set it and forget it. Automated payout cycles." },
                { icon: <Layers />, title: "Bulk Orchestration", desc: "Process thousands of payments in seconds." },
                { icon: <FileText />, title: "Invoice-to-Payment", desc: "Automated matching and reconciliation logic." },
                { icon: <ShieldCheck />, title: "Conditional Release", desc: "Smart logic for escrow and performance-based payouts." },
                { icon: <History />, title: "Audit & Recon", desc: "Real-time ledgering and compliance reporting." },
                { icon: <Cpu />, title: "API First", desc: "Embed Purside directly into your own workflows." }
              ].map((module, i) => (
                <div key={i} className="glass-card p-8 rounded-3xl border-white/5 hover:border-gold/30 group transition-all duration-500">
                   <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-gold group-hover:scale-110 transition-transform">
                      {module.icon}
                   </div>
                   <h4 className="text-xl font-bold mb-3">{module.title}</h4>
                   <p className="text-white/40 text-sm leading-relaxed">{module.desc}</p>
                </div>
              ))}
           </div>
        </SectionWrapper>

        {/* Deep Dives - Alternating Layouts */}
        
        {/* 1. Intelligent Routing */}
        <SectionWrapper className="py-32">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="reveal-up">
                 <h3 className="text-4xl font-bold mb-8">Intelligent <span className="text-gold-gradient">Routing</span>.</h3>
                 <p className="text-lg text-white/60 mb-8 leading-relaxed">
                   Never worry about which rail to use. Purside automatically selects the fastest, cheapest, and most reliable route for every single transaction, considering real-time liquidity and network health.
                 </p>
                 <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-white/80"><CheckCircle className="w-5 h-5 text-gold" /> Real-time FX optimization</li>
                    <li className="flex items-center gap-3 text-white/80"><CheckCircle className="w-5 h-5 text-gold" /> Liquidity-aware pathfinding</li>
                    <li className="flex items-center gap-3 text-white/80"><CheckCircle className="w-5 h-5 text-gold" /> Multi-rail redundancy</li>
                 </ul>
              </div>
              <div className="relative">
                 <div className="glass-panel p-10 rounded-3xl border-gold/10 relative overflow-hidden group">
                    <div className="space-y-6 relative z-10">
                       <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-gold" 
                            animate={{ x: ['-100%', '100%'] }} 
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} 
                          />
                       </div>
                       <div className="grid grid-cols-3 gap-4">
                          <div className="h-20 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">UK Rail</div>
                          <div className="h-20 bg-gold/10 rounded-xl border border-gold/40 flex items-center justify-center text-gold font-bold">PURSIDE</div>
                          <div className="h-20 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">PH Rail</div>
                       </div>
                    </div>
                    <div className="absolute inset-0 bg-gold/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                 </div>
              </div>
           </div>
        </SectionWrapper>

        {/* 2. Beneficiary & Bulk Orchestration */}
        <SectionWrapper className="bg-[#080808] py-32">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 relative">
                 <div className="glass-card p-8 rounded-[32px] border-white/10 relative overflow-hidden">
                    <div className="space-y-4">
                       {[1, 2, 3, 4].map((_, i) => (
                         <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                            <div className="flex items-center gap-3">
                               <div className="w-8 h-8 rounded-full bg-white/10" />
                               <div className="h-2 w-24 bg-white/10 rounded" />
                            </div>
                            <div className="h-6 w-16 bg-gold/20 rounded-full border border-gold/30" />
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
              <div className="order-1 lg:order-2 reveal-up">
                 <h3 className="text-4xl font-bold mb-8">Bulk Payment <span className="text-gold-gradient">Orchestration</span>.</h3>
                 <p className="text-lg text-white/60 mb-8 leading-relaxed">
                   Handle payroll for thousands of employees or payouts for global marketplaces with ease. Our orchestration engine handles batch processing, verification, and settlement in one unified flow.
                 </p>
                 <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 glass-panel rounded-2xl">
                       <p className="text-3xl font-bold text-gold">10k+</p>
                       <p className="text-xs text-white/40 uppercase tracking-widest mt-2">Tx / Second</p>
                    </div>
                    <div className="p-6 glass-panel rounded-2xl">
                       <p className="text-3xl font-bold text-gold">0.01%</p>
                       <p className="text-xs text-white/40 uppercase tracking-widest mt-2">Error Rate</p>
                    </div>
                 </div>
              </div>
           </div>
        </SectionWrapper>

        {/* 3. Invoice & Reconciliation */}
        <SectionWrapper className="py-32">
           <div className="max-w-4xl mx-auto text-center reveal-up">
              <h3 className="text-4xl md:text-5xl font-bold mb-8">Invoice-to-Payment <span className="text-gold-gradient">Automation</span>.</h3>
              <p className="text-lg text-white/60 mb-16 leading-relaxed">
                Connect your invoicing software and let Purside handle the rest. We match invoices to payments, handle recurring schedules, and generate real-time audit trails for your finance team.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                   { title: "Smart Matching", desc: "Automated OCR and matching logic." },
                   { title: "One-Click Recon", sub: "Instant ledger updates." },
                   { title: "Full Visibility", desc: "Track every cent from end to end." }
                 ].map((item, i) => (
                   <div key={i} className="glass-card p-8 rounded-3xl border-white/5">
                      <div className="text-gold font-bold text-xl mb-2">{item.title}</div>
                      <p className="text-white/40 text-sm">{item.desc || item.sub}</p>
                   </div>
                 ))}
              </div>
           </div>
        </SectionWrapper>

        {/* Future Roadmap */}
        <SectionWrapper id="roadmap" className="bg-[#0A0A0A] relative">
           <div className="text-center mb-20 reveal-up">
              <h2 className="text-gold uppercase tracking-[0.3em] font-bold text-sm mb-6">Future Vision</h2>
              <h3 className="text-4xl md:text-6xl font-bold mb-8">The Roadmap to <span className="text-gold-gradient">Direct</span> Participation.</h3>
           </div>

           <div className="max-w-5xl mx-auto relative">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
              
              {[
                { phase: "Phase 1", title: "Orchestration Layer", desc: "Building the intelligence layer above existing bank rails.", status: "Active" },
                { phase: "Phase 2", title: "Deep Integrations", desc: "Direct partnerships with regional clearing houses and digital rails.", status: "Coming Soon" },
                { phase: "Phase 3", title: "Direct Participation", desc: "Evolving into direct network participation across multiple payment rails.", status: "Future" }
              ].map((item, i) => (
                <div key={i} className={cn("relative flex flex-col md:flex-row items-center gap-12 mb-24 reveal-up", i % 2 === 0 ? "md:flex-row-reverse" : "")}>
                   <div className="flex-1 text-center md:text-left">
                      <div className="inline-block px-4 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest mb-4">
                        {item.status}
                      </div>
                      <h4 className="text-2xl font-bold mb-4">{item.phase}: {item.title}</h4>
                      <p className="text-white/40 leading-relaxed">{item.desc}</p>
                   </div>
                   
                   <div className="z-10 w-6 h-6 rounded-full bg-gold border-4 border-[#050505] shadow-[0_0_20px_rgba(212,175,55,0.5)]" />
                   
                   <div className="flex-1 hidden md:block" />
                </div>
              ))}
           </div>
        </SectionWrapper>

        {/* Waitlist CTA */}
        <SectionWrapper className="pb-32">
           <div className="glass-card p-12 md:p-24 rounded-[40px] text-center max-w-6xl mx-auto relative overflow-hidden border-gold/20">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-4xl md:text-7xl font-bold mb-8">Ready for the <span className="text-gold-gradient">Future</span>?</h3>
                <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Join Purside today and transform your finance operations with the power of intelligent orchestration.
                </p>
                <GlassButton onClick={openWaitlist} className="px-16 py-8 text-xl">
                  Join the Founding Access <ArrowRight className="w-6 h-6" />
                </GlassButton>
              </div>
           </div>
        </SectionWrapper>

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
