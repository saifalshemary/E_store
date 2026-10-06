import React from 'react';
import Container from '../global/container';

export default function FooterBottom() {
  return (
    <div className="border-t">
      <Container className="flex items-center justify-center py-5 text-xs text-muted-foreground">
        <p className="text-center">© {new Date().getFullYear()} E-Store. All rights reserved.</p>
      </Container>
    </div>
  );
}
