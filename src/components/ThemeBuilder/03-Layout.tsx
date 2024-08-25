import React, { ReactNode } from 'react';
import Navbar from './01-Navbar/01-Navbar';
import Sidebar from './02-Sidebar';
import Footer from './04-Footer';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <div className=" bg-[#1c2431]">
                <div className="layout-container">
                    <Navbar />
                    <Sidebar />
                    <main >{children}</main>
                </div>
                <Footer />
            </div>

        </>

    );
}
