'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  Globe, 
  Zap, 
  Layers, 
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Users,
  Briefcase,
  Building2,
  Truck,
  FileText,
  Clock,
  ArrowDownRight,
  Database,
  Search,
  Activity,
  Lock as LockIcon,
  CreditCard
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

export default function SolutionsPage() {
  const { openWaitlist } = useStore();

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
    const parallaxItems = document.querySelectorAll('.parallax-slow');
    parallaxItems.forEach((item) => {
      gsap.to(item, {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: item,
          scrub: true,
        }
      });
    });
  }, []);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
        <WaitlistModal />
        
        <Navbar />

        {/* Hero */}
        <SectionWrapper className="pt-40 pb-20 md:pt-52 md:pb-32 text-center">
          <div className="max-w-4xl mx-auto reveal-up">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-widest mb-8">
               Industry-Specific Orchestration
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.95]">
              Built for the <span className="text-gold-gradient italic">Complex</span>.
            </h1>
            <p className="text-lg md:text-2xl text-white/40 mb-12 max-w-3xl mx-auto leading-relaxed">
              Standard payout apps fail at scale. Purside is built for the specific operational challenges of companies moving money across borders, banks, and thousands of recipients.
            </p>
          </div>
        </SectionWrapper>

        {/* 1. PAYROLL */}
        <SectionWrapper id="payroll" className="bg-[#080808] py-32 border-y border-white/5">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <div className="reveal-up relative lg:sticky top-32">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                       <Users className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold uppercase tracking-widest text-gold/60">01 / Payroll</h2>
                 </div>
                 <h3 className="text-5xl md:text-7xl font-bold mb-10 leading-tight">High-Frequency <span className="text-gold-gradient">Global</span> Payroll.</h3>
                 
                 <div className="space-y-12 mb-12">
                    <div className="group">
                       <h4 className="flex items-center gap-2 text-red-500 font-bold uppercase tracking-tighter text-sm mb-3">
                          <AlertCircle className="w-4 h-4" /> The Operational Pain
                       </h4>
                       <p className="text-white/60 leading-relaxed italic">
                         Spreadsheet-based payroll is the #1 source of error. Manual tax withholding for different regions, bank cutoff times leading to delayed weekend salaries, and zero visibility for employees into their payout status.
                       </p>
                    </div>
                    <div className="group">
                       <h4 className="flex items-center gap-2 text-gold font-bold uppercase tracking-tighter text-sm mb-3">
                          <Zap className="w-4 h-4" /> The Purside Workflow
                       </h4>
                       <p className="text-white/80 leading-relaxed">
                         Integrate your HRIS or upload your batch. Purside's engine automatically calculates PH-native contributions, optimizes FX for international talent, and handles bulk distribution in a single click.
                       </p>
                    </div>
                 </div>

                 <GlassButton onClick={openWaitlist} className="w-full md:w-auto">
                    Automate Your Payroll <ArrowRight className="ml-2 w-5 h-5" />
                 </GlassButton>
              </div>

              <div className="space-y-8">
                 <div className="glass-card p-10 rounded-[40px] border-white/5 relative overflow-hidden group">
                    <div className="flex justify-between items-center mb-8">
                       <div className="h-2 w-24 bg-gold/20 rounded-full" />
                       <div className="h-6 w-20 bg-green-500/20 rounded-full border border-green-500/30 flex items-center justify-center text-[10px] text-green-500 font-bold uppercase">Success</div>
                    </div>
                    <div className="space-y-4">
                       {[1,2,3].map((_, i) => (
                         <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-gold/20 transition-all">
                            <div className="flex items-center gap-3">
                               <div className="w-10 h-10 rounded-full bg-white/10" />
                               <div>
                                  <div className="h-2 w-20 bg-white/10 rounded mb-2" />
                                  <div className="h-1 w-12 bg-white/5 rounded" />
                               </div>
                            </div>
                            <div className="text-right">
                               <div className="h-2 w-16 bg-gold/20 rounded mb-2" />
                               <div className="h-1 w-10 bg-white/5 rounded" />
                            </div>
                         </div>
                       ))}
                    </div>
                    <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-end">
                       <div>
                          <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Total Disbursement</p>
                          <p className="text-2xl font-bold text-gold">$42,800.00</p>
                       </div>
                       <TrendingUp className="w-10 h-10 text-gold/20" />
                    </div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-8">
                    <div className="glass-card p-8 rounded-3xl border-white/5 text-center">
                       <p className="text-4xl font-bold mb-2">90%</p>
                       <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Time Saved</p>
                    </div>
                    <div className="glass-card p-8 rounded-3xl border-white/5 text-center">
                       <p className="text-4xl font-bold mb-2">0%</p>
                       <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Manual Errors</p>
                    </div>
                 </div>
              </div>
           </div>
        </SectionWrapper>

        {/* 2. VENDORS */}
        <SectionWrapper id="vendors" className="py-32">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start lg:flex-row-reverse">
              <div className="reveal-up relative lg:sticky top-32 lg:order-2">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                       <Truck className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold uppercase tracking-widest text-gold/60">02 / Vendors</h2>
                 </div>
                 <h3 className="text-5xl md:text-7xl font-bold mb-10 leading-tight">Intelligent <span className="text-gold-gradient">Supply</span> Chain.</h3>
                 
                 <div className="space-y-12 mb-12 text-left">
                    <div className="group">
                       <h4 className="flex items-center gap-2 text-red-500 font-bold uppercase tracking-tighter text-sm mb-3">
                          <AlertCircle className="w-4 h-4" /> The Operational Pain
                       </h4>
                       <p className="text-white/60 leading-relaxed italic">
                         International vendors often build "hidden FX buffers" into their invoices because of payment unpredictability. Manual invoice matching and slow cross-border rails lead to supply chain friction and late fees.
                       </p>
                    </div>
                    <div className="group">
                       <h4 className="flex items-center gap-2 text-gold font-bold uppercase tracking-tighter text-sm mb-3">
                          <Zap className="w-4 h-4" /> The Purside Workflow
                       </h4>
                       <p className="text-white/80 leading-relaxed">
                         Automated invoice scanning and matching. Purside provides real-time FX visibility, allowing you to lock in rates and ensure vendors are paid exactly what they expect, on time, every time.
                       </p>
                    </div>
                 </div>

                 <GlassButton onClick={openWaitlist}>
                    Streamline Vendor Payments <ArrowRight className="ml-2 w-5 h-5" />
                 </GlassButton>
              </div>

              <div className="space-y-8 lg:order-1">
                 <div className="glass-card p-12 rounded-[40px] border-white/5 relative bg-gradient-to-br from-white/[0.03] to-transparent">
                    <div className="flex items-center justify-between mb-10">
                       <h4 className="font-bold text-sm uppercase tracking-widest">Live FX Monitoring</h4>
                       <div className="flex gap-2">
                          <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                          <div className="w-2 h-2 rounded-full bg-white/10" />
                       </div>
                    </div>
                    <div className="h-40 flex items-end gap-2 mb-10">
                       {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 1, 0.7, 0.5, 0.8].map((h, i) => (
                         <motion.div 
                           key={i} 
                           initial={{ height: 0 }}
                           whileInView={{ height: `${h * 100}%` }}
                           transition={{ delay: i * 0.05 }}
                           className="flex-1 bg-gold/20 rounded-t-lg relative group"
                         >
                            <div className="absolute inset-0 bg-gold/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                         </motion.div>
                       ))}
                    </div>
                    <div className="flex justify-between items-center p-6 bg-gold/10 rounded-2xl border border-gold/20">
                       <div>
                          <p className="text-[10px] text-gold/60 uppercase font-bold mb-1">Locked Rate</p>
                          <p className="text-xl font-bold">1 USD = 56.42 PHP</p>
                       </div>
                       <LockIcon className="w-6 h-6 text-gold" />
                    </div>
                 </div>
              </div>
           </div>
        </SectionWrapper>

        {/* 3. CONTRACTORS */}
        <SectionWrapper id="contractors" className="bg-[#080808] py-32 border-y border-white/5">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <div className="reveal-up relative lg:sticky top-32">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                       <Briefcase className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold uppercase tracking-widest text-gold/60">03 / Contractors</h2>
                 </div>
                 <h3 className="text-5xl md:text-7xl font-bold mb-10 leading-tight">Conditional <span className="text-gold-gradient">Trust</span> Layers.</h3>
                 
                 <div className="space-y-12 mb-12">
                    <div className="group">
                       <h4 className="flex items-center gap-2 text-red-500 font-bold uppercase tracking-tighter text-sm mb-3">
                          <AlertCircle className="w-4 h-4" /> The Operational Pain
                       </h4>
                       <p className="text-white/60 leading-relaxed italic">
                         Paying project-based contractors globally is high-risk. Sending money before verification is dangerous; holding it too long kills the relationship. Manual KYC/KYB for every new contractor is a bottleneck.
                       </p>
                    </div>
                    <div className="group">
                       <h4 className="flex items-center gap-2 text-gold font-bold uppercase tracking-tighter text-sm mb-3">
                          <Zap className="w-4 h-4" /> The Purside Workflow
                       </h4>
                       <p className="text-white/80 leading-relaxed">
                         Embedded contractor verification and conditional release mechanisms. Funds are held in a secure compliance layer and only released when specific project milestones are triggered or manual approval is granted.
                       </p>
                    </div>
                 </div>

                 <GlassButton onClick={openWaitlist}>
                    Manage Global Contractors <ArrowRight className="ml-2 w-5 h-5" />
                 </GlassButton>
              </div>

              <div className="grid grid-cols-1 gap-8">
                 <div className="glass-card p-10 rounded-[40px] border-white/5">
                    <div className="flex items-center gap-4 mb-10">
                       <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                          1
                       </div>
                       <div>
                          <p className="text-sm font-bold">Contractor Verified</p>
                          <p className="text-xs text-white/30">KYB & Compliance Check Passed</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4 mb-10">
                       <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">
                          2
                       </div>
                       <div>
                          <p className="text-sm font-bold">Project Milestone Trigger</p>
                          <p className="text-xs text-white/30">API Signal Received from Github/Jira</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold">
                          3
                       </div>
                       <div>
                          <p className="text-sm font-bold">Automated Release</p>
                          <p className="text-xs text-white/30">Funds Routed to PH Bank Rail</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </SectionWrapper>

        {/* 4. MARKETPLACES */}
        <SectionWrapper id="marketplaces" className="py-32">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start lg:flex-row-reverse">
              <div className="reveal-up relative lg:sticky top-32 lg:order-2">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                       <Building2 className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold uppercase tracking-widest text-gold/60">04 / Marketplaces</h2>
                 </div>
                 <h3 className="text-5xl md:text-7xl font-bold mb-10 leading-tight">Programmable <span className="text-gold-gradient">Splits</span>.</h3>
                 
                 <div className="space-y-12 mb-12">
                    <div className="group">
                       <h4 className="flex items-center gap-2 text-red-500 font-bold uppercase tracking-tighter text-sm mb-3">
                          <AlertCircle className="w-4 h-4" /> The Operational Pain
                       </h4>
                       <p className="text-white/60 leading-relaxed italic">
                         Split payments between sellers, referrers, and platform fees are a nightmare for reconciliation. Most marketplaces are forced into slow weekly payout batches to minimize the chaos.
                       </p>
                    </div>
                    <div className="group">
                       <h4 className="flex items-center gap-2 text-gold font-bold uppercase tracking-tighter text-sm mb-3">
                          <Zap className="w-4 h-4" /> The Purside Workflow
                       </h4>
                       <p className="text-white/80 leading-relaxed">
                         Define your split logic once. Purside handles the multi-party disbursement in real-time, matching every micro-payment to your internal ledger automatically.
                       </p>
                    </div>
                 </div>

                 <GlassButton onClick={openWaitlist}>
                    Scale Your Marketplace <ArrowRight className="ml-2 w-5 h-5" />
                 </GlassButton>
              </div>

              <div className="space-y-8 lg:order-1">
                 <div className="glass-card p-12 rounded-[40px] border-white/5 text-center">
                    <div className="relative h-64 flex items-center justify-center">
                       <div className="w-24 h-24 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center relative z-20">
                          <CreditCard className="w-10 h-10 text-gold" />
                       </div>
                       {/* Animated split lines */}
                       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-full h-full relative">
                             {[0, 120, 240].map((angle, i) => (
                               <motion.div 
                                 key={i}
                                 initial={{ scale: 0, opacity: 0 }}
                                 whileInView={{ scale: 1, opacity: 1 }}
                                 transition={{ delay: 0.5 + i * 0.1 }}
                                 style={{ rotate: `${angle}deg` }}
                                 className="absolute top-1/2 left-1/2 w-32 h-px bg-gradient-to-r from-gold to-transparent origin-left"
                               />
                             ))}
                          </div>
                       </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-8">
                       <div className="p-4 glass-panel rounded-2xl text-[10px] font-bold uppercase tracking-widest text-white/40">Seller 85%</div>
                       <div className="p-4 glass-panel rounded-2xl text-[10px] font-bold uppercase tracking-widest text-gold">Platform 10%</div>
                       <div className="p-4 glass-panel rounded-2xl text-[10px] font-bold uppercase tracking-widest text-white/40">Partner 5%</div>
                    </div>
                 </div>
              </div>
           </div>
        </SectionWrapper>

        {/* 5. STAFFING FIRMS */}
        <SectionWrapper id="staffing" className="bg-[#080808] py-32 border-y border-white/5">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <div className="reveal-up relative lg:sticky top-32">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                       <Layers className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold uppercase tracking-widest text-gold/60">05 / Staffing</h2>
                 </div>
                 <h3 className="text-5xl md:text-7xl font-bold mb-10 leading-tight">Volume <span className="text-gold-gradient">Orchestration</span>.</h3>
                 
                 <div className="space-y-12 mb-12">
                    <div className="group">
                       <h4 className="flex items-center gap-2 text-red-500 font-bold uppercase tracking-tighter text-sm mb-3">
                          <AlertCircle className="w-4 h-4" /> The Operational Pain
                       </h4>
                       <p className="text-white/60 leading-relaxed italic">
                         Staffing firms move massive volumes of micro-payments. Manual bank entry for hundreds of temporary workers every week is an operational death trap. One typo can cause a weekend of support tickets.
                       </p>
                    </div>
                    <div className="group">
                       <h4 className="flex items-center gap-2 text-gold font-bold uppercase tracking-tighter text-sm mb-3">
                          <Zap className="w-4 h-4" /> The Purside Workflow
                       </h4>
                       <p className="text-white/80 leading-relaxed">
                         Batch distribution that actually works. Upload your CSV or connect via API. Purside's engine handles the verification, deduplication, and bulk distribution across multiple PH rails in seconds.
                       </p>
                    </div>
                 </div>

                 <GlassButton onClick={openWaitlist}>
                    Scale Your Staffing Ops <ArrowRight className="ml-2 w-5 h-5" />
                 </GlassButton>
              </div>

              <div className="space-y-8">
                 <div className="glass-card p-10 rounded-[40px] border-white/5 relative overflow-hidden">
                    <div className="flex items-center gap-4 mb-8 text-gold/60">
                       <Activity className="w-5 h-5 animate-pulse" />
                       <span className="text-xs font-bold uppercase tracking-widest">Real-time Batch Processing</span>
                    </div>
                    <div className="space-y-2">
                       {[0.6, 0.8, 0.4, 0.9, 0.5, 0.7, 1.0].map((w, i) => (
                          <div key={i} className="h-2 bg-white/5 rounded-full overflow-hidden">
                             <motion.div 
                               initial={{ width: 0 }}
                               whileInView={{ width: `${w * 100}%` }}
                               transition={{ duration: 1.5, delay: i * 0.1 }}
                               className="h-full bg-gold/40"
                             />
                          </div>
                       ))}
                    </div>
                    <p className="mt-8 text-center text-3xl font-bold">1,240 <span className="text-sm text-white/30 font-normal">Tx / Min</span></p>
                 </div>
              </div>
           </div>
        </SectionWrapper>

        {/* 6. AGENCIES & 7. OUTSOURCING */}
        <SectionWrapper id="agencies" className="py-32">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start lg:flex-row-reverse">
              <div className="reveal-up relative lg:sticky top-32 lg:order-2">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                       <Building2 className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold uppercase tracking-widest text-gold/60">06-07 / Agency & BPO</h2>
                 </div>
                 <h3 className="text-5xl md:text-7xl font-bold mb-10 leading-tight">The <span className="text-gold-gradient">Outsourcing</span> Engine.</h3>
                 
                 <div className="space-y-12 mb-12">
                    <div className="group">
                       <h4 className="flex items-center gap-2 text-red-500 font-bold uppercase tracking-tighter text-sm mb-3">
                          <AlertCircle className="w-4 h-4" /> The Operational Pain
                       </h4>
                       <p className="text-white/60 leading-relaxed italic">
                         Agencies and BPOs operate on thin margins. Fragmented project budgets, manual reconciliation of client funds vs. talent payouts, and expensive cross-border fees eat into the bottom line.
                       </p>
                    </div>
                    <div className="group">
                       <h4 className="flex items-center gap-2 text-gold font-bold uppercase tracking-tighter text-sm mb-3">
                          <Zap className="w-4 h-4" /> The Purside Workflow
                       </h4>
                       <p className="text-white/80 leading-relaxed">
                         Project-aware payout logic. Match every payout to a client project or cost-center automatically. Purside gives you a consolidated view of your global outsourcing financial operations in one dashboard.
                       </p>
                    </div>
                 </div>

                 <GlassButton onClick={openWaitlist}>
                    Optimise Your Agency <ArrowRight className="ml-2 w-5 h-5" />
                 </GlassButton>
              </div>

              <div className="space-y-8 lg:order-1">
                 <div className="glass-card p-12 rounded-[40px] border-white/5">
                    <div className="flex items-center gap-4 mb-10">
                       <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gold">
                          <Database className="w-6 h-6" />
                       </div>
                       <h4 className="text-lg font-bold">Consolidated Ledger</h4>
                    </div>
                    <div className="space-y-6">
                       <div className="flex justify-between items-center text-sm">
                          <span className="text-white/40">Inflow (Project A)</span>
                          <span className="text-green-500">+$25,000.00</span>
                       </div>
                       <div className="flex justify-between items-center text-sm">
                          <span className="text-white/40">Payout (Team Alpha)</span>
                          <span className="text-red-400">-$18,400.00</span>
                       </div>
                       <div className="h-px bg-white/5" />
                       <div className="flex justify-between items-center font-bold">
                          <span>Gross Margin</span>
                          <span className="text-gold">$6,600.00</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </SectionWrapper>

        {/* Final CTA */}
        <SectionWrapper className="pb-40">
           <div className="glass-card p-12 md:p-24 rounded-[40px] text-center max-w-6xl mx-auto relative overflow-hidden border-gold/20">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-4xl md:text-7xl font-bold mb-8 italic">Ready to <span className="text-gold-gradient">Orchestrate</span>?</h3>
                <p className="text-xl text-white/40 mb-12 max-w-2xl mx-auto">
                   Join the waitlist to receive founding access to the most sophisticated finance operations engine ever built for the Philippines.
                </p>
                <GlassButton onClick={openWaitlist} className="px-16 py-8 text-xl">
                   Join Waitlist Now <ArrowRight className="ml-2 w-6 h-6" />
                </GlassButton>
              </div>
           </div>
        </SectionWrapper>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
