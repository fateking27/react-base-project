import React, { Component } from "react";

export default class Matters extends Component {
  state = {
    items: [
      { id: 1, text: "任务1", status: false },
      { id: 2, text: "任务2", status: true },
      { id: 3, text: "任务3", status: false },
    ],
    currentFilter: "all",
    text: "",
  };

  //添加
  additem = () => {
    let { text, items } = this.state;
    if (text) {
      items.push({
        id: items.length ? items[items.length - 1].id + 1 : 1,
        text,
        status: false,
      });
      this.setState({});
      //   this.setState(({ items }) => ({
      //     items: [
      //       ...items,
      //       {
      //         id: items.length ? items[items.length - 1].id + 1 : 1,
      //         text,
      //         status: false,
      //       },
      //     ],
      //   }));
    }
    console.log(items);
  };

  completion = (id) => {
    this.setState(({ items }) => ({
      items: items.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      ),
    }));
  };

  changeFilter = (filter) => {
    this.setState({ currentFilter: filter });
  };

  render() {
    const { items, currentFilter } = this.state;

    const item_ =
      currentFilter === "status"
        ? items.filter((item) => item.status)
        : currentFilter === "active"
        ? items.filter((item) => !item.status)
        : items;

    return (
      <div>
        <input
          type="text"
          onChange={(e) => {
            this.setState({
              text: e.target.value.trim(),
            });
          }}
        />
        <button
          onClick={() => {
            this.additem();
          }}
        >
          新增
        </button>

        <ul>
          {item_.map((item) => (
            <li
              key={item.id}
              onClick={() => this.completion(item.id)}
              style={{
                color: item.status ? "red" : "black",
                textDecoration: item.status ? "line-through" : "none",
              }}
            >
              {item.text}
            </li>
          ))}
        </ul>

        <div>
          <span>
            {items.filter((item) => item.status).length}/{items.length}
          </span>
          <button onClick={() => this.changeFilter("all")}>全部</button>
          <button onClick={() => this.changeFilter("active")}>未完成</button>
          <button onClick={() => this.changeFilter("status")}>已完成</button>
        </div>
      </div>
    );
  }
}
