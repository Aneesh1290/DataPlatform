'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-oceanic-noir border-t border-nocturnal pt-16 pb-8 px-4 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <Link href="/" className="text-2xl font-bold font-jetbrains-mono text-arctic tracking-tight mb-4 inline-block">
            Data<span className="text-forsythia">Platform</span>
          </Link>
          <p className="text-mystic-mint/80 mb-6 text-sm max-w-xs">
            Automate everything. Scale without limits. The AI-native data platform.
          </p>
        </div>
        
        <div>
          <h4 className="text-arctic font-bold font-jetbrains-mono mb-4">Product</h4>
          <nav className="flex flex-col space-y-3 text-sm">
            <Link href="#features" className="text-mystic-mint hover:text-forsythia transition-colors">Features</Link>
            <Link href="#pricing" className="text-mystic-mint hover:text-forsythia transition-colors">Pricing</Link>
          </nav>
        </div>

        <div>
          <h4 className="text-arctic font-bold font-jetbrains-mono mb-4">Company</h4>
          <nav className="flex flex-col space-y-3 text-sm">
            <Link href="#about" className="text-mystic-mint hover:text-forsythia transition-colors">About Us</Link>
            <Link href="#careers" className="text-mystic-mint hover:text-forsythia transition-colors">Careers</Link>
            <Link href="#contact" className="text-mystic-mint hover:text-forsythia transition-colors">Contact</Link>
          </nav>
        </div>

        <div>
          <h4 className="text-arctic font-bold font-jetbrains-mono mb-4">Legal</h4>
          <nav className="flex flex-col space-y-3 text-sm">
            <Link href="#privacy" className="text-mystic-mint hover:text-forsythia transition-colors">Privacy Policy</Link>
            <Link href="#terms" className="text-mystic-mint hover:text-forsythia transition-colors">Terms of Service</Link>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-nocturnal/50 text-sm">
        <p className="text-mystic-mint/60 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} DataPlatform Inc. All rights reserved.
        </p>
        
        <button 
          onClick={() => window.history.back()} 
          className="flex items-center gap-2 text-mystic-mint hover:text-forsythia transition-colors group"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" aria-hidden="true">
            <path d="M15.75 19.5L8.25 12l7.5-7.5"/>
          </svg>
          Go Back
        </button>
      </div>
    </footer>
  );
}
