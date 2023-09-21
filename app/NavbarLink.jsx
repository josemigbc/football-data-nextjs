"use client";

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavbarLink({link}){

    const path = usePathname()

    return (
        <Link className={`${path === link.href ? "text-blue-800": "text-gray-700 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-400"}`} href={link.href}>{link.name}</Link>
    )
}
