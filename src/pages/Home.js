import React from "react";
import "./main.css";

import Header from "./../components/Header/Header";
import Popular from "../components/Popular/Popular";
import Drinks from "../components/Drinks/Drinks";
import About from "../components/About/About";
import Navbar from "../components/Navbar/Navbar";

function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <Popular /> 
            <Drinks />
            <About />
            
        </div>
    )
}

export default Home;