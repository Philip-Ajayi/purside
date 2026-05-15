'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
   ArrowRight,
   MapPin,
   Globe,
   Target,
   Compass,
   Zap,
   ShieldCheck,
   TrendingUp,
   Heart,
   Lightbulb,
   Milestone,
   ExternalLink,
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

export default function AboutPage() {
   const { openWaitlist } = useStore();
   const lineRef = useRef<HTMLDivElement>(null);

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

      // Animate the "Bridge" line
      if (lineRef.current) {
         gsap.fromTo(lineRef.current,
            { scaleX: 0 },
            {
               scaleX: 1,
               duration: 2,
               ease: 'power2.inOut',
               scrollTrigger: {
                  trigger: lineRef.current,
                  start: 'top 80%',
               }
            }
         );
      }
   }, []);

   return (
      <SmoothScroll>
         <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
            <WaitlistModal />

            <Navbar />

            {/* Hero */}
            <SectionWrapper className="pt-40 pb-20 md:pt-52 md:pb-32 text-center relative">
               <div className="max-w-5xl mx-auto reveal-up">
                  <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                     Our Narrative Journey
                  </div>
                  <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-10 leading-[0.9]">
                     Leeds <span className="text-gold-gradient italic">to</span> Manila.
                  </h1>
                  <p className="text-xl md:text-3xl text-white/30 max-w-4xl mx-auto leading-relaxed font-light">
                     Purside was born from a simple realization: the world's fastest-growing economies are being held back by yesterday's financial infrastructure.
                  </p>
               </div>

               {/* Continental Bridge Line */}
               <div className="mt-20 flex items-center justify-center gap-12 opacity-30">
                  <div className="text-xs font-bold uppercase tracking-widest text-white/20">Leeds HQ</div>
                  <div ref={lineRef} className="h-px w-64 bg-gradient-to-r from-transparent via-gold to-transparent origin-left" />
                  <div className="text-xs font-bold uppercase tracking-widest text-gold/60">Manila Operations</div>
               </div>
            </SectionWrapper>

            {/* Why Purside Exists - Manifesto */}
            <SectionWrapper id="about" className="py-32">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                  <div className="reveal-up">
                     <h2 className="text-gold uppercase tracking-[0.3em] font-bold text-xs mb-6">The Manifesto</h2>
                     <h3 className="text-4xl md:text-7xl font-bold mb-10 leading-tight">The Friction <span className="text-gold-gradient italic">End</span>.</h3>
                     <p className="text-white/60 text-xl leading-relaxed mb-8 italic">
                        "We didn't set out to build another bank. We set out to build the engine that makes banks work for modern business."
                     </p>
                     <p className="text-white/40 text-lg leading-relaxed mb-10 font-light">
                        Global payout fragmentation isn't just a technical problem; it's a growth problem. For too long, companies in the Philippines have been forced to choose between slow, expensive bank wires and fragmented, manual e-wallet workflows. Purside exists to bridge this gap, providing institutional-grade orchestration at local speeds.
                     </p>
                     <div className="flex gap-4">
                        <div className="p-6 glass-panel rounded-2xl border-white/5 flex-1">
                           <Heart className="w-8 h-8 text-gold mb-4" />
                           <h4 className="font-bold mb-2">Integrity First</h4>
                           <p className="text-xs text-white/30">Built on the principles of Philippines financial governance.</p>
                        </div>
                        <div className="p-6 glass-panel rounded-2xl border-white/5 flex-1">
                           <Zap className="w-8 h-8 text-gold mb-4" />
                           <h4 className="font-bold mb-2">Local Execution</h4>
                           <p className="text-xs text-white/30">Native integration with PH-specific banking rails.</p>
                        </div>
                     </div>
                  </div>
                  <motion.div
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8 }}
                     className="relative h-[600px]"
                  >
                     <div className="absolute inset-0 bg-gold/5 blur-[120px] rounded-full animate-pulse" />
                     <div className="glass-card h-full p-12 rounded-[60px] border-white/5 relative overflow-hidden flex flex-col justify-end">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#050505]/80" />
                        <div className="relative z-10">
                           <p className="text-7xl font-bold text-gold/10 mb-4 tracking-tighter uppercase">Mission</p>
                           <h4 className="text-3xl font-bold mb-6">To unify the world's <span className="text-gold-gradient">payment rails</span> into a single, programmable engine.</h4>
                           <div className="h-1 w-20 bg-gold rounded-full" />
                        </div>
                     </div>
                  </motion.div>
               </div>
            </SectionWrapper>

            {/* Why the Philippines */}
            <SectionWrapper className="py-32 bg-[#080808] border-y border-white/5">
               <div className="max-w-4xl mx-auto text-center mb-20 reveal-up">
                  <h2 className="text-gold uppercase tracking-[0.3em] font-bold text-xs mb-6">Market Focus</h2>
                  <h3 className="text-4xl md:text-7xl font-bold mb-8">Why the <span className="text-gold-gradient italic">Philippines</span>?</h3>
                  <p className="text-white/40 text-xl leading-relaxed">
                     The Philippines is at a pivotal financial tipping point. With a booming digital economy and a workforce that powers the world, it deserves infrastructure that matches its ambition.
                  </p>
               </div>

               <motion.div
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8 }}
                     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
               >
                  {[
                     {
                        title: "Digital Acceleration",
                        icon: <TrendingUp />,
                        desc: "The PH digital economy is projected to reach $150B by 2030, requiring scalable payout engines."
                     },
                     {
                        title: "Rail Evolution",
                        icon: <Milestone />,
                        desc: "InstaPay and PesoNet provide the perfect foundation for institutional orchestration."
                     },
                     {
                        title: "Global Talent Hub",
                        icon: <Users />,
                        desc: "As the world's BPO capital, the need for complex, bulk payroll is higher than ever."
                     }
                  ].map((card, i) => (
                     <div key={i} className="glass-card p-12 rounded-[40px] border-white/5 hover:border-gold/20 transition-all group">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gold mb-8 group-hover:scale-110 transition-transform">
                           {card.icon}
                        </div>
                        <h4 className="text-2xl font-bold mb-4">{card.title}</h4>
                        <p className="text-white/30 text-sm leading-relaxed">{card.desc}</p>
                     </div>
                  ))}
               </motion.div>
            </SectionWrapper>

            {/* Vision & Expansion */}
            <SectionWrapper className="py-32">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                  <div className="lg:order-2 reveal-up">
                     <h2 className="text-gold uppercase tracking-[0.3em] font-bold text-xs mb-6">The Future</h2>
                     <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Beyond the <span className="text-gold-gradient">Horizon</span>.</h3>
                     <p className="text-white/60 text-lg leading-relaxed mb-10">
                        Our journey starts in Manila, but our vision is truly global. We are building the foundational layer for a future where money moves as seamlessly as data, regardless of jurisdiction.
                     </p>
                     <div className="space-y-8">
                        {[
                           { year: "2026", goal: "Primary PH Rail Dominance" },
                           { year: "2027", goal: "SEA Regional Expansion" },
                           { year: "2028", goal: "Direct Global Rail Participation" }
                        ].map((item, i) => (
                           <div key={i} className="flex items-center gap-6 group">
                              <div className="text-2xl font-bold text-white/10 group-hover:text-gold transition-colors">{item.year}</div>
                              <div className="flex-1 h-px bg-white/5" />
                              <div className="text-lg font-medium text-white/40 group-hover:text-white transition-colors">{item.goal}</div>
                           </div>
                        ))}
                     </div>
                  </div>
                  <motion.div
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8 }}
                     className="lg:order-1"
                  >
                     <div className="relative h-[500px] flex items-center justify-center">
                        <Globe className="w-64 h-64 text-gold/10 animate-spin-slow absolute" />
                        <Compass className="w-32 h-32 text-gold animate-pulse relative z-10" />
                        {/* Floating elements */}
                        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-gold rounded-full blur-[2px] animate-ping" />
                        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-gold/50 rounded-full blur-[2px] animate-bounce" />
                     </div>
                  </motion.div>
               </div>
            </SectionWrapper>

            {/* Final CTA */}
            <SectionWrapper className="pb-40">
               <div className="glass-card p-12 md:p-24 rounded-[40px] text-center max-w-6xl mx-auto relative overflow-hidden border-gold/20">
                  <div className="absolute inset-0 bg-gradient-to-b from-gold/10 via-transparent to-transparent pointer-events-none" />
                  <div className="relative z-10">
                     <h2 className="text-4xl md:text-7xl font-bold mb-8">Join the <span className="text-gold-gradient">Journey</span>.</h2>
                     <p className="text-xl text-white/40 mb-12 max-w-2xl mx-auto">
                        Be part of the founding story of institutional-grade financial orchestration in the Philippines.
                     </p>
                     <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <GlassButton onClick={() => window.location.href = '/waitlist'} className="px-12 py-8 text-xl">
                           Join Founding Access <ArrowRight className="w-6 h-6" />
                        </GlassButton>
                        <GlassButton variant="secondary" onClick={() => window.location.href = '/product'} className="px-12 py-8 text-xl">
                           Explore the Engine
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
