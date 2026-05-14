import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import GlassButton from './GlassButton';
import { cn } from '../../lib/utils';

const navLinks = [
  { label: 'Product', href: '/product' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'How it Works', href: '/how-it-works' },
  { label: 'Compliance', href: '/compliance' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Legal', href: '/legal' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] px-4 py-4 md:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between glass-panel px-4 md:px-6 py-3 rounded-full relative z-50">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Purside Logo" className="h-8 w-auto" />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className={cn(
                    "transition-all duration-300 relative py-1",
                    isActive 
                      ? "text-gold font-bold" 
                      : "text-white/60 hover:text-white"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-px bg-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Action & Toggle */}
          <div className="flex items-center gap-2 md:gap-4">
             {pathname !== '/waitlist' && (
               <GlassButton 
                 variant="primary" 
                 className="py-2 px-4 md:px-6 text-[10px] md:text-sm whitespace-nowrap" 
                 onClick={() => window.location.href = '/waitlist'}
               >
                 Join Waitlist
               </GlassButton>
             )}
             
             {/* Mobile Toggle */}
             <button 
               onClick={() => setIsOpen(!isOpen)}
               className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white/70 hover:text-gold transition-colors"
             >
               {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
             </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] bg-[#050505]/95 backdrop-blur-xl lg:hidden pt-32 px-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "text-3xl md:text-5xl font-bold tracking-tighter flex items-center justify-between group",
                      isActive ? "text-gold" : "text-white/40"
                    )}
                  >
                    {link.label}
                    <ArrowRight className={cn(
                      "w-6 h-6 md:w-10 md:h-10 transition-transform duration-500",
                      isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 group-hover:opacity-40 group-hover:translate-x-0"
                    )} />
                  </motion.a>
                );
              })}

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 pt-12 border-t border-white/5"
              >
                <div className="flex flex-col gap-4">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold mb-4">Quick Contact</p>
                  <a href="mailto:hello@purside.com" className="text-xl text-white/60 hover:text-gold transition-colors">hello@purside.com</a>
                  <div className="flex gap-6 mt-4">
                    <span className="text-xs text-white/20">London</span>
                    <span className="text-xs text-white/20">Manila</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[40%] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

