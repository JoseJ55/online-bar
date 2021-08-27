import React, { useState } from "react";
import "./style.css";

import DrinksSearch from "../DrinksSearched/DrinksSearch";

function Drinks() {
    const [type, setType] = useState("name");
    const [text, setText] = useState("")

    const test = () => {
        console.log(type)
        console.log(text)
    }

    return (
        <div id="drinks">
            <p>Search Drink</p>
            <form id="drinkSearch">
                <select 
                    id="searchType" 
                    onChange={(value) => setType(value.target.value)}
                >
                    <option value="name">Name</option>
                    <option value="ingredent">Ingredent</option>
                </select>

                <input 
                    id="searchInput"
                    type="text" 
                    placeholder="Enter name or ingredent..."
                    onChange={(e) => {setText(e.target.value)}}
                />

                <input
                    id="searchButton"
                    type="button"
                    value="Search"
                    onClick={() => test()}
                /> 
            </form>

            <DrinksSearch 
            
            />
        </div>
    )
}

export default Drinks;