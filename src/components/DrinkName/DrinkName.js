import React, { useState } from "react";
import "./style.css";

function DrinkName({ drink }) {
    const [state, setState] = useState("normal")
    // find out how to get ingredients for drink
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
            // else {
            //     if (drink[ing] == null){
            //         arr.push([drink[ing]])
            //     } else if (drink[mea] == null){
            //         arr.push([drink])
            //     }
            // }
            
        }

        return arr;
    }

    const getIngredients = () => {
        let ingredients = setIngredients()
        console.log(ingredients)

        // const ingArr = 
        return ingredients.map((data) => {
            console.log(data)
            console.log(data[0])
            if(data.length < 2){
                // return(
                    return <li>{data[0]}</li>
                // )
            } else {
                // return (
                     return <li>{data[0]} - {data[1]}</li>
                // )
            }
        })

        // return (
        //     <ul>
        //         {ingArr}
        //     </ul>
        // )
        // for(let i = 0; i < ingredients.length; i++){
        //     console.log(ingredients[i].length)
        //     if(ingredients[i].length < 2){
        //         return(
        //             <li>{ingredients[i][0]}</li>
        //         )
        //     } else {
        //         return (
        //             <li>{ingredients[i][0] - ingredients[i][1]}</li>
        //         )
        //     }
        // }
        
        // Object.keys(drink).map(data => {
        //     let ing;
        //     let mea;

        //     if(data.includes("strIngredient")){
        //         if(drink[data] != null){
        //             console.log(drink[data])
        //             ing = drink[data]
        //         }
        //     } else if (data.includes("strMeasure")){
        //         if(drink[data] != null){
        //             console.log(drink[data])
        //             mea = drink[data]
        //         }
        //     }
            
        //     if(mea < ing){
        //         return(
        //             <li>{ing}</li>
        //         )
        //     } else{
        //        return(
        //             <li>{ing} - {mea}</li>
        //         ) 
        //     }
        // })
    }
    return (
        // <button className="drinkName" onClick={() => setState("clicked")}>
        //     {
        //     state === "normal" ? 
        //     <div className="drinkState">
        //         <img src={drink.strDrinkThumb} alt={`${drink.strDrink}`}/>
        //         <p>{drink.strDrink}</p>
        //         <p>{drink.strAlcoholic}</p>
        //     </div>:
        //     <div className="drinkStateLook">
        //         <p>{drink.strDrink}</p>
        //     </div>
        //     }   
        // </button>
        <>
            {
                state === "normal" ?
                <button className="drinkName" onClick={() => setState("clicked")}>
                    <div className="drinkState">
                        <img src={drink.strDrinkThumb} alt={`${drink.strDrink}`}/>
                        <p>{drink.strDrink}</p>
                        <p>{drink.strAlcoholic}</p>
                    </div>
                </button>:
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