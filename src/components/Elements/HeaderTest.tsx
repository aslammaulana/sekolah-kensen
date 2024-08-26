"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Header1() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <header className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 shadow-md border-b border-gray-700 z-40">
            <div className="container mx-auto flex items-center justify-end">
                {" "}
                {/* Changed justify-between to justify-end */}
                <div className="relative">
                    <button
                        type="button" // Explicitly specify the button type
                        onClick={toggleDropdown}
                        className="flex items-center space-x-2 text-lg font-semibold focus:outline-none"
                    >
                        <span>Ucok</span>
                        <img
                            src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png" // Replace with your avatar path
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
                        />
                        <ChevronDown className="w-5 h-5 text-white" />
                    </button>
                    {isOpen && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                            <div className="bg-gray-800 w-96 p-5 rounded-md shadow-lg">
                                <h2 className="text-xl font-semibold text-white mb-4">Modal Title</h2>
                                <p className="text-gray-300 mb-4">This is the modal content. You can place any information here.</p>
                                <button
                                    onClick={toggleDropdown}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                                >
                                    Close Modal
                                </button>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </header>
    );
}
