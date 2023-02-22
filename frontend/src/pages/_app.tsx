import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import HomeHeader from "../components/home/HomeHeader";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   import("bootstrap");
  // }, []);
  const router = useRouter();
  const currentRoute = router.pathname.split("/")[1];

  return (
    <div className="d-flex flex-column h-100 ">
      {currentRoute !== "login" && <HomeHeader />}
      <Component {...pageProps} />
      {currentRoute !== "login" && <Footer />}
    </div>
  );
}
