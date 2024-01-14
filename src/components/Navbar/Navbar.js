import React, { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { AiOutlineClose } from 'react-icons/ai';
import "./style.css";

function Navbar({ menu }) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [mobile, setMobile] = useState(false);

    const handleClose = (e) => {
        // Close the navbar
        let closeIcon = document.getElementById('navbar-close');
        let openIcon = document.getElementById('navbar-open');
        e.preventDefault();

        closeIcon.style.display = 'block';
        openIcon.style.display = 'none';
    }

    const handleOpen = (e) => {
        // Open the navbar
        let closeIcon = document.getElementById('navbar-close');
        let openIcon = document.getElementById('navbar-open');
        e.preventDefault();

        closeIcon.style.display = 'none';
        openIcon.style.display = 'block';
    }

    useEffect(() => {
        const handleWidth = () => {
            const windowWidth = window.innerWidth;
            if (windowWidth > 500) {
                setMobile(true);
            } else {
                setMobile(false);
            }
        }

        const handleScroll = () => {
            const currentPosition = window.scrollY;
            setScrollPosition(currentPosition);
        }

        window.addEventListener('resize', handleWidth);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div id='navbar' style={{ backgroundColor: `rgba(0, 0, 0, ${mobile ? Math.min(scrollPosition / 500, 0.8) : 0.9})` }}>
            <div id='navbar-links'>
                <img 
                    id="navbar-logo" 
                    src={'/images/thirstyLOGO.png'} 
                    alt="company logo" 
                    onClick={e => {
                        if (menu) {
                            window.location.href = '/';
                            return;
                        }
                    
                        let a = document.getElementById("header");
                        e.preventDefault();
                        a && a.scrollIntoView({ behavior: "smooth", block: "start"});
                }}/>

                <div className="link-container">
                    {menu ? 
                        <>
                            <div className='navbar-link' onClick={e => {
                                let a = document.getElementById("cocktails");
                                e.preventDefault();
                                a && a.scrollIntoView({ behavior: "smooth", block: "start"});
                            }}>
                                <p>Drinks</p>
                            </div>
                
                            <div className='navbar-link' onClick={e => {
                                let a = document.getElementById("food");
                                e.preventDefault();
                                a && a.scrollIntoView({ behavior: "smooth", block: "start"});
                            }}>
                                <p>Food</p>
                            </div>
                        </>
                        :
                        <>
                            <div className='navbar-link' onClick={e => {
                                let a = document.getElementById("popular");
                                e.preventDefault();
                                a && a.scrollIntoView({ behavior: "smooth", block: "start"});
                            }}>
                                <p>Popular</p>
                            </div>
                
                            <div className='navbar-link' onClick={e => {
                                let a = document.getElementById("drinks");
                                e.preventDefault();
                                a && a.scrollIntoView({ behavior: "smooth", block: "start"});
                            }}>
                                <p>Drinks</p>
                            </div>
                            
                            <div className='navbar-link' onClick={e => {
                                let a = document.getElementById("menu-section");
                                e.preventDefault();
                                a && a.scrollIntoView({ behavior: "smooth", block: "start"});
                            }}>
                                <p>Menu</p>
                            </div>
                            <div className='navbar-link' onClick={e => {
                                let a = document.getElementById("app");
                                e.preventDefault();
                                a && a.scrollIntoView({ behavior: "smooth", block: "start"});
                            }}>
                                <p>App</p>
                            </div>
                        </>
                    }
                </div>
            </div>
    
            {/* This is for mobile navbar */}
            <div id='navbar-close'>
                <GiHamburgerMenu id='navbar-close-icon' onClick={handleOpen} />
            </div>
    
            <div id='navbar-open'>
                <AiOutlineClose id='navbar-open-icon' onClick={handleClose} />
    
                <div id='navbar-open-items'>
                    {menu ?
                        <>
                            <div className='navbar-open-item' onClick={e => {
                                if (menu) {
                                    window.location.href = '/';
                                    return;
                                }
                                handleClose(e);
                            }}>
                                <p>Home</p>
                            </div>

                            <div className='navbar-open-items-border'></div>

                            <div className='navbar-open-item' onClick={e => {
                                let a = document.getElementById("cocktails");
                                e.preventDefault();
                                a && a.scrollIntoView({ behavior: "smooth", block: "start"});
                                handleClose(e);
                            }}>
                                <p>Drinks</p>
                            </div>
            
                            <div className='navbar-open-items-border'></div>
            
                            <div className='navbar-open-item' onClick={e => {
                                let a = document.getElementById("food");
                                e.preventDefault();
                                a && a.scrollIntoView({ behavior: "smooth", block: "start"});
                                handleClose(e);
                            }}>
                                <p>Food</p>
                            </div>
                        </>
                        :
                        <>
                            <div className='navbar-open-item' onClick={e => {
                                let a = document.getElementById("popular");
                                e.preventDefault();
                                a && a.scrollIntoView({ behavior: "smooth", block: "start"});
                                handleClose(e);
                            }}>
                                <p>Popular</p>
                            </div>
            
                            <div className='navbar-open-items-border'></div>
            
                            <div className='navbar-open-item' onClick={e => {
                                let a = document.getElementById("drinks");
                                e.preventDefault();
                                a && a.scrollIntoView({ behavior: "smooth", block: "start"});
                                handleClose(e);
                            }}>
                                <p>Drinks</p>
                            </div>
            
                            <div className='navbar-open-items-border'></div>
            
                            <div className='navbar-open-item' onClick={e => {
                                let a = document.getElementById("menu-section");
                                e.preventDefault();
                                a && a.scrollIntoView({ behavior: "smooth", block: "start"});
                                handleClose(e);
                            }}>
                                <p>Menu</p>
                            </div>
                            
                            <div className='navbar-open-items-border'></div>
                            
                            <div className='navbar-open-item' onClick={e => {
                                let a = document.getElementById("app");
                                e.preventDefault();
                                a && a.scrollIntoView({ behavior: "smooth", block: "start"});
                                handleClose(e);
                            }}>
                                <p>App</p>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar;