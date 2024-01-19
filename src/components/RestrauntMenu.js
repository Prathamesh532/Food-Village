import Shrimmer from "./Shrimmer";
import { useParams } from "react-router-dom";
import useMenu from "../utils/useMenu";
import { IMG_URL } from "../utils/constant";
import ItemsCatogry from "./ItemsCatogry";
import { useState } from "react";

const RestrauntMenu = () => {
  const [isShow, setIsShow] = useState(0);

  const { resId } = useParams();
  const resInfo = useMenu(resId);

  if (resInfo === null) return <Shrimmer />;

  const { name } = resInfo?.cards[0]?.card?.card?.info;
  const itemListCatogry =
    resInfo.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="">
      <h1 className="text-center text-[24px] font-serif">{name}</h1>

      <div className="">
        {itemListCatogry.map((data , index) => {
          return (
            <div className="flex justify-center" key={data.card.card.title}>
              <ItemsCatogry
                isShow={isShow === index ? true : false }
                data={data}
                setIsShow={() => setIsShow(index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestrauntMenu;
