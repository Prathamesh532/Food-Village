import React from "react";
import { IMG_URL } from "../utils/constant";

const Card = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, areaName, cuisines, avgRating } =
    resData?.info;
  console.log(name);
  return (
    <div className="card-container">
      <img
        className="card-img"
        src={`${IMG_URL}${cloudinaryImageId}`}
        alt="card-img"
      />
      <div className="resName">
        <span className="title"> {name} </span>
        <span className="rating"> {avgRating} ⭐</span>
      </div>

      <span className="cuisines">{cuisines.join(", ")}</span>
      <h4>{areaName}</h4>
    </div>
  );
};

export default Card;
