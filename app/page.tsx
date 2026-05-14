'use client';

import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Globe,
  Zap,
  Layers,
  BarChart3,
  Clock,
  Lock,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Import styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Components
import SmoothScroll from './components/SmoothScroll';
import GlassButton from './components/ui/GlassButton';
import SectionWrapper from './components/ui/SectionWrapper';
import Footer from './components/ui/Footer';
import Navbar from './components/ui/Navbar';
import WaitlistModal from './components/WaitlistModal';
import { useStore } from './store/useStore';
import { cn } from './lib/utils';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { openWaitlist } = useStore();
  const heroRef = useRef(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    // Reveal animations for all sections
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

    // Parallax images
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
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#D4AF37]/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#D4AF37]/3 blur-[150px] rounded-full" />
        </div>

        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <SectionWrapper className="pt-40 pb-20 md:pt-52 md:pb-32 flex flex-col items-center text-center">
          <motion.div style={{ opacity, scale }} className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-gold/20 mb-8 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-xs font-bold tracking-widest uppercase text-gold">Modern Financial Infrastructure</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
              The Finance <span className="text-gold-gradient">Operations</span> Engine
            </h1>

            <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              Orchestrate global business payments with programmable logic, real-time audit trails, and embedded compliance. Move money at scale, without the manual friction.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 reveal-up">
              <GlassButton onClick={() => window.location.href = '/waitlist'} className="w-full sm:w-auto text-lg px-12 py-6">
                Join the Exclusive Waitlist <ArrowRight className="w-5 h-5" />
              </GlassButton>
              <GlassButton
                variant="secondary"
                className="w-full sm:w-auto text-lg px-12 py-6"
                onClick={() => window.location.href = '/product'}
              >
                See How it Works
              </GlassButton>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <div className="mt-20 w-full max-w-6xl mx-auto relative px-4">
            <div className="glass-card rounded-2xl overflow-hidden aspect-video relative group border-white/10 shadow-2xl">
              <img
                src="/vision.png"
                alt="Purside Dashboard Preview"
                className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

              {/* Overlay elements for "Live" feel */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gold/20 backdrop-blur-xl border border-gold/40 flex items-center justify-center cursor-pointer group/play">
                  <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center transition-transform group-hover/play:scale-110">
                    <Zap className="w-8 h-8 text-black fill-black" />
                  </div>
                </div>
                <span className="mt-4 font-semibold tracking-wide text-gold">WATCH PRODUCT VISION</span>
              </div>
            </div>

            {/* Floating UI Elements */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -left-10 top-1/4 glass-panel p-4 rounded-xl hidden lg:block border-gold/20"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-xs text-white/50">Batch Payment Success</p>
                  <p className="text-sm font-bold">$124,500.00</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute -right-10 bottom-1/4 glass-panel p-4 rounded-xl hidden lg:block border-gold/20"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-white/50">Smart Routing Active</p>
                  <p className="text-sm font-bold">UK â†” PH Rail</p>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Trust Strip */}
        <div className="py-12 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-gold" />
              <span className="font-bold tracking-widest text-xs uppercase">Regulated Bank Partner</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-gold" />
              <span className="font-bold tracking-widest text-xs uppercase">Built for Global Payouts</span>
            </div>
            <div className="flex items-center gap-3">
              <Lock className="w-6 h-6 text-gold" />
              <span className="font-bold tracking-widest text-xs uppercase">Compliance-First</span>
            </div>
            <div className="flex items-center gap-3">
              <Layers className="w-6 h-6 text-gold" />
              <span className="font-bold tracking-widest text-xs uppercase">B2B Financial Ops</span>
            </div>
          </div>
        </div>

        {/* Problem Section */}
        <SectionWrapper id="problem" className="bg-[#080808]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="reveal-up">
              <h2 className="text-gold uppercase tracking-[0.3em] font-bold text-sm mb-6">The Friction</h2>
              <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Manual Payouts are <span className="italic text-white/40">Killing</span> Your Growth.</h3>
              <p className="text-lg text-white/60 mb-10 leading-relaxed">
                Fragmented workflows, spreadsheet errors, lack of visibility, and manual reconciliation. Most businesses are moving money with 20th-century tools in a 21st-century economy.
              </p>

              <ul className="space-y-6">
                {[
                  "Disconnected payment rails and banks",
                  "Manual beneficiary management & verification",
                  "Zero visibility into FX fees and routing",
                  "Expensive operational risk and human error"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <X className="w-6 h-6 text-red-500/50 mt-1" />
                    <span className="text-white/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gold/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="glass-card p-8 rounded-3xl relative border-white/5">
                <div className="space-y-6">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="h-16 w-full rounded-xl bg-white/5 animate-pulse flex items-center px-6 gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/5" />
                      <div className="h-2 w-1/3 bg-white/10 rounded" />
                      <div className="h-2 w-1/4 bg-white/5 rounded ml-auto" />
                    </div>
                  ))}
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-xs text-white/30 text-center uppercase tracking-widest">Typical Fragmented Workflow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Solution Section */}
        <SectionWrapper id="solution" className="text-center">
          <div className="reveal-up mb-20">
            <h2 className="text-gold uppercase tracking-[0.3em] font-bold text-sm mb-6">The Solution</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight max-w-4xl mx-auto">Your Orchestration <span className="text-gold-gradient">Layer</span> for Global Payments.</h3>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Purside sits above your payment rails, bringing intelligence, compliance, and automation to every transaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Programmable Logic",
                desc: "Define complex payout rules, conditional releases, and multi-step approvals."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Intelligent Routing",
                desc: "Smart path-finding to reduce costs, increase speed, and guarantee delivery."
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Embedded Compliance",
                desc: "Automated KYB, AML, and auditing built directly into your transaction flow."
              }
            ].map((feature, i) => (
              <div key={i} className="glass-card p-10 rounded-3xl text-left hover:border-gold/30 group">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500">
                  {feature.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
                <p className="text-white/60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Autopilot Section */}
        <SectionWrapper id="autopilot" className="bg-[#0A0A0A] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-l from-gold/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="glass-card aspect-square rounded-3xl overflow-hidden relative group">
                <img
                  src="/dashboard.png"
                  alt="Purside Autopilot"
                  className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border border-gold/50 flex items-center justify-center animate-spin-slow">
                    <div className="w-24 h-24 rounded-full border border-gold flex items-center justify-center">
                      <Zap className="w-10 h-10 text-gold" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 reveal-up">
              <h2 className="text-gold uppercase tracking-[0.3em] font-bold text-sm mb-6">Purside Autopilot</h2>
              <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Finance Operations on <span className="text-gold-gradient">Autopilot</span>.</h3>
              <p className="text-lg text-white/60 mb-10 leading-relaxed">
                Intelligent workflow automation that handles the heavy lifting. Routing, retry logic, reconciliation, and exception managementâ€”all handled by our smart engine.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Smart Routing", sub: "Automatic selection of the most efficient rail." },
                  { title: "Exception Handling", sub: "AI-driven retry logic for failed payments." },
                  { title: "Auto-Reconciliation", sub: "Matches every transaction to your ledgers." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="font-bold text-white">{item.title}</p>
                      <p className="text-sm text-white/50">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <GlassButton onClick={openWaitlist} className="mt-12">
                Experience Autopilot <ArrowRight className="w-5 h-5" />
              </GlassButton>
            </div>
          </div>
        </SectionWrapper>

        {/* Use Cases (Swiper) */}
        <SectionWrapper id="use-cases">
          <div className="text-center mb-16 reveal-up">
            <h2 className="text-gold uppercase tracking-[0.3em] font-bold text-sm mb-6">Designed For</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8">Built for Scale.</h3>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {[
              "Payroll-Heavy Businesses",
              "Marketplaces & Platforms",
              "Staffing & Recruitment",
              "Agencies & Outsourcing",
              "Project-Based Teams",
              "B2B Vendors"
            ].map((useCase, i) => (
              <SwiperSlide key={i}>
                <div className="glass-card p-10 rounded-3xl h-[400px] flex flex-col justify-between border-white/5 hover:border-gold/20 transition-all">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8">
                      <Globe className="w-6 h-6 text-gold/60" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4">{useCase}</h4>
                    <p className="text-white/40 leading-relaxed">
                      Streamline complex disbursements, automate tax compliance, and provide real-time payout transparency to your stakeholders.
                    </p>
                  </div>
                  <div className="text-gold flex items-center gap-2 font-semibold cursor-pointer group">
                    Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </SectionWrapper>

        {/* How it Works */}
        <SectionWrapper id="how-it-works" className="bg-[#080808]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20 reveal-up">
              <h2 className="text-gold uppercase tracking-[0.3em] font-bold text-sm mb-6">Step by Step</h2>
              <h3 className="text-4xl md:text-6xl font-bold mb-8">Setup in <span className="text-gold-gradient">Minutes</span>.</h3>
            </div>

            <div className="space-y-24 relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2 hidden md:block" />

              {[
                { step: "01", title: "Create Your Treasury Account", desc: "Access local and international payment rails through a unified infrastructure layer." },
                { step: "02", title: "Define Your Logic", desc: "Use our visual builder to set up rules, approvals, and automation workflows." },
                { step: "03", title: "Go Live & Automate", desc: "Start moving money with full confidence, visibility, and total autopilot control." }
              ].map((item, i) => (
                <div key={i} className={cn("relative flex flex-col md:flex-row items-center gap-12 reveal-up", i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse")}>
                  <div className="flex-1 text-center md:text-left">
                    <div className="text-6xl font-black text-white/5 mb-4">{item.step}</div>
                    <h4 className="text-3xl font-bold mb-4">{item.title}</h4>
                    <p className="text-white/50 leading-relaxed">{item.desc}</p>
                  </div>

                  <div className="z-10 w-20 h-20 rounded-full bg-[#050505] border-2 border-gold/30 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold">
                      {item.step}
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Waitlist Section */}
        <SectionWrapper className="relative">
          <div className="glass-card p-12 md:p-24 rounded-[40px] text-center max-w-6xl mx-auto relative overflow-hidden border-gold/20">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-gold uppercase tracking-[0.3em] font-bold text-sm mb-6">Exclusive Access</h2>
              <h3 className="text-4xl md:text-7xl font-bold mb-8">Join the Founding <span className="text-gold-gradient">Access</span>.</h3>
              <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                Be among the first to experience the future of finance operations. Exclusive benefits for founding waitlist members.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="w-full px-6 py-4 rounded-full bg-white/5 border border-white/10 focus:border-gold outline-none transition-all"
                />
                <GlassButton className="w-full md:w-auto whitespace-nowrap">
                  Join Waitlist
                </GlassButton>
              </div>

              <p className="mt-8 text-white/40 text-sm">
                Limited spots available. Secure your place in the queue.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* FAQ Section */}
        <SectionWrapper className="bg-[#050505]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16 reveal-up">
              <h2 className="text-gold uppercase tracking-[0.3em] font-bold text-sm mb-6">Common Questions</h2>
              <h3 className="text-4xl font-bold">Everything You Need to <span className="text-gold-gradient">Know</span>.</h3>
            </div>

            <div className="space-y-4">
              {[
                { q: "Is Purside a bank?", a: "No, Purside is a finance operations engine. We partner with regulated banks to provide underlying financial services while we provide the orchestration and automation layer." },
                { q: "When will the product launch in the Philippines?", a: "We are currently in the final stages of development and regulatory alignment. Join the waitlist to receive immediate updates on our beta launch." },
                { q: "Who is this product for?", a: "Purside is built for businesses that move money at scale, including payroll-heavy organizations, marketplaces, staffing firms, and B2B agencies." },
                { q: "How secure is Purside?", a: "Security and compliance are at our core. We use bank-grade encryption and follow institutional-level compliance protocols in Philippines." }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="glass-card p-6 rounded-2xl group cursor-pointer hover:border-gold/20"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-lg">{item.q}</p>
                    <ChevronDown className={cn("w-5 h-5 text-gold transition-transform duration-300", openFaq === i ? "rotate-180" : "group-hover:rotate-180")} />
                  </div>
                  <div className={cn("mt-4 overflow-hidden transition-all duration-500", openFaq === i ? "max-h-40" : "max-h-0 group-hover:max-h-40")}>
                    <p className="text-white/60 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
