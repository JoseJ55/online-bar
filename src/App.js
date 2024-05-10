import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Menu from './pages/Menu';

function App() {
  return (
    <Router>
      <Routes> 
      <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
    </Routes>
    </Router>
  );
}

export default App;
