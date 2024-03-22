"use client";

import React, { useState, useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";
import { PickingAPI } from "../app/api/Picking";

const PickingChart = () => {
  const { isLoading: isLoadingPicking, data: pickingData } = PickingAPI();

  const [data, setData] = useState<AgChartOptions>({
    title: {
      text: "Picking",
    },
    subtitle: {
      text: "Picking por usuario",
    },
    data: [],
    series: [
      {
        type: "bar",
        xKey: "Usuario",
        yKey: "Unidades_Preparadas",
        yName: "Unidades Preparadas",
        fill: "rgb(3, 4, 94)",
      },
      {
        type: "bar",
        xKey: "Usuario",
        yKey: "Lineas_Preparadas",
        yName: "Lineas Preparadas",
        fill: "rgb(0, 119, 182)",
      },
    ],
  });

  useEffect(() => {
    if (pickingData) {
      setData((prevData) => ({
        ...prevData,
        data: pickingData,
      }));
    }
  }, [pickingData]);

  if (isLoadingPicking) return "Cargando...";
  return (
    <>
      <div className="ag-theme-alpine" style={{ width: 700, height: 500 }}>
        <AgChartsReact options={data} />
      </div>
    </>
  );
};

export default PickingChart;
