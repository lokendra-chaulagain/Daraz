import ProductFooter from "@/src/components/product/ProductFooter";
import ProductNavbar from "@/src/components/product/ProductNavbar";
import ProductPromotion from "@/src/components/product/ProductPromotion";
import SingleProductCarousel from "@/src/components/product/SingleProductCarousel";
import VendorDetail from "@/src/components/product/VendorDetail";
import DeliveryModal from "@/src/components/single-product/DeliveryModal";
import HighlightsAndDescription from "@/src/components/single-product/HighlightsAndDescription";
import PeopleAlsoViewed from "@/src/components/single-product/PeopleAlsoViewed";
import QNA from "@/src/components/single-product/QNA";
import ServiceModal from "@/src/components/single-product/ServiceModal";
import SpecificationModal from "@/src/components/single-product/SpecificationModal";
import React from "react";

export default function SingleProduct() {
  return (
    <div
      className="position-relative d-flex flex-column justify-content-between overflow-hidden bg_blue_grey"
      style={{ height: "100vh" }}>
      <ProductNavbar />

      <div className="overflow-y-scroll overflow-x-hidden">
        <SingleProductCarousel />
        <ProductPromotion />
        <SpecificationModal />
        <DeliveryModal />
        <ServiceModal />
        <QNA />
        <VendorDetail />
        <HighlightsAndDescription />
        <PeopleAlsoViewed />
      </div>

      <div>
        <ProductFooter />
      </div>
    </div>
  );
}
