import React, { ReactNode } from 'react';
import Navbar from './Header';
import AppFooter from './Footer';
interface LayoutProps {
    children: ReactNode;
  }

export default function Layout({ children }:LayoutProps) {
  return (
    <div >
      <Navbar />
      <main>{children}</main>
      <AppFooter />
    </div>
  );
}
