import React, { Component } from "react";
import "../../asseets/styles/content.css";
import Comm from "./Comm_";
import Matters from "./matters";
import Cart from "./Cart";
import Shooping from "./Shooping";

export default class Content extends Component {
  state = {
    content: <Comm></Comm>,
  };

  render() {
    const tabs = [
      { tip: "优惠卷", content: <Comm></Comm> },
      { tip: "列表", content: <Matters></Matters> },
      { tip: "车牌", content: <Cart></Cart> },
      { tip: "购物车", content: <Shooping></Shooping> },
    ];
    const click = (item) => {
      this.setState({
        content: item.content,
      });
    };

    return (
      <>
        <div className="tabs">
          {tabs.map((item, index) => {
            return (
              <button
                className="tab active"
                onClick={() => {
                  click(item);
                }}
                key={item.tip}
              >
                {item.tip}
              </button>
            );
          })}
        </div>
        <div className="content">{this.state.content}</div>
      </>
    );
  }
}
