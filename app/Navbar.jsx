"use client";
import { useState } from 'react';
import NavbarLink from './NavbarLink'
import Link from 'next/link'

export default function Navbar() {

    const [open, setOpen] = useState(false)

    const links = [
        {
            name: "Matches",
            href: "/",
        },
        {
            name: "Leagues",
            href: "/leagues",
        }
    ]

    return (
        <header className="w-full shadow-md fixed top-0 left-0 bg-inherit">
            <div className="flex justify-between gap-10 items-center md:px-10 px-5 py-3">
                <Link href="/" className="text-xl text-black">
                    Predictor
                </Link>
                <nav className="flex justify-around gap-5 opacity-0 md:opacity-100">
                    {
                        links.map((link, index) => (
                            <NavbarLink key={index} link={link} />
                        ))
                    }
                </nav>
                <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-900 shadow-sm px-3 py-2 rounded-md text-sm md:opacity-0"
                    onClick={()=>{setOpen(!open)}}
                    >
                    {open ? "Cerrar": "Menu"}
                </button>
            </div>
            <div className="md:px-10 px-5">
                <nav className={`flex flex-col md:hidden gap-2 py-3 ${open ? "" : "hidden"}`}>
                    {
                        links.map(link => (
                            <NavbarLink key={link.href} link={link} />
                        ))
                    }
                </nav>
            </div>
        </header>
    )
}