import React from "react";

interface PropType {
    href: string,
    isActive: boolean,
    children: string,
}

export default function NavItem({ href, isActive, children }: PropType) {
    return (
        <li>
            <a
                href={href}
                className={`block px-3 py-2 rounded-md ${isActive ? 'bg-sky-500 text-white' : 'bg-slate-50'}`}
            >
                {children}
            </a>
        </li>
    )
}