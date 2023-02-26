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
            label: (
              <Link
                className="no_underline"
                href={"/admin"}>
                Admin
              </Link>
            ),
            key: "admin:1",
          },
          {
            label: (
              <Link
                className="no_underline"
                href={"/admin-settings"}>
                Admin Settings
              </Link>
            ),
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
            label: (
              <Link
                className="no_underline"
                href={"/user"}>
                User
              </Link>
            ),
            key: "user:1",
          },
          {
            label: (
              <Link
                className="no_underline"
                href={"/user-settings"}>
                User Settings
              </Link>
            ),
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
            label: (
              <Link
                className="no_underline"
                href={"/mail"}>
                Mail
              </Link>
            ),
            key: "mail:1",
          },
          {
            label: (
              <Link
                className="no_underline"
                href={"/subscriber"}>
                Subscriber
              </Link>
            ),
            key: "mail:2",
          },
        ],
      },
    ],
  },

  {
    label: (
      <Link
        className="no_underline"
        href={"/search-tag"}>
        Search Tag
      </Link>
    ),
    key: "search-tag",
    icon: <AiOutlineTags />,
  },

  {
    label: (
      <Link
        className="no_underline"
        href={"/banner"}>
        Banner
      </Link>
    ),
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
            label: (
              <Link
                className="no_underline"
                href={"/product"}>
                Product
              </Link>
            ),
            key: "inventory:1",
          },
          {
            label: (
              <Link
                className="no_underline"
                href={"/genre"}>
                Genre
              </Link>
            ),
            key: "inventory:2",
          },
          {
            label: (
              <Link
                className="no_underline"
                href={"/category"}>
                Category
              </Link>
            ),
            key: "inventory:3",
          },
          {
            label: (
              <Link
                className="no_underline"
                href={"/color"}>
                Color
              </Link>
            ),
            key: "inventory:4",
          },
          {
            label: (
              <Link
                className="no_underline"
                href={"/size"}>
                Size
              </Link>
            ),
            key: "inventory:5",
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
            label: (
              <Link
                className="no_underline"
                href={"/general-settings"}>
                General-Settings
              </Link>
            ),
            key: "setting:1",
          },
          {
            label: (
              <Link
                className="no_underline"
                href={"/logout"}>
                Logout
              </Link>
            ),
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
          className="no_selection no_underline"
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
