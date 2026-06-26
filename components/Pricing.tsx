'use client';

import React, { useEffect, useRef } from 'react';
import { Currency } from '@/lib/pricingMatrix';
import { usePriceUpdater } from '@/hooks/usePriceUpdater';

export default function Pricing() {
  const {
    starterRef, proRef, enterpriseRef,
    symStarterRef, symProRef, symEnterpriseRef,
    updatePrices
  } = usePriceUpdater();

  const isAnnualRef = useRef(false);
  const currencyRef = useRef<Currency>('USD');

  useEffect(() => {
    updatePrices(currencyRef.current, isAnnualRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBillingToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    isAnnualRef.current = e.target.checked;
    updatePrices(currencyRef.current, isAnnualRef.current);
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    currencyRef.current = e.target.value as Currency;
    updatePrices(currencyRef.current, isAnnualRef.current);
  };

  return (
    <section id="pricing" aria-label="pricing" className="w-full max-w-6xl mx-auto py-16 px-4 font-inter text-arctic">
      <div className="text-center mb-12">
        <span className="text-forsythia text-xs tracking-[0.2em] font-jetbrains-mono uppercase mb-2 block">PRICING</span>
        <h2 className="text-3xl font-bold font-jetbrains-mono text-mystic-mint mb-4">Flexible Plans</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mb-16 gap-6">
        <label className="flex items-center cursor-pointer group">
          <input type="checkbox" className="sr-only peer" onChange={handleBillingToggle} />
          <span className="text-mystic-mint mr-4 font-medium transition-colors peer-checked:text-opacity-70">Monthly</span>
          <div className="relative w-14 h-8 bg-nocturnal border border-oceanic-noir rounded-full peer-checked:bg-oceanic-noir transition-colors duration-300">
            <div className="absolute left-1 top-1 w-6 h-6 bg-forsythia rounded-full transition-transform duration-300 peer-checked:translate-x-6 shadow-md"></div>
          </div>
          <span className="text-mystic-mint ml-4 font-medium transition-colors group-hover:text-arctic">Annual</span>
          <span className="ml-3 px-3 py-1 text-xs font-bold text-nocturnal bg-forsythia rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-300 shadow-sm shadow-forsythia/20">
            Save 20%
          </span>
        </label>

        <div>
          <select
            onChange={handleCurrencyChange}
            defaultValue="USD"
            className="bg-nocturnal border border-oceanic-noir text-arctic font-medium rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-forsythia focus:border-transparent transition-all shadow-sm cursor-pointer"
          >
            <option value="USD">USD $</option>
            <option value="EUR">EUR €</option>
            <option value="INR">INR ₹</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Starter Tier */}
        <div className="rounded-2xl p-8 flex flex-col glow-card">
          <h3 className="text-2xl font-bold font-jetbrains-mono mb-4 text-mystic-mint">Starter</h3>
          <div className="mb-6 flex items-end">
            <span className="text-4xl font-bold font-jetbrains-mono">
              <span ref={symStarterRef}></span><span ref={starterRef}></span>
            </span>
            <span className="text-mystic-mint ml-2 mb-1">/mo</span>
          </div>
          <p className="text-mystic-mint mb-8 flex-grow leading-relaxed text-sm">Essential features for small teams starting their journey.</p>
          <button className="w-full py-3 rounded-lg bg-oceanic-noir text-arctic font-medium hover:bg-opacity-80 transition-all border border-transparent hover:border-mystic-mint/20">
            Get Started
          </button>
        </div>

        {/* Pro Tier */}
        <div className="relative transform md:-translate-y-4 flex flex-col">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-forsythia text-nocturnal px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase z-20 shadow-md">
            Most Popular
          </div>
          <div className="animated-border rounded-2xl p-8 flex flex-col flex-grow shadow-lg shadow-forsythia/10">
            <div className="inner-bg"></div>
            <h3 className="text-2xl font-bold font-jetbrains-mono mb-4 text-forsythia">Pro</h3>
            <div className="mb-6 flex items-end">
              <span className="text-4xl font-bold font-jetbrains-mono">
                <span ref={symProRef}></span><span ref={proRef}></span>
              </span>
              <span className="text-mystic-mint ml-2 mb-1">/mo</span>
            </div>
            <p className="text-mystic-mint mb-8 flex-grow leading-relaxed text-sm">Advanced tools and priority support for growing businesses.</p>
            <button className="w-full py-3 rounded-lg bg-forsythia text-nocturnal font-bold hover:bg-deep-saffron transition-colors shadow-md shadow-forsythia/20">
              Start Free Trial
            </button>
          </div>
        </div>

        {/* Enterprise Tier */}
        <div className="rounded-2xl p-8 flex flex-col glow-card">
          <h3 className="text-2xl font-bold font-jetbrains-mono mb-4 text-mystic-mint">Enterprise</h3>
          <div className="mb-6 flex items-end">
            <span className="text-4xl font-bold font-jetbrains-mono">
              <span ref={symEnterpriseRef}></span><span ref={enterpriseRef}></span>
            </span>
            <span className="text-mystic-mint ml-2 mb-1">/mo</span>
          </div>
          <p className="text-mystic-mint mb-8 flex-grow leading-relaxed text-sm">Custom solutions, dedicated account manager, and SLA.</p>
          <button className="w-full py-3 rounded-lg bg-oceanic-noir text-arctic font-medium hover:bg-opacity-80 transition-all border border-transparent hover:border-mystic-mint/20">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
