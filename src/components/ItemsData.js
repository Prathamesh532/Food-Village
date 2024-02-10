import { useDispatch } from "react-redux";
import { additem } from "../redux/cartSlice";

const ItemsData = ({ data }) => {
  const dispatch = useDispatch();

  const handleCartItems = (item) => {
    dispatch(additem(item));
  };

  return (
    <div className="">
      {data.card.card.itemCards.map((items) => {
        return (
          <div
            key={items.card.info.id}
            className="h-[120px] flex justify-between border-b-2 border-gray-200 my-5"
          >
            <div className="">
              <h3 className="font-bold text-[#3e4152]">
                {items.card.info.name}
              </h3>
              <span className="text-[14px] font-[400]">
                ₹{" "}
                {items.card.info.defaultPrice / 100 ||
                  items.card.info.price / 100}
              </span>
            </div>
            <div className="relative">
              <img
                className="h-[96px] w-[118px] object-cover rounded-lg"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${items.card.info.imageId}`}
              />
              <button
                className="w-[80%] font-semibold  border h-[34px] border-gray-200  absolute left-1/2 transform -translate-x-1/2 bottom-2 bg-white text-green-500 rounded-md hover:bg-green-500 hover:text-white"
                onClick={() => handleCartItems(items)}
              >
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsData;
