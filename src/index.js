import * as React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Routing/Home";
import Nft from "./components/Nft/Nft";
import Registration from "./components/Registration/Registration";
import Portfolio from "./components/Portfolio/Portfolio";
import Login from "./components/Login/Login";
import News from "./components/News/News";
import Contact from "./components/ContactUs/Contact";
import Politic from "./components/PoliticPolici/Politic";
import ApiCoin from "./components/ApiConfig/ApiCoin";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "about",
        element: <About/>,
    },
    {
        path: "nft",
        element: <Nft/>,
    },
    {
        path: "/registration",
        element: <Registration/>,
    },
    {
        path: "portfolio",
        element: <Portfolio/>,
    },
    {
        path: "news",
        element: <News/>,
    },
    {
        path: "login",
        element: <Login/>,
    },
    {
        path: "contact",
        element: <Contact/>,
    },
    {
        path: "politic",
        element: <Politic/>,
    },
    {
        path: "test",
        element: <ApiCoin/>,
    },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);