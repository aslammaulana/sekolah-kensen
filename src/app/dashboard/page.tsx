import React from 'react';
import TableSiswa from '@/components/Pages/DashboardPage/TableSiswa';


export default function DashboardPage() {
    return (
        <main>
            {/* Konten dashboard */}
            <div className="w-full lg:ps-64 overflow-x-auto bg-[#1c2431]">
                <div className="p-4 lg:p-10 mt-5 lg:mt-0">
                    <div className="border-b-2 border-[#ffffff3b] my-10"></div>
                    <TableSiswa />
                </div>
            </div>
        </main>
    );
}
