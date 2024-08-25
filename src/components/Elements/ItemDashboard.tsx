import Image from 'next/image';
import React from 'react';

interface ItemDashboardProps {
    imageSrc: string;
    title: string;
    description: string;
}

const ItemDashboard: React.FC<ItemDashboardProps> = ({
    imageSrc,
    title,
    description
}) => {
    return (
        <div className="flex flex-col justify-center items-center text-center bg-[#2f3a4d] rounded-[10px] px-6 py-8
        lg:p-6 shadow-sm">
            <Image
                src={imageSrc}
                width={460} // Atur sesuai kebutuhan Anda
                height={460} // Atur sesuai kebutuhan Anda
                alt={title} // Tambahkan alt text untuk aksesibilitas
                className='rounded-[7px] object-cover h-[65px] w-auto' // Menyesuaikan ukuran gambar
            />
            <div className='text-[15.5px] lg:text-[19px] font-semibold mt-3 mb-1 text-[#ffffffd0]'>{title}</div>
            <div className='text-[12.5px] lg:text-[15px] text-[#ffffff8e]'>{description}</div>
        </div>
    );
};

export default ItemDashboard;
