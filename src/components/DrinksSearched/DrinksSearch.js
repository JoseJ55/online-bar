import React from "react";
import "./style.css";

import DrinkName from "../DrinkName/DrinkName";
import IngName from "../IngName/IngName";

function DrinksSearch({ type, data, focusRef }) {
    return (
        <div id="drinksSearch" ref={focusRef}>
            {
                type === "name" ?
                <div>
                    {data.map((drink) => {
                        return <DrinkName
                            drink={drink}
                        />
                    })} 
                </div>:
                <div>
                    {data.map((drink) => {
                        return <IngName
                            drink={drink}
                        />
                    })}
                </div>
            }
            
            
        </div>
    )
}

export default DrinksSearch;