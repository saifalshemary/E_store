'use client'

import React, { useState } from 'react'
import { Input } from '../ui/input'
import { useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { links } from '../../utils/links';

import { cn } from '../../lib/utils';

type NavSearshProps = {
  className?: string;
};

function NavSearsh({ className }: NavSearshProps) {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search')?.toString() || '');
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }

    replace(`${links.PRODUCTS.href}?${params.toString()}`);
  }, 300);

  return (
    <Input
      className={cn('w-full max-w-full dark:bg-muted/50 rounded-lg focus-visible:ring-primary', className)}
      type="search"
      placeholder="Search products..."
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
    />
  );
}

export default NavSearsh;