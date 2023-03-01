import Footer from "../components/Footer";
import ScrollProductSection from "../components/home/ScrollProductSection";
import FashionNavbar from "../components/fashion/FashionNavbar";
import FashionBanner from "../components/fashion/FashionBanner";
import FashionHorizontalCircleCarousel from "../components/fashion/FashionHorizontalCircleCarousel";
import FashionPickOfTheSeason from "../components/fashion/FashionPickOfTheSeason";

export default function Fashion() {
  return (
    <div
      className="d-flex flex-column  justify-content-between "
      style={{ height: "100vh", overflowX: "hidden" }}>
      <FashionNavbar />

      <div className="overflow-scroll">
        <FashionBanner />
        <FashionHorizontalCircleCarousel />
        <FashionPickOfTheSeason />
        <ScrollProductSection />
      </div>
      <Footer />
    </div>
  );
}
