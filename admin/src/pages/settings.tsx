import DashboardCard from "@/components/DashboardCard";
import LoaderLarge from "@/components/loader/LoaderLarge";
import LoaderMedium from "@/components/loader/LoaderMedium";
import LoaderSmall from "@/components/loader/LoaderSmall";
import Spinner from "@/components/loader/Spinner";
import Rating from "@/components/Rating";
import React from "react";

export default function Settings() {
  return (
    <div>
      <h1>Settings</h1>
      <LoaderSmall />
      <LoaderMedium />
      <LoaderLarge />
      <Spinner/>
      <Rating/>
      <DashboardCard/>
    </div>
  );
}
