"use client";

import React, { useState, useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";
import { PackingAPI } from "../app/api/Packing";

const PackingChart = () => {
  const { isLoading: isLoadingPacking, data: packingData } = PackingAPI();

  const [data, setData] = useState<AgChartOptions>({
    title: {
      text: "Packing",
    },
    subtitle: {
      text: "Packing por usuario",
    },
    data: [],
    series: [
      {
        type: "bar",
        direction: "horizontal",
        xKey: "Usuario",
        yKey: "Unidades_Preparadas",
        yName: "Unidades Preparadas",
        fill: "rgb(157, 2, 8)",
      },
      {
        type: "bar",
        direction: "horizontal",
        xKey: "Usuario",
        yKey: "Lineas_Preparadas",
        yName: "Lineas Preparadas",
        fill: "rgb(232, 93, 4)",
      },
    ],
    overlays: {
      noData: {
        text: "No hay informacion para mostrar",
      },
    },
    // background: {
    //   fill: "rgb(16,0,43)",
    // },
  });

  useEffect(() => {
    if (packingData) {
      setData((prevData) => ({
        ...prevData,
        data: packingData,
      }));
    }
  }, [packingData]);

  if (isLoadingPacking) return "Cargando...";

  return (
    <div
      className="ag-theme-alpine "
      style={{
        width: 700,
        height: 500,
        boxShadow: "0px 0px 10px 10px rgb(16,0,43)",
      }}
    >
      <AgChartsReact options={data} />
    </div>
  );
};

export default PackingChart;
