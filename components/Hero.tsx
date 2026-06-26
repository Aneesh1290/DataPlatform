'use client';

import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; vx: number; vy: number; radius: number; color: string }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      // Adjust particle count based on screen size
      const numParticles = Math.floor((canvas.width * canvas.height) / 12000);
      const colors = ['#FFC801', '#FF9932'];
      
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.5 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges gracefully
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.5;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - (distance / 100)) * 0.3; // subtle lines
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section aria-label="hero" className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Canvas Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center">
        {/* Glow orbs */}
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-forsythia/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-[300px] h-[300px] bg-deep-saffron/15 rounded-full blur-[120px] pointer-events-none z-0"></div>

        {/* Stat Badge */}
        <div className="animate-fade-in-up [animation-delay:0ms] inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-nocturnal border border-oceanic-noir text-mystic-mint text-sm font-medium mb-8">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-forsythia" aria-hidden="true">
            <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"/>
          </svg>
          Syncs 10M+ events/sec
        </div>

        {/* Headline */}
        <h1 
          className="animate-fade-in-up [animation-delay:0ms] font-jetbrains-mono font-bold leading-[1.1] mb-6 tracking-[-0.03em] relative z-10"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}
        >
          <span className="text-forsythia">Automate</span> <span className="text-arctic">Everything.</span><br className="hidden md:block" /> <span className="text-arctic">Scale Without Limits.</span>
        </h1>

        {/* Subtext */}
        <p className="animate-fade-in-up [animation-delay:50ms] font-inter text-mystic-mint text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          The AI-native data platform that turns complex workflows into competitive advantage.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up [animation-delay:100ms] flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a href="#pricing" className="w-full sm:w-auto">
            <button className="w-full px-8 py-4 rounded-lg bg-forsythia text-oceanic-noir font-bold transition-all duration-150 ease-out hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,200,1,0.4)]">
              Start Free Trial
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
