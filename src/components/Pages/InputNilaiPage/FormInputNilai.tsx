import InputField from '@/components/Elements/InputField';
import React from 'react';

export default function FormInputNilai() {
    return (
        <>

            <form className="bg-[#2f3a4d]  w-full px-[30px] py-[30px] rounded-lg  flex flex-col ">

                <h1 className="text-[16px] sm:text-[17px] font-bold mb-4 text-start text-white ">
                    Input Nilai Mahasiswa
                </h1>
                <InputField
                    label="Nama"
                    type="text"
                    id="nama"
                    placeholder="Aslam Maulana"
                />
                <div className="flex felx-col-2 space-x-6">
                    <InputField
                        label="Role"
                        type="text"
                        id="nama"
                        placeholder="Admin"
                    />
                    <InputField
                        label="Mapel"
                        type="text"
                        id="nama"
                        placeholder="MTK"
                    />
                </div>
                <div className="flex felx-col-2 space-x-6">
                    <InputField
                        label="Nilai"
                        type="number"
                        id="nama"
                        placeholder="00,0"
                    />
                    <InputField
                        label="Status"
                        type="text"
                        id="nama"
                        placeholder="Tuntas/Tidak Tuntas"
                    />
                </div>
                <InputField
                    label="Password"
                    type="password"
                    id="nama"
                    placeholder="*******"
                />
                <button
                    className="w-full mt-[15px] bg-[#4c79c7] text-white py-[13px] rounded-[10px] font-semibold text-[14px] hover:bg-[#325796]">
                    Update Profil
                </button>
            </form>
        </>
    );
}
