"use client";
import Link from "next/link"
import {usePathname} from "next/navigation"

const NavItem = ({ text, href }) => {

    const path = usePathname()
    const selected = href === path

    return (
        <Link
            className={`px-3 py-2 hover:text-gray-900 hover:border-b-2 hover:border-blue-400 ${selected ? "border-b-2 border-blue-600":""}`}
            href={href}
        >
            {text}
        </Link>
    )
}

export default NavItem