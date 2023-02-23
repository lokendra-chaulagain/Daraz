import React from "react";
import { Layout, theme } from "antd";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import Topbar from "@/components/Topbar";
import Leftbar from "@/components/Leftbar";
import CustomBreadCumb from "@/components/CustomBreadCumb";
import Bottombar from "@/components/Bottombar";
import Login from "@/components/Login";
const { Content } = Layout;

export default function App({ Component, pageProps }: AppProps) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const user = true;

  return (
    <>
      {user ? (
        <Layout style={{ height: "95vh" }}>
          <Topbar />
          <Content style={{ padding: "0 10px" }}>
            <CustomBreadCumb />
            <Layout style={{ padding: "24px 0", background: colorBgContainer, height: "100%" }}>
              <Leftbar />
              <Content style={{ padding: "0 24px" }}>
                <Component {...pageProps} />
              </Content>
            </Layout>
          </Content>
          <Bottombar />
        </Layout>
      ) : (
        <Login />
      )}
    </>
  );
}
