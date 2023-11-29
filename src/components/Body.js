import React from "react";
import Card from "./Card";

import { resList } from "../utils/ResList";

const Body = () => {
  return (
    <>
      <div className="sreach-bar">
        <input type="text" placeholder="Search Restraunts.."></input>
        <button>Serach</button>
      </div>
      <div className="res-container">
        {resList.map((restraunt) => {
          return <Card resData={restraunt} />;
        })}
      </div>
    </>
  );
};

export default Body;
