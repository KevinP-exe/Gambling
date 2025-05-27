import React from "react"
import "./Navbar.css";

import img1 from "../imgs/casinologo.png"
import img2 from "../imgs/casa.png"
import img3 from "../imgs/customers.png"
import img4 from "../imgs/games.png"

const Nav = () => {
    return (
        <nav>
            <div id="bar">
                <div>
                    <img src={img1} id="logo"/>
                </div>
                <ul>
                    <li>
                        <a href="/">Inicio
                        <img src={img2}/></a>
                    </li>
                    <li>
                        <a href="/Customers">Clientes
                        <img src={img3}/></a>
                    </li>
                    <li>
                        <a href="/Games">Games
                        <img src={img4}/></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;