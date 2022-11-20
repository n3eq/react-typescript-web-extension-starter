import React, {useEffect, useState} from "react";
import css from "./styles.module.css";
import {Form, Link} from "react-router-dom";
import NavBar from "@src/popup/navbar";
import ListItem from "@src/popup/movieListItem";
import { MovieType } from "@src/popup/component";
import set = chrome.cookies.set;


const SearchListComponent = () => {
    const [searchMovie, setSearchMovie] = useState<MovieType>(
        {
            id: 1,
            image: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
            title: 'Joker',
            starRating: 8.4,
            type: 'Movie',
            year: 2019,
            genre: 'Crime, Drama, Thriller',
            runtime: '2h 2min',
            cast: 'Todd Phillips',
            link: 'https://www.imdb.com/title/tt7286456/'
        }
    )
    const [movie, setMovie] = useState<string>("");
    const [isError, setIsError] = useState<boolean>(false)
    const [errorResponse, setErrorResponse] = useState<string>('');

    const getMovie = async () => {
        setErrorResponse('Loading...')
        setIsError(true)
        const auth = 'k_a91t8yu4';
        // Getting movie id
        const getId = `https://imdb-api.com/en/API/SearchMovie/${auth}/${movie}`
        const getIdResponse = await fetch(getId);
        if(!getIdResponse.ok) {
            throw Error('Error');
        }
        const commits = await getIdResponse.json();

        if (commits.expression !== null) {
            const id = commits.results[0].id
            // Getting movie details

            const getMovie = `https://imdb-api.com/en/API/Title/${auth}/${id}/Images,Ratings,Wikipedia`
            const getMovieResponse = await fetch(getMovie);
            if(!getIdResponse.ok) {
                throw Error('Error');
            }
            const commitResponse = await getMovieResponse.json();

            // Render new movie
            setSearchMovie({
                cast: commitResponse.directors,
                genre: commitResponse.genres,
                id: 0,
                image: commitResponse.image,
                link: `https://www.imdb.com/title/${id}/`,
                runtime: commitResponse.runtimeStr,
                starRating: commitResponse.ratings.imDb,
                type: commitResponse.type,
                year: commitResponse.year,
                title: commitResponse.title})
                setErrorResponse('Loaded')
        }else {
            setErrorResponse('Invalid Movie')
            setIsError(true)
        }
    }

    // Renders the component tree
    return (
        <div className={css.popupContainer}>
            <div className="divide-y divide-slate-100 main-box">
                <NavBar />
                <Form className='searchBar'>
                    <input onChange={(e:any) => setMovie(e.target.value)} className="searchInput" placeholder={isError ? errorResponse : "Movie title"} />
                    <button type="reset" onClick={() => getMovie()} className='searchButton border-blue-500 bg-blue-500 hover:bg-blue-700 text-white border  rounded py-2 px-4'>Search</button>
                </Form>
                    <ListItem key={searchMovie.id} movie={searchMovie} />
            </div>
        </div>
    );
}
export default SearchListComponent;


