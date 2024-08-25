import DataProfile from '@/components/Pages/ProfilePage/DataProfile'
import FormProfile from '@/components/Pages/ProfilePage/FormProfile'
import React from 'react'
import HeroInputNilai from './HeroInputNilai'
import FormInputNilai from './FormInputNilai'

export default function ContentInputNilai() {
    return (
        <div className="grid  w-full   overflow-hidden grid-cols-1 lg:grid-cols-11 space-x-0 space-y-6   lg:space-x-5 lg:space-y-0 ">
            {/* Kolom Kanan: Welcome Panel */}
            <div className=" lg:block lg:col-span-4  ">
                <HeroInputNilai />
            </div>
            {/* Kolom Kiri: Form Login */}
            <div className="lg:block lg:col-span-7  ">
                <FormInputNilai />
            </div>
        </div>)
}
