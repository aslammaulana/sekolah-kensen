import Link from 'next/link';
import React from 'react';
import { HiChevronRight } from 'react-icons/hi';

interface BreadcrumbProps {
    title: string;
    link: {
        name: string;
        href: string;
    };
    link2: {
        name: string;
    };
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, link, link2 }) => {
    return (
        <div>
            <p className="text-[28px] font-semibold text-[#d4d6d8]">
                {title}
            </p>
            <div className="flex items-center pt-2 text-[14px] font-medium text-[#6993dd]">
                <Link href={link.href}>
                    <p>{link.name}</p>
                </Link>
                <HiChevronRight size={16} className="mx-3 text-[#ffffff86] " />
                <p className='text-[#ffffff86]'>
                    {link2.name}
                </p>
            </div>
        </div>
    );
};

export default Breadcrumb;
