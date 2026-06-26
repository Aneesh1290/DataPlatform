'use client';

import React, { useEffect, useRef } from 'react';

const features = [
  {
    title: "Analytics",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" /><path d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" /></svg>,
    desc: "Gain deep insights into your user behavior with real-time analytics and custom dashboards that make data actionable instantly."
  },
  {
    title: "Automation",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93c.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204c.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78c-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107c-.397.165-.71-.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93c-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204c-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78c.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107c.397-.165.71-.505.78-.929l.15-.894Z" /><path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" /></svg>,
    desc: "Streamline workflows by connecting your favorite tools. Set up rules and let the platform do the heavy lifting automatically."
  },
  {
    title: "Integrations",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037a.75.75 0 0 1-.646 1.353a5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353a5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037a.75.75 0 0 1-.354-1Z" clipRule="evenodd" /></svg>,
    desc: "Connect seamlessly with over 100+ third-party applications in one click."
  },
  {
    title: "Search",
    icon: <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" /></svg>,
    desc: "Find anything instantly with our AI-powered semantic search capabilities."
  },
  {
    title: "Infrastructure",
    icon: <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z" /></svg>,
    desc: "Enterprise-grade reliability and security built-in from the ground up."
  },
  {
    title: "Performance",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>,
    desc: "Lightning fast load times across the globe, optimizing conversion rates."
  }
];

export default function Features() {
  const hoverIndexRef = useRef<number>(-1);
  const activeIndexRef = useRef<number>(-1);
  const bodiesRef = useRef<(HTMLDivElement | null)[]>([]);
  const chevronsRef = useRef<(HTMLDivElement | null)[]>([]);

  const openAccordion = (index: number) => {
    const body = bodiesRef.current[index];
    const chevron = chevronsRef.current[index];
    if (body) {
      body.style.maxHeight = body.scrollHeight + 'px';
      body.style.opacity = '1';
    }
    if (chevron) {
      chevron.style.transform = 'rotate(180deg)';
    }
    activeIndexRef.current = index;
  };

  const closeAccordion = (index: number) => {
    const body = bodiesRef.current[index];
    const chevron = chevronsRef.current[index];
    if (body) {
      body.style.maxHeight = '0px';
      body.style.opacity = '0';
    }
    if (chevron) {
      chevron.style.transform = 'rotate(0deg)';
    }
  };

  const toggleAccordion = (index: number) => {
    // Only toggle on mobile
    if (window.innerWidth >= 768) return;

    if (activeIndexRef.current === index) {
      closeAccordion(index);
      activeIndexRef.current = -1;
    } else {
      if (activeIndexRef.current !== -1) {
        closeAccordion(activeIndexRef.current);
      }
      openAccordion(index);
    }
  };

  useEffect(() => {
    let isMobile = window.innerWidth < 768;

    const handleResize = () => {
      const currentlyMobile = window.innerWidth < 768;

      if (currentlyMobile && !isMobile) {
        // Desktop -> Mobile
        if (hoverIndexRef.current !== -1) {
          if (activeIndexRef.current !== -1 && activeIndexRef.current !== hoverIndexRef.current) {
            closeAccordion(activeIndexRef.current);
          }
          // We need to wait for DOM to apply mobile CSS (where height is transitionable) 
          // before setting max-height, but since we use inline styles it should be fine.
          openAccordion(hoverIndexRef.current);
        } else if (activeIndexRef.current !== -1) {
          // If something was already active, ensure it stays open correctly
          openAccordion(activeIndexRef.current);
        }
      } else if (!currentlyMobile && isMobile) {
        // Mobile -> Desktop
        // Remove inline styles to let desktop CSS take over cleanly
        bodiesRef.current.forEach(body => {
          if (body) {
            body.style.maxHeight = '';
            body.style.opacity = '';
          }
        });
        chevronsRef.current.forEach(chevron => {
          if (chevron) {
            chevron.style.transform = '';
          }
        });
      }

      isMobile = currentlyMobile;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="features" className="w-full max-w-6xl mx-auto py-16 px-4">
      <div className="mb-12 text-center">
        <span className="text-forsythia text-xs tracking-[0.2em] font-jetbrains-mono uppercase mb-2 block">FEATURES</span>
        <h2 className="text-3xl font-bold font-jetbrains-mono text-mystic-mint mb-4">Powerful Features</h2>
        <p className="text-arctic max-w-2xl mx-auto">Everything you need to scale your business, securely and reliably.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const isLarge = index === 0 || index === 1;
          return (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden glow-card
                ${isLarge ? 'md:col-span-2' : 'md:col-span-1'}
              `}
              onMouseEnter={() => { hoverIndexRef.current = index; }}
              onMouseLeave={() => { if (hoverIndexRef.current === index) hoverIndexRef.current = -1; }}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left md:cursor-default"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center gap-4">
                  <div className="text-forsythia w-7 h-7 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold font-jetbrains-mono text-mystic-mint">{feature.title}</h3>
                </div>
                <div
                  className="text-arctic md:hidden w-5 h-5 flex-shrink-0 transition-transform duration-300 ease-in-out"
                  ref={(el) => { chevronsRef.current[index] = el; }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="m19.5 8.25l-7.5 7.5l-7.5-7.5" />
                  </svg>
                </div>
              </button>
              <div
                className="overflow-hidden transition-opacity duration-300 ease-in-out md:!max-h-none md:!opacity-100"
                style={{ maxHeight: '0px', opacity: 0 }}
                ref={(el) => { bodiesRef.current[index] = el; }}
              >
                <p className="text-mystic-mint text-sm leading-relaxed px-6 pb-6 pt-0 md:pt-2">
                  {feature.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
