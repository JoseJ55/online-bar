import React, { useRef } from "react";
import "./style.css";

import DrinkName from "../DrinkName/DrinkName";

function DrinksSearch({ data, focusRef }) {
    return (
        <div id="drinksSearch" ref={focusRef}>
            {data.map((drink) => {
                return <DrinkName
                    drink={drink}
                />
            })}
        </div>
    )
}

export default DrinksSearch;