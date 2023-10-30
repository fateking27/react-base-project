import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import config from "../../config/menuConfig";

export default function MyMenu({ add }) {
  const [userInfo, setUserInfo] = useState({ role: {} });
  useEffect(() => {
    const info = JSON.parse(localStorage.userInfo || "{}");
    setUserInfo(info);
  }, []);

  const deepMenus = (array, news = []) => {
    //登录成功后，本地存储的menus
    const { menus = [] } = userInfo.role;
    for (const menu of array) {
      if (!menu.children) {
        if (menus.includes(menu.key)) {
          news.push(menu);
        }
      } else {
        let node = { ...menu, children: [] };
        deepMenus(menu.children, node.children);
        if (node.children.length != 0) {
          news.push(node);
        }
      }
    }
    return news;
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      onClick={add}
      defaultSelectedKeys={["/home"]}
      defaultOpenKeys={["/home"]}
      items={deepMenus(config)}
      style={{ overflowY: "auto", height: "585px" }}
    ></Menu>
  );
}
