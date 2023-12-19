import React, { useState, useEffect } from "react";
import Card from "./Card";
import Shrimmer from "./Shrimmer";

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

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1854128&lng=73.0203382&page_type=DESKTOP_WEB_LISTING"
    // );
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559"
    );

    const json = await data.json();
    const restaurants =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListofRestraunts(restaurants);
    setFilterRestrauntList(restaurants);
  };

  const handleSearch = (text) => {
    const filterFunction = filterRestraunts(listofRestraunts, text);
    setFilterRestrauntList(filterFunction);
  };

  return listofRestraunts.length === 0 ? (
    <Shrimmer />
  ) : (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Restaurants.."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            handleSearch(e.target.value);
          }}
        ></input>

        <button onClick={() => setSearchText("")}>Clear</button>

        <button
          onClick={() => {
            let topRatingRes = listofRestraunts.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilterRestrauntList(topRatingRes);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {filterRestrauntList.map((restaurant) => (
          <Card resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
