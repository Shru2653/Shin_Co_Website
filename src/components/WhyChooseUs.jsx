import React from 'react';
import { Sparkles, ShieldCheck, Users, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: <Sparkles className="h-8 w-8 text-accent-project-m mb-s" />,
    title: 'Innovation First',
    desc: 'We build with the latest tech and bold ideas to keep you ahead.'
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent-project-r mb-s" />,
    title: 'Trust & Security',
    desc: 'Your data and privacy are always protected with industry best practices.'
  },
  {
    icon: <Users className="h-8 w-8 text-brand-secondary mb-s" />,
    title: 'Human-Centered',
    desc: 'Everything we do is designed for real people and real needs.'
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-brand-primary mb-s" />,
    title: 'Proven Growth',
    desc: 'Our solutions drive measurable results for businesses and communities.'
  }
];

const WhyChooseUs = () => (
  <section className="py-xxxl bg-neutral-background-subtle">
    <div className="max-w-container mx-auto px-l">
      <div className="text-center mb-xxl">
        <h2 className="text-h1 text-brand-primary mb-m">Why Choose Us?</h2>
        <p className="text-body-large text-brand-secondary max-w-2xl mx-auto">
          Discover what makes The Shinnovation Co the right partner for your future.
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-xxl">
        {values.map((v, i) => (
          <div key={i} className="bg-white rounded-large shadow-standard p-xl flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-lifted">
            {v.icon}
            <h3 className="text-h3 font-semibold mb-s">{v.title}</h3>
            <p className="text-body text-brand-secondary">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
