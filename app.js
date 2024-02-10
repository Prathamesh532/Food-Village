//using js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Header from "./src/components/Header";
import Body from "./src/pages/Body";
import About from "./src/pages/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./src/pages/Contact";
import RestrauntMenu from "./src/components/RestrauntMenu";
import Home from "./src/pages/Home";
import Footer from "./src/pages/Footer";

import { Provider } from "react-redux";
import appStore from "./src/redux/appStore";
import Cart from "./src/pages/Cart";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
      {/* <WhatInMind /> */}
      <Footer />
    </Provider>
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
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restraunt/:resId",
        element: <RestrauntMenu />,
      },
      {
        path:"/cart",
        element: <Cart />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")); // react will overwrite all content in div if there are any
root.render(<RouterProvider router={myRouter} />);
