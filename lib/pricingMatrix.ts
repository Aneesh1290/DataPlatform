export type Tier = 'Starter' | 'Pro' | 'Enterprise';
export type Currency = 'USD' | 'EUR' | 'INR';
export type BillingCycle = 'Monthly' | 'Annual';

export interface PricingData {
  tier: Tier;
  baseRate: number;
}

export const BASE_RATES: Record<Tier, number> = {
  Starter: 29,
  Pro: 79,
  Enterprise: 199,
};

export const CURRENCY_MULTIPLIERS: Record<Currency, number> = {
  USD: 1.0,
  EUR: 0.92,
  INR: 83.5,
};

export const ANNUAL_DISCOUNT = 0.8;

export function getPriceMatrix(currency: Currency, isAnnual: boolean): Record<Tier, string> {
  const matrix: Partial<Record<Tier, string>> = {};
  
  for (const [tier, baseRate] of Object.entries(BASE_RATES)) {
    const tariff = CURRENCY_MULTIPLIERS[currency];
    const discount = isAnnual ? ANNUAL_DISCOUNT : 1;
    const finalPrice = baseRate * tariff * discount;
    matrix[tier as Tier] = finalPrice.toFixed(2);
  }
  
  return matrix as Record<Tier, string>;
}
