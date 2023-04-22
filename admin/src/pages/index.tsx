import react from "react";
import { Stack } from "@mui/material";
import CardMedium from "../components/dashboard/CardMedium";
import CardSmall from "../components/dashboard/CardSmall";
import Header from "../components/Header";

export default function Home() {
  return (
    <Stack spacing={2}>
      <Header />
      <Stack
        direction="row"
        spacing={2}>
        <CardMedium
          title={"Total Products"}
          item={5}
        />

        <CardMedium
          title={"Total Banners"}
          item={5}
        />

        <CardMedium
          title={"Total Blogs"}
          item={5}
        />

        <CardMedium
          title={"Total Vacancy"}
          item={5}
        />
      </Stack>

      <Stack
        direction="row"
        spacing={2}>
        <CardSmall
          title={"Total Mails"}
          item={5}
        />
        <CardSmall
          title={"Total Subscribers"}
          item={5}
        />
        <CardSmall
          title={"Total EventBanner"}
          item={5}
        />
        <CardSmall
          title={"Total Review"}
          item={5}
        />
      </Stack>

      <Stack
        direction="row"
        spacing={2}>
        <CardSmall
          title={"Total Standard"}
          item={5}
        />
        <CardSmall
          title={"Total Service"}
          item={5}
        />
        <CardSmall
          title={"Total Size"}
          item={5}
        />
        <CardSmall
          title={"Total  Color"}
          item={5}
        />
      </Stack>

      <Stack
        direction="row"
        spacing={2}>
        <CardSmall
          title={"Total Category"}
          item={5}
        />

        <CardSmall
          title={"Total Partner"}
          item={5}
        />

        <CardSmall
          title={"Total User"}
          item={5}
        />
      </Stack>

     
    </Stack>
  );
}
