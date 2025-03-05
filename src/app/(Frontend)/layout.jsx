"use client";

import React from 'react';
import Navbare from '@/components/frontend/Navbare';
import Footer from '@/components/frontend/Footer';

function Layout({ children }) {
  return (
    <div className=''>
      <Navbare />
      <div className='max-w-7xl mx-auto py-6 sm:px-4 px-8 lg:px-0'>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
