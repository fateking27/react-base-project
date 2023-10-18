import React, { Component } from "react";
import Header from "./component/Header/Header";
import Content from "./component/Content/Content";
// import Comm from "./component/Content/Comm";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Content></Content>
        {/* <Comm></Comm> */}
      </div>
    );
  }
}
