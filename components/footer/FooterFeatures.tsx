import React from 'react';
import Container from '../global/container';
import { Truck, ShieldCheck, Headphones, RotateCcw } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free & Fast Delivery',
    description: 'Free shipping on orders over $50',
  },
  {
    icon: ShieldCheck,
    title: '100% Quality Guarantee',
    description: 'Guaranteed authentic & verified items',
  },
  {
    icon: Headphones,
    title: '24/7 Dedicated Support',
    description: 'Expert customer service anytime',
  },
  {
    icon: RotateCcw,
    title: '30-Day Easy Returns',
    description: 'Hassle-free money-back policy',
  },
];

export default function FooterFeatures() {
  return (
    <div className="border-b bg-card/60 backdrop-blur-xs">
      <Container className="py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group flex items-center gap-4 p-4 rounded-xl border bg-background/50 hover:bg-background hover:shadow-sm hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105 transition-all duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
