import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MyMenu from "../MyMenu/MyMenu";
import { Layout, Menu, Button, theme } from "antd";
import { useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
const { Header, Sider, Content } = Layout;

export default function Home() {
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
        style={{ position: "fixed", zIndex:"1", minHeight:"100vh" }}
      >
        <div className="demo-logo-vertical" />
        <img
          style={{ width: "140px" }}
          src="http://web.woniulab.com:8084/img/logo-250px.645f24b5.png"
        />

        <MyMenu></MyMenu>
      </Sider>
      <Layout style={{marginLeft:"200px"}}>
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
          <Button type="dashed" onClick={()=>{
            localStorage.removeItem("token")
            localStorage.removeItem("userInfo")
            navigate("/login")
          }}>退出登录</Button>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
}
