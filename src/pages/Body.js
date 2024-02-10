import React, { useState, useEffect } from "react";
import Card from "../components/Card";
// import Card, { promotedRestraunts } from "../components/Card";
import Shrimmer from "../components/Shrimmer";
import CarouselContainer from "../components/CarouselContainer";
import { RESTRAUNT_API } from "../utils/constant";
import useRestraunts from "../utils/useRestraunts";
import Search from "../assests/icons/Search.svg";
import Home from "./Home";

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
  const [restrauntLocation, setRestrauntLocation] = useState("");
  const [appliedFilter, setAppliedFilter] = useState("");

  // const {listofRestraunts , filterRestrauntList } = useRestraunts()
  useEffect(() => {
    getResData();
  }, []);

  const getResData = async () => {
    const data = await fetch(RESTRAUNT_API);
    const json = await data.json();
    console.log(json);
    const location = json.data.cards[2].card.card.title;
    setRestrauntLocation(location);
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

  const handleTopRatingFilter = () => {
    let topRatingRes = listofRestraunts.filter(
      (res) => res.info.avgRating >= 4.5
    );
    setFilterRestrauntList(topRatingRes);
    setAppliedFilter("Rating 4.5 +");
  };

  const clearFilter = () => {
    setFilterRestrauntList(listofRestraunts);
    setAppliedFilter("");
    setSearchText("");
  };

  // const PromotedRestrauntCard = promotedRestraunts(Card);

  return listofRestraunts.length === 0 ? (
    <Shrimmer />
  ) : (
    <div className="dark:bg-[#040506]">
      <Home />
      <div className="p-[20px] m-3 ">
        <input
          className="border border-gray-200 rounded-[50px] px-10 py-2 w-[40%]"
          type="text"
          placeholder="Search Restraunts"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            handleSearch(e.target.value);
          }}
          name=""
        ></input>
      </div>
      {/* <CarouselContainer /> */}

      <div className="">
        <h2 className="pl-[10%] text-[24px] text-gray-600 font-bold my-[2rem]">
          {restrauntLocation}
        </h2>
      </div>

      <div className="pl-[10%] mb-7">
        {/* <button className="" onClick={() => setSearchText("")}>
          Clear
        </button> */}

        {/* <button
          className="w-[100px] p-[4px] text-sm text-black h-[38px] border border-gray-200 rounded-[20px]"
          onClick={() => {
            let topRatingRes = listofRestraunts.filter((res) => {
              return res.info.avgRating >= 4.5;
            });
            

            setFilterRestrauntList(topRatingRes);
          }}
        >
          Rating 4.5 +
        </button> */}
        <button
          className="w-[100px] p-[4px] text-sm text-black h-[38px] border border-gray-200 rounded-[20px]"
          onClick={() => handleTopRatingFilter()}
        >
          Rating 4.5 +
        </button>

        
        <button
          className="w-[100px] p-[4px] text-sm text-black h-[38px] border border-gray-200 rounded-[20px]"
          onClick={clearFilter}
        >
          Clear Filter
        </button>
      </div>

      {appliedFilter && (
        <div className="pl-[10%] mb-3">
          <p className="text-gray-600 text-sm font-bold">{`Applied Filter: ${appliedFilter}`}</p>
        </div>
      )}

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
    </div>
  );
};

export default Body;
