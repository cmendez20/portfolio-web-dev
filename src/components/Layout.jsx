import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export default function Layout() {
  return (
    <div className="md:max-w-2xl lg:max-w-5xl sm:mx-auto py-8 px-5">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
