import { useState, useEffect } from "react";
import { IMG_URL } from "../../src/utils/constant.js";

const WhatInMind = () => {
  const [foodType, setFoodType] = useState([]);

  console.log(foodType);

  useEffect(() => {
    getItemType();
  }, []);

  const getItemType = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const itemTypeData = json?.data?.cards[1]?.card?.card?.imageGridCards?.info;
    setFoodType(itemTypeData);
  };

  return (
    <div className="whatInMindConatiner">
      <h1>Hello form what in my mind </h1>
      {foodType.map((img) => {
        return (
          <img
            src={IMG_URL + img.imageId}
            key={img.id}
            width={100}
            height={100}
          />
        );
      })}
      {/* {foodType.map((item) => {
        return <p key={item.id}>{item.action.text}</p>;
      })} */}
    </div>
  );
};

export default WhatInMind;
