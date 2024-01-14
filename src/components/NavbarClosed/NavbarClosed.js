import React from 'react'

function NavbarClosed() {
  return (
    <div id="nav-colapse">
        <div id="nav-colapse-top">
            <a href="/" id="nav-colapse-top-icon"><p>Gym</p></a>
            <button id="nav-colapse-top-btn">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>

        <ul id="nav-colapse-dropdown">
            <li id="colAboutLink">About</li>
            <li id="colTrainersLink">Trainers</li>
            <li id="colShopLink">Shop</li>
            <li id="colMemberLink">Membership</li>
        </ul>
    </div>
  )
}

export default NavbarClosed