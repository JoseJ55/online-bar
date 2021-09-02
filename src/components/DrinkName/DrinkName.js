import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function DrinkName({ type, drink }) {
    const [state, setState] = useState("normal")
    // const [newData, setNewData] = useState([])

    // useEffect(() => {
    //     getNewData()
    // }, [])

    // const getNewData = () => {
    //     axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`)
    //     .then((res) => {
    //         setNewData(res.data.drinks[0])
    //         console.log(res.data.drinks[0])
    //     })
    // }

    const setIngredients = () => {
        let arr = []
        for(let i = 0; i < 15; i++){
            let ing = `strIngredient${i+1}`
            let mea = `strMeasure${i+1}`

            if(drink[ing] != null && drink[mea] != null){
                arr.push([drink[ing], drink[mea]])
            } else if(drink[mea] == null && drink[ing] != null){
                arr.push([drink[ing]])
            }
        }

        return arr;
    }

    const getIngredients = () => {
        let ingredients = setIngredients()
        console.log(ingredients)

        return ingredients.map((data) => {
            console.log(data)
            console.log(data[0])
            if(data.length < 2){
                return <li>{data[0]}</li>
            } else {
                return <li>{data[0]} - {data[1]}</li>
            }
        })
    }

    return (
        <>
            {
                state === "normal" ?
                <button className="drinkName" onClick={() => setState("clicked")}>
                    <div className="drinkState">
                        <img src={drink.strDrinkThumb} alt={`${drink.strDrink}`}/>
                        <p>{drink.strDrink}</p>
                        <p>{drink.strAlcoholic}</p>
                    </div>
                </button>
                :
                <button className="drinkNameLook" onClick={() => setState("normal")}>
                    <div className="drinkStateLook">
                        <p className="drinkStateTitle">{drink.strDrink}</p>
                        <div className="drinkStateIngs">
                            <p><strong>Ingredients</strong></p>
                            <ul className="drinkStateIng">
                                {getIngredients()}
                            </ul>
                        </div>
                        
                        <p className="drinkStateInstr">{drink.strInstructions}</p>
                    </div>
                </button>
            }
        </>
    )
}

export default DrinkName;