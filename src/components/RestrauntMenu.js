import Shrimmer from "./Shrimmer";
import { useParams } from "react-router-dom";
import useMenu from "../utils/useMenu";

const RestrauntMenu = () => {
  const { resId } = useParams();

  const resInfo = useMenu(resId);

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
              {item.card.info.name} Rs: {item.card.info.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestrauntMenu;
