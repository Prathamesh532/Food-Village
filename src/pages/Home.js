import React from "react";
import foodPlate from "../assests/img/Food-Plate.png";

const Home = () => {
  return (
    <>
      <div className="flex justify-between px-[80px] my-6 items-center dark:text-white">
        <div className="">
          <span className="font-[700] text-[48px] block">We are ready to deliver </span>
          <span className="font-[700] text-[48px] block">your favorite food </span>
          <span className="font-[700] text-[48px]">item</span>
          <p className="text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim<br />
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo 
          </p>
          <button className="bg-green-600 text-white font-[400] rounded-md px-4 py-2 my-3 hover:bg-green-900 ">Quick Order</button>
        </div>

        <div className="w-[35%]">
          <img src={foodPlate} alt="Half Circle" />
        </div>
      </div>
    </>
  );
};

export default Home;
