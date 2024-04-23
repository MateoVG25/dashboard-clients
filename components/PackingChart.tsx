"use client";

import React, { useState, useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";
import { PackingAPI } from "../app/api/Packing";
import { useTheme } from "next-themes";
import { chartsTheme } from "./chartsTheme";

const PackingChart = () => {
  const { theme } = useTheme();
  const { isLoading: isLoadingPacking, data: packingData } = PackingAPI();

  const [data, setData] = useState<AgChartOptions>({
    theme: chartsTheme,
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
        xKey: "Usuario",
        yKey: "Unidades_Preparadas",
        yName: "Unidades Preparadas",
        fill: "rgb(157, 2, 8)",
      },
      {
        type: "bar",
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
  );
};

export default PackingChart;
