import React, { useRef, useState } from "react";
// import { motion, useAnimation } from 'framer-motion/dist/framer-motion'
import "./style.css";

import DrinkCard from "../DrinkCard/DrinkCard";

function Popular() {
    const [currentDrink, setCurrentDrink] = useState(0);

    const firstRef = useRef();
    const secondRef = useRef();
    const thirdRef = useRef();
    const fourthRef = useRef();

    const setActive = (position) => {
        if (currentDrink !== 0) revertPrev();
        if (position === currentDrink) {
            // this runs to clear the current item being viewed, but it also does not continue to the if statement, otherwise the item will stay
            revertPrev();
            return;
        }

        if (position === 1) {
            firstRef.current.style.gridRow = 1; 
            firstRef.current.style.gridColumn = 'span 4';
        } else if (position === 2) {
            secondRef.current.style.gridRow = 1;
            secondRef.current.style.gridColumn = 'span 4';
        } else if (position === 3) {
            thirdRef.current.style.gridRow = 1;
            thirdRef.current.style.gridColumn = 'span 4';
        } else if (position === 4) {
            fourthRef.current.style.gridRow = 1;
            fourthRef.current.style.gridColumn = 'span 4';
        }
        setCurrentDrink(position)
    }

    const revertPrev = () => {
        if (currentDrink === 1) {
            firstRef.current.style.gridRow = 2; 
            firstRef.current.style.gridColumn = 1; 
        } else if (currentDrink === 2) {
            secondRef.current.style.gridRow = 2;
            secondRef.current.style.gridColumn = 2; 
        } else if (currentDrink === 3) {
            thirdRef.current.style.gridRow = 2;
            thirdRef.current.style.gridColumn = 3; 
        } else if (currentDrink === 4) {
            fourthRef.current.style.gridRow = 2;
            fourthRef.current.style.gridColumn = 4; 
        }

        setCurrentDrink(0);
    }

    return (
        <div id="popular">
            <div id='drink-container'>
                <div 
                    id="first-drink" 
                    className="card-container" 
                    ref={firstRef} 
                    onClick={() => setActive(1)}>
                    <DrinkCard currentDrink={currentDrink} order={1} />
                </div>
                <div 
                    id="second-drink" 
                    className="card-container" 
                    ref={secondRef} 
                    onClick={() => setActive(2)}>
                    <DrinkCard currentDrink={currentDrink} order={2} />
                </div>
                <div 
                    id="third-drink" 
                    className="card-container" 
                    ref={thirdRef} 
                    onClick={() => setActive(3)}>
                    <DrinkCard currentDrink={currentDrink} order={3} />
                </div>
                <div 
                    id="fourth-drink" 
                    className="card-container" 
                    ref={fourthRef} 
                    onClick={() => setActive(4)}>
                    <DrinkCard currentDrink={currentDrink} order={4} />
                </div>
            </div>
        </div>
    )
}

export default Popular;