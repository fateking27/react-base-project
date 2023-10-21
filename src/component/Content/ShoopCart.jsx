import React, { useState, useEffect } from "react";
import "../../asseets/styles/content.css";

export default function ShoopCart({ buyCart, del, addnum, subnum }) {
  useEffect(() => {
    total();
  });

  const [sums, setSums] = useState(0);
  const total = () => {
    console.log("oooooo");
    let sum = 0;
    buyCart.forEach((item) => {
      sum += item.pir * item.sum;
      setSums(sum);
    });
    if (buyCart.length == 0) {
      setSums(0);
    }
  };

  const [checkAll, setCheckAll] = useState(false);
  const [newArr, setNewArr] = useState([]);
  const checkedAll = () => {
    console.log("aaa");
    setCheckAll(!checkAll);
  };

  const addItem = (item) => {
    setNewArr([...newArr, item]);
    if (newArr.length == buyCart.length) {
      setCheckAll(true);
    }
    console.log("pppp", newArr);
  };

  return (
    <div>
      <h3>购物车</h3>
      <table width={830} border={1}>
        <thead>
          <tr>
            <th
              onClick={() => {
                checkedAll();
              }}
            >
              <input type="checkbox" checked={checkAll} onChange={() => {}} />
            </th>
            <th>编号</th>
            <th>图片</th>
            <th>标题</th>
            <th>价格</th>
            <th>数量</th>
            <th>总价</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {buyCart.map((item, index) => {
            return (
              <tr key={item.id}>
                <td
                  onClick={() => {
                    addItem(item);
                  }}
                >
                  <input type="checkbox" onChange={() => {}} />
                </td>
                <td>{index + 1}</td>
                <td>{item.bookimg}</td>
                <td>{item.bookname}</td>
                <td>{item.pir}</td>
                <td>
                  <button
                    onClick={() => {
                      addnum(item.id);
                    }}
                    style={{ margin: 5, width: 25 }}
                  >
                    +
                  </button>
                  {item.sum}
                  <button
                    disabled={item.sum === 0}
                    onClick={() => {
                      subnum(item.id);
                    }}
                    style={{ width: 25, margin: 5 }}
                  >
                    -
                  </button>
                </td>
                <td>{"￥" + item.pir * item.sum}</td>
                <td>
                  <button
                    id="del"
                    onClick={() => {
                      del(item.id);
                    }}
                  >
                    删除
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td>总计</td>
            <td colSpan={7}>￥{sums}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
