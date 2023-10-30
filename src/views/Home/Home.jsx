import React, { useRef, useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import MyMenu from "../MyMenu/MyMenu";
import TabsComponent from "../../component/TabsComponent/TabsComponent";
import { Layout, Menu, Button, theme } from "antd";
import { useNavigate } from "react-router-dom";
import config from "../../config/menuConfig";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
const { Header, Sider, Content } = Layout;

const initialItems = [
  { label: <Link to="/home">首页</Link>, key: "/home", closeIcon: false },
];

export default function Home() {
  const location = useLocation();
  const [items, setItems] = useState(initialItems);
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const newTabIndex = useRef(0);

  console.log(location.pathname);

  let PanesArr = [];
  const Panes = () => {
    config.forEach((item) => {
      if (!item.children) {
        PanesArr.push(item);
      } else {
        item.children.forEach((item) => {
          PanesArr.push(item);
        });
      }
    });
    console.log(PanesArr);
  };

  useEffect(() => {
    Panes();
  }, []);

  const onChange = (newActiveKey) => {
    console.log(newActiveKey);
    setActiveKey(newActiveKey);
  };

  const add = ({ item, key, keyPath, domEvent }) => {
    console.log(item);
    console.log(key);
    console.log(keyPath);
    console.log(domEvent);
    let newActiveKey = key;
    const newPanes = [...items];
    newPanes.push({
      label: <Link to={key}>{domEvent.target.innerText}</Link>,
      // children: <Outlet></Outlet>,
      key: newActiveKey,
    });
    console.log(newPanes)
    setItems(newPanes);
    setActiveKey(newActiveKey);
    // let newActiveKey;
    // PanesArr.forEach((item) => {
    //   if (item.key == key) {
    //     // newActiveKey = item.key;
    //     setItems([
    //       ...items,
    //       {
    //         label: item.label,
    //         key: item.key,
    //       },
    //     ]);
    //     setActiveKey(item.key);
    //   }
    // });
  };

  const remove = (targetKey) => {
    const targetIndex = items.findIndex((pane) => pane.key === targetKey);
    const newPanes = items.filter((pane) => pane.key !== targetKey);
    if (newPanes.length && targetKey === activeKey) {
      const { key } =
        newPanes[
          targetIndex === newPanes.length ? targetIndex - 1 : targetIndex
        ];
      setActiveKey(key);
    }
    setItems(newPanes);
  };
  const onEdit = (targetKey, action) => {
    console.log(targetKey, action);
    if (action === "add") {
      add();
    } else {
      remove(targetKey);
    }
  };
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ position: "fixed", zIndex: "1", minHeight: "100vh" }}
      >
        <div className="demo-logo-vertical" />

        <img
          style={{ width: "140px" }}
          src="http://web.woniulab.com:8084/img/logo-250px.645f24b5.png"
        />

        <MyMenu add={add}></MyMenu>
      </Sider>

      <Layout style={{ marginLeft: "200px" }}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Button
            type="dashed"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("userInfo");
              navigate("/login");
            }}
          >
            退出登录
          </Button>
        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <TabsComponent
            onChange={onChange}
            activeKey={activeKey}
            items={items}
            onEdit={onEdit}
          ></TabsComponent>

          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
}
