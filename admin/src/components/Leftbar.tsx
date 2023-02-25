import React from "react";
import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
const { Sider } = Layout;
import { MailOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import { GrUserAdmin } from "react-icons/gr";
import Link from "next/link";
import { MdOutlineStorefront } from "react-icons/md";
import { GiVerticalBanner } from "react-icons/gi";
import { AiOutlineTags } from "react-icons/ai";

const items: MenuProps["items"] = [
  {
    label: "Admins",
    key: "admin",
    icon: <GrUserAdmin />,
    children: [
      {
        type: "group",
        children: [
          {
            label: <Link href={"/admin"}>Admin</Link>,
            key: "admin:1",
          },
          {
            label: <Link href={"/admin-settings"}>Admin Settings</Link>,
            key: "admin:2",
          },
        ],
      },
    ],
  },
  {
    label: "Users",
    key: "user",
    icon: <UserOutlined />,
    children: [
      {
        type: "group",
        children: [
          {
            label: <Link href={"/user"}>User</Link>,
            key: "user:1",
          },
          {
            label: <Link href={"/user-settings"}>User Settings</Link>,
            key: "user:2",
          },
        ],
      },
    ],
  },

  {
    label: "Mails",
    key: "mail",
    icon: <MailOutlined />,
    children: [
      {
        type: "group",
        children: [
          {
            label: <Link href={"/mail"}>Mail</Link>,
            key: "mail:1",
          },
          {
            label: <Link href={"/subscriber"}>Subscriber</Link>,
            key: "mail:2",
          },
        ],
      },
    ],
  },

  {
    label: <Link href={"/search-tag"}>Search Tag</Link>,
    key: "search-tag",
    icon: <AiOutlineTags />,
  },

  {
    label: <Link href={"/banner"}>Banner</Link>,
    key: "banner",
    icon: <GiVerticalBanner />,
  },

  {
    label: "Inventories",
    key: "inventory",
    icon: <MdOutlineStorefront />,
    children: [
      {
        type: "group",
        children: [
          {
            label: <Link href={"/product"}>Product</Link>,
            key: "inventory:1",
          },
          {
            label: <Link href={"/logout"}>Category</Link>,
            key: "inventory:2",
          },
          {
            label: <Link href={"/logout"}>Color</Link>,
            key: "inventory:3",
          },
          {
            label: <Link href={"/logout"}>Size</Link>,
            key: "inventory:4",
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    key: "setting",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        children: [
          {
            label: <Link href={"/general-settings"}>General-Settings</Link>,
            key: "setting:1",
          },
          {
            label: <Link href={"/logout"}>Logout</Link>,
            key: "setting:2",
          },
        ],
      },
    ],
  },

  {
    label: "Logout",
    key: "logout",
    icon: <LogoutOutlined />,
  },
];

export default function Leftbar() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
      <Sider
        style={{ background: colorBgContainer }}
        width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["admin"]}
          // defaultOpenKeys={["admin:1"]}
          style={{ height: "100%" }}
          items={items}
        />
      </Sider>
    </div>
  );
}
