'use client';

import { Globe, Share2, Mail, ArrowUpRight } from 'lucide-react';
import GlassButton from './GlassButton';

const footerLinks = {
  platform: [
    { label: 'Product', href: '/product' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'How it Works', href: '/how-it-works' },
    { label: 'Compliance', href: '/compliance' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Waitlist', href: '/waitlist' },
  ],
  legal: [
    { label: 'Privacy & Terms', href: '/legal' },
    { label: 'Waitlist Terms', href: '/legal' },
    { label: 'Data Handling', href: '/legal' },
    { label: 'Regulatory', href: '/compliance' },
  ]
};

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-32 pb-12 overflow-hidden border-t border-white/5">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-24">
          
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-2 space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center font-bold text-black text-xl">P</div>
              <span className="text-2xl font-bold tracking-tight text-white">PURSIDE</span>
            </div>
            <p className="text-white/30 text-sm max-w-xs leading-relaxed">
              Institutional-grade financial orchestration engine. Built in London, optimized for the Philippines.
            </p>
            <div className="flex gap-4">
              {[Globe, Share2, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/50 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Platform</h4>
            <ul className="space-y-4">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/40 hover:text-gold text-sm transition-colors flex items-center group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/40 hover:text-gold text-sm transition-colors flex items-center group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/40 hover:text-gold text-sm transition-colors flex items-center group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/10 font-bold">
            © 2026 Purside Ltd • Orchestrating the Future
          </p>
          <div className="flex gap-8">
            <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-green-500/5 border border-green-500/10 text-[10px] font-bold text-green-500/60 uppercase tracking-widest">
               <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> All Systems Operational
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/10">
              Region: South East Asia
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
