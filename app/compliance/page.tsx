'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
   ArrowRight,
   ShieldCheck,
   Lock,
   Scale,
   Search,
   FileText,
   Activity,
   Eye,
   CheckCircle2,
   Building2,
   Database,
   History,
   Zap,
   Shield,
   Fingerprint,
   GanttChart
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

export default function CompliancePage() {
   const { openWaitlist } = useStore();
   const scanLineRef = useRef<HTMLDivElement>(null);

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
                  toggleActions: 'play none none none',
               }
            }
         );
      });

      // Scanning laser animation
      if (scanLineRef.current) {
         gsap.to(scanLineRef.current, {
            top: '100%',
            duration: 4,
            repeat: -1,
            ease: 'power1.inOut',
         });
      }
   }, []);

   return (
      <SmoothScroll>
         <div className="relative min-h-screen bg-[#030303] text-white overflow-hidden">
            <WaitlistModal />

            <Navbar />

            {/* Hero */}
            <SectionWrapper className="pt-40 pb-20 md:pt-52 md:pb-32 text-center">
               <div className="max-w-4xl mx-auto reveal-up">
                  <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold/5 border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                     Institutional Trust Sanctuary
                  </div>
                  <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.95]">
                     Regulated <span className="text-gold-gradient italic">Strength</span>.
                  </h1>
                  <p className="text-lg md:text-2xl text-white/30 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                     Compliance isn't a checkbox for us; it's the foundation of our entire architecture. We combine institutional bank-grade security with the speed of a modern orchestration engine.
                  </p>
               </div>
            </SectionWrapper>

            {/* 1. Regulated Partner Model */}
            <SectionWrapper id="partner-model" className="pb-32">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div className="reveal-up">
                     <h2 className="text-gold uppercase tracking-[0.3em] font-bold text-xs mb-6">01 / Regulated Partner Model</h2>
                     <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Banking <span className="text-gold-gradient">Native</span>.</h3>
                     <p className="text-white/60 text-lg leading-relaxed mb-10">
                        Purside operates in partnership with regulated financial institutions. We don't just "move money"; we orchestrate it through the safest, most compliant channels in the global banking system.
                     </p>
                     <div className="p-8 glass-card border-gold/10 rounded-3xl relative overflow-hidden group">
                        <div className="flex items-center gap-4 mb-6">
                           <Building2 className="w-10 h-10 text-gold" />
                           <h4 className="text-xl font-bold">Partner Bank Network</h4>
                        </div>
                        <p className="text-sm text-white/40 leading-relaxed">
                           Your funds never leave the regulated banking ecosystem. We partner with Tier-1 banks in the Philippines to ensure that every peso is held in protected, segregated accounts.
                        </p>
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-3xl group-hover:bg-gold/10 transition-colors" />
                     </div>
                  </div>
                  <div className="relative h-[500px] reveal-up flex items-center justify-center">
                     <div className="w-full max-w-md h-[400px] border-2 border-white/5 rounded-[60px] p-8 flex flex-col justify-between relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />
                        <div className="relative z-10 flex justify-between items-start">
                           <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center">
                              <Lock className="w-6 h-6 text-gold" />
                           </div>
                           <div className="text-right">
                              <p className="text-[10px] text-white/20 uppercase font-bold tracking-widest">Security Status</p>
                              <p className="text-gold font-bold">HARDENED</p>
                           </div>
                        </div>

                        <div className="relative z-10 space-y-4">
                           <div className="h-2 w-full bg-white/5 rounded-full" />
                           <div className="h-2 w-2/3 bg-white/5 rounded-full" />
                           <div className="h-2 w-1/2 bg-white/5 rounded-full" />
                        </div>

                        <div className="relative z-10 flex items-center gap-4 p-4 bg-gold/5 border border-gold/10 rounded-2xl">
                           <CheckCircle2 className="w-6 h-6 text-green-500" />
                           <p className="text-xs font-medium text-white/60 italic">Compliance Engine Synced with Partner Rail</p>
                        </div>
                        {/* Animated scanning line */}
                        <div ref={scanLineRef} className="absolute left-0 top-0 w-full h-[2px] bg-gold/40 blur-[2px] shadow-[0_0_15px_rgba(212,175,55,0.5)] z-20 pointer-events-none" />
                     </div>
                  </div>
               </div>
            </SectionWrapper>

            {/* 2. Separation of Custody & Orchestration */}
            <SectionWrapper id="custody" className="py-32 bg-white/[0.01] border-y border-white/5">
               <div className="text-center max-w-4xl mx-auto mb-20 reveal-up">
                  <h2 className="text-gold uppercase tracking-[0.3em] font-bold text-xs mb-6">02 / Separation of Custody & Orchestration</h2>
                  <h3 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">The <span className="text-gold-gradient">Firewall</span>.</h3>
                  <p className="text-white/40 text-xl leading-relaxed">
                     We maintain a strict separation between fund custody and the orchestration engine. This eliminates counterparty risk and ensures institutional stability.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto reveal-up">
                  <div className="glass-card p-12 rounded-[40px] border-white/5 hover:border-gold/20 transition-all group">
                     <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                        <Building2 className="w-8 h-8 text-white/40" />
                     </div>
                     <h4 className="text-2xl font-bold mb-6">Custody Layer</h4>
                     <p className="text-white/40 leading-relaxed">
                        Regulated bank partners hold all client funds in segregated accounts. This layer is responsible for the actual movement of capital across domestic and international rails.
                     </p>
                     <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-3">
                        <Shield className="w-5 h-5 text-gold" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gold">Regulated Vault</span>
                     </div>
                  </div>
                  <div className="glass-card p-12 rounded-[40px] border-gold/10 bg-gold/[0.02] hover:border-gold/30 transition-all group">
                     <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                        <Zap className="w-8 h-8 text-gold" />
                     </div>
                     <h4 className="text-2xl font-bold mb-6 text-gold">Orchestration Layer</h4>
                     <p className="text-white/60 leading-relaxed font-medium">
                        The Purside Engine provides the intelligence, logic, and connectivity. We instruct the Custody layer on how and when to move funds based on your business rules.
                     </p>
                     <div className="mt-8 pt-8 border-t border-gold/10 flex items-center gap-3">
                        <Activity className="w-5 h-5 text-gold" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gold">Engine Room</span>
                     </div>
                  </div>
               </div>
            </SectionWrapper>

            {/* 3. Compliance Workflows & Monitoring */}
            <SectionWrapper id="monitoring" className="py-32">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                  <div className="lg:order-2 reveal-up">
                     <h2 className="text-gold uppercase tracking-[0.3em] font-bold text-xs mb-6">03 / Monitoring & Screening</h2>
                     <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Always <span className="text-gold-gradient">Watching</span>.</h3>
                     <p className="text-white/60 text-lg leading-relaxed mb-10">
                        Our compliance engine runs real-time screening against global watchlists (OFAC, UN, EU, HMT) and performs behavioral risk assessment on every transaction.
                     </p>
                     <div className="grid grid-cols-1 gap-4">
                        {[
                           { icon: <Search className="w-5 h-5" />, title: "PEP & Sanctions Screening", desc: "Real-time checks against 100+ global lists." },
                           { icon: <Activity className="w-5 h-5" />, title: "Velocity Monitoring", desc: "Automated detection of unusual payout patterns." },
                           { icon: <Fingerprint className="w-5 h-5" />, title: "KYC/KYB Verification", desc: "Automated identity and business verification." }
                        ].map((item, i) => (
                           <div key={i} className="p-6 glass-panel rounded-2xl border-white/5 flex items-center gap-6 group hover:border-gold/20 transition-all">
                              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold/10">
                                 {item.icon}
                              </div>
                              <div>
                                 <h4 className="font-bold">{item.title}</h4>
                                 <p className="text-xs text-white/40">{item.desc}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="lg:order-1 reveal-up">
                     <div className="glass-card p-12 rounded-[40px] border-white/5 relative overflow-hidden bg-black/60">
                        <div className="flex items-center justify-between mb-10">
                           <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-white/30">Live Compliance Stream</h4>
                           <span className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                              <span className="text-[10px] font-bold text-green-500 uppercase">Secure</span>
                           </span>
                        </div>
                        <div className="space-y-4">
                           {[0.3, 0.6, 0.9, 0.4].map((op, i) => (
                              <div key={i} style={{ opacity: 1 - i * 0.2 }} className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5">
                                 <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/10" />
                                    <div className="h-2 w-20 bg-white/10 rounded" />
                                 </div>
                                 <div className="h-4 w-12 bg-green-500/10 rounded border border-green-500/20" />
                              </div>
                           ))}
                        </div>
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent" />
                     </div>
                  </div>
               </div>
            </SectionWrapper>

            {/* 4. Audit Trail & Risk Management */}
            <SectionWrapper id="audit" className="py-32 bg-[#080808] border-y border-white/5">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                  <div className="reveal-up">
                     <h2 className="text-gold uppercase tracking-[0.3em] font-bold text-xs mb-6">04 / Audit Trail & Risk</h2>
                     <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Immutable <span className="text-gold-gradient">Trust</span>.</h3>
                     <p className="text-white/60 text-lg leading-relaxed mb-10">
                        Every transaction generates an immutable audit trail. We provide institutional-grade transparency that satisfies regulators, auditors, and board-level reporting.
                     </p>
                     <div className="grid grid-cols-2 gap-8">
                        <div className="p-8 glass-panel rounded-[32px] border-white/5">
                           <GanttChart className="w-10 h-10 text-gold mb-6" />
                           <h4 className="font-bold mb-2">Risk Scoring</h4>
                           <p className="text-xs text-white/30 leading-relaxed">AI-driven transaction risk assessment before fund release.</p>
                        </div>
                        <div className="p-8 glass-panel rounded-[32px] border-white/5">
                           <History className="w-10 h-10 text-gold mb-6" />
                           <h4 className="font-bold mb-2">Event Ledgering</h4>
                           <p className="text-xs text-white/30 leading-relaxed">Cryptographically signed logs of every platform event.</p>
                        </div>
                     </div>
                  </div>
                  <div className="reveal-up">
                     <div className="glass-card p-10 rounded-[40px] border-gold/20 relative overflow-hidden bg-gold/[0.02]">
                        <div className="flex items-center gap-4 mb-10 text-gold">
                           <FileText className="w-6 h-6" />
                           <span className="text-sm font-bold uppercase tracking-widest">Audit Evidence Pack</span>
                        </div>
                        <div className="space-y-4">
                           {[
                              "Recipient Verification Hash",
                              "Sanctions Screening Result (PASS)",
                              "Approval Chain Signatures",
                              "Bank Settlement Confirmation"
                           ].map((step, i) => (
                              <div key={i} className="flex items-center gap-4 p-4 bg-black/40 rounded-xl border border-white/5">
                                 <CheckCircle2 className="w-4 h-4 text-green-500" />
                                 <span className="text-xs font-mono text-white/60">{step}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </SectionWrapper>

            {/* Final CTA */}
            <SectionWrapper className="pb-40">
               <div className="glass-card p-12 md:p-24 rounded-[40px] text-center max-w-6xl mx-auto relative overflow-hidden border-gold/20">
                  <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-transparent to-transparent pointer-events-none" />
                  <div className="relative z-10">
                     <h2 className="text-4xl md:text-7xl font-bold mb-8">Built for <span className="text-gold-gradient italic">Trust</span>.</h2>
                     <p className="text-xl text-white/40 mb-12 max-w-2xl mx-auto">
                        Partner with a platform that takes compliance as seriously as you do. Join the Purside founding access today.
                     </p>
                     <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <GlassButton onClick={openWaitlist} className="px-12 py-8 text-xl">
                           Get Founding Access <ArrowRight className="w-6 h-6" />
                        </GlassButton>
                        <GlassButton variant="secondary" onClick={() => window.location.href = '/how-it-works'} className="px-12 py-8 text-xl">
                           Explore the Architecture
                        </GlassButton>
                     </div>
                  </div>
               </div>
            </SectionWrapper>

            {/* Footer */}
            <Footer />
         </div>
      </SmoothScroll>
   );
}
