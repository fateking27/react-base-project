import React from "react";
import { Menu } from "antd";
import config from "../../config/menuConfig";

export default function MyMenu() {
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['/home']}
      defaultOpenKeys={["/home"]}
      items={config}
    ></Menu>
  );
}
