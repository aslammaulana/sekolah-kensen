import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import Button from '../Elements/Button';
import { HiHome, HiOutlinePlus, HiOutlineUser } from 'react-icons/hi';

export default function Sidebar() {
    return (
        <div
            className="w-[260px] h-full hidden fixed inset-y-0 start-0 z-[60] bg-[#12171d] border-e-2 border-[#ffffff18] lg:block lg:translate-x-0 lg:end-auto lg:bottom-0"
        >
            <div className="relative flex flex-col h-full max-h-full px-3">
                <Link href="/dashboard" className="pt-7 px-3">
                    <Image src="/images/LogoKensen.png" width={180} height={180} alt='Logo' />
                </Link>
                <p className='pt-16 mb-5 text-[12px] text-[#ffffff6b] font-medium'>GENERAL MENUS</p>
                <div className="">
                    <Button
                        icon={<HiHome size={15} className='fill-current w-4 h-4 mr-3' />}
                        text="Dashboard"
                        href="/dashboard"
                        className="font-medium hover:bg-[#222a35] hover:text-[#7399df] "
                    />
                    <Button
                        icon={<HiOutlineUser size={15} className='fill-current w-4 h-4 mr-3' />}
                        text="Profil Saya"
                        href="/profil"
                        className="mt-2 font-medium hover:bg-[#222a35] hover:text-[#7399df] "
                    />
                    <Button
                        icon={<HiOutlinePlus size={15} className='fill-current w-4 h-4 ml-[-12px] mr-3' />}
                        text="Input Nilai"
                        href="/inputnilai"
                        className="mt-5 justify-center bg-[#3d67b1] hover:bg-[#325797] "
                    />
                </div>
            </div>
        </div>
    )
}
