import React from 'react';

interface InputSelectProps {
    label: string;
    id: string;
    options: { value: string; label: string }[];
}

const InputSelect: React.FC<InputSelectProps> = ({ label, id, options }) => {
    return (
        <div className="my-3 relative w-full">
            <label htmlFor={id} className="block text-[#ffffffd8] text-[12px] font-medium mb-2">
                {label}
            </label>
            <select
                id={id}
                name={id}
                className="w-full bg-[#222a35] text-white text-[14px] py-3 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d67b1]"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default InputSelect;
