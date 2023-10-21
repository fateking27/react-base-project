import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./views/Main/Main";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import User from "./views/User";
import NotFind from "./views/NotFind/NotFind";
import Content from "./component/Content/Content";
import Salary from '../src/component/MenuItems/Chart/Salary'
import Category from '../src/component/MenuItems/Product/Category'
import List from '../src/component/MenuItems/Product/List'
import Role from '../src/component/MenuItems/Role/Role'
import Shpo from '../src/component/MenuItems/Shop/Shop'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/" element={<Navigate to='/home'></Navigate>}></Route>
          <Route path="/home" element={<Home></Home>}>
            <Route path="content" element={<Content></Content>}></Route>
            <Route index={true} element={<Main></Main>}></Route>
            <Route path="user" element={<User></User>}></Route>
            <Route path="salary" element={<Salary></Salary>}></Route>
            <Route path="category" element={<Category></Category>}></Route>
            <Route path="list" element={<List></List>}></Route>
            <Route path="role" element={<Role></Role>}></Route>
            <Route path="shop" element={<Shpo></Shpo>}></Route>
          </Route>
          <Route path="/404" element={<NotFind></NotFind>}></Route>
          {/* 如果路由无法匹配，则代表路径映射失败，进入404页面 */}
          <Route path="*" element={<Navigate to="/404"></Navigate>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
