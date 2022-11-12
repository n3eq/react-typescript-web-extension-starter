import React, {useEffect, useState} from "react";
import browser, { Tabs } from "webextension-polyfill";
import css from "./styles.module.css";
import Movies from "@src/popup/movies";


export interface MovieType {
    id: number,
    image: string,
    title: string,
    starRating: number,
    rating: string,
    year: number,
    genre: string,
    runtime: string,
    cast: string,
    link: string,
}

const movies: MovieType[] = [
    {
        id: 1,
        image: 'https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.6757_AL_.jpg',
        title: 'Harry Potter',
        starRating: 2.33,
        rating: 'PG-13',
        year: 2020,
        genre: 'Action',
        runtime: '2h 2m',
        cast: 'Emilia Clarke',
        link: 'https://google.com'
    },
    {
        id: 2,
        image: 'https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.6757_AL_.jpg',
        title: 'Harry Potter',
        starRating: 2.33,
        rating: 'PG-13',
        year: 2020,
        genre: 'Action',
        runtime: '2h 2m',
        cast: 'Emilia Clarke',
        link: 'https://spotify.com'
    },
    {
        id: 3,
        image: 'https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.6757_AL_.jpg',
        title: 'Harry Potter',
        starRating: 2.33,
        rating: 'PG-13',
        year: 2020,
        genre: 'Action',
        runtime: '2h 2m',
        cast: 'Emilia Clarke',
        link: 'https://youtube.com'
    },
]

function scrollWindow(position: number) {
    window.scroll(0, position);
}

/**
 * Executes a string of Javascript on the current tab
 * @param code The string of code to execute on the current tab
 */
function executeScript(position: number): void {
    // Query for the active tab in the current window
    browser.tabs
        .query({ active: true, currentWindow: true })
        .then((tabs: Tabs.Tab[]) => {
            // Pulls current tab from browser.tabs.query response
            const currentTab: Tabs.Tab | number = tabs[0];

            // Short circuits function execution is current tab isn't found
            if (!currentTab) {
                return;
            }
            const currentTabId: number = currentTab.id as number;

            // Executes the script in the current tab
            browser.scripting
                .executeScript({
                    target: {
                        tabId: currentTabId,
                    },
                    func: scrollWindow,
                    args: [position],
                })
                .then(() => {
                    console.log("Done Scrolling");
                });
        });
}

// // // //

export function Popup() {
    const [movieTitle, setMovieTitle] = useState<string>('')

    useEffect(() => {
        console.log(movieTitle)
    },[movieTitle]);

    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        if (request.action) {
            setMovieTitle(request.action)
        }
    })
    // Sends the `popupMounted` event
    React.useEffect(() => {
        browser.runtime.sendMessage({popupMounted: true});
    }, []);

    // Renders the component tree
    return (
        <div className={css.popupContainer}>
            <Movies movies={movies}/>
        </div>
    );
}
