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
        sum: 0,
      },
      {
        id: 2,
        bookname: "Java",
        pir: 504,
        bookimg: "Java",
        statu: true,
        sum: 0,
      },
      {
        id: 3,
        bookname: "H5实战开发",
        pir: 994,
        bookimg: "H5实战开发",
        statu: true,
        sum: 0,
      },
      {
        id: 4,
        bookname: "测试",
        pir: 999,
        bookimg: "测试",
        statu: true,
        sum: 0,
      },
    ],
    buyCart: [{
        id: 1,
        bookname: "Python实战开发",
        pir: 334,
        bookimg: "Python实战开发",
        statu: true,
        sum: 1,
      },],
  };
  addbook = (item) => {
    let { buyCart } = this.state;

    const item_ = buyCart.find((cartItem) => cartItem.id === item.id);
    //如果已添加到购物车则增加数量
    if (item_) {
      item_.sum++;
      this.setState({
        buyCart: [...buyCart],
      });
    } else {
        // 否则执行添加操作
      this.setState({
        buyCart: [...buyCart, { ...item, sum: 1 }],
      });
    }
  };

  //删除操作
  del = (id) => {
    const { buyCart } = this.state;
    const updated = buyCart.filter((item) => item.id !== id);
    this.setState({ buyCart: updated });
  };

  addnum = (id) => {
    this.setState(({ buyCart }) => {
      return {
        buyCart: buyCart.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              sum: item.sum + 1,
            };
          }
          return item;
        }),
      };
    });
  };

  subnum = (id) => {
    this.setState(({ buyCart }) => {
      return {
        buyCart: buyCart.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              sum: item.sum - 1,
            };
          }
          return item;
        }),
      };
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
              <span className="bookpir">{"￥" + item.pir}</span><br />
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

        <ShoopCart subnum={this.subnum} addnum={this.addnum} buyCart={buyCart} del={this.del}></ShoopCart>

      </div>
    );
  }
}
