import React from "react";
import dynamic from "next/dynamic";

import HeaderComponent from "@/components/ui/header";
import Insights from "@/components/Insights";
import { EmblaOptionsType } from "embla-carousel";
import TablaUltimoDia from "@/components/table/page";

const EmblaCarousel = dynamic(
  () => import("@/components/carousel/EmblaCarousel"),
  { ssr: false }
);

const OPTIONS: EmblaOptionsType = { loop: true };

const Dashboard = () => {
  const cards = <Insights />;

  return (
    <>
      <HeaderComponent />
      <div className="hidden 2xl:block ">{cards}</div>

      <EmblaCarousel options={OPTIONS} />

      <div className="mt-6">
        <TablaUltimoDia />
      </div>
    </>
  );
};

export default Dashboard;
