import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";


const NavBar = () => {
    const [isActive, setActive] = useState<string>("popup");
    useEffect(() => {
        console.log(isActive)
    },[isActive])

    return (
        <nav>
            <ul className="flex nav-list">
                <li className="mr-6">
                    <Link onClick={() => setActive("popup")} to='../popup.html' className={`text-center block rounded py-2 text-white px-4 ${isActive === 'popup' ? "border-blue-500 bg-blue-500 hover:bg-blue-700 text-white border" : ""}`}>Movie List</Link>
                </li>
                <li className="mr-6">
                    <Link onClick={() => setActive("searchList")} to='../searchList' className={`text-center block rounded text-white py-2 px-4 ${isActive === 'searchList' ? "border-blue-500 bg-blue-500 hover:bg-blue-700 text-white border" : ""}`}>Search Movies</Link>
                </li>
                <li className="mr-6">
                    <Link onClick={() => setActive("options")} to='../options' className={` text-center block rounded text-white py-2 px-4 ${isActive === 'options' ? "border-blue-500 bg-blue-500 hover:bg-blue-700 text-white border" : ""}`}>Settings</Link>
                </li>
                <li className="mr-6 user-avatar">
                    {/* Here we need change img to img that we are going to get from user account*/}
                    <Link onClick={() => setActive("options")} to='../options' ><img src="https://cdn.discordapp.com/attachments/898670795306455141/1040599741165211708/image.png" alt="" /></Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;
