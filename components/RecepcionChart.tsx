"use client";

import React, { useState, useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";
import { RecepcionAPI } from "../app/api/Recepcion";
import { useTheme } from "next-themes";
import { chartsTheme } from "./chartsTheme";

const RecepcionChart = () => {
  const { theme } = useTheme();
  const { isLoading: isLoadingRecepcion, data: recepcionData } = RecepcionAPI();
  const [data, setData] = useState<AgChartOptions>({
    theme: chartsTheme,
    title: {
      text: "Recepcion",
    },
    subtitle: {
      text: "Recepcion por usuario",
    },
    data: [],
    series: [
      {
        type: "bar",
        xKey: "Usuario",
        yKey: "Unidades_Preparadas",
        yName: "Unidades Preparadas",
      },
      {
        type: "bar",
        xKey: "Usuario",
        yKey: "Lineas_Preparadas",
        yName: "Lineas Preparadas",
      },
    ],

    overlays: {
      noData: {
        text: "No hay informacion para mostrar",
      },
    },
  });

  useEffect(() => {
    if (recepcionData) {
      setData((prevData) => ({
        ...prevData,
        data: recepcionData,
      }));
    }
  }, [recepcionData]);

  if (isLoadingRecepcion) return "Cargando...";
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

export default RecepcionChart;
