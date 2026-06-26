import React from 'react';

const testimonials = [
  {
    quote: "This platform completely transformed our data pipelines. We're syncing millions of events effortlessly.",
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechFlow",
    url: "techflow.io"
  },
  {
    quote: "The AI-native capabilities allowed us to automate our most complex workflows within days, not months.",
    name: "Marcus Rodriguez",
    role: "Chief Data Officer",
    company: "NexusHealth",
    url: "nexushealth.com"
  },
  {
    quote: "Scaling without limits isn't just a marketing slogan here—it's exactly what this infrastructure delivers.",
    name: "Elena Rostova",
    role: "Lead Architect",
    company: "FinScale",
    url: "finscale.app"
  }
];

function StarRating() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-forsythia" aria-hidden="true">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" aria-label="testimonials" className="w-full max-w-6xl mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <span className="text-forsythia text-xs tracking-[0.2em] font-jetbrains-mono uppercase mb-2 block">TESTIMONIALS</span>
        <h2 className="text-3xl font-bold font-jetbrains-mono text-mystic-mint mb-4">Trusted by Industry Leaders</h2>
        <p className="text-arctic max-w-2xl mx-auto">See how fast-growing companies are leveraging our platform.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-nocturnal border border-oceanic-noir rounded-2xl p-8 flex flex-col hover:border-forsythia/30 transition-colors duration-300">
            <StarRating />
            <blockquote className="mt-6 flex-grow">
              <p className="text-arctic text-lg leading-relaxed font-inter italic">&quot;{t.quote}&quot;</p>
            </blockquote>
            <cite className="mt-8 flex items-center not-italic">
              <div className="w-12 h-12 bg-oceanic-noir rounded-full flex items-center justify-center text-forsythia font-bold font-jetbrains-mono mr-4 flex-shrink-0">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-mystic-mint font-bold">{t.name}</p>
                <p className="text-arctic text-sm">{t.role}</p>
                <a href={`https://${t.url}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-forsythia hover:text-deep-saffron transition-colors mt-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3" aria-hidden="true"><path d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>
                  {t.company}
                </a>
              </div>
            </cite>
          </div>
        ))}
      </div>
    </section>
  );
}
