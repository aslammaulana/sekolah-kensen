
import React from 'react';
import Breadcrumb from '@/components/ThemeBuilder/05-Breadcrumb';
import ContentInputNilai from '@/components/Pages/InputNilaiPage/ContentInputNilai';
import Navbar from '@/components/ThemeBuilder/01-Navbar/01-Navbar';

export default function InputNilaiPage() {
    return (
        <div className="w-full lg:ps-64 overflow-x-auto bg-[#1c2431]">
            <Navbar />

            <div className="p-4 lg:p-10 mt-5 lg:mt-0">
                <Breadcrumb
                    title="Input Nilai"
                    link={{ name: "Dashboard", href: "/dashboard" }}
                    link2={{ name: "Input Nilai" }}
                />
                {/* Divider */}
                <div className="border-b-2 border-[#ffffff3b] my-10"></div>
                <ContentInputNilai />
            </div>
        </div>
    );
}
