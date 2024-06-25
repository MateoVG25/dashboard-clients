"use client";

import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { PackingAPI } from "../app/api/Packing";
import { ApexOptions } from "apexcharts";

const PackingApexBar = () => {
  const { isLoading: isLoadingPacking, data: packingData } = PackingAPI();

  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      locales: [
        {
          name: "es",
          options: {
            months: [
              "Enero",
              "Febrero",
              "Marzo",
              "Abril",
              "Mayo",
              "Junio",
              "Julio",
              "Agosto",
              "Septiembre",
              "Octubre",
              "Noviembre",
              "Diciembre",
            ],
            shortMonths: [
              "Ene",
              "Feb",
              "Mar",
              "Abr",
              "May",
              "Jun",
              "Jul",
              "Ago",
              "Sep",
              "Oct",
              "Nov",
              "Dic",
            ],
            days: [
              "Domingo",
              "Lunes",
              "Martes",
              "Miércoles",
              "Jueves",
              "Viernes",
              "Sábado",
            ],
            shortDays: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
            toolbar: {
              exportToSVG: "Descargar SVG",
              exportToPNG: "Descargar PNG",
              exportToCSV: "Descargar CSV",
              selection: "Seleccionar",
              selectionZoom: "Seleccionar Zoom",
              zoomIn: "Aumentar",
              zoomOut: "Disminuir",
              pan: "Navegación",
              reset: "Reiniciar Zoom",
            },
          },
        },
      ],
      defaultLocale: "es",
      type: "bar",
      height: "100%",
      width: "auto",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: any) {
        return val;
      },
      offsetY: -20,
      style: {
        fontSize: "16px",
        colors: ["#304758"],
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: packingData
        ? packingData.map((item: any) => item.Usuario)
        : [],
    },
    fill: {
      opacity: 2,
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return val;
        },
      },
    },
    title: {
      text: "Packing",
      offsetY: 0,
      align: "center",
      style: {
        color: "#444",
        fontSize: "30px",
      },
    },
  });

  const [series, setSeries] = useState([
    {
      name: "Unidades Preparadas",
      data: packingData
        ? packingData.map((item: any) => item.Unidades_Preparadas)
        : [],
      title: {
        text: "Unidades Preparadas",
        align: "center",
      },
    },
    {
      name: "Lineas Preparadas",
      data: packingData
        ? packingData.map((item: any) => item.Lineas_Preparadas)
        : [],
    },
  ]);

  useEffect(() => {
    if (packingData) {
      setOptions((prevOptions) => ({
        ...prevOptions,
        xaxis: {
          categories: packingData.map((item: any) => item.Usuario),
        },
      }));
      setSeries([
        {
          name: "Unidades Preparadas",
          data: packingData.map((item: any) => item.Unidades_Preparadas),
        },
        {
          name: "Lineas Preparadas",
          data: packingData.map((item: any) => item.Lineas_Preparadas),
        },
      ]);
    }
  }, [packingData]);

  if (isLoadingPacking) return "Cargando...";

  return (
    <div
      style={{
        height: "500px",
        position: "relative",
      }}
    >
      <div
        id="chart"
        style={{
          borderRadius: "10px",
          overflow: "hidden",
          height: "100%",
          borderColor: "black",
        }}
      >
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={500}
        />
      </div>
    </div>
  );
};

export default PackingApexBar;
