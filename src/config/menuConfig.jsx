import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const menus = [
  {
    key: "/home",
    icon: <MenuFoldOutlined></MenuFoldOutlined>,
    label: <Link to="/home">首页</Link>,
  },
  {
    key: "/home/user",
    icon: <UserOutlined></UserOutlined>,
    label: <Link to="/home/user">用户</Link>,
  },
  {
    key: "/home/role",
    icon: <UploadOutlined></UploadOutlined>,
    label: <Link to="/home/role">角色管理</Link>,
  },
  {
    key: "/shop",
    icon: <MenuUnfoldOutlined></MenuUnfoldOutlined>,
    label: <Link to="/home/shop">店铺管理</Link>,
  },
  {
    key: "/home/product",
    icon: <UploadOutlined></UploadOutlined>,
    label: "商品管理",
    children: [
      {
        key: "/home/list",
        icon: <UploadOutlined></UploadOutlined>,
        label: <Link to="/home/list">商品列表</Link>,
      },
      {
        key: "/home/category",
        icon: <UploadOutlined></UploadOutlined>,
        label: <Link to="/home/category">商品分类</Link>,
      },
    ],
  },
  {
    key: "/home/chart",
    icon: <VideoCameraOutlined />,
    label: "财务管理",
    children: [
      {
        key: "/home/salary",
        icon: <VideoCameraOutlined />,
        label: <Link to="/home/salary">工资管理</Link>,
      },
      {
        key: "/home/sale",
        icon: <VideoCameraOutlined />,
        label: <Link to="/home/salary">销售管理</Link>,
      },
    ],
  },
  {
    key: "/home/order",
    icon: <VideoCameraOutlined />,
    label: "订单管理",
    children: [
      {
        key: "/home/normal",
        icon: <VideoCameraOutlined />,
        label: "普通订单",
      },
      {
        key: "/home/error",
        icon: <VideoCameraOutlined />,
        label: "异常订单",
      },
    ],
  },
];

export default menus;
