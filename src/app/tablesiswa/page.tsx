import React from 'react';
import Breadcrumb from '@/components/ThemeBuilder/05-Breadcrumb';
import ContentTableSiswa from '@/components/Pages/TableSiswaPage/ContentTableSiswa';
import Navbar from '@/components/ThemeBuilder/01-Navbar/01-Navbar';
import Sidebar from '@/components/ThemeBuilder/02-Sidebar';


export default function TableSiswa() {
    return (
        <main>
            <Sidebar/>
            {/* Konten dashboard */}
            <div className="w-full lg:ps-64 overflow-x-auto bg-[#1c2431]">
                <div className="p-4 lg:p-10 mt-5 lg:mt-0">
                    <Breadcrumb
                        title="Table Siswa"
                        link={{ name: "Dashboard", href: "/dashboard" }}
                        link2={{ name: "Table Siswa" }}
                    />
                    <div className="border-b-2 border-[#ffffff3b] my-10"></div>
                    <ContentTableSiswa />
                </div>
            </div>
        </main>
    );
}
