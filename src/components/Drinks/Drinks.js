import React, { useState, useRef } from 'react';
import axios from 'axios';
import './style.css';

import DrinksSearch from '../DrinksSearched/DrinksSearch';

function Drinks() {
    const [type, setType] = useState('name');
    const [text, setText] = useState('');
    const [searched, setSearched] = useState(false);
    const [data, setData] = useState({});
    const focusRef = useRef(null);

    const textEmpty = () => {
        // e.preventDefault();
        setText('');
    };

    const test = () => {
        setSearched(false);
        if (type === 'name') {
            axios
                .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`)
                .then((res) => {
                    setData(res.data.drinks);
                    setSearched(true);
                    console.log(res.data.drinks);
                });
        } else if (type === 'ingredent') {
            axios
                .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${text}`)
                .then((res) => {
                    setData(res.data.drinks);
                    setSearched(true);
                    console.log(res.data.drinks);
                });
        }
    };

    return (
        <div id="drinks">
            <p id="drinkTitle">Search Drink</p>
            <form id="drinkSearch">
                <select id="searchType" onChange={(value) => setType(value.target.value)}>
                    <option className="op" value="name">
                        Name
                    </option>
                    <option className="op" value="ingredent">
                        Ingredent
                    </option>
                </select>

                <input
                    id="searchInput"
                    type="text"
                    placeholder="Enter name or ingredent..."
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                />

                <input
                    id="searchButton"
                    type="button"
                    value="Search"
                    onClick={() => {
                        test();
                        textEmpty();
                    }}
                />
            </form>
            {
                // need to get focus on results when search.
                searched ? <DrinksSearch type={type} data={data} focusRef={focusRef} /> : <p></p>
            }
        </div>
    );
}

export default Drinks;
