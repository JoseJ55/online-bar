import React, { useRef, useState } from "react";
import "./style.css";

import DrinkCard from "../DrinkCard/DrinkCard";

export default function Popular() {
    const [currentDrink, setCurrentDrink] = useState(0);
    const [drinkInfo, setDrinkInfo] = useState(null);

    const containerRef = useRef();
    const infoRef = useRef();
    const cardRefs = [useRef(), useRef(), useRef(), useRef()];

    const setActive = (position) => {
        if (currentDrink !== 0) revertPrev();
        if (position === currentDrink) {
            revertPrev();
            return;
        }

        cardRefs[position - 1].current.style.top = '-100%';
        infoRef.current.style.transform = 'translateY(calc(-100% - 10px))';

        setCurrentDrink(position)
    }

    const revertPrev = () => {
        cardRefs[currentDrink - 1].current.style.top = '0%';
        infoRef.current.style.transform = 'translateY(0%)';

        setDrinkInfo(null);
        setCurrentDrink(0);
    }

    const setIngredients = (drink) => {
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

    const getIngredients = (drink) => {
        let ingredients = setIngredients(drink)

        return ingredients.map((data) => {
            if(data.length < 2){
                return <li>{data[0]}</li>
            } else {
                return <li>{data[0]} - {data[1]}</li>
            }
        })
    }

    return (
        <div id="popular">
            <div id='drink-container' ref={containerRef}>
                <div id="drink-info" ref={infoRef}>
                {drinkInfo && <>
                    <div id="drink-image">
                        <img src={drinkInfo?.strDrinkThumb} alt={`${drinkInfo?.strDrink}`}/>
                    </div>
                    <div id="info">
                        <div id="info-name">
                            <p>{drinkInfo?.strDrink}</p>
                        </div>
                        <div id="info-ing">
                            {getIngredients(drinkInfo)}
                        </div>
                        <div id="info-instructions">
                            <p>{drinkInfo?.strInstructions}</p>
                        </div>
                    </div>
                </>}
                </div>

                {cardRefs.map((cardRef, index) => (
                    <div
                        key={index}
                        id={`drink${index + 1}`}
                        className="card-container"
                        ref={cardRef}
                        onClick={() => setActive(index + 1)}
                    >
                        <DrinkCard currentDrink={currentDrink} order={index + 1} setDrinkInfo={setDrinkInfo} />
                    </div>
                ))}
            </div>
        </div>
    )
}