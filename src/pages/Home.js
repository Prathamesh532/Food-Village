import React from "react";
import foodPlate from "../assests/img/Food-Plate.png";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-left">
          <span className="homw-word">We are ready to deliver</span>
          <span className="homw-word">your favorite food</span>
          <span className="homw-word">item</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo 
          </p>
          <button className="orderBtn">Quick Order</button>
        </div>

        <div className="home-right">
          <img src={foodPlate} alt="Half Circle" />
        </div>
      </div>
    </>
  );
};

export default Home;
