import React, { useEffect, useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Cascader,
  Row,
  Col,
  Upload,
  Space,
  message,
} from "antd";
import api from "../../../apis/index";
import { useNavigate, useParams, useLocation } from "react-router-dom";
const { TextArea } = Input;

const GoodsAdd = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  console.log("form", form);
  const [cascader, setCascader] = useState();
  const [typeId, setTypeId] = useState();
  const [loading, setLoading] = useState(false);
  const [addItem, setAddItem] = useState({});
  const [update, setUpdate] = useState({});
  const [type, setType] = useState({});

  let location = useLocation().search.split("=")[1];
  console.log("admin_loaction", location);

  const findGoodsById = async (id) => {
    const res = await api.goods.findGoodsById({ id });
    console.log(res.data.data);
    console.log("type", res.data.data.type);
    setUpdate(res.data.data);
    setType(res.data.data.type);
  };

  const handleChange = (info) => {
    console.log("info", info);
    // 当前图片的状态是 uploading（上传中）
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    // 当前图片的状态是 done（上传完成）
    if (info.file.status === "done") {
      // Get this url from response in real world.
      setAddItem({
        ...addItem,
        imgSrc: "http://127.0.0.1:8002/images/goods/" + info.file.response.data,
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    getCascader();
    if (location) {
      findGoodsById(location);
      category();
    }
  }, []);

  let cateParent = [];

  const category = async () => {
    const res = await api.category.get({ parentId: 0 });
    console.log(res.data.data.data);
    cateParent = res.data.data.data;
    console.log(
      cateParent.find((item) => {
        return item._id == type.parentId;
      })
    );
  };

  useEffect(() => {
    form.setFieldsValue({ ...update, type: ["", type.name] });
    setAddItem({ ...addItem, imgSrc: update.imgSrc });
    setTypeId(type._id);
  }, [update]);

  const getCascader = async () => {
    const res = await api.category.getCascader({ parentId: 0 });
    if (res.data.code == 1) {
      setCascader(res.data.data);
      console.log(res.data.data)
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const addGoods = async (FormData) => {
    console.log({
      ...FormData,
      type: typeId,
      ...addItem,
    });
    // const res = await api.goods.addGoods({
    //   ...FormData,
    //   type: typeId,
    //   ...addItem,
    // });
    // if (res.data.code == 1) {
    //   message.success("商品新增成功");
    //   navigate("/home/list");
    // } else {
    //   message.error(res.message);
    // }
  };

  return (
    <div>
      {location ? <h2>商品信息修改</h2> : <h2>商品添加</h2>}
      <br />
      <Form form={form} onFinish={addGoods}>
        <Row gutter={20}>
          <Col span={10}>
            <Form.Item label="商品名称" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="商品分类" name="type">
              <Cascader
                allowClear={false}
                placeholder="选择分类"
                options={cascader}
                onChange={(val1, val2) => {
                  setTypeId(val2.pop().id);
                }}
              />
            </Form.Item>
            <Form.Item label="商品价格" name="price">
              <Input type="number" />
            </Form.Item>
            <Form.Item label="商品简介" name="title">
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item label="商品详情" name="msg">
              <TextArea rows={4} />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="商品图片">
              <Upload
                name="imgSrc"
                listType="picture-card"
                showUploadList={false}
                action="http://127.0.0.1:8002/goods/fileUpload"
                onChange={handleChange}
              >
                {addItem.imgSrc ? (
                  <img
                    src={addItem.imgSrc}
                    alt="avatar"
                    style={{
                      width: "100%",
                    }}
                  />
                ) : location ? (
                  <img
                    src={update.imgSrc}
                    alt="avatar"
                    style={{
                      width: "100%",
                    }}
                  />
                ) : (
                  uploadButton
                )}
              </Upload>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={9}></Col>
          <Col>
            <Form.Item>
              <Space>
                {location ? (
                  <Button htmlType="submit" type="primary">
                    确认修改
                  </Button>
                ) : (
                  <Button htmlType="submit" type="primary">
                    确认新增
                  </Button>
                )}
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default GoodsAdd;
