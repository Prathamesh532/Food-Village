//using js
import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";


const AppLayout = () => {
  return (
    <>
      <div className="header-con">
        <Header />
      </div>
      <Body />
      {/* <Card resData={resList[0]} /> */}
    </>
  );
};

const root2 = ReactDOM.createRoot(document.getElementById("root")); // react will overwrite all content in div if there are any
root2.render(<AppLayout />);
