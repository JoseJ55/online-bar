import React from "react";
import "./style.css";

import DrinkCard from "../DrinkCard/DrinkCard";

function Popular() {
    return (
        <div id="popular">
            <p id="popular-title">Popular</p>
            <DrinkCard />
            {/* <DrinkCard />
            <DrinkCard />
            <DrinkCard />
            <DrinkCard />
            <DrinkCard /> */}
        </div>
    )
}

export default Popular;