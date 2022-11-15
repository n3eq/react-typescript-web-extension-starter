import React, {useEffect, useState} from "react";
import css from "./styles.module.css";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";


const OptionComponent = () => {

    // Renders the component tree
    return (
        <div className={css.popupContainer}>
            <Link to={'../popup.html'}>Here</Link>
        </div>
    );
}
export default OptionComponent;
