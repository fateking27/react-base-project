import React, { useRef, useState } from "react";
import { Button, Tabs } from "antd";
import routes from "../../router/index";

const TabsComponent = ({ items, activeKey, onEdit, onChange }) => {
  return (
    <div>
      <div style={{}}>{/* <Button onClick={add}>ADD</Button> */}</div>
      <Tabs
        hideAdd
        onChange={onChange}
        activeKey={activeKey}
        type="editable-card"
        onEdit={onEdit}
        items={items}
        size="small"
        tabBarStyle={{ height: "30px" }}
      ></Tabs>
    </div>
  );
};
export default TabsComponent;
