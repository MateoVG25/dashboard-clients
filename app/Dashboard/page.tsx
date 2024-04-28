"use client";

import React, { useState } from "react";

import HeaderComponent from "@/components/ui/header";

import RecepcionChart from "@/components/RecepcionChart";
import PickingChart from "@/components/PickingChart";
import PackingChart from "@/components/PackingChart";
import ApexChartComponent from "@/components/PackingApexBar";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Insights from "@/components/Insights";

const Dashboard = () => {
  const [charts, setCharts] = useState([
    <RecepcionChart />,
    <PickingChart />,
    <PackingChart />,
  ]);

  const cards = <Insights />;

  const renderCharts = (charts: JSX.Element[]) => {
    return (
      <div className="flex justify-center w-full max-w-screen mb-8">
        <Carousel
          infiniteLoop
          useKeyboardArrows
          autoPlay
          showThumbs={false}
          className="w-full max-w-screen "
          stopOnHover
          interval={8000}
          dynamicHeight
          showIndicators={false}
          emulateTouch
        >
          {charts.map((chart, index) => (
            <div
              key={index}
              className="flex justify-center w-full h-full box-border mt-6 mb-6"
            >
              {chart}
            </div>
          ))}
        </Carousel>
      </div>
    );
  };

  return (
    <>
      <HeaderComponent />
      <div className="hidden 2xl:block">{cards}</div>
      <div className="2xl:block flex flex-wrap justify-center mt-6 gap-x-10 ">
        {charts.length > 0 && renderCharts(charts)}
      </div>
      <ApexChartComponent />
    </>
  );
};

export default Dashboard;
