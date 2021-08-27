import React from "react";
import "./main.css";

import Header from "./../components/Header/Header";
import Popular from "../components/Popular/Popular";
import Drinks from "../components/Drinks/Drinks";
import About from "../components/About/About";

function Home() {
    return (
        <div>
            <div>
                <Header />
                <Popular /> 
                <Drinks />
                <About />
            </div>
            
        </div>
    )
}

export default Home;