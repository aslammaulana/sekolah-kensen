import ItemDashboard from '@/components/Elements/ItemDashboard';
import React from 'react';

export default function ContentDashboard() {
    return (
        <div className="grid justify-center items-center grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
            {/* 1 */}
            <ItemDashboard
                imageSrc="/images/IconDashboard/IconDashboard-01.svg"
                title="Dosen"
                description="5 Dosen"
            />
            {/* 2 */}
            <ItemDashboard
                imageSrc="/images/IconDashboard/IconDashboard-02.svg"
                title="Siswa"
                description="17 Siswa"
            />
            {/* 2 */}
            <ItemDashboard
                imageSrc="/images/IconDashboard/IconDashboard-03.svg"
                title="Mata Pelajaran"
                description="5 Mata Kuliah"
            />
            <ItemDashboard
                imageSrc="/images/IconDashboard/IconDashboard-04.svg"
                title="Tuntas"
                description="14 Siswa"
            />
            <ItemDashboard
                imageSrc="/images/IconDashboard/IconDashboard-05.svg"
                title="Tidak Tuntas"
                description="3 Siswa"
            />
        </div>
    );
}
