import React from 'react';
import Link from 'next/link';

type FooterLinkItem = {
  name: string;
  href: string;
};

type FooterLinksProps = {
  title: string;
  links: FooterLinkItem[];
};

export default function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <nav aria-label={title} className="space-y-3">
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="space-y-2 text-sm">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
