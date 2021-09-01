import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function IngName({ drink }) {
    const [newData, setNewData] = useState([])
    const [state, setState] = useState("normal")

    useEffect(() => {
        getNewData()
    }, [])

    const getNewData = () => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`)
        .then((res) => {
            setNewData(res.data.drinks[0])
            console.log(res.data.drinks[0])
        })
    }

    const setIngredients = () => {
        let arr = []
        for(let i = 0; i < 15; i++){
            let ing = `strIngredient${i+1}`
            let mea = `strMeasure${i+1}`

            if(newData[ing] != null && newData[mea] != null){
                arr.push([newData[ing], newData[mea]])
            } else if(newData[mea] == null && newData[ing] != null){
                arr.push([newData[ing]])
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

    return(
        <div>
            {/* {drink.strDrink}
            {getNewData()} */}
            {
                state === "normal" ?
                <button className="ingName" onClick={() => setState("clicked")}>
                    <div className="ingState">
                        <img src={newData.strDrinkThumb} alt={`${newData.strDrink}`}/>
                        <p>{newData.strDrink}</p>
                        <p>{newData.strAlcoholic}</p>
                    </div>
                </button>
                :
                <button className="ingNameLook" onClick={() => setState("normal")}>
                    <div className="ingStateLook">
                        <p className="ingStateTitle">{newData.strDrink}</p>
                        <div className="ingStateIngs">
                            <p><strong>Ingredients</strong></p>
                            <ul className="ingStateIng">
                                {getIngredients()}
                            </ul>
                        </div>
                        
                        <p className="ingStateInstr">{newData.strInstructions}</p>
                    </div>
                </button>
            }
        </div>
    )
}

export default IngName;