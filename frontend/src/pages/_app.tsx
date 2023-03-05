import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import HomeHeader from "../components/home/HomeHeader";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";

import ProductNavbar from "../components/product/ProductNavbar";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, []);
  const router = useRouter();
  const currentRoute = router.pathname.split("/")[1];
  const slug = router.query.slug;

  return (
    <Provider store={store}>
      <div
        className="d-flex flex-column  justify-content-between overflow-y-hidden"
        style={{ height: "100vh" }}>
        {/* {currentRoute === "scan" ? "" : currentRoute === "search" ? "" : <HomeHeader />} */}
        <div className="overflow-scroll">
          <Component {...pageProps} />
        </div>
        {/* {currentRoute === "scan" ? "" : currentRoute === "search" ? "" : <Footer />} */}
      </div>
    </Provider>
  );
}
