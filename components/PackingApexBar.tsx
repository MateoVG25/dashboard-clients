import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { PackingAPI } from "../app/api/Packing";

const PackingApexBar = () => {
  const { isLoading: isLoadingPacking, data: packingData } = PackingAPI();

  const [options, setOptions] = useState({
    chart: {
      type: "bar",
      height: "100%",
      width: "100%",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        endingShape: "rounded",
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
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={500}
      />
    </div>
  );
};

export default PackingApexBar;