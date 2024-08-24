"use client";

import Link from 'next/link';
import React, { useState } from "react";
import Image from 'next/image';
import { HiHome, HiOutlineUser, HiOutlinePlus, HiMenuAlt3, HiX } from 'react-icons/hi';
import { Settings } from 'lucide-react';
import Button from '../Elements/Button';

export default function Navbar() {
    const [isClick, setIsClick] = useState(false);

    const toggleNavbar = (): void => {
        setIsClick(!isClick);
    };

    return (
        <>
            {/* Navbar Mobile */}
            <nav className='lg:hidden sticky top-0 inset-x-0 z-20 bg-[#12171d]  shadow-md'>
                <div className='max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between h-20 border-b border-[#ffffff17]'>
                    <Link href="/dashboard">
                        <Image src="/images/LogoKensen.png" width={180} height={180} alt='Logo' />
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
                            icon={<HiOutlineUser size={15} className='fill-current w-4 h-4 mr-3' />}
                            text="Profil Saya"
                            href="/profil"
                            className="mt-2 font-medium hover:bg-[#222a35]"
                        />
                        <Button
                            icon={<HiOutlinePlus size={15} className='fill-current w-4 h-4 mr-3' />}
                            text="Input"
                            href="/inputnilai"
                            className="mt-3 justify-center bg-[#3d67b1] hover:bg-[#325797] "
                        />
                    </div>
                )}
            </nav>

            {/* Navbar Desktop */}
            <nav className='hidden md:block lg:ps-[260px] border-b-2 border-[#ffffff18] py-0 bg-[#12171d] px-8'>
                <div className="flex items-center justify-end h-20 space-x-3">
                    <Link href="/profil">
                    <div className="text-right">
                        <p className='text-[#ffffffea] font-semibold text-[12px]'>AslamMaulana</p>
                        <p className='text-[#ffffff5b] font-normal text-[12px]'>aslammaulana@gmail.com</p>
                    </div>
                    </Link>
                    <Link href="/profil">
                        <button className="hover:bg-[#29323f] text-[#ffffff] text-[15px] font-semibold py-3 px-3 rounded-full">
                            <Settings size={15} className='w-5 h-5' />
                        </button>
                    </Link>
                    <Link href="/profil">
                        <img
                            className="w-[44px] rounded-[7px] "
                            src="../images/Aslam-01.png"
                            alt="Avatar"
                        />
                    </Link>
                </div>
            </nav>
        </>
    );
}
