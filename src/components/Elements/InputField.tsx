// src/common/InputField.tsx

import React from 'react';

interface InputFieldProps {
    label: string;
    type?: string;
    id: string;
    value?: string;
    placeholder?: string;
    className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    type = 'text',
    id,
    value,
    placeholder,
    className,
}) => {
    return (
        <div className="my-3 relative w-full">
            <label htmlFor={id} className="block text-[#ffffffd8] text-[12px] font-medium mb-2">
                {label}
            </label>
            <input
                type={type}
                id={id}
                defaultValue={value}
                placeholder={placeholder}
                className={`w-full bg-[#222a35] text-white text-[14px] py-3 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d67b1] ${className}`}
            />
        </div>
    );
};

export default InputField;
