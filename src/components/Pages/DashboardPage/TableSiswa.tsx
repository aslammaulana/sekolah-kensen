// TableSiswa.tsx
import React from 'react';
import { HiArchive, HiBadgeCheck, HiEye } from 'react-icons/hi';
import Image from 'next/image';
import { SiswaJson } from '@/components/DataJson/JsonSiswa';
import Button from '@/components/Elements/Button';

interface Siswa {
  image: string;
  id: string;
  nama: string;
  pelajaran: string;
  nilai: string;
  status: string;
}

export default function TableSiswa() {
  return (
    <>
      {/* Section Mobile */}
      <div className="overflow-x-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:hidden ">
        {SiswaJson.map(data => (
          <div key={data.id} className='mb-[15px] font-medium flex flex-col '>
            <div className='bg-[#2f3a4d] text-[#FFFFFFCF] py-[20px] px-[20px] flex flex-col justify-between rounded-lg text-[12px] shadow-md '>
              {/* Status */}
              <div className='mb-5'>
                <Button
                  text={data.status}
                  href="#"
                  className={`bg-[#779ddf33] rounded-full !text-[12px] py-2 px-5 text-[#ffffff] !w-auto `}
                />
              </div>
              {/* Image, ID & Nama */}
              <div className="flex mb-5">
                <Image src={`/images/Mahasiswa/${data.image}`} width={50} height={50} alt='Avatar' className='rounded-[7px]' />
                <div className="ml-3 flex flex-col justify-center items-start space-y-1">
                  <div className='text-[12px] text-[#ffffff8e]'>{data.id}</div>
                  <div className='text-[18px] font-semibold'>{data.nama}</div>
                </div>
              </div>
              {/* Mapel */}
              <div className="flex justify-between  text-[14px]">
                <div className=''>Mapel:</div>
                <div className=''>{data.pelajaran}</div>
              </div>
              <div className="border-b border-[#ffffff18] my-[10px]"></div>
              {/* Nilai */}
              <div className="flex justify-between mb-5 text-[14px]">
                <div>Nilai:</div>
                <div className='font-bold'>{data.nilai}</div>
              </div>
              {/* Buttons */}
              <div className=' flex grid-cols-3 justify-between items-center space-x-2  '>
                <div className="w-[45%]">
                  <Button
                    text="Lihat"
                    href={`/siswa/${data.id}`}
                    icon={<HiEye size={15} className='mr-2' />}
                    className="bg-[#3d67b1] hover:bg-[#325797] py-2.5 px-3 !text-[12px] justify-center "
                  />
                </div>
                <div className="w-[45%]">
                  <Button
                    text="Submit"
                    href="#"
                    icon={<HiBadgeCheck size={15} className='mr-2' />}
                    className="bg-[#439b56] hover:bg-[#3a7a40] py-2.5 px-3 !text-[12px] justify-center  "
                  />
                </div>
                <div className="w-[10%]">
                  <Button
                    text=""
                    href="#"
                    icon={<HiArchive size={15} />}
                    className="bg-[#ca4646] hover:bg-[#af3838] py-2.5 px-3 !text-[12px] !w-auto   "
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Section Mobile End */}

      {/* Section Desktop */}
      <div className="overflow-x-auto hidden md:block">
        <div className='rounded-lg mb-[15px] mt-[20px]'>
          <div className='text-[#ffffffde] pt-[8px] pr-[40px] pb-[0px] pl-[25px] flex grid-cols-6 justify-between items-center text-[12px] font-semibold'>
            <div className="w-[8%]">Image</div>
            <div className='w-[8%]'>ID</div>
            <div className='w-[20%]'>Nama</div>
            <div className='w-[15%]'>Pelajaran</div>
            <div className='w-[10%]'>Nilai</div>
            <div className='w-[15%]'>Status</div>
            <div className='w-[24%]'>Aksi</div>
          </div>
        </div>
        {SiswaJson.map(data => (
          <div key={data.id} className='mb-[15px] font-medium shadow-md'>
            <div className='bg-[#2f3a4d] text-[#FFFFFFCF] py-[20px] pl-[20px] pr-[40px] flex grid-cols-6 justify-between items-center rounded-lg text-[12px]'>
              <div className="w-[8%]">
                <Image src={`/images/Mahasiswa/${data.image}`} width={50} height={50} alt='Avatar' className='rounded-[7px]' />
              </div>
              <div className='w-[8%]'>{data.id}</div>
              <div className='w-[20%]'>{data.nama}</div>
              <div className='w-[15%]'>{data.pelajaran}</div>
              <div className='w-[10%]'>{data.nilai}</div>
              <div className='w-[15%]'>
                <Button
                  text={data.status}
                  href="#"
                  className={`py-2.5 px-5 inline-flex !rounded-full !text-[12px] bg-[#779ddf33] text-[#ffffffe3] !w-auto`}
                />
              </div>
              <div className='w-[23.5%] flex grid-cols-3 justify-between items-center space-x-2  '>
                <div className="w-[45%]">
                  <Button
                    text="Lihat"
                    href={`/siswa/${data.id}`}
                    icon={<HiEye size={15} className='mr-2' />}
                    className="bg-[#3d67b1] hover:bg-[#325797] py-2.5 px-3 !text-[12px] justify-center "
                  />
                </div>
                <div className="w-[45%]">
                  <Button
                    text="Submit"
                    href="#"
                    icon={<HiBadgeCheck size={15} className='mr-2' />}
                    className="bg-[#439b56] hover:bg-[#3a7a40] py-2.5 px-3 !text-[12px] justify-center  "
                  />
                </div>
                <div className="w-[10%]">
                  <Button
                    text=""
                    href="#"
                    icon={<HiArchive size={15} />}
                    className="bg-[#ca4646] hover:bg-[#af3838] py-2.5 px-3 !text-[12px] !w-auto   "
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Section Desktop End */}
    </>
  );
}
