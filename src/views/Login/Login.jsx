import React from "react";
import api from "../../apis";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const login = async (data) => {
    const res = await api.users.login(data);
    let token = res.data.data.token;
    let userInfo = res.data.data.userInfo;
    localStorage.setItem("token", token);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    console.log(res);
    message.success("登陆成功！")
    navigate("/home/")
  };
  return (
    <div>
      <button
        onClick={() => {
          // login({ account: "Gundam", password: 123456 });
          login({ account: "一脸无敌的承太郎~", password: 123456 });
        }}
      >
        登录
      </button>
    </div>
  );
}
