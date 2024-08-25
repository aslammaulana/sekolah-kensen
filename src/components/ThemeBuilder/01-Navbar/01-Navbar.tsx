"use client";

import React from 'react';
import NavbarMobile from './02-NavbarMobile';
import NavbarDekstop from './03-NavbarDesktop';

export default function Navbar() {
    return (
        <>
            <NavbarMobile />
            <NavbarDekstop />
        </>
    );
}
