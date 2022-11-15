import Nav from './nav';
import NavItem from './navItem';
import List from './list';
import ListItem from './movieListItem';
import React from 'react';
import {MovieType} from './component';
import {Link} from "react-router-dom";

interface PropType {
    movies: MovieType[],
}

export default function Movies({movies}: PropType) {

    return (
        <div className="divide-y divide-slate-100 main-box">
            <nav>
                <ul className="flex nav-list">
                    <li className="mr-6">
                        <a className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" href="#">Movie List</a>
                    </li>
                    <li className="mr-6">
                        <a className="text-blue-500 hover:text-blue-800 block py-2 px-4 " href="#">Search Movies</a>
                    </li>
                    <li className="mr-6">
                        <Link to='../options' className="text-blue-500 hover:text-blue-800 block py-2 px-4">Settings</Link>
                    </li>
                    <li className="mr-6 user-avatar">
                        {/* Here we need change img to img that we are going to get from user account*/}
                        <a href={''} ><img src="https://cdn.discordapp.com/attachments/898670795306455141/1040599741165211708/image.png" alt="" /></a>
                    </li>
                </ul>
            </nav>
            <List>
                {movies.map((movie) => (
                    <ListItem key={movie.id} movie={movie} />
                ))}
            </List>
        </div>
    )
}