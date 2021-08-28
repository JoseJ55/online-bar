import React from "react";
import "./style.css";

function Navbar() {
    return (
        <div id="navbar">
            <p>Night Bar</p>

            <div id="navbarLinks">
                <a href="/">Home</a>
                <a href="/">Popular</a>
                <a href="/">Drinks</a>
                <a href="/">About</a>
            </div>
        </div>
    )
}

export default Navbar;