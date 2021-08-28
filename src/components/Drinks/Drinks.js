import React, { useState } from "react";
import axios from "axios";
import "./style.css";

import DrinksSearch from "../DrinksSearched/DrinksSearch";

function Drinks() {
    const [type, setType] = useState("name");
    const [text, setText] = useState("")
    const [searched, setSearched] = useState(false)
    const [data, setData] = useState({})

    const test = () => {
        if(type === "name"){
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`)
            .then((res) => {
                setData(res.data.drinks)
                setSearched(true)
                console.log(res.data.drinks)
            }) 
        }
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
            {
                searched ?
                <DrinksSearch 
                    type={type}
                    data={data}
                />:
                <p></p>
            }
            
        </div>
    )
}

export default Drinks;