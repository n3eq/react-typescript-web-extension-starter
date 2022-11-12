import React from "react";

interface PropType {
    children: React.ReactElement[],
}

export default function Nav({ children }: PropType) {
    return (
        <nav className="py-4 px-6 text-sm font-medium">
            <ul className="flex space-x-3">
                {children}
            </ul>
        </nav>
    )
}