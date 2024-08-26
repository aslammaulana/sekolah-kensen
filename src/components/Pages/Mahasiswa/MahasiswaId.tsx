import Image from 'next/image';
import { HiEye, HiBadgeCheck, HiArchive, HiChevronRight, HiOutlinePencilAlt, HiPencilAlt } from 'react-icons/hi';
import Head from 'next/head';
import { SiswaJson } from '@/components/DataJson/JsonSiswa';
import Button from '@/components/Elements/Button';

interface MahasiswaIdProps {
    id: string;
}

const MahasiswaId = ({ id }: MahasiswaIdProps) => {
    // Cari data siswa berdasarkan ID
    const siswa = SiswaJson.find(s => s.id === id);

    if (!siswa) {
        return null;
    }

    return (
        <>
            {/* Content */}
            <div className="bg-[#1c2431] text-white">
                <div className="max-w-full mx-auto bg-[#2f3a4d] p-6 rounded-lg">
                    <div className='mb-5'>
                        <Button
                            text={siswa.status}
                            href="#"
                            className={`bg-[#779ddf33] rounded-full !text-[12px] py-2 px-5 text-[#ffffff] !w-auto `}
                        />
                    </div>
                    <div className="flex mb-5">
                        <Image
                            src={`/images/Mahasiswa/${siswa.image}`}
                            width={60}
                            height={60}
                            alt={siswa.nama}
                            className='rounded-[7px] shrink-0 size-[50px]'
                        />
                        <div className="ml-3 grid justify-center items-center">
                            <div className='text-[12px] text-[#ffffff8e]'>{siswa.id}</div>
                            <div className='text-[20px] font-semibold'>{siswa.nama}</div>
                        </div>
                    </div>
                    <div className="flex justify-between mb-2 text-[14px]">
                        <div>Mapel:</div>
                        <div>{siswa.pelajaran}</div>
                    </div>
                    <div className="border-b border-[#ffffff18] my-[10px]"></div>
                    <div className="flex justify-between mb-5 text-[14px]">
                        <div>Nilai:</div>
                        <div className='font-bold'>{siswa.nilai}</div>
                    </div>
                    <div className='mt-5'>
                        <div className="flex space-x-2">
                            <button
                                className="justify-center bg-[#3d67b1] hover:bg-[#325797] text-white text-[12px] font-medium w-full py-2.5 px-3 rounded-md inline-flex items-center"
                            >
                                <HiPencilAlt size={15} className=' w-4 h-4 mr-1' />
                                <span>Edit</span>
                            </button>
                            <button className="justify-center bg-[#439b56] hover:bg-[#3a7a40] text-white text-[12px] w-full font-medium py-2.5 px-3 rounded-md inline-flex items-center">
                                <HiBadgeCheck size={15} className='fill-current w-4 h-4 mr-1' />
                                <span>Submit</span>
                            </button>
                            <button className="bg-[#ca4646] hover:bg-[#af3838] text-white text-[12px] font-medium py-2.5 px-3 rounded-md inline-flex items-center">
                                <HiArchive size={15} className='fill-current w-4 h-4' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Grid */}
        </>
    );
};

export default MahasiswaId;
