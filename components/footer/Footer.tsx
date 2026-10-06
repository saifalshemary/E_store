import React from 'react';
import Container from '../global/container';
import { links } from '../../utils/links';

import FooterBrand from './FooterBrand';
import FooterLinks from './FooterLinks';
import FooterBottom from './FooterBottom';

const quickLinks = [
  { name: 'Home', href: links.HOME.href },
  { name: 'All Products', href: links.PRODUCTS.href },
  { name: 'Shopping Cart', href: links.CART.href },
  { name: 'Wishlist & Favorites', href: links.FAVORITES.href },
  { name: 'About Our Store', href: links.ABOUT.href },
  { name: 'My Orders', href: links.ORDERS.href },
];

const customerServiceLinks = [
  { name: 'Order Tracking', href: '/orders' },
  { name: 'Shipping & Delivery', href: '/about' },
  { name: 'Returns & Refunds', href: '/about' },
  { name: 'Privacy Policy', href: '/about' },
  { name: 'Terms of Service', href: '/about' },
  { name: 'Help & FAQs', href: '/about' },
];

function Footer() {
  return (
    <footer className="mt-20 border-t text-foreground">
      <Container className="py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FooterBrand />
          <FooterLinks title="Quick Links" links={quickLinks} />
          <FooterLinks title="Customer Care" links={customerServiceLinks} />
        </div>
      </Container>

      <FooterBottom />
    </footer>
  );
}

export default Footer;
