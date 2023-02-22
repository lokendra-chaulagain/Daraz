import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import HomeHeader from "../components/home/HomeHeader";

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   import("bootstrap");
  // }, []);
  return (
    <>
      <HomeHeader />
      <Component {...pageProps} />
    </>
  );
}
