import React, { useState } from "react";
import { Button, Modal, Input, Select } from "antd";
import "../../asseets/styles/content.css";
const Modal_ = ({ add, btnText, title, item, edit, objs }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    if (title === "新增优惠劵") {
      add(newobj);
    } else {
      edit(obj);
    }
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [obj, setObj] = useState({
    ...item,
  });

  const [newobj, setNewobj] = useState({
    tip: "",
    pir: "",
    img: "img_1",
    type: "",
    time: 22,
    staus: 0,
  });

  const [xueli, setXueli] = useState({});

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {btnText}
      </Button>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <span>优惠卷名称：</span>{" "}
        <input
          defaultValue={obj.tip}
          onChange={(e) => {
            setNewobj({
              ...newobj,
              tip: e.target.value,
            });
            setObj({
              ...obj,
              tip: e.target.value
            })
          }}
          placeholder="请输入..."
        />
        <br />
        <span>优惠劵类型：</span>{" "}
        <select
          defaultValue={obj.type}
          onChange={(e) => {
            setNewobj({
              ...newobj,
              type: e.target.value,
            });
            setObj({
              ...obj,
              type: e.target.value
            })
          }}
        >
          <option value=""></option>
          <option value="新人劵">新人券</option>
          <option value="满减劵">满减劵</option>
          <option value="通用劵">通用劵</option>
        </select>
        <br />
        <span>优惠卷面值：</span>{" "}
        <select
          defaultValue={obj.pir}
          onChange={(e) => {
            setNewobj({
              ...newobj,
              pir: e.target.value,
            });
            setObj({
              ...obj,
              pir: e.target.value
            })
          }}
        >
          <option value=""></option>
          <option value="￥100">￥100</option>
          <option value="￥1090">￥1090</option>
          <option value="￥1700">￥1700</option>
          <option value="￥17000">￥17000</option>
          <option value="￥17900">￥17900</option>
        </select>
        <br />
        <span>状态：</span>
        <label htmlFor="">开启</label>
        <input
          value={1}
          name="radio"
          type="radio"
          defaultChecked={obj.staus}
          onChange={(e) => {
            console.log(e.target.value);
            setNewobj({
              ...newobj,
              staus: JSON.parse(e.target.value),
            });
            setObj({
              ...obj,
              staus: JSON.parse(e.target.value),
            })
          }}
        />
        <label htmlFor="">关闭</label>
        <input
          value={0}
          name="radio"
          type="radio"
          defaultChecked={!obj.staus}
          onChange={(e) => {
            console.log(e.target.value);
            setNewobj({
              ...newobj,
              staus: JSON.parse(e.target.value),
            });
            setObj({
              ...obj,
              staus: JSON.parse(e.target.value),
            })
          }}
        />
        <br />
        <label htmlFor="">学历：</label>
        <span></span>本科：
        <input
          value={"本科"}
          type="checkbox"
          onChange={(e) => {
            console.log(xueli);
            setXueli({
              ...xueli,
              benke: e.target.value,
            });
          }}
        />
        <span>专科：</span>
        <input
          type="checkbox"
          value={"专科"}
          onChange={async (e) => {
            console.log(xueli);
            await setXueli({
              ...xueli,
              zhuanke: e.target.value,
            });
          }}
        />
      </Modal>
    </>
  );
};
export default Modal_;
