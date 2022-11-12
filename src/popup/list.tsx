import React from "react";

interface PropType {
    children: React.ReactElement[],
}

export default function List({ children }: PropType) {
    return (
        <ul className="divide-y divide-slate-100">
            {children}
        </ul>
    )
}