import InputField from '@/components/Elements/InputField';
import InputSelect from '@/components/Elements/InputSelect';
import React from 'react';

export default function FormProfile() {
    return (
        <form className="bg-[#2f3a4d] w-full px-[30px] py-[30px] rounded-lg grid grid-cols-1">
            <h1 className="text-[16px] sm:text-[17px] font-bold mb-4 text-start text-white">
                Update Your Profile
            </h1>
            {/* Nama */}
            <InputField
                label="Nama"
                type="text"
                id="nama"
                placeholder="Aslam Maulana"
            />
            {/* Grid untuk input lainnya */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-1">
                {/* Email */}
                <InputField
                    label="Email"
                    type="text"
                    id="email"
                    placeholder="aslammaulana10@gmail.com"
                />
                {/* Password */}
                <InputField
                    label="Password"
                    type="password"
                    id="password"
                    placeholder="******"
                />
                {/* Role */}
                <InputSelect
                    label="Role"
                    id="role"
                    options={[
                        { value: "kajur", label: "Kajur" },
                        { value: "Dosen", label: "Dosen" },
                        { value: "mahasiswa", label: "Mahasiswa" }
                    ]}
                />
                {/* Mapel */}
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
                {/* Phone */}
                <InputField
                    label="Phone"
                    type="text"
                    id="phone"
                    placeholder="+62851-8440-2132"
                />
                {/* Domisili */}
                <InputField
                    label="Domisili"
                    type="text"
                    id="domisili"
                    placeholder="Banda Aceh"
                />
            </div>
            
            <button
                className="w-full mt-[20px] bg-[#4c79c7] text-white py-[13px] rounded-[10px] font-semibold text-[14px] hover:bg-[#325796]">
                Update Profil
            </button>
        </form>
    );
}
