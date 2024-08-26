import React from 'react';
import TableSiswa from '@/components/Pages/TableSiswaPage/ContentTableSiswa';
import Breadcrumb from '@/components/ThemeBuilder/05-Breadcrumb';
import ContentDashboard from '@/components/Pages/DashboardPage/ContentDashboard';
import Navbar from '@/components/ThemeBuilder/01-Navbar/01-Navbar';


export default function DashboardPage() {
    return (
        <main>
            <Navbar />

            {/* Konten dashboard */}
            <div className="w-full lg:ps-64 overflow-x-auto bg-[#1c2431]">
                <div className="p-4 lg:p-10 mt-5 lg:mt-0">
                    <Breadcrumb
                        title="Dashboard"
                        link={{ name: "Home", href: "/" }}
                        link2={{ name: "Dashboard" }}
                    />
                    <div className="border-b-2 border-[#ffffff3b] my-10"></div>
                    <ContentDashboard />
                </div>
            </div>
        </main>
    );
}
