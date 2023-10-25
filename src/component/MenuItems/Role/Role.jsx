import React, { useState, useEffect } from "react";
import {
  Card,
  Table,
  Button,
  Drawer,
  Modal,
  Form,
  Input,
  Select,
  message,
  Tree,
} from "antd";
import apis from "../../../apis";
import api from "../../../apis";

const Role = () => {
  const treeData = [
    {
      title: "首页",
      key: "/home",
    },
    {
      title: "用户管理",
      key: "/home/user",
    },
    {
      title: "角色管理",
      key: "/home/role",
    },
    {
      title: "店铺管理",
      key: "/home/shop",
    },
    {
      title: "商品管理",
      key: "/home/product",
      children: [
        {
          title: "商品列表",
          key: "/home/list",
        },
        {
          title: "商品分类",
          key: "/home/category",
        },
      ],
    },
    {
      title: "财务管理",
      key: "/home/datav",
      children: [
        {
          title: "工资数据",
          key: "/home/salary",
        },
        {
          title: "销售数据",
          key: "/home/sales",
        },
      ],
    },
  ];
  const [open, setOpen] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const [updateDate, setUpDate] = useState({});
  const [checkedKeys, setCheckedKeys] = useState([]);
  
  const showDrawer = (val2) => {
    console.log(val2.menus);
    setCheckedKeys(val2.menus);
    setOpen(true);
    setUpDate({
      id: val2._id,
      authTime: new Date(),
      authUser: val2.name,
    });
  };

  const onClose = () => {
    setOpen(false);
  };

  const onExpand = (expandedKeysValue) => {
    console.log("onExpand", expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheck = (checkedKeysValue) => {
    console.log("onCheck", checkedKeysValue);
    setCheckedKeys(checkedKeysValue);
  };

  const onSelect = (selectedKeysValue, info) => {
    console.log("onSelect", info);
    setSelectedKeys(selectedKeysValue);
  };

  const [roles, setRoles] = useState();

  const getRole = async () => {
    const res = await apis.roles.get();
    console.log(res.data.data);
    setRoles(res.data.data);
  };

  const editRoles = async (data) => {
    const data_ = {
      ...data,
      menus: checkedKeys,
    }
    const res = await apis.roles.editRoles(data_);
    console.log(res);
    setOpen(false);
    message.success(res.data.msg);
    getRole();
  };

  useEffect(() => {
    getRole();
  }, []);

  const columns = [
    {
      title: "角色名字",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "创建日期",
      dataIndex: "createTime",
      align: "center",
    },
    {
      title: "授权人",
      dataIndex: "authUser",
      align: "center",
    },
    {
      title: "授权日期",
      dataIndex: "updateDate",
      align: "center",
    },
    {
      title: "操作",
      align: "center",
      render: (val1, val2) => {
        return (
          <>
            <Button
              onClick={() => {
                showDrawer(val2);
                // console.log(val2.menus);
              }}
            >
              授权
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button>删除</Button>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Card
        title={
          <Button onClick={() => {}} type="dashed">
            新增角色
          </Button>
        }
        style={{
          width: "100%",
        }}
      >
        <Table
          dataSource={roles}
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

        <Drawer title="授权" placement="right" onClose={onClose} open={open}>
          <Tree
            checkable
            onExpand={onExpand}
            // expandedKeys={expandedKeys}
            autoExpandParent={autoExpandParent}
            onCheck={onCheck}
            checkedKeys={checkedKeys}
            onSelect={onSelect}
            selectedKeys={selectedKeys}
            treeData={treeData}
            defaultExpandAll={true}
          />
          <Button onClick={() => editRoles(updateDate)} type="dashed">
            确认授权
          </Button>
        </Drawer>
      </Card>
    </>
  );
};
export default Role;
