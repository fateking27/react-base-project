import React, { Component } from "react";
import ShoopCart from "./ShoopCart";

export default class Shooping extends Component {
  state = {
    books: [
      {
        id: 1,
        bookname: "Python实战开发",
        pir: 334,
        bookimg: "Python实战开发",
        statu: true,
      },
      {
        id: 2,
        bookname: "Java",
        pir: 504,
        bookimg: "Java",
        statu: true,
      },
      {
        id: 3,
        bookname: "H5实战开发",
        pir: 994,
        bookimg: "H5实战开发",
        statu: true,
      },
      {
        id: 4,
        bookname: "测试",
        pir: 999,
        bookimg: "测试",
        statu: true,
      },
    ],
    buyCart: [],
  };
  addbook = (item) => {
    let { buyCart } = this.state;
    this.setState({
      buyCart: [...buyCart, item],
    });
  };
  render() {
    let { books, buyCart } = this.state;
    return (
      <div>
        <h3>产品</h3>
        {books.map((item) => {
          return (
            <div className="box" key={item.id}>
              <div className="pageimg">{item.bookimg}</div>
              <div className="bookname">{item.bookname}</div>
              <button
                onClick={() => {
                  this.addbook(item);
                }}
              >
                加入购物车
              </button>
            </div>
          );
        })}

        <ShoopCart buyCart={buyCart}></ShoopCart>
      </div>
    );
  }
}
