"use client";

import React from "react";

import HeaderComponent from "@/components/ui/header";

import Insights from "@/components/Insights";

import { EmblaCarousel } from "@/components/carousel/EmblaCarousel";

const Dashboard = () => {
  const cards = <Insights />;

  return (
    <>
      <HeaderComponent />
      <div className="hidden 2xl:block">{cards}</div>
      <div className="2xl:block flex flex-wrap justify-center mt-6 gap-x-10 ">
        <EmblaCarousel />
      </div>
    </>
  );
};

export default Dashboard;
