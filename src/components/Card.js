import React from "react";
import { IMG_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, areaName, cuisines, avgRating, id } =
    resData?.info;

  return (
    <div className="flex flex-wrap w-[250px] h-[380px] rounded-[25px] gap-0 shadow-xl">
      <img
        className="w-[100%] h-[50%] rounded-t-[25px]"
        src={`${IMG_URL}${cloudinaryImageId}`}
        alt="card-img"
      />
      <div className="flex justify-between items-center w-[100%]">
        <Link to={"/restraunt/" + id}>
          <span className="px-2 pt-0 font-bold text-black text-[16px]">
            {name}
          </span>
        </Link>
        <span className="px-2"> {avgRating} ⭐</span>
      </div>

      <p className=" text-gray-700 font-sans w-[100%] px-1 text-[12px] font-medium ">
        {cuisines.join(", ")}
      </p>
      <h4 className="text-center text-[14px] w-[100%]">{areaName}</h4>
      <button className="bg-green-500 px-5 w-[90%] h-[50px] mx-auto border-none rounded-lg text-white font-semibold">
        Vist Restraunt
      </button>
    </div>
  );
};

//HOC higher order componenets :
export const promotedRestraunts = (Card) => {
  return (props) => {
    // console.log(props.resData.info.aggregatedDiscountInfoV2.header);
    return (
      <div>
        {/* {props.resData.info.aggregatedDiscountInfoV2 ||
        props.resData.info.aggregatedDiscountInfoV3 ? (
          <p>{props.resData.info.aggregatedDiscountInfoV3.header}</p>
        ) : (
          <p></p>
        )} */}
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
