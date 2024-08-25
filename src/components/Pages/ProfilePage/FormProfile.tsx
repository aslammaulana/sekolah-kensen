import InputField from '@/components/Elements/InputField';
import React from 'react';

export default function FormProfile() {
    return (
        <>

            <form className="bg-[#2f3a4d]  w-full px-[30px] py-[30px] rounded-lg  flex flex-col ">

                <h1 className="text-[16px] sm:text-[17px] font-bold mb-4 text-start text-white ">
                    Update Your Profile
                </h1>
                <InputField
                    label="Nama"
                    type="text"
                    id="nama"
                    placeholder="Aslam Maulana"
                />
                <div className="flex felx-col-2 space-x-6">
                    <InputField
                        label="Email"
                        type="text"
                        id="nama"
                        placeholder="aslammaulana10@gmail.com"
                    />
                    <InputField
                        label="Password"
                        type="password"
                        id="nama"
                        placeholder="******"
                    />
                </div>
                <div className="flex felx-col-2 space-x-6">
                    <InputField
                        label="Role"
                        type="number"
                        id="nama"
                        placeholder="Admin"
                    />
                    <InputField
                        label="Mapel"
                        type="text"
                        id="nama"
                        placeholder="Matematika"
                    />
                </div>
                <div className="flex felx-col-2 space-x-6">

                    <InputField
                        label="Phone"
                        type="text"
                        id="nama"
                        placeholder="+62851-8440-2132"
                    />
                <InputField
                    label="Domisili"
                    type="text"
                    id="nama"
                    placeholder="Banda Aceh"
                />
                </div>
                <button
                    className="w-full mt-[15px] bg-[#4c79c7] text-white py-[13px] rounded-[10px] font-semibold text-[14px] hover:bg-[#325796]">
                    Update Profil
                </button>
            </form>
        </>
    );
}
