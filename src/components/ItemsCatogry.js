// import { IMG_URL } from "../utils/constant";
import React , {useState} from "react";
import UpArrow from "../assests/img/upArrow.svg"
import DownArrow from "../assests/img/DownArrow.svg"

import ItemsData from "./ItemsData";

const ItemsCatogry = ({ data , isShow , setIsShow }) => {


  const handleAccordion = () => {
    setIsShow()
  }

  return (
    <div className="w-7/12 border-b-[15px] border-gray-200 my-[10px] py-5 px-2 ">
      {/* Header part of accordion */}
      <div className="flex justify-between mb-4 cursor-pointer" onClick={handleAccordion}>
        <span className="text-[18px] text-[#3e4152] font-[800]">
          {data.card.card.title} ({data.card.card.itemCards.length})
        </span>
        <div className="cursor-pointer w-[23px]"><img className="w-[23px]" src={isShow ? DownArrow : UpArrow } /></div>
      </div>

      {/* Body part of Accrodion */}
      {isShow && <div>
        <ItemsData data={data} />
      </div>}
    </div>
  );
};

export default ItemsCatogry;
