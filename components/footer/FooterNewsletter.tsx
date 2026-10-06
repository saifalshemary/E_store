'use client';

import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Sparkles, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function FooterNewsletter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    toast.success('Thank you for subscribing!', {
      description: 'You will receive our latest offers and exclusive deals.',
    });
    setEmail('');
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-1.5">
        <Sparkles className="h-4 w-4 text-primary" />
        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
          Stay Updated
        </h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
      </p>

      <form onSubmit={handleSubscribe} className="space-y-2.5">
        <div className="relative">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="pr-10 bg-background/80 focus-visible:ring-primary h-10"
            required
          />
          <Button
            type="submit"
            size="icon"
            className="absolute right-1 top-1 h-8 w-8 rounded-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all cursor-pointer"
            aria-label="Subscribe"
          >
            <Send className="h-3.5 w-3.5" />
          </Button>
        </div>
        <p className="text-[11px] text-muted-foreground">
          We respect your privacy. No spam ever.
        </p>
      </form>
    </div>
  );
}
