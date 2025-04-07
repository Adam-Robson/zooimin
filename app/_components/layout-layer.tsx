'use client';
import React from 'react';
import { ThemeProvider } from '@/_contexts/ThemeProvider';
export default function LayoutLayer({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    return (
        <ThemeProvider>
          <main className='layout-layer'>
              {children}
          </main>
        </ThemeProvider>
    )
}
