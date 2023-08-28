import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("User List", "sub1", <AppstoreOutlined />, [
    getItem("Merchent", "/login"),
    getItem("User", "2"),
  ]),
  {
    type: "divider",
  },
  getItem("Product", "sub2", <AppstoreOutlined />, [
    getItem("Add Product", "3"),
    getItem("Product List", "4"),
  ]),
  {
    type: "divider",
  },
  getItem("Category", "sub3", <AppstoreOutlined />, [
    getItem("Add Category", "5"),
    getItem("All Category", "6"),
  ]),
  {
    type: "divider",
  },
  getItem("Sub-Category", "sub4", <AppstoreOutlined />, [
    getItem("All Sub-Category", "7"),
    getItem("Add Sub-Category", "8"),
  ]),
  {
    type: "divider",
  },
  getItem("Discount", "sub5", <AppstoreOutlined />, [
    getItem("Add Discount", "9"),
    getItem("All Discount", "10"),
  ]),
];
const Home = () => {
  const navigate = useNavigate();

  const onClick = (e) => {
    navigate(e.key);
  };
  return (
    <>
      <Row>
        <Col span={6}>
          <Menu
            onClick={onClick}
            style={{
              width: 256,
            }}
            mode="inline"
            items={items}
          />
        </Col>
        <Col span={18}>
          <Outlet />
        </Col>
      </Row>
    </>
  );
};

export default Home;
