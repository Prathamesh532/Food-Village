import Shrimmer from "./Shrimmer";
import { useParams } from "react-router-dom";
import useMenu from "../utils/useMenu";
import { IMG_URL } from "../utils/constant";

const RestrauntMenu = () => {
  const { resId } = useParams();
  const resInfo = useMenu(resId);

  console.log(resId);

  if (resInfo === null) return <Shrimmer />;

  const { name } = resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div className="">
      <h1 className="text-center test-[44px] font-serif">{name}</h1>

      <div className=" w-6/12 m-auto  p-3 ">
        {itemCards.map((img) => {
          return (
            <div
              key={img.card.info.id}
              className="flex justify-between border-b-2 my-3 border-gray-400 "
            >
              <div>
                <p key={img.card.info.id}>{img.card.info.name}</p>
              </div>
              <div className="p-2 rounded-lg">
                <img
                  className="w-[100px] h-[80px] object-cover"
                  key={img.card.info.id}
                  src={`${IMG_URL}${img.card.info.imageId}`}
                />
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default RestrauntMenu;
