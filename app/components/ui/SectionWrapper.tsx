'use client';

import { ReactNode, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  animate?: boolean;
}

export default function SectionWrapper({
  children,
  className,
  id,
  animate = true,
}: SectionWrapperProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!animate || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.reveal-up', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [animate]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn('relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden', className)}
    >
      {children}
    </section>
  );
}
