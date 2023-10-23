import React, { useState, useEffect }  from "react";
import { Card, Table, Button, Modal, Form, Input, Select, message } from "antd";
import apis from "../../../apis";
const { Option } = Select;

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 16,
  },
};
export default function Category() {
  // 表格的数据源
  const [dataSource, setDataSource] = useState([]);
  const [parentData, setParentData] = useState([]);
  const [parentId, setParentId] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [parentSelect, setParentSelect] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //检控parentId的值
  useEffect(() => {
    fetchData();
  }, [parentId]);

  const fetchData = async () => {
    const res = await apis.category.get({ parentId });
    console.log(res);
    setDataSource(res.data.data.data);
  };
  //  表头数据
  const columns = [
    {
      title: "类型名字",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "类别",
      dataIndex: "type",
      align: "center",
      width: "400px",
    },
    {
      title: "操作",
      align: "center",
      render: (val1, val2) => {
        // console.log(val1, val2);
        return (
          <>
            {parentId == 0 ? (
              <Button onClick={() => findCategoryBySubs(val1)}>
                查看子分类
              </Button>
            ) : null}
            &nbsp;&nbsp;&nbsp;
            <Button>删除</Button>
          </>
        );
      },
    },
  ];
  const findCategoryBySubs = (obj) => {
    setParentId(obj._id);
  };

  const onFinish = async (values) => {
    values.parentId = values.parentId ? values.parentId : 0;
    console.log(values);
    const res = await apis.category.add(values);
    if (res.data.code) {
      message.success("添加成功");
      //关闭模态框，更新页面请求
      fetchData();
    } else {
      message.error("添加失败");
    }
  };
  const onFinishFailed = (values) => {
    console.log(values);
  };
  const typeChangeEvent = async (value) => {
    console.log(value);
    if (value == "二级分类") {
      setParentSelect(true);
      const res = await apis.category.get({ parentId: 0 });
      console.log(res)
      setParentData(res.data.data.data);
    } else {
      setParentSelect(false);
    }
  };
  return (
    <Card
      title={
        parentId == 0 ? (
          "商品分类列表"
        ) : (
          <Button onClick={() => setParentId(0)} type="default">
            返回
          </Button>
        )
      }
      extra={
        <Button onClick={showModal} type="dashed">
          新增分类
        </Button>
      }
      style={{
        width: "100%",
      }}
    >
      <Table
        dataSource={dataSource}
        columns={columns}
        bordered
        loading={false}
        rowKey="_id"
        pagination={{
          defaultCurrent: 1,
          defaultPageSize: 8,
          showQuickJumper: true,
          showSizeChanger: true,
          pageSizeOptions: [8, 16],
        }}
      />
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          {...layout}
          name="control-hooks"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item name="name" label="分类名字">
            <Input />
          </Form.Item>
          <Form.Item
            name="type"
            label="分类类型"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="请选中分类"
              allowClear
              onChange={typeChangeEvent}
            >
              <Option value="一级分类">一级分类</Option>
              <Option value="二级分类">二级分类</Option>
            </Select>
          </Form.Item>
          {parentSelect ? (
            <Form.Item
              name="parentId"
              label="父分类"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="请选中分类" allowClear>
                {parentData.map((item) => {
                  return <Option value={item._id}>{item.name}</Option>;
                })}
              </Select>
            </Form.Item>
          ) : null}

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
}
