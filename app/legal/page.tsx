'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Shield,
  Lock,
  Scale,
  FileText,
  CheckCircle2,
  ArrowRight,
  Globe,
  Building2,
  ChevronRight,
  Eye,
  Database,
  UserCheck
} from 'lucide-react';

// Components
import SmoothScroll from '../components/SmoothScroll';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import SectionWrapper from '../components/ui/SectionWrapper';
import GlassButton from '../components/ui/GlassButton';

gsap.registerPlugin(ScrollTrigger);

const legalSections = [
  {
    id: 'privacy',
    title: 'Data Handling',
    icon: <Database className="w-6 h-6" />,
    summary: 'Our standards for organizational and transactional data processing.',
    details: [
      'Encryption: All data is encrypted at rest using AES-256 and in transit via TLS 1.3.',
      'Residency: We adhere to regional data residency requirements for our Philippines operations.',
      'Anonymization: Transactional data is anonymized for performance analytics unless required otherwise.',
      'Retention: Personal data is retained only as long as necessary for regulatory compliance.'
    ]
  },
  {
    id: 'consent',
    title: 'Communication Consent',
    icon: <UserCheck className="w-6 h-6" />,
    summary: 'How we manage your contact preferences and outreach.',
    details: [
      'Opt-in Basis: All marketing communication is strictly on an explicit opt-in basis.',
      'Transactional Alerts: Critical system and security alerts are sent to all active users.',
      'Easy Opt-out: Unsubscribe links are included in every non-transactional email.',
      'Third-party sharing: We never sell your contact information to third-party advertisers.'
    ]
  },
  {
    id: 'waitlist',
    title: 'Waitlist Terms',
    icon: <Scale className="w-6 h-6" />,
    summary: 'Rules governing early access and founding membership.',
    details: [
      'Priority: Access is granted based on application date and business fit.',
      'Beta Access: Waitlist members may be invited to test early-stage features.',
      'No Guarantee: Joining the waitlist does not guarantee immediate account approval.',
      'Confidentiality: Early access users may be subject to non-disclosure agreements.'
    ]
  },
  {
    id: 'corporate',
    title: 'Legal Information',
    icon: <Building2 className="w-6 h-6" />,
    summary: 'Corporate structure and regulatory posture.',
    details: [
      'Entity: Purside Ltd is a registered company in the United Kingdom.',
      'Operations: Purside Philippines serves as our primary regional operational hub.',
      'Partnerships: We work exclusively with Tier-1 regulated banking partners.',
      'Disclosures: Full corporate disclosures are available upon verified institutional request.'
    ]
  }
];

export default function LegalPage() {
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
  }, []);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
        <Navbar />

        {/* Hero */}
        <SectionWrapper className="pt-40 pb-20 md:pt-52 md:pb-32 text-center">
          <div className="max-w-4xl mx-auto reveal-up">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Trust & Transparency
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.95]">
              Privacy & <span className="text-gold-gradient italic">Terms</span>.
            </h1>
            <p className="text-lg md:text-2xl text-white/30 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              The legal framework and data protocols that ensure Purside remains the most secure orchestration engine for your business.
            </p>
          </div>
        </SectionWrapper>

        {/* Legal Sections Grid */}
        <SectionWrapper className="pb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 reveal-up">
            {legalSections.map((section, idx) => (
              <div key={section.id} className="glass-card p-10 md:p-14 rounded-[48px] border-white/5 hover:border-gold/20 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-gold/10 transition-colors">
                  <div className="text-6xl font-black italic">0{idx + 1}</div>
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gold mb-10 group-hover:bg-gold group-hover:text-black transition-all duration-500">
                    {section.icon}
                  </div>

                  <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                  <p className="text-white/40 mb-10 max-w-sm">{section.summary}</p>

                  <ul className="space-y-4">
                    {section.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-gold/40 mt-0.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-12 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gold opacity-60 group-hover:opacity-100 transition-all cursor-pointer">
                    Download Full PDF <FileText className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Commitment Banner */}
        <SectionWrapper className="pb-40">
          <div className="glass-card p-12 md:p-20 rounded-[48px] border-gold/10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gold/5 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Our Governance <span className="text-gold-gradient">Promise</span>.</h2>
              <p className="text-xl text-white/30 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                We believe transparency is the foundation of institutional trust. Our legal frameworks are designed to evolve with global regulations while prioritizing your business integrity.
              </p>
              <div className="flex flex-wrap justify-center gap-12 grayscale opacity-30">
                <div className="flex items-center gap-2 font-bold tracking-widest text-xs uppercase">
                  <Shield className="w-5 h-5" /> GDPR Compliant
                </div>
                <div className="flex items-center gap-2 font-bold tracking-widest text-xs uppercase">
                  <Lock className="w-5 h-5" /> AES-256 Standard
                </div>
                <div className="flex items-center gap-2 font-bold tracking-widest text-xs uppercase">
                  <Eye className="w-5 h-5" /> Zero-Trust Access
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
