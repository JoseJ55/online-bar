import React from "react";
import "./style.css";

function Navbar() {
    return (
        <div id="navbar">
            <p>Night Bar</p>

            <div id="navbarLinks">
                <a href="/" onClick={e => {
                let a = document.getElementById("header");
                e.preventDefault();
                a && a.scrollIntoView({ behavior: "smooth", block: "start"});
                }}>Home</a>
                <a href="/" onClick={e => {
                let a = document.getElementById("popular");
                e.preventDefault();
                a && a.scrollIntoView({ behavior: "smooth", block: "start"});
                }}>Popular</a>
                <a href="/" onClick={e => {
                let a = document.getElementById("drinks");
                e.preventDefault();
                a && a.scrollIntoView({ behavior: "smooth", block: "start"});
                }}>Drinks</a>
                <a href="/" onClick={e => {
                let a = document.getElementById("about");
                e.preventDefault();
                a && a.scrollIntoView({ behavior: "smooth", block: "start"});
                }}>About</a>
            </div>
        </div>
    )
}

export default Navbar;