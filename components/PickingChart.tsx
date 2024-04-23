"use client";

import React, { useState, useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";
import { PickingAPI } from "../app/api/Picking";
import { useTheme } from "next-themes";
import { chartsTheme } from "./chartsTheme";

const PickingChart = () => {
  const { theme } = useTheme();
  const { isLoading: isLoadingPicking, data: pickingData } = PickingAPI();

  const [data, setData] = useState<AgChartOptions>({
    theme: chartsTheme,
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
    overlays: {
      noData: {
        text: "No hay informacion para mostrar",
      },
    },
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
      <div
        className="ag-theme-alpine border-4 hover:scale-105 hover:duration-150 duration-150"
        style={{
          width: 700,
          height: 500,
          boxShadow:
            theme === "dark"
              ? "0px 0px 10px 10px rgb(16,0,43)"
              : "8px 8px 10px rgba(0,0,0,0.3), -2px -2px 10px rgba(255,255,255,0.5)",
        }}
      >
        <AgChartsReact options={data} />
      </div>
    </>
  );
};

export default PickingChart;
