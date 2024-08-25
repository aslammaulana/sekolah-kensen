"use client";

import React, { useEffect, useState } from 'react';
import Breadcrumb from '@/components/ThemeBuilder/05-Breadcrumb';
import MahasiswaId from '@/components/Pages/Mahasiswa/MahasiswaId';
import { useParams } from 'next/navigation'; // Import useParams
import { SiswaJson } from '@/components/DataJson/JsonSiswa'; // Import data siswa

const SiswaPage: React.FC = () => {
    const params = useParams(); // Menggunakan useParams untuk mendapatkan ID dari URL

    // Periksa apakah params.id adalah string
    const id = typeof params.id === 'string' ? params.id : '';

    // State untuk nama siswa
    const [namaSiswa, setNamaSiswa] = useState<string | null>(null);

    useEffect(() => {
        // Fungsi untuk mendapatkan nama siswa berdasarkan ID
        const getSiswaName = () => {
            const siswa = SiswaJson.find(s => s.id === id);
            if (siswa) {
                setNamaSiswa(siswa.nama);
            }
        };

        if (id) {
            getSiswaName();
        }
    }, [id]);

    return (
        <main>
            <div className="w-full lg:ps-64 overflow-x-auto bg-[#1c2431]">
                <div className="p-4 lg:p-10 mt-5 lg:mt-0">
                    <Breadcrumb
                        title={namaSiswa || `Siswa ${id}`}  // Menampilkan nama siswa jika tersedia, jika tidak tampilkan "Siswa ID"
                        link={{ name: "Siswa", href: "/siswa" }}
                        link2={{ name: id }}  // Menampilkan ID siswa
                    />
                    <div className="border-b-2 border-[#ffffff3b] my-10"></div>
                    <MahasiswaId id={id} /> {/* Pass id as a prop */}
                </div>
            </div>
        </main>
    );
};

export default SiswaPage;
