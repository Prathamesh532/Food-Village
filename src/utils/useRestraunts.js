import { useState, useEffect } from "react";
import { RESTRAUNT_API } from "./constant";

const useRestraunts = () => {
  const [listofRestraunts, setListofRestraunts] = useState([]);
  const [filterRestrauntList, setFilterRestrauntList] = useState([]);

  useEffect(() => {
    getResData();
  }, []);

  const getResData = async () => {
    const data = await fetch(RESTRAUNT_API);
    const json = await data.json();
    const restaurants =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListofRestraunts(restaurants);
    setFilterRestrauntList(restaurants);
  };

  return { listofRestraunts, filterRestrauntList };
};

export default useRestraunts