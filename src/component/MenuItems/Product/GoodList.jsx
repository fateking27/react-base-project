import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Space, Table, Image, Input, Select, message } from "antd";
import apis from "../../../apis";
function GoodList() {
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.info("请选择搜索类型");
  };
  const info_ = () => {
    messageApi.info("请输入搜索内容");
  };

  const temp = useRef();
  const [goods, setGoods] = useState([]);
  const [search, setSearch] = useState({ searchType: "", searchData: "" });
  const [searchData, setSearchDate] = useState();
  const [options, setOptions] = useState([
    { label: "商品名称", value: "name" },
    { label: "商品简介", value: "title" },
  ]);

  const getGoods = async () => {
    const res = await apis.goods.findGoods();
    console.log(res);
    setGoods(res.data.data);
  };

  const onSearch = async (data) => {
    if (!data.searchType) {
      info();
      return;
    }
    if (!data.searchData) {
      info_();
      return;
    }
    const res = await apis.goods.searchGoods(data);
    setSearchDate(res.data.data);
  };

  useEffect(() => {
    getGoods();
  }, []);

  const columns = [
    // {
    //   title: "商品图片",
    //   dataIndex: "imgSrc",
    //   render: (value) => {
    //     return (
    //       <Image
    //         width={60}
    //         height={60}
    //         // src={
    //         //   value?.includes("http://nocat.life:8002")
    //         //     ? value
    //         //     : "http://nocat.life:8002/images/goods/" + value
    //         // }
    //         fallback="data:image/png;base64,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"
    //       />
    //     );
    //   },
    // },
    { title: "商品名称", dataIndex: "name", align: "center" },
    { title: "商品描述", dataIndex: "title", align: "center" },
    { title: "商品价格", dataIndex: "price", align: "center" },
    {
      title: "商品分类",
      dataIndex: ["type", "name"],
      // width: 150,
      align: "center",
    },

    {
      title: "商品状态",
      dataIndex: "state",
      align: "center",
      render: (state) => {
        return state ? (
          <Button type="primary">点击下架</Button>
        ) : (
          <Button>点击上架</Button>
        );
      },
    },
    {
      title: "操作",
      dataIndex: "_id",
      align: "center",
      render: (_id) => (
        <Space>
          <Button>删除</Button>
          <Button type="primary">修改</Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      {contextHolder}

      <Space style={{ marginBottom: 15, marginLeft: 0 }}>
        <Space.Compact>
          <Select
            placeholder="请选择"
            style={{ width: 150 }}
            onChange={(value) => {
              setSearch({ ...search, searchType: value });
            }}
            options={options}
          />
          <Input
            placeholder="请输入内容"
            allowClear
            ref={temp}
            onChange={(e) => {
              setSearch({ ...search, searchData: e.target.value });
              if (!e.target.value) {
                setSearchDate();
                console.log(searchData);
              }
              // console.log(e.target.value);
            }}
          />
        </Space.Compact>
        <Button
          onClick={() => {
            onSearch(search);
          }}
          style={{ width: "60px" }}
          icon={<SearchOutlined />}
        ></Button>
      </Space>

      <Button type="primary" style={{ marginBottom: 15, marginLeft: 535 }}>
        <Link to="">+ 商品添加</Link>
      </Button>

      <Table
        bordered
        columns={columns}
        dataSource={searchData ? searchData : goods}
        rowKey="_id"
        expandable
        pagination={{
          defaultCurrent: 1,
          defaultPageSize: 5,
          showQuickJumper: true,
          showSizeChanger: true,
          pageSizeOptions: [5, 10, 20, 40],
        }}
      />
    </>
  );
}

export default GoodList;
