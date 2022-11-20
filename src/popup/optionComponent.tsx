import React from "react";
import css from "./styles.module.css";
import NavBar from "@src/popup/navbar";


const OptionComponent = () => {

    // Renders the component tree
    return (
        <div className={css.popupContainer}>
            <div className="divide-y divide-slate-100 main-box">
                <NavBar />

            </div>
        </div>
    );
}
export default OptionComponent;
