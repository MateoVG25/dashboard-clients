"use client";

import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { ReportePedidosUsuarioAPI } from "../app/api/ReportePedidosUsuario";
import { ApexOptions } from "apexcharts";

const ReportePedidosUsuario_chart = () => {
  const { isLoading: isLoadingReporte, data: reporteDocumentoData } =
    ReportePedidosUsuarioAPI();

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
      type: "line",
      height: "100%",
      width: "80%",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#77B6EA", "#545454"],
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "20px",
      },
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "REPORTE PEDIDOS USUARIO",
      align: "center",
      style: {
        fontSize: "25px",
      },
    },
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    markers: {
      size: 1,
    },
    xaxis: {
      categories: reporteDocumentoData
        ? reporteDocumentoData.map((item: any) => item.USUARIO)
        : [],
      title: {
        text: "USUARIO",
        style: {
          fontSize: "20px",
        },
      },
    },
    yaxis: {
      title: {
        text: "PEDIDOS PREPARADOS",
        style: {
          fontSize: "20px",
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  });

  const [series, setSeries] = useState([
    {
      name: "PEDIDOSPREPARADOS",
      data: reporteDocumentoData
        ? reporteDocumentoData.map((item: any) => item.PEDIDOSPREPARADOS)
        : [],
    },
  ]);

  useEffect(() => {
    if (reporteDocumentoData) {
      setOptions((prevOptions) => ({
        ...prevOptions,
        xaxis: {
          categories: reporteDocumentoData.map((item: any) => item.USUARIO),
        },
      }));
      setSeries([
        {
          name: "PEDIDOSPREPARADOS",
          data: reporteDocumentoData.map((item: any) => item.PEDIDOSPREPARADOS),
        },
      ]);
    }
  }, [reporteDocumentoData]);

  if (isLoadingReporte) return "Cargando...";

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={500}
      />
    </div>
  );
};

export default ReportePedidosUsuario_chart;
