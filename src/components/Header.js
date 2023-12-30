import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center m-2">
      <div className="flex justify-between items-center h-16 bg-green-400 w-[75%] rounded-[50px] px-3">
        <div className="">
          <h1 className="">
            <span className="text-orange-400 font-bold	text-[24px]">Food</span>{" "}
            <span className="text-green-900 font-bold text-[24px]">Village</span>
          </h1>
        </div>
        <div className="">
          <ul className="flex gap-8 items-center">
            <li className="font-medium">
              <Link to="/">Home</Link>{" "}
            </li>
            <li className="font-medium">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="font-medium">
              <Link to="/about">About</Link>
            </li>
            <li className="font-medium ">My Cart</li>
            <button className="bg-orange-500 p-2 rounded-[24px] px-4 text-white font-bold hover:bg-orange-600" >Order Now</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
