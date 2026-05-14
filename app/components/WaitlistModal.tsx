'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { useStore } from '../store/useStore';
import GlassButton from './ui/GlassButton';
import { useState } from 'react';

export default function WaitlistModal() {
  const { isWaitlistOpen, closeWaitlist } = useStore();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const data = {
      email: formData.get('email'),
      type: formData.get('type'),
    };

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          closeWaitlist();
          setSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  return (
    <AnimatePresence>
      {isWaitlistOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeWaitlist}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] cursor-pointer"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-[101] px-6"
          >
            <div className="glass-panel p-8 md:p-12 rounded-[32px] border-gold/20 relative overflow-hidden">
              <button 
                onClick={closeWaitlist}
                className="absolute top-6 right-6 text-white/40 hover:text-gold transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {!submitted ? (
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-8">
                    <CheckCircle2 className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white">Join the Exclusive Waitlist</h3>
                  <p className="text-white/60 mb-8 leading-relaxed">
                    Be the first to access our institutional-grade finance engine. Limited founding spots available.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block">Business Email</label>
                      <input 
                        required
                        name="email"
                        type="email" 
                        placeholder="name@company.com" 
                        className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-gold outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block">Business Type</label>
                      <select name="type" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-gold outline-none transition-all text-white/60 appearance-none">
                        <option>Marketplace / Platform</option>
                        <option>Staffing / Outsourcing</option>
                        <option>B2B Agency</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <GlassButton className="w-full mt-4">
                      Request Founding Access <ArrowRight className="w-5 h-5" />
                    </GlassButton>
                  </form>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 relative z-10"
                >
                  <div className="w-20 h-20 rounded-full bg-gold mx-auto flex items-center justify-center mb-8">
                    <CheckCircle2 className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white">Application Received</h3>
                  <p className="text-white/60 leading-relaxed">
                    Thank you for your interest in Purside. Our team will review your application and reach out shortly.
                  </p>
                </motion.div>
              )}

              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
