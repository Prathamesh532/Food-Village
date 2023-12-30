import React, { useState, useEffect } from "react";
import Card from "../components/Card";
// import Card, { promotedRestraunts } from "../components/Card";
import Shrimmer from "../components/Shrimmer";
import CarouselContainer from "../components/CarouselContainer";
import { RESTRAUNT_API } from "../utils/constant";
import useRestraunts from "../utils/useRestraunts";

const filterRestraunts = (restarunts, text) => {
  const filterRes = restarunts.filter((res) =>
    res.info.name.toLowerCase().includes(text.toLowerCase())
  );
  return filterRes;
};

const Body = () => {
  const [listofRestraunts, setListofRestraunts] = useState([]);
  const [filterRestrauntList, setFilterRestrauntList] = useState([]);
  const [searchText, setSearchText] = useState("");

  // const {listofRestraunts , filterRestrauntList } = useRestraunts()
  useEffect(() => {
    getResData();
  }, []);

  const getResData = async () => {
    const data = await fetch(RESTRAUNT_API);
    const json = await data.json();
    // console.log(json)
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListofRestraunts(restaurants);
    setFilterRestrauntList(restaurants);
    console.log(restaurants);
  };

  const handleSearch = (text) => {
    const filterFunction = filterRestraunts(listofRestraunts, text);
    setFilterRestrauntList(filterFunction);
  };

  // const PromotedRestrauntCard = promotedRestraunts(Card);

  return listofRestraunts.length === 0 ? (
    <Shrimmer />
  ) : (
    <>
      <div className="p-[20px] m-3">
        <input
          className="border border-gray-200 rounded-[5px] px-3"
          type="text"
          placeholder="Search Restaurants.."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            handleSearch(e.target.value);
          }}
        ></input>

        <button
          className="px-[10px] m-4 rounded-md text-white bg-orange-300"
          onClick={() => setSearchText("")}
        >
          Clear
        </button>

        <button
          className="bg-red-500 text-black px-2 m-3 py-2 rounded-lg"
          onClick={() => {
            let topRatingRes = listofRestraunts.filter((res) => {
              return res.info.avgRating >= 4.2;
            });

            setFilterRestrauntList(topRatingRes);
          }}
        >
          Top Rated
        </button>
      </div>
      {/* <CarouselContainer /> */}

      <div className="flex flex-wrap gap-8 justify-center ">
        {filterRestrauntList.map((restaurant) => (
          <Card resData={restaurant} key={restaurant.info.id} />
        ))}

        {/* {filterRestrauntList.map((restaurant) =>
          restaurant.info.aggregatedDiscountInfoV3 || restaurant.info.aggregatedDiscountInfoV2 ? (
            <PromotedRestrauntCard key={restaurant.info.id} resData={restaurant} />
          ) : (
            <Card resData={restaurant} key={restaurant.info.id} />
          )
        )} */}
      </div>
    </>
  );
};

export default Body;
