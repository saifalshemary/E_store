import React, { Suspense } from 'react';
import Container from '../global/container';
import Logo from './Logo';
import NavSearsh from './NavSearsh';
import CartButton from './CartButton';
import DarkMode from './DarkMode';
import DropDownMenu from './DropDownMenu';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/85 backdrop-blur-md transition-colors duration-200 shadow-xs">
      <Container className="py-2.5 sm:py-4">
        {/* Single Row on All Screen Sizes (Mobile, Tablet, Desktop) */}
        <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-6">
          
          {/* Logo (Left) */}
          <div className="shrink-0">
            <Logo />
          </div>

          {/* Compact Search Bar (Center / Flexible) */}
          <div className="flex-1 min-w-0 max-w-[170px] xs:max-w-[220px] sm:max-w-sm md:max-w-md lg:max-w-lg">
            <Suspense fallback={<div className="h-8 sm:h-9 w-full rounded-md bg-muted animate-pulse" />}>
              <NavSearsh className="h-8 sm:h-9 text-xs sm:text-sm px-2.5 sm:px-3" />
            </Suspense>
          </div>

          {/* Action Buttons (Right) */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <CartButton />
            <DarkMode />
            <DropDownMenu />
          </div>

        </div>
      </Container>
    </header>
  );
}

export default Navbar;