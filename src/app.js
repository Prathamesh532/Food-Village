//using js
import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Home from "./components/Home";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestrauntMenu from "./components/RestrauntMenu";
import WhatInMind from "./components/WhatInMind";
import CarouselContainer from "./components/CarouselContainer";
import CarouselItems from "./components/CarouselItems";

const AppLayout = () => {
  return (
    <>
      <Header />
      <CarouselContainer />
      <Outlet />
      {/* <WhatInMind /> */}
    </>
  );
};

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element : <Contact />
      },
      {
        path: "/restraunt/:resId",
        element: <RestrauntMenu />
      }
    ],
  },
]);

const root2 = ReactDOM.createRoot(document.getElementById("root")); // react will overwrite all content in div if there are any
root2.render(<RouterProvider router={myRouter} />);
