import React, { Component } from "react";
import Modal from "./Modal";
const tip = "请输入优惠卷名称";

export default class Comm extends Component {
  state = {
    objs: [
      {
        id: 1,
        tip: "618优惠卷",
        pir: "￥100",
        img: "img_1",
        type: "新人劵",
        time: 22,
        staus: 0,
      },
      {
        id: 2,
        tip: "优惠卷2",
        pir: "￥1090",
        img: "img_2",
        type: "通用劵",
        time: 27,
        staus: 1,
      },
      {
        id: 3,
        tip: "优惠卷3",
        pir: "￥1700",
        img: "img_1",
        type: "满减劵",
        time: 29,
        staus: 1,
      },
      {
        id: 4,
        tip: "优惠卷6",
        pir: "￥17900",
        img: "img_2",
        type: "新人劵",
        time: 299,
        staus: 0,
      },
      {
        id: 5,
        tip: "优惠卷1",
        pir: "￥17000",
        img: "img_1",
        type: "新人劵",
        time: 295,
        staus: 1,
      },
      {
        id: 6,
        tip: "优惠卷6",
        pir: "￥17000",
        type: "满减劵",
        img: "img_2",
        time: 295,
        staus: 0,
      },
      {
        id: 7,
        tip: "优惠卷7",
        pir: "￥17000",
        img: "img_2",
        type: "满减劵",
        time: 295,
        staus: 1,
      },
      {
        id: 8,
        tip: "优惠卷7",
        pir: "￥17000",
        img: "img_2",
        type: "新人劵",
        time: 295,
        staus: 1,
      },
      {
        id: 9,
        tip: "优惠卷91",
        pir: "￥17000",
        img: "img_2",
        type: "通用劵",
        time: 295,
        staus: 1,
      },
      {
        id: 10,
        tip: "优惠卷10",
        pir: "￥17000",
        img: "img_2",
        type: "通用劵",
        time: 295,
        staus: 0,
      },
    ],
    searchKeyword: "",
    searchType: "name",
    currentPage: 1,
    pageSize: 4,
  };

  //删除操作
  del = (id) => {
    const updatedObjs = this.state.objs.filter((item) => item.id !== id);
    this.setState({ objs: updatedObjs });
  };

  // get search() {
  //   let { objs, searchKeyword, searchType } = this.state;
  //   if (searchType==='name') {
  //     return objs.filter((item) =>
  //       item.tip.includes(searchKeyword)
  //     );
  //   }
  //   return objs;
  // }

  add = (newobj) => {
    this.setState(({ objs }) => {
      return {
        objs: [
          ...objs,
          { ...newobj, id: objs.length ? objs[objs.length - 1].id + 1 : 1 },
        ],
      };
    });
    console.log(this.state.objs);
  };

  edit = (obj) => {
    const { objs } = this.state;
    // const index = objs.findIndex((obj) => obj.id === item.id);
    let newobjs = [...objs];
    objs.forEach((item, index) => {
      if (item.id == obj.id) {
        newobjs[index] = obj;
      }
    });
    this.setState({ objs: newobjs });
    console.log(obj);
  };

  get search() {
    const { objs, searchKeyword, searchType } = this.state;
    return objs.filter((item) => {
      if (searchType === "name") {
        return item.tip.includes(searchKeyword);
      }
      if (searchType === "amount") {
        return item.pir.includes(searchKeyword);
      }
      if (searchType === "type") {
        return item.type.includes(searchKeyword);
      }
      return true;
    });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    let {objs, searchKeyword, pageSize, currentPage, searchType } = this.state;
    const total = this.search.length;
    const totalPages = Math.ceil(total / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    //从objs中取出从索引startIndex开始到索引endIndex（不包含对应endIndex的元素）结束的元素
    const currentPageData = this.search.slice(startIndex, endIndex);
    return (
      <div>
        <h1>优惠劵</h1>
        <label htmlFor="tipName">优惠券名称：</label>
        {searchType === "type" ? (
          <label htmlFor="">
            <select
              onChange={(e) => {
                this.setState({ searchKeyword: e.target.value });
              }}
            >
              <option value=""></option>
              <option value="新人劵">新人券</option>
              <option value="满减劵">满减劵</option>
              <option value="通用劵">通用劵</option>
            </select>
          </label>
        ) : searchType === "amount" ? (
          <select
            onChange={(e) => {
              this.setState({ searchKeyword: e.target.value });
              this.setState({ currentPage: 1 });
            }}
          >
            <option value=""></option>
            <option value="￥100">￥100</option>
            <option value="￥1090">￥1090</option>
            <option value="￥1700">￥1700</option>
            <option value="￥17000">￥17000</option>
          </select>
        ) : (
          <input
            type="text"
            className="search"
            placeholder={tip}
            value={searchKeyword}
            onChange={(e) => {
              this.setState({ searchKeyword: e.target.value.trim() });
              this.setState({ currentPage: 1 });
            }}
          />
        )}
        <select
          name=""
          id=""
          defaultValue={searchType}
          onChange={(e) => {
            this.setState({ searchType: e.target.value });
            this.setState({ currentPage: 1 });
          }}
        >
          <option value="name">优惠券名称</option>
          <option value="amount">面值</option>
          <option value="type">优惠卷类型</option>
        </select>
        {/* <input
          type="text"
          className="search"
          placeholder={tip}
          value={searchKeyword}
          onChange={(e) => {
            this.setState({ searchKeyword: e.target.value.trim() });
            this.setState({ currentPage: 1 });
          }}
        /> */}
        {/* <button onClick={() => {}}>添加优惠卷</button> */}
        <Modal btnText={"新增"} add={this.add} title={"新增优惠劵"}></Modal>
        <table style={{width:"75vw"}} border={1}>
          <thead>
            <tr>
              <th>编号</th>
              <th>优惠卷名称</th>
              <th>优惠卷图片</th>
              <th>面值</th>
              <th>优惠卷类型</th>
              <th>使用时间</th>
              <th>是否开启</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.length ? (
              currentPageData.map((item, _) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.tip}</td>
                    <td>
                      <img
                        width={100}
                        src={require(`../../asseets/images/${item.img}.jpg`)}
                      />
                    </td>
                    <td>{item.pir}</td>
                    <td>{item.type ? item.type : "通用劵"}</td>
                    <td>{item.time}天</td>
                    <td>{item.staus ? "开启" : "关闭"}</td>
                    <td>
                      <button id="del" onClick={() => this.del(item.id)}>
                        删除
                      </button>
                      {/* <button id="edit">修改</button> */}
                      <Modal
                        btnText={"修改"}
                        title={"修改优惠劵"}
                        item={item}
                        edit={this.edit}
                        objs={objs}
                      ></Modal>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={8}>请添加数据</td>
              </tr>
            )}
          </tbody>
        </table>

        <select
          name="pageSize"
          defaultValue={pageSize}
          onChange={(e) =>
            this.setState({ pageSize: parseInt(e.target.value) })
          }
        >
          <option value="4">每页显示4条</option>
          <option value="5">每页显示5条</option>
          <option value="10">每页显示10条</option>
        </select>

        <button
          onClick={() => this.handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          上一页
        </button>
        {
          //使用Array.from()方法创建一个长度为"totalPages"的空数组
          Array.from({ length: totalPages }).map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => this.handlePageChange(index + 1)}
                disabled={currentPage === index + 1}
              >
                {index + 1}
              </button>
            );
          })
        }
        <button
          onClick={() => this.handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          下一页
        </button>
        <span>共计{total}条数据</span>
      </div>
    );
  }
}
