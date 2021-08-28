import React from "react";
import "./style.css";

function DrinkName({ drink }) {
    // find out how to get ingredients for drink
    // const getIngredients = () => {
    //     let num = 1;
    //     console.log(Object.keys(drink).length)
    //     for(let i = 0; i < Object.keys(drink).length; i++){
    //         console.log(Object.keys(drink).values)
    //     }

    // }
    // getIngredients();
    return (
        <div id="drinkName">
            <img src={drink.strDrinkThumb} alt={`${drink.strDrink}`}/>
            <p>{drink.strDrink}</p>
            <p>{drink.strAlcoholic}</p>
        </div>
    )
}

export default DrinkName;