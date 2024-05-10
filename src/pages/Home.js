import React from 'react';
import './main.css';

import Header from './../components/Header/Header';
import Popular from '../components/Popular/Popular';
import Navbar from '../components/Navbar/Navbar';
import MenuSection from '../components/MenuSection/MenuSection';
import App from '../components/App/App';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Popular />
      <MenuSection />
      <App />
      <Footer />
    </div>
  );
}

export default Home;
