import React, { useState, useEffect } from "react";
import Card from "./Card";
import Shrimmer from "./Shrimmer";
import CarouselContainer from "./CarouselContainer";
import { RESTRAUNT_API } from "../utils/constant";
import useRestraunts from "../utils/useRestraunts";

const filterRestraunts = (restarunts, text) => {
  const filterRes = restarunts.filter((res) =>
    res.info.name.toLowerCase().includes(text.toLowerCase())
  );
  return filterRes;
};

const Body = () => {
  // const [listofRestraunts, setListofRestraunts] = useState([]);
  // const [filterRestrauntList, setFilterRestrauntList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const {listofRestraunts , filterRestrauntList } = useRestraunts()

  // const 

  // const handleSearch = (text) => {
  //   const filterFunction = filterRestraunts(listofRestraunts, text);
  //   filterRestrauntList(filterFunction);
  // };

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
            // handleSearch(e.target.value);
          }}
        ></input>

        <button onClick={() => setSearchText("")}>Clear</button>

        {/* <button
          onClick={() => {
            let topRatingRes = listofRestraunts.filter(
              (res) => res.info.avgRating > 4.5
            );
            filterRestrauntList(topRatingRes);
          }}
        >
          Top Rated
        </button> */}
      </div>
      <CarouselContainer />

      <div className="res-container">
        {filterRestrauntList.map((restaurant) => (
          <Card resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
