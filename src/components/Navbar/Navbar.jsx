import React, { useState } from "react";
import "./navbar.scss";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";

const Navbar = () => {
  const [menu, setmenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Shopper</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setmenu("Shop");
          }}
        >
          Shop
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("Mens");
          }}
        >
          Men {menu === "Mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("Womens");
          }}
        >
          Women {menu === "Womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("Kids");
          }}
        >
          Kids {menu === "Kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className="cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
