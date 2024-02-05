import React, { useRef, useState } from "react";
import "./style.css";

import DrinkCard from "../DrinkCard/DrinkCard";

export default function Popular() {
    const [currentDrink, setCurrentDrink] = useState(0);
    const [drinkInfo, setDrinkInfo] = useState(null);

    const containerRef = useRef();
    const infoRef = useRef();
    const cardRefs = [useRef(), useRef(), useRef(), useRef()];
    const infoImageRef = useRef();
    const infoCoverRef = useRef();

    const setActive = async (position) => {
        if (position === currentDrink) return;
        if (currentDrink !== 0) await revertPrev();

        infoRef.current.style.gridTemplateRows = `${cardRefs[0].current.offsetHeight}px`;
        cardRefs[position - 1].current.classList.add('animate');
        setTimeout(() => {
            infoImageRef.current.classList.add('animate');
            infoCoverRef.current.classList.add('animate');
        }, 1000) // This needs a timeout for the same time it takes to animate the opacity change in css through the animate class.

        setCurrentDrink(position)
    }

    const revertPrev = async () => {
        infoRef.current.style.gridTemplateRows = '10px';
        cardRefs[currentDrink - 1].current.classList.remove('animate');

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

        return ingredients.map((data, index) => {
            if(data.length < 2){
                return <li key={index}>{data[0]}</li>
            } else {
                return <li key={index}>{data[0]} - {data[1]}</li>
            }
        })
    }

    return (
        <div id="popular">
            <div id='drink-container' ref={containerRef}>
                <div id="drink-info" ref={infoRef}>
                {drinkInfo && <>
                    <div id="drink-image" onClick={async () => await revertPrev()}>
                        <img src={drinkInfo?.strDrinkThumb} ref={infoImageRef} alt={`${drinkInfo?.strDrink}`}/>
                    </div>
                    <div id="info">
                        <div id="info-cover" ref={infoCoverRef}></div>
                        <div id="info-name">
                            <p>{drinkInfo?.strDrink}</p>
                        </div>
                        <div id="info-desc">
                            <div id="info-ing">
                                <p id="info-title">Ingredients</p>
                                {getIngredients(drinkInfo)}
                            </div>
                            <div id="info-instructions">
                                <p id="info-title">Method</p>
                                <p>{drinkInfo?.strInstructions}</p>
                            </div>
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