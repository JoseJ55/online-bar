import React, { useState, useEffect } from "react";
import "./style.css";

function Navbar({ menu }) {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            setScrollPosition(currentPosition);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div id="navbar" style={{ backgroundColor: `rgba(0, 0, 0, ${Math.min(scrollPosition / 500, 0.8)})`}}>
            <div onClick={e => {
                if (menu) {
                    window.location.href = '/';
                    return;
                }
                
                let a = document.getElementById("header");
                e.preventDefault();
                a && a.scrollIntoView({ behavior: "smooth", block: "start"});
                }} id="navbar-logo-container">
                <img id="navbar-logo" src={'/images/thirstyLOGO.png'} alt="company logo" />
            </div>

            <div id="navbarLinks">
                {menu ? (
                    <>
                        <a href="/" onClick={e => {
                        let a = document.getElementById("cocktails");
                        e.preventDefault();
                        a && a.scrollIntoView({ behavior: "smooth", block: "start"});
                        }}>Drinks</a>
                        <a href="/" onClick={e => {
                        let a = document.getElementById("food");
                        e.preventDefault();
                        a && a.scrollIntoView({ behavior: "smooth", block: "start"});
                        }}>Food</a> 
                    </>
                ): (
                    <>
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
                        let a = document.getElementById("menu-section");
                        e.preventDefault();
                        a && a.scrollIntoView({ behavior: "smooth", block: "start"});
                        }}>Menu</a>
                        <a href="/" onClick={e => {
                        let a = document.getElementById("app");
                        e.preventDefault();
                        a && a.scrollIntoView({ behavior: "smooth", block: "start"});
                        }}>App</a>
                        <a href="/" onClick={e => {
                        let a = document.getElementById("about");
                        e.preventDefault();
                        a && a.scrollIntoView({ behavior: "smooth", block: "start"});
                        }}>About</a>
                    </>
                )}
            </div>
        </div>
    )
}

export default Navbar;