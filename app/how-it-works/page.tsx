'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  Settings, 
  Cpu, 
  ShieldCheck, 
  History, 
  FileSearch, 
  Share2, 
  CheckSquare,
  Network,
  Database,
  Lock,
  Workflow,
  RefreshCw,
  Eye,
  Activity,
  Zap,
  ChevronDown,
  Users
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

export default function HowItWorksPage() {
  const { openWaitlist } = useStore();
  const svgRef = useRef<SVGSVGElement>(null);

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

    // Animate SVG paths on scroll
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll('path');
      paths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: svgRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          }
        });
      });
    }
  }, []);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
        <WaitlistModal />
        
        <Navbar />

        {/* Hero */}
        <SectionWrapper className="pt-40 pb-20 md:pt-52 md:pb-32 text-center">
          <div className="max-w-4xl mx-auto reveal-up">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
               Technical Architecture
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.95]">
              The <span className="text-gold-gradient italic">Orchestration</span> Engine.
            </h1>
            <p className="text-lg md:text-2xl text-white/40 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Purside isn't just a payout app. It's an institutional-grade infrastructure layer that sits between your business logic and the global banking rails.
            </p>
            <div className="flex justify-center">
               <ChevronDown className="w-8 h-8 text-gold animate-bounce" />
            </div>
          </div>
        </SectionWrapper>

        {/* 1. System Overview */}
        <SectionWrapper id="overview" className="pb-32">
           <div className="glass-card p-12 md:p-20 rounded-[40px] border-white/5 relative overflow-hidden bg-gradient-to-br from-white/[0.03] to-transparent">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                 <div className="reveal-up">
                    <h2 className="text-gold uppercase tracking-[0.3em] font-bold text-xs mb-6">01 / System Overview</h2>
                    <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">A Unified <span className="text-gold-gradient">Abstraction</span>.</h3>
                    <p className="text-white/60 text-lg leading-relaxed mb-10">
                       Our architecture solves the "N+1" problem of financial integrations. Instead of managing dozens of individual bank APIs and compliance gates, Purside provides a single, high-performance orchestration layer.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                       <div className="p-6 glass-panel rounded-2xl border-white/5">
                          <Network className="w-8 h-8 text-gold mb-4" />
                          <h4 className="font-bold mb-2">Multi-Rail Routing</h4>
                          <p className="text-xs text-white/40">Automatic selection of the fastest, cheapest path.</p>
                       </div>
                       <div className="p-6 glass-panel rounded-2xl border-white/5">
                          <Database className="p-0 w-8 h-8 text-gold mb-4" />
                          <h4 className="font-bold mb-2">State Management</h4>
                          <p className="text-xs text-white/40">Real-time ledgering for every transaction state.</p>
                       </div>
                    </div>
                 </div>
                 <div className="relative h-[400px] flex items-center justify-center reveal-up">
                    {/* Abstract System Model */}
                    <div className="absolute inset-0 bg-gold/5 blur-[100px] rounded-full animate-pulse" />
                    <div className="relative z-10 w-64 h-64 border-2 border-white/10 rounded-[40px] rotate-45 flex items-center justify-center group hover:border-gold/30 transition-all duration-700">
                       <div className="w-48 h-48 border border-gold/20 rounded-[30px] flex items-center justify-center animate-spin-slow">
                          <div className="w-32 h-32 bg-gold/10 rounded-full flex items-center justify-center backdrop-blur-xl">
                             <Cpu className="w-12 h-12 text-gold -rotate-45" />
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </SectionWrapper>

        {/* 2. Beneficiary Structure */}
        <SectionWrapper id="beneficiaries" className="py-32 bg-[#080808] border-y border-white/5">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="lg:order-2 reveal-up">
                 <h2 className="text-gold uppercase tracking-[0.3em] font-bold text-xs mb-6">02 / Beneficiary Structure</h2>
                 <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Identity-First <span className="text-gold-gradient">Data</span>.</h3>
                 <p className="text-white/60 text-lg leading-relaxed mb-10">
                    We've reimagined how beneficiary data is stored. Every recipient is a structured object with embedded compliance checks, historical rail performance data, and multi-rail alias support.
                 </p>
                 <ul className="space-y-6">
                    {[
                      { title: "Bank Alias Mapping", desc: "One identity, multiple global bank destinations." },
                      { title: "Automated KYC/KYB", desc: "Real-time verification of recipient status." },
                      { title: "Health Monitoring", desc: "Predictive rail failure detection for recipients." }
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 group">
                         <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center mt-1 group-hover:bg-gold transition-colors">
                            <ArrowRight className="w-3 h-3 text-gold group-hover:text-black transition-colors" />
                         </div>
                         <div>
                            <h4 className="font-bold text-lg">{item.title}</h4>
                            <p className="text-white/40 text-sm">{item.desc}</p>
                         </div>
                      </li>
                    ))}
                 </ul>
              </div>
              <div className="lg:order-1 reveal-up">
                 <div className="glass-card p-10 rounded-[32px] border-white/5 relative bg-black/40">
                    <div className="flex items-center gap-4 mb-10">
                       <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                          <Users className="w-6 h-6 text-white/40" />
                       </div>
                       <div>
                          <p className="text-sm font-bold">Beneficiary Object: <span className="text-gold">BEN_4829</span></p>
                          <p className="text-[10px] text-white/20 font-mono">ID: a7f8-92c1-3d44</p>
                       </div>
                    </div>
                    <div className="space-y-4 font-mono text-[11px]">
                       <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                          <p className="text-white/30 mb-2">"rails": [</p>
                          <div className="pl-4 space-y-1">
                             <p className="text-green-400">"PH_PESONET": &#123; "status": "active", "speed": "high" &#125;,</p>
                             <p className="text-gold">"PH_INSTAPAY": &#123; "status": "active", "speed": "real-time" &#125;</p>
                          </div>
                          <p className="text-white/30 mt-2">]</p>
                       </div>
                       <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                          <p className="text-white/30 mb-1">"compliance": &#123;</p>
                          <p className="pl-4 text-white/60">"kyc_tier": 2, "last_verified": "2026-05-01"</p>
                          <p className="text-white/30 mt-1">&#125;</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </SectionWrapper>

        {/* 3. Orchestration Engine */}
        <SectionWrapper id="engine" className="py-32">
           <div className="text-center max-w-4xl mx-auto mb-20 reveal-up">
              <h2 className="text-gold uppercase tracking-[0.3em] font-bold text-xs mb-6">03 / Orchestration Engine</h2>
              <h3 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">The <span className="text-gold-gradient">Logic</span> Behind the Flow.</h3>
              <p className="text-white/40 text-xl leading-relaxed">
                 Every payout undergoes a multi-stage validation and routing process before it ever touches a bank rail.
              </p>
           </div>

           <div className="relative">
              {/* Circuit SVG Background */}
              <div className="absolute inset-0 pointer-events-none opacity-20 hidden lg:block">
                 <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 300 H900" stroke="#D4AF37" strokeWidth="2" strokeDasharray="10 10" />
                    <path d="M500 100 V500" stroke="#D4AF37" strokeWidth="2" strokeDasharray="10 10" />
                 </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                 {[
                   { title: "Static Validation", icon: <CheckSquare />, desc: "Syntax, schema, and basic business rule checks." },
                   { title: "Dynamic Routing", icon: <Zap />, desc: "Selecting optimal rails based on time, fee, and liquidity." },
                   { title: "Smart Scheduling", icon: <RefreshCw />, desc: "Delaying or bundling transactions for maximum efficiency." },
                   { title: "Risk Scoring", icon: <ShieldCheck />, desc: "Fraud detection and velocity limit checks." },
                   { title: "Approval Orchestration", icon: <Workflow />, desc: "Managing multi-step human or programmatic approvals." },
                   { title: "Atomic Execution", icon: <Activity />, desc: "Guaranteed once-and-only-once payment delivery." }
                 ].map((step, i) => (
                   <div key={i} className="glass-card p-10 rounded-3xl border-white/5 hover:border-gold/30 transition-all group">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform">
                         {step.icon}
                      </div>
                      <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                      <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </SectionWrapper>

        {/* 4. Scheduling & Rules */}
        <SectionWrapper id="rules" className="py-32 bg-[#080808] border-y border-white/5">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="reveal-up">
                 <h2 className="text-gold uppercase tracking-[0.3em] font-bold text-xs mb-6">04 / Scheduling & Rules</h2>
                 <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Programmable <span className="text-gold-gradient">Triggers</span>.</h3>
                 <p className="text-white/60 text-lg leading-relaxed mb-10">
                    Purside supports complex conditional logic. Set payouts to trigger based on project milestones, external API signals, or specific temporal windows.
                 </p>
                 <div className="space-y-4">
                    <div className="p-6 glass-panel rounded-2xl border-white/5 flex items-center justify-between group cursor-default">
                       <span className="text-white/60">If project_status === 'completed'</span>
                       <ArrowRight className="w-5 h-5 text-gold group-hover:translate-x-2 transition-transform" />
                       <span className="text-gold font-mono text-sm">Release Payout</span>
                    </div>
                    <div className="p-6 glass-panel rounded-2xl border-white/5 flex items-center justify-between group cursor-default">
                       <span className="text-white/60">Every 15th at 09:00 AM</span>
                       <ArrowRight className="w-5 h-5 text-gold group-hover:translate-x-2 transition-transform" />
                       <span className="text-gold font-mono text-sm">Bulk Batch PH</span>
                    </div>
                 </div>
              </div>
              <div className="reveal-up h-[400px] relative">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-72 h-72 rounded-full border border-white/10 flex items-center justify-center">
                       <div className="w-56 h-56 rounded-full border-2 border-gold/20 flex items-center justify-center animate-pulse">
                          <History className="w-20 h-20 text-gold" />
                       </div>
                    </div>
                 </div>
                 {/* Decorative data particles */}
                 <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-gold rounded-full blur-[2px] animate-ping" />
                 <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-gold/50 rounded-full blur-[2px] animate-bounce" />
              </div>
           </div>
        </SectionWrapper>

        {/* 5. Approval Flow */}
        <SectionWrapper id="approvals" className="py-32">
           <div className="max-w-5xl mx-auto">
              <div className="text-center mb-20 reveal-up">
                 <h2 className="text-gold uppercase tracking-[0.3em] font-bold text-xs mb-6">05 / Approval Flow</h2>
                 <h3 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">Institutional <span className="text-gold-gradient">Governance</span>.</h3>
                 <p className="text-white/40 text-xl leading-relaxed">
                    Granular control over who can initiate, verify, and release funds. Support for multi-sig and multi-level approval hierarchies.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-up">
                 <div className="p-10 glass-card rounded-3xl border-white/5 text-center flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white/40 mb-6">1</div>
                    <h4 className="font-bold mb-2">Initiate</h4>
                    <p className="text-xs text-white/30">Programmatic or Manual Request</p>
                 </div>
                 <div className="p-10 glass-card rounded-3xl border-gold/20 text-center flex flex-col items-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-2 h-full bg-gold/20" />
                    <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6 border border-gold/20">2</div>
                    <h4 className="font-bold mb-2">Approve</h4>
                    <p className="text-xs text-gold/60">Multi-Factor/Multi-Sig Verification</p>
                 </div>
                 <div className="p-10 glass-card rounded-3xl border-white/5 text-center flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white/40 mb-6">3</div>
                    <h4 className="font-bold mb-2">Execute</h4>
                    <p className="text-xs text-white/30">Atomic Release to Banking Rails</p>
                 </div>
              </div>
           </div>
        </SectionWrapper>

        {/* 6. Exception Handling */}
        <SectionWrapper id="exceptions" className="py-32 bg-[#080808] border-y border-white/5">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="reveal-up lg:order-2">
                 <h2 className="text-gold uppercase tracking-[0.3em] font-bold text-xs mb-6">06 / Exception Handling</h2>
                 <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Resilient by <span className="text-gold-gradient">Design</span>.</h3>
                 <p className="text-white/60 text-lg leading-relaxed mb-10">
                    Banks fail. APIs time out. Purside is built to handle the messiness of real-world finance. If a primary rail fails, our engine automatically falls back to secondary rails without user intervention.
                 </p>
                 <div className="grid grid-cols-1 gap-4">
                    <div className="p-6 glass-panel rounded-2xl border-red-500/10 flex items-center gap-6">
                       <RefreshCw className="w-6 h-6 text-red-400 animate-spin" />
                       <div>
                          <p className="font-bold text-sm">Primary Rail Timeout</p>
                          <p className="text-xs text-white/30">Attempting Failover to Rail B...</p>
                       </div>
                    </div>
                    <div className="p-6 glass-panel rounded-2xl border-green-500/10 flex items-center gap-6">
                       <CheckSquare className="w-6 h-6 text-green-400" />
                       <div>
                          <p className="font-bold text-sm">Auto-Recovery Successful</p>
                          <p className="text-xs text-white/30">Transaction rerouted and completed.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="reveal-up lg:order-1 h-[400px] flex items-center justify-center">
                 <div className="w-full max-w-sm glass-card p-8 rounded-3xl border-white/5 relative overflow-hidden">
                    <div className="h-2 w-full bg-white/5 rounded-full mb-8 relative overflow-hidden">
                       <motion.div 
                         initial={{ x: "-100%" }}
                         animate={{ x: "100%" }}
                         transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                         className="absolute top-0 left-0 h-full w-1/3 bg-gold/40"
                       />
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-mono text-white/20">
                       <span>SENDER</span>
                       <span>ENGINE</span>
                       <span>RAILS</span>
                    </div>
                 </div>
              </div>
           </div>
        </SectionWrapper>

        {/* 7. Reconciliation & 8. Auditability */}
        <SectionWrapper id="audit" className="py-32">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="reveal-up">
                 <h2 className="text-gold uppercase tracking-[0.3em] font-bold text-xs mb-6">07-08 / Audit & Truth</h2>
                 <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Immutable <span className="text-gold-gradient">Truth</span>.</h3>
                 <p className="text-white/60 text-lg leading-relaxed mb-10">
                    Purside maintains a dual-entry immutable ledger for every organization. Every state change, approval, and rail signal is cryptographically logged for instant auditability.
                 </p>
                 <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                       <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                          <FileSearch className="w-6 h-6" />
                       </div>
                       <h4 className="font-bold">Instant Audit</h4>
                       <p className="text-xs text-white/30">Export full-fidelity audit logs in seconds.</p>
                    </div>
                    <div className="space-y-4">
                       <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                          <Eye className="w-6 h-6" />
                       </div>
                       <h4 className="font-bold">Total Visibility</h4>
                       <p className="text-xs text-white/30">Real-time status tracking for every sub-transaction.</p>
                    </div>
                 </div>
              </div>
              <div className="reveal-up">
                 <div className="glass-card p-10 rounded-[40px] border-white/5 relative overflow-hidden group">
                    <div className="flex items-center gap-3 mb-8">
                       <div className="w-2 h-2 rounded-full bg-green-500" />
                       <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Audit Ledger Active</span>
                    </div>
                    <div className="space-y-3">
                       {[
                         { t: "10:04:12", msg: "Payout initiated by API_KEY_92", status: "ok" },
                         { t: "10:04:15", msg: "Sanctions screening passed", status: "ok" },
                         { t: "10:04:16", msg: "Approval received from USER_SEC", status: "ok" },
                         { t: "10:04:18", msg: "Released to Rail: INSTAPAY_PH", status: "pending" }
                       ].map((log, i) => (
                         <div key={i} className="flex justify-between items-center p-3 bg-white/5 rounded-xl text-[10px] font-mono group-hover:border-gold/20 border border-transparent transition-all">
                            <span className="text-white/30">{log.t}</span>
                            <span className="text-white/60">{log.msg}</span>
                            <span className={cn("px-2 py-0.5 rounded text-[8px] uppercase", log.status === 'ok' ? 'bg-green-500/10 text-green-500' : 'bg-gold/10 text-gold')}>{log.status}</span>
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
                 <h2 className="text-4xl md:text-7xl font-bold mb-8">Ready to <span className="text-gold-gradient">Upgrade</span>?</h2>
                 <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
                    Stop building custom bank integrations. Orchestrate your entire financial future with the Purside engine.
                 </p>
                 <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <GlassButton onClick={openWaitlist} className="px-12 py-8 text-xl">
                       Join the Waitlist <ArrowRight className="w-6 h-6" />
                    </GlassButton>
                    <GlassButton variant="secondary" onClick={() => window.location.href = '/solutions'} className="px-12 py-8 text-xl">
                       See Use Cases
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
