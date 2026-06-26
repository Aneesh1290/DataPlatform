import { useRef, useEffect } from 'react';
import { Currency, getPriceMatrix } from '@/lib/pricingMatrix';

export function usePriceUpdater() {
  const starterRef = useRef<HTMLSpanElement>(null);
  const proRef = useRef<HTMLSpanElement>(null);
  const enterpriseRef = useRef<HTMLSpanElement>(null);
  const symStarterRef = useRef<HTMLSpanElement>(null);
  const symProRef = useRef<HTMLSpanElement>(null);
  const symEnterpriseRef = useRef<HTMLSpanElement>(null);

  const updatePrices = (currency: Currency, isAnnual: boolean) => {
    const matrix = getPriceMatrix(currency, isAnnual);
    const sym = currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '₹';

    if (starterRef.current) starterRef.current.textContent = matrix.Starter;
    if (proRef.current) proRef.current.textContent = matrix.Pro;
    if (enterpriseRef.current) enterpriseRef.current.textContent = matrix.Enterprise;

    if (symStarterRef.current) symStarterRef.current.textContent = sym;
    if (symProRef.current) symProRef.current.textContent = sym;
    if (symEnterpriseRef.current) symEnterpriseRef.current.textContent = sym;
  };

  return {
    starterRef, proRef, enterpriseRef,
    symStarterRef, symProRef, symEnterpriseRef,
    updatePrices
  };
}
