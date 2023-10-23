import React, { useEffect, useState, useRef, memo } from "react";
import "./style.css";
import axios from "axios";

export default memo(function DrinkCard({ currentDrink, order }) {
    const cardRef = useRef();
    const imageRef = useRef();

    const [randomData, setRandomData] = useState({});
    const [showInfo, setShowInfo] = useState(false);

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

    useEffect(() => {
        if (currentDrink === order) {
            imageRef.current.style.gridRow = 1;
            imageRef.current.style.gridColumn = 1;
            setShowInfo(true);
        } else {
            imageRef.current.style.gridRow = 1;
            imageRef.current.style.gridColumn = '1/5';
            setShowInfo(false);
        }
    }, [currentDrink, order])

    return (
        <div id="drinkCard" ref={cardRef}>
            <div id="nameImg" ref={imageRef}>
                <img src={randomData.strDrinkThumb} alt={`${randomData.strDrink}`}/>
            </div>
            
            {showInfo && <div id="info">
                <div id="info-name">
                    <p>{randomData.strDrink}</p>
                </div>
                <div id="info-ing">
                    {getIngredients()}
                </div>
                <div id="info-instructions">
                    <p>{randomData.strInstructions}</p>
                </div>
            </div>}
        </div>
    )
});