import React from 'react';

import Navbar from '../components/Navbar/Navbar';
import MenuInfo from '../components/MenuInfo/MenuInfo';
import Footer from '../components/Footer/Footer';

function Menu() {
    return (
        <div id="menu">
            <Navbar menu={true} />
            <MenuInfo />
            <Footer />
        </div>
    );
}

export default Menu;
