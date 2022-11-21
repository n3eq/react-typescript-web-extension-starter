import * as React from "react";
import browser from "webextension-polyfill";
import { Popup } from "../popup/component";
import "../css/app.css";
import ReactDOM from "react-dom";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import OptionComponent from "../popup/optionComponent"
import SearchListComponent from "@src/popup/SearchListComponent";

const router = createBrowserRouter([
    {
        path: "/popup.html",
        element: (
                <OptionComponent />
        ),
    },
    {
        path: "options",
        element: <OptionComponent />,
    },
    {
        path: "searchList",
        element: <SearchListComponent />,
    },
]);

browser.tabs.query({ active: true, currentWindow: true }).then(() => {
    ReactDOM.render(<RouterProvider router={router} />, document.getElementById("popup"));
});

