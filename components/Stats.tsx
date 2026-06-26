'use client';
import React, { useEffect, useRef } from 'react';

// Easing function: easeOutQuart
const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);

interface StatItemProps {
  finalValue: number;
  suffix: string;
  decimals: number;
  label: string;
}

const StatItem = ({ finalValue, suffix, decimals, label }: StatItemProps) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    let startTime: number | null = null;
    let animationFrame: number;
    const duration = 1500;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const currentVal = finalValue * easeOut(progress);
      
      if (node) {
        node.textContent = currentVal.toFixed(decimals) + suffix;
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        if (node) node.textContent = finalValue.toFixed(decimals) + suffix;
      }
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animationFrame = requestAnimationFrame(animate);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [finalValue, suffix, decimals]);

  return (
    <div className="flex flex-col items-center text-center">
      <span 
        ref={nodeRef} 
        className="text-4xl md:text-5xl font-bold font-jetbrains-mono text-forsythia mb-2"
      >
        {(0).toFixed(decimals)}{suffix}
      </span>
      <span className="text-mystic-mint font-inter text-sm md:text-base font-medium">
        {label}
      </span>
    </div>
  );
};

export default function Stats() {
  return (
    <section aria-label="Statistics" className="w-full max-w-6xl mx-auto py-16 px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
        <StatItem finalValue={10} suffix="M+" decimals={0} label="Events per second" />
        <StatItem finalValue={99.99} suffix="%" decimals={2} label="Uptime SLA" />
        <StatItem finalValue={3.2} suffix="ms" decimals={1} label="Avg latency" />
        <StatItem finalValue={500} suffix="+" decimals={0} label="Enterprise clients" />
      </div>
    </section>
  );
}
