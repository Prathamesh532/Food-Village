import React from "react";
import { IMG_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, areaName, cuisines, avgRating,id } =
    resData?.info;
  
  return (
    <div className="card-container">
      <img
        className="card-img"
        src={`${IMG_URL}${cloudinaryImageId}`}
        alt="card-img"
      />
      <div className="resName">
      <Link to={'/restraunt/'+id}><span className="title"> {name} </span></Link>
        <span className="rating"> {avgRating} ⭐</span>
      </div>

      <span className="cuisines">{cuisines.join(", ")}</span>
      <h4>{areaName}</h4>
    </div>
  );
};

export default Card;
