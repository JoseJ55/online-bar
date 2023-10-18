import React, { useState, useEffect } from "react";
import "./style.css";

function Header() {
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
        <div id="header">
            <img className='header-background' src='/images/Layered/drink-1-background.png' alt='first layer background for header' />
            <img className='header-forground' style={{ transform: `translateY(${Math.min(scrollPosition / 700, 5)}%)`}} src='/images/Layered/drink-1-forground.png' alt='second layer background for header' />
        
            <div id='header-info-container'>
                <p>Experience Seamless Dining & Drinking With <span className='title-text'>Thirsty</span></p>
            </div>
        </div>
    )
}

export default Header;