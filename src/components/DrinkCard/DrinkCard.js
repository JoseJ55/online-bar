import React, { useEffect, useState, useRef, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './style.css';
import axios from 'axios';

export default memo(function DrinkCard({ currentDrink, order, setDrinkInfo }) {
  const cardRef = useRef();
  const imageRef = useRef();

  const [randomData, setRandomData] = useState({});

  useEffect(() => {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((data) => setRandomData(data.data.drinks[0]));
  }, []);

  useEffect(() => {
    if (currentDrink === order) {
      setDrinkInfo(randomData);
    }
  }, [currentDrink, order]);

  return (
    <AnimatePresence>
      <motion.div
        id="drinkCard"
        ref={cardRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div id="nameImg" ref={imageRef}>
          <img src={randomData.strDrinkThumb} alt={`${randomData.strDrink}`} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
});
