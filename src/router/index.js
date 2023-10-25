import { Navigate } from "react-router-dom";
import Main from "../views/Main/Main";
import Login from "../views/Login/Login";
import Home from "../views/Home/Home";
import User from "../views/User";
import NotFind from "../views/NotFind/NotFind";
import Content from "../component/Content/Content";
import Salary from "../component/MenuItems/Chart/Salary";
import Category from "../component/MenuItems/Product/Category";
import List from "../component/MenuItems/Product/GoodList";
import Role from "../component/MenuItems/Role/Role";
import Shop from "../component/MenuItems/Shop/Shop";
import GoodsAdd from "../component/MenuItems/Product/GoodsAdd";

import RouterAuth from "./RouterAuth";

const routes = [
  {
    // index:true,
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/",
    element: <Navigate to="/home"></Navigate>,
  },
  {
    path: "/home",
    element: (
      <RouterAuth>
        <Home></Home>
      </RouterAuth>
    ),
    children: [
      {
        index: true,
        element: <Main></Main>,
      },
      {
        path: "user",
        element: <User></User>,
      },
      {
        path: "salary",
        element: <Salary></Salary>,
      },
      {
        path: "sale",
        element: <Salary></Salary>,
      },
      {
        path: "role",
        element: <Role></Role>,
      },
      {
        path: "shop",
        element: <Shop></Shop>,
      },
      {
        path: "list",
        element: <List></List>,
      },
      {
        path: "goodsAdd",
        element: <GoodsAdd></GoodsAdd>,
      },
      {
        path: "category",
        element: <Category></Category>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFind></NotFind>,
  },
];
export default routes;
