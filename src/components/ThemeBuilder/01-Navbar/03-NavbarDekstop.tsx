"use client";

import Link from 'next/link';
import React from 'react';
import { Settings } from 'lucide-react';

export default function NavbarDekstop() {
    return (
        <div className='hidden md:block lg:ps-[260px] border-b-2 border-[#ffffff18] py-0 bg-[#12171d] px-8'>
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
        </div>
    );
}
