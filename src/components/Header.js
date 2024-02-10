import React from "react";
import { Link } from "react-router-dom";
import useDark from "../utils/useDark";
import house from "../assests/icons/home.svg"
import cart from "../assests/icons/cart.svg"
import contact from "../assests/icons/contact.svg"
import cart from "../assests/icons/cart.svg"
import user from "../assests/icons/user.svg"

import {additem , removeItem , clearCart} from "../redux/cartSlice"
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [theme, setTheme] = useDark();

  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems)

  const handleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex justify-center m-2 dark:text-white dark:bg-slate-950">
      <div className="flex justify-between items-center h-16 bg-green-400 w-[75%] rounded-[50px] px-3 dark:bg-slate-600">
        <div className="">
          <h1 className="">
            <span className="text-orange-400 font-bold	text-[24px]">Food</span>{" "}
            <span className="text-green-900 font-bold text-[24px]">
              Village
            </span>
          </h1>
        </div>
        <div className="">
          <ul className="flex gap-8 items-center">
            <li className="font-medium">
              <Link to="/" className="flex items-center"><img src={house} className="mx-2" />Home</Link>{" "}
            </li>
            <li className="font-medium">
              <Link to="/contact" className="flex items-center"><img src={contact} className="mx-2" />Contact</Link>
            </li>
            <li className="font-medium">
              <Link to="/about" className="flex items-center"><img src={cart} className="mx-2" />About</Link>
            </li>
            <li className="font-medium "><Link to='/cart' className="flex items-center"><img src={cart} className="mx-2" />{cartItems.length} Cart</Link></li>
            {/* <button className="bg-orange-500 p-2 rounded-[24px] px-4 text-white font-bold hover:bg-orange-600">
              Order Now
            </button> */}
          </ul>
        </div>
        <div className="">
          <button className="flex items-center bg-orange-500 p-2 rounded-[24px] px-4 text-white font-bold hover:bg-orange-600"><img src={user} className="pr-3" />Login</button>
        </div>
        <div>
          <button onClick={handleDarkMode}>{theme === "light" ? "Dark" : "Light"}</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
