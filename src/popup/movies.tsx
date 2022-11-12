import Nav from './nav';
import NavItem from './navItem';
import List from './list';
import ListItem from './movieListItem';
import React from 'react';
import {MovieType} from './component';

interface PropType {
    movies: MovieType[],
}

export default function Movies({movies}: PropType) {
    return (
        <div className="divide-y divide-slate-100">
            <Nav>
                <NavItem href="/new" isActive>New Releases</NavItem>
                <NavItem href="/top" isActive>Top Rated</NavItem>
                <NavItem href="/picks" isActive>Vincent’s Picks</NavItem>
            </Nav>
            <List>
                {movies.map((movie) => (
                    <ListItem key={movie.id} movie={movie} />
                ))}
            </List>
        </div>
    )
}