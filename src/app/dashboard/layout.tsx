import Navbar from '@/components/ThemeBuilder/01-Navbar';
import Sidebar from '@/components/ThemeBuilder/02-Sidebar';
import Footer from '@/components/ThemeBuilder/04-Footer';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className=" bg-[#1c2431]">
        <div className="layout-container">
          <Navbar />
          <Sidebar/>
          <main >{children}</main>
          <Footer/>
        </div>
      </div>

    </>

  );
}
