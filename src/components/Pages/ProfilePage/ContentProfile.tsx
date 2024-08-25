import React from 'react'
import DataProfile from './DataProfile'
import FormProfile from './FormProfile'

export default function ContentProfile() {
    return (
        <div className="grid  w-full   overflow-hidden grid-cols-1 lg:grid-cols-11 space-x-0 space-y-6   lg:space-x-5 lg:space-y-0 ">
            {/* Kolom Kanan: Welcome Panel */}
            <div className=" lg:block lg:col-span-4  ">
                <DataProfile />
                
            </div>
            {/* Kolom Kiri: Form Login */}
            <div className="lg:block lg:col-span-7  ">
                <FormProfile />
            </div>
        </div>)
}