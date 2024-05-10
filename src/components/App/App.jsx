import React from 'react';
import './App.css';

function App() {
    return (
        <div id="app">
            <div id="app-info">
                <p>
                    Seamless Ordering with the <span id="app-name">Thirsty</span> App
                </p>
                <p id="app-sub-text">
                    Explore a diverse range of culinary delights and tantalizing drinks from the
                    comfort of your phone.
                </p>

                <div id="app-info-icons">
                    <img src="/images/google-play-icon.png" alt="icon for google play" />
                    <img src="/images/apple-store-icon.png" alt="icon for apple store" />
                </div>
            </div>

            <img src="/images/appOnPhone.png" alt="app on phone" id="app-image" />
        </div>
    );
}

export default App;
