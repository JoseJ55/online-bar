import React from "react";
import "./style.css";

import DrinkName from "../DrinkName/DrinkName";

function DrinksSearch({ data }) {

    return (
        <div id="drinksSearch">
            {data.map((drink) => {
                return <DrinkName
                    drink={drink}
                />
            })}
        </div>
    )
}

export default DrinksSearch;