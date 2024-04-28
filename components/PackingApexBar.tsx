import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { PackingAPI } from "../app/api/Packing";
import { useTheme } from "next-themes";

const ApexChartComponent = () => {
  const { isLoading: isLoadingPacking, data: packingData } = PackingAPI();

  const [options, setOptions] = useState({
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: packingData ? packingData.map(item => item.Usuario) : [],
    },
    yaxis: {
      title: {
        text: "Unidades / Lineas",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  });

  const [series, setSeries] = useState([
    {
      name: "Unidades Preparadas",
      data: packingData ? packingData.map(item => item.Unidades_Preparadas) : [],
    },
    {
      name: "Lineas Preparadas",
      data: packingData ? packingData.map(item => item.Lineas_Preparadas) : [],
    },
  ]);

  useEffect(() => {
    if (packingData) {
      setOptions(prevOptions => ({
        ...prevOptions,
        xaxis: {
          categories: packingData.map(item => item.Usuario),
        },
      }));
      setSeries([
        {
          name: "Unidades Preparadas",
          data: packingData.map(item => item.Unidades_Preparadas),
        },
        {
          name: "Lineas Preparadas",
          data: packingData.map(item => item.Lineas_Preparadas),
        },
      ]);
    }
  }, [packingData]);

  if (isLoadingPacking) return "Cargando...";

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ApexChartComponent;