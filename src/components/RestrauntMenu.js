import { useState, useEffect } from "react";
import Shrimmer from "./Shrimmer";
import { useParams } from "react-router-dom";

const RestrauntMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams()
  console.log(resId)

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1854128&lng=73.0203382&restaurantId=" + resId + "&catalog_qa"
    );

    const json = await data.json();
    setResInfo(json?.data);
  };

  if (resInfo === null) return <Shrimmer />;

  const { name } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div>
      <h1>RestrauntMenu</h1>
      <h2>{name}</h2>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} Rs: {item.card.info.price/100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestrauntMenu;
