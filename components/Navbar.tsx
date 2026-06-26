'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0 }
    );
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <>
      {/* Invisible element to observe for scroll */}
      <div ref={observerRef} className="absolute top-0 left-0 w-full h-1 pointer-events-none" />
      
      <header 
        className={`animate-fade-in fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-oceanic-noir/85 backdrop-blur-[16px] border-b border-forsythia/10 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold font-jetbrains-mono text-arctic tracking-tight">
            Data<span className="text-forsythia">Platform</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-mystic-mint hover:text-arctic font-medium transition-colors flex items-center gap-1 group"
              >
                {link.name}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" aria-hidden="true">
                  <path d="m8.25 4.5l7.5 7.5l-7.5 7.5"/>
                </svg>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="#pricing">
              <button className="px-6 py-2.5 rounded-lg bg-forsythia text-nocturnal font-bold hover:bg-deep-saffron transition-colors shadow-sm shadow-forsythia/20">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-arctic p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
                <path d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-20 left-0 w-full bg-oceanic-noir border-b border-nocturnal shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-mystic-mint hover:text-arctic font-medium transition-colors text-lg flex items-center justify-between"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-nocturnal" aria-hidden="true">
                  <path d="m8.25 4.5l7.5 7.5l-7.5 7.5"/>
                </svg>
              </Link>
            ))}
            <div className="pt-4 border-t border-nocturnal">
              <Link href="#pricing" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full px-6 py-3 rounded-lg bg-forsythia text-nocturnal font-bold hover:bg-deep-saffron transition-colors">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
