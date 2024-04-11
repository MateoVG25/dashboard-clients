"use client";

import React, { useState, useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";
import { RecepcionAPI } from "../app/api/Recepcion";

const RecepcionChart = () => {
  const { isLoading: isLoadingRecepcion, data: recepcionData } = RecepcionAPI();
  const [data, setData] = useState<AgChartOptions>({
    title: {
      text: "Recepcion",
    },
    subtitle: {
      text: "Recepcion por usuario",
    },
    data: [],
    series: [
      {
        type: "line",
        xKey: "Usuario",
        yKey: "Unidades_Preparadas",
        yName: "Unidades Preparadas",
      },
      {
        type: "line",
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
        className="ag-theme-alpine"
        style={{
          width: 700,
          height: 500,
          boxShadow: "0px 0px 10px 10px rgb(16,0,43)",
        }}
      >
        <AgChartsReact options={data} />
      </div>
    </>
  );
};

export default RecepcionChart;
