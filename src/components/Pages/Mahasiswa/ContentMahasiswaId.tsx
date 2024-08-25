// ContentMahasiswaId.tsx
import React from 'react';
import FormUpdateMahasiswa from './FormUpdateMahasiswa';
import DataMahasiswaId from './DataMahasiswaId';

interface ContentMahasiswaIdProps {
    id: string;
}

const ContentMahasiswaId: React.FC<ContentMahasiswaIdProps> = ({ id }) => {
    return (
        <div className="grid w-full overflow-hidden grid-cols-1 lg:grid-cols-11 space-x-0 space-y-6 lg:space-x-5 lg:space-y-0">
            <div className="lg:block lg:col-span-4">
                <DataMahasiswaId id={id} />
            </div>
            <div className="lg:block lg:col-span-7">
                <FormUpdateMahasiswa id={id} />
            </div>
        </div>
    );
};

export default ContentMahasiswaId; // Pastikan ini adalah default export
