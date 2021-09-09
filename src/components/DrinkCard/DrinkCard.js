import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

// import {searchRandom} from "./../../utils/API"

function DrinkCard() {
    const [randomData, setRandomData] = useState({})

    useEffect(() => {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then((data) => setRandomData(data.data.drinks[0]))
    }, [])

    const setIngredients = () => {
        let arr = []
        for(let i = 0; i < 15; i++){
            let ing = `strIngredient${i+1}`
            let mea = `strMeasure${i+1}`

            if(randomData[ing] != null && randomData[mea] != null){
                arr.push([randomData[ing], randomData[mea]])
            } else if(randomData[mea] == null && randomData[ing] != null){
                arr.push([randomData[ing]])
            }
        }
        return arr;
    }

    const getIngredients = () => {
        let ingredients = setIngredients()

        return ingredients.map((data) => {
            if(data.length < 2){
                return <li>{data[0]}</li>
            } else {
                return <li>{data[0]} - {data[1]}</li>
            }
        })
    }

    return (
        <div id="drinkCard">
            <div id="nameImg">
                <p>{randomData.strDrink} - ({randomData.strAlcoholic})</p>
                <img src={randomData.strDrinkThumb} alt={`${randomData.strDrink}`}/>
            </div>
            <div id="ingIns">
                <ul>
                    {getIngredients()}
                </ul>
                <p>{randomData.strInstructions}</p>
            </div>
            
        </div>
    )
}

export default DrinkCard;