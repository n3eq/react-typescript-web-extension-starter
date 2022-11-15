import * as React from "react";
import browser from "webextension-polyfill";
import { Popup } from "../popup/component";
import "../css/app.css";
import ReactDOM, { render } from "react-dom";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import OptionComponent from "../popup/optionComponent"

const router = createBrowserRouter([
    {
        path: "/popup.html",
        element: (
            <div>
                <Popup />
            </div>
        ),
    },
    {
        path: "options",
        element: <OptionComponent />,
    },
]);

browser.tabs.query({ active: true, currentWindow: true }).then(() => {
    ReactDOM.render(<RouterProvider router={router} />, document.getElementById("popup"));
});

