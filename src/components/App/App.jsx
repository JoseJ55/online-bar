import { motion } from 'framer-motion';
import React from 'react';
import './App.css';

function App() {
  return (
    <div id="app">
      <div id="app-info">
        <p id="app-text">
          Seamless Ordering with the <span id="app-name">Thirsty</span> App
        </p>
        <p id="app-sub-text">
          Explore a diverse range of culinary delights and tantalizing drinks
          from the comfort of your phone.
        </p>

        <div id="app-info-icons">
          <motion.div className="app-info-icon" whileHover={{ scale: 1.1 }}>
            <img
              src="/images/google-play-icon.png"
              alt="icon for google play"
            />
          </motion.div>
          <motion.div className="app-info-icon" whileHover={{ scale: 1.1 }}>
            <img
              src="/images/apple-store-icon.png"
              alt="icon for apple store"
            />
          </motion.div>
        </div>
      </div>

      <img src="/images/appOnPhone.png" alt="app on phone" id="app-image" />
    </div>
  );
}

export default App;
