import List from './list';
import ListItem from './movieListItem';
import React from 'react';
import {MovieType} from './component';
import NavBar from "@src/popup/navbar";

interface PropType {
    movies: MovieType[],
}

export default function Movies({movies}: PropType) {

    return (
        <div className="divide-y divide-slate-100 main-box">
            <NavBar />
            <List>
                {movies.map((movie) => (
                    <ListItem key={movie.id} movie={movie} />
                ))}
            </List>
        </div>
    )
}