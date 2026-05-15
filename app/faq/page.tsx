'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  Plus,
  Minus,
  Search,
  HelpCircle,
  Zap,
  ShieldCheck,
  Building2,
  Globe,
  Clock,
  ChevronRight,
  MessageCircle
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

const faqCategories = [
  { id: 'product', label: 'Product & Availability', icon: <Zap className="w-4 h-4" /> },
  { id: 'target', label: 'Target Customers', icon: <Globe className="w-4 h-4" /> },
  { id: 'banking', label: 'Banking & Security', icon: <Building2 className="w-4 h-4" /> },
  { id: 'compliance', label: 'Compliance', icon: <ShieldCheck className="w-4 h-4" /> },
  { id: 'timeline', label: 'Timeline & Waitlist', icon: <Clock className="w-4 h-4" /> },
];

const faqs = [
  {
    category: 'product',
    q: "In which markets is Purside currently available?",
    a: "Purside is currently focused on the Philippines market, with specialized domestic rail integrations (InstaPay, PesoNet). We are planning regional expansion into Southeast Asia in 2027."
  },
  {
    category: 'product',
    q: "Is Purside a bank?",
    a: "No, Purside is a financial orchestration engine. We sit between your business logic and our regulated bank partners who provide fund custody and settlement."
  },
  {
    category: 'target',
    q: "Who is Purside built for?",
    a: "Purside is designed for high-growth businesses moving money at scale. This includes global payroll providers, marketplace platforms, staffing agencies, BPOs, and digital-first enterprises."
  },
  {
    category: 'banking',
    q: "Where are client funds held?",
    a: "All client funds are held in segregated, protected accounts at our Tier-1 regulated bank partners. Purside never touches the funds directly; we only provide the orchestration logic."
  },
  {
    category: 'security',
    q: "What security standards do you follow?",
    a: "We implement institutional-grade security, including AES-256 encryption, multi-factor authentication (MFA), and cryptographically signed audit logs for every transaction."
  },
  {
    category: 'compliance',
    q: "How do you handle AML and Sanctions screening?",
    a: "Every transaction is automatically screened against global watchlists (OFAC, UN, EU, etc.) in real-time. We also provide automated KYC/KYB workflows for beneficiary onboarding."
  },
  {
    category: 'timeline',
    q: "When will Purside be publicly available?",
    a: "We are currently in a limited 'Founding Member' access phase. Our wider Beta release is scheduled for Q3 2026, with a full public launch following in early 2027."
  },
  {
    category: 'timeline',
    q: "How does the waitlist work?",
    a: "Applying for early access puts you in our priority queue. Our team reviews applications based on payout volume and technical requirements to ensure a perfect fit for the platform."
  }
];

export default function FAQPage() {
  const { openWaitlist } = useStore();
  const [activeCategory, setActiveCategory] = useState('product');
  const [openItems, setOpenItems] = useState<number[]>([]);

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

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const filteredFaqs = faqs.filter(f => f.category === activeCategory || activeCategory === 'all');

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
        <WaitlistModal />

        <Navbar />

        {/* Hero */}
        <SectionWrapper className="pt-40 pb-10 md:pt-52 md:pb-20 text-center relative">
          <div className="max-w-4xl mx-auto reveal-up">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Knowledge Base
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.95]">
              Common <span className="text-gold-gradient italic">Queries</span>.
            </h1>
            <p className="text-lg md:text-2xl text-white/30 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Clear answers for institutional partners and developers. Everything you need to know about the Purside engine.
            </p>
          </div>
        </SectionWrapper>

        {/* FAQ Layout */}
        <SectionWrapper id="faq" className="pb-40">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">

            {/* Category Sidebar */}
            <div className="lg:sticky lg:top-32 space-y-2 reveal-up">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-6 px-4">Categories</p>
              <button
                onClick={() => setActiveCategory('all')}
                className={cn(
                  "w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all text-sm font-medium",
                  activeCategory === 'all' ? "bg-gold text-black shadow-[0_0_20px_rgba(212,175,55,0.2)]" : "text-white/40 hover:bg-white/5"
                )}
              >
                All Questions
                <ChevronRight className={cn("w-4 h-4", activeCategory === 'all' ? "text-black" : "text-white/10")} />
              </button>
              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all text-sm font-medium",
                    activeCategory === cat.id ? "bg-white/10 text-gold border border-gold/20" : "text-white/40 hover:bg-white/5 border border-transparent"
                  )}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              ))}
            </div>

            {/* FAQ Accordion List */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3 space-y-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredFaqs.map((faq, index) => {
                  const isOpen = openItems.includes(index);
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      key={faq.q}
                      className={cn(
                        "glass-card rounded-[32px] border-white/5 overflow-hidden transition-all duration-500",
                        isOpen ? "border-gold/20 bg-gold/[0.02]" : "hover:border-white/10"
                      )}
                    >
                      <button
                        onClick={() => toggleItem(index)}
                        className="w-full flex items-center justify-between p-8 md:p-10 text-left"
                      >
                        <span className={cn("text-lg md:text-xl font-bold transition-colors", isOpen ? "text-gold" : "text-white/80")}>
                          {faq.q}
                        </span>
                        <div className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500",
                          isOpen ? "border-gold/50 bg-gold/10 text-gold rotate-180" : "border-white/10 text-white/20"
                        )}>
                          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                        </div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "circOut" }}
                          >
                            <div className="px-8 md:px-10 pb-10">
                              <div className="h-px w-full bg-white/5 mb-8" />
                              <p className="text-white/40 text-lg leading-relaxed font-light">
                                {faq.a}
                              </p>
                              <div className="mt-8 flex gap-4">
                                <GlassButton variant="secondary" className="py-2 px-6 text-xs" onClick={openWaitlist}>
                                  Still have questions?
                                </GlassButton>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {filteredFaqs.length === 0 && (
                <div className="text-center py-20 glass-card rounded-[40px] border-dashed border-white/10">
                  <HelpCircle className="w-12 h-12 text-white/10 mx-auto mb-4" />
                  <p className="text-white/40">No questions found in this category.</p>
                </div>
              )}
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Still need help? */}
        <SectionWrapper className="pb-40">
          <div className="glass-card p-12 md:p-24 rounded-[40px] text-center max-w-6xl mx-auto relative overflow-hidden border-gold/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10">
              <MessageCircle className="w-16 h-16 text-gold mx-auto mb-8" />
              <h2 className="text-4xl md:text-7xl font-bold mb-8">Can't find an <span className="text-gold-gradient">answer</span>?</h2>
              <p className="text-xl text-white/30 mb-12 max-w-2xl mx-auto">
                Our team is happy to answer any specific technical or regulatory questions about your use case.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <GlassButton onClick={() => window.location.href = '/waitlist'} className="px-12 py-8 text-xl">
                  Talk to an Expert <ArrowRight className="ml-2 w-6 h-6" />
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
