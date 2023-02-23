import ProductFooter from "@/src/components/product/ProductFooter";
import ProductNavbar from "@/src/components/product/ProductNavbar";
import RecommendedBySeller from "@/src/components/product/RecommendedBySeller";
import SingleProductCarousel from "@/src/components/product/SingleProductCarousel";
import VendorDetail from "@/src/components/product/VendorDetail";
import React from "react";

export default function SingleProduct() {
  return (
    <div>
      <ProductNavbar />
      <SingleProductCarousel />
      <RecommendedBySeller />
      <VendorDetail />
      <ProductFooter />
    </div>
  );
}
