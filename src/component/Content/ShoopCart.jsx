import React, { useState, useEffect } from "react";
import "../../asseets/styles/content.css";

export default function ShoopCart({ buyCart }) {
  useEffect(() => {
    console.log(buyCart);
  });

  return (
    <div>
      <h3>购物车</h3>
      <table width={900} border={1}>
        <thead>
          <tr>
            <th>
              <input type="checkbox" defaultChecked={true} />
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
          {buyCart.map((item,index) => {
            return (
              <tr key={item.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{index+1}</td>
                <td>{item.bookimg}</td>
                <td>{item.bookname}</td>
                <td>{item.pir}</td>
                <td></td>
                <td></td>
                <td>
                  <button id="del">删除</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
