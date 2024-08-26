"use client";

import Link from 'next/link';
import React, { useState } from "react";
import Image from 'next/image';
import { HiHome, HiOutlineUser, HiOutlinePlus, HiMenuAlt3, HiX, HiFolderOpen } from 'react-icons/hi';
import Button from '../../Elements/Button';

export default function NavbarMobile() {
    const [isClick, setIsClick] = useState(false);

    const toggleNavbar = (): void => {
        setIsClick(!isClick);
    };

    return (
        <div className='lg:hidden sticky top-0 inset-x-0 z-20 bg-[#12171d] shadow-md'>
            <div className='max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between h-20 border-b border-[#ffffff17]'>
                <Link href="/dashboard">
                    <Image src="/images/KenseUniv.svg" width={180} height={180} alt='Logo' />
                </Link>
                <button
                    className="p-2 rounded text-[#ededed] hover:text-[#ededed] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3f5069]"
                    onClick={toggleNavbar}
                >
                    {isClick ? (
                        <HiX size={24} />
                    ) : (
                        <HiMenuAlt3 size={24} />
                    )}
                </button>
            </div>

            {isClick && (
                <div className="p-3">
                    <Button
                        icon={<HiHome size={15} className='fill-current w-4 h-4 mr-3' />}
                        text="Dashboard"
                        href="/dashboard"
                        className="font-medium hover:bg-[#222a35] "
                    />
                    <Button
                        icon={<HiFolderOpen size={15} className='fill-current w-4 h-4 mr-3' />}
                        text="Table Siswa"
                        href="/tablesiswa"
                        className="mt-2 font-medium hover:bg-[#222a35]"
                    />
                    <Button
                        icon={<HiOutlineUser size={15} className='fill-current w-4 h-4 mr-3' />}
                        text="Profil Saya"
                        href="/profil"
                        className="mt-2 font-medium hover:bg-[#222a35]"
                    />
                    <Button
                        icon={<HiOutlinePlus size={15} className='fill-current w-4 h-4 mr-3' />}
                        text="Input Nilai"
                        href="/inputnilai"
                        className="mt-3 justify-center bg-[#3d67b1] hover:bg-[#325797] "
                    />
                </div>
            )}
        </div>
    );
}
