import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <h1>Food Village</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Foods</li>
          <li>Restraunts</li>
          <li>My Cart</li>
          <button className="orderBtn">Order Now</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
