import InputField from '@/components/Elements/InputField';
import InputSelect from '@/components/Elements/InputSelect';
import React from 'react';

export default function FormUpdateMahasiswa() {
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-1">
                    <InputSelect
                        label="Role"
                        id="role"
                        options={[
                            { value: "kajur", label: "Kajur" },
                            { value: "Dosen", label: "Dosen" },
                            { value: "mahasiswa", label: "Mahasiswa" }
                        ]}
                    />
                    <InputSelect
                        label="Mata Kuliah"
                        id="mataKuliah"
                        options={[
                            { value: "matematika", label: "Matematika" },
                            { value: "fisika", label: "Fisika" },
                            { value: "kimia", label: "Kimia" },
                            { value: "biologi", label: "Biologi" },
                            { value: "informatika", label: "Informatika" }
                        ]}
                    />
                    <InputField
                        label="Nilai"
                        type="number"
                        id="nama"
                        placeholder="00,0"
                    />
                    <InputSelect
                        label="Status"
                        id="status"
                        options={[
                            { value: "tuntas", label: "Tuntas" },
                            { value: "tidaktuntas", label: "Tidak Tuntas" }
                        ]}
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
