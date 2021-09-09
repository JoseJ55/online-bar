import React from "react";
import "./style.css";

import DrinkName from "../DrinkName/DrinkName";

function DrinksSearch({ type, data, focusRef }) {
    return (
        <div id="drinksSearch" ref={focusRef}>
            {data.map((drink) => {
                return <DrinkName
                    type={type}
                    drink={drink}
                />
            })} 
        </div>
    )
}

export default DrinksSearch;