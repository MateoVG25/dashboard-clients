"use client";

import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { ReporteDocumentoERPAPI } from "../app/api/ReporteDocumentoERP";
import { ApexOptions } from "apexcharts";

const ReporteDocumentoERP = () => {
  const { isLoading: isLoadingReporteERP, data: reporteDocumentoERPData } =
    ReporteDocumentoERPAPI();

  const [options, setOptions] = useState({
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
      width: "80%",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "20px",
        colors: ["#000000"],
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    title: {
      text: "REPORTE DOCUMENTO ERP",
      align: "center",
      style: {
        fontSize: "25px",
      },
    },
    xaxis: {
      categories: [],
    },
    yaxis: {
      title: {
        text: "Pedidos",
      },
    },
    fill: {
      opacity: 4,
    },
    legend: {
      position: "top",
      width: "100%",

      horizontalAlign: "center",
      offsetX: 0,
      offsetY: 0,
      labels: {
        colors: ["#000000"],
        fontSize: "28px",
      },
    },
  });

  const [series, setSeries] = useState([]);

  useEffect(() => {
    if (reporteDocumentoERPData) {
      const documentos = Array.from(
        new Set(reporteDocumentoERPData.map((item) => item.DocumentoERP))
      );

      const series = [
        {
          name: "PEDIDOS EN PICKING",
          data: documentos.map((documento) =>
            reporteDocumentoERPData
              .filter((item) => item.DocumentoERP === documento)
              .reduce((sum, item) => sum + item.PedidosEnPicking, 0)
          ),
        },
        {
          name: "PEDIDOS EN PACKING",
          data: documentos.map((documento) =>
            reporteDocumentoERPData
              .filter((item) => item.DocumentoERP === documento)
              .reduce((sum, item) => sum + item.PedidosEnPacking, 0)
          ),
        },
        {
          name: "PEDIDOS EMPACADOS",
          data: documentos.map((documento) =>
            reporteDocumentoERPData
              .filter((item) => item.DocumentoERP === documento)
              .reduce((sum, item) => sum + item.PedidosEmpacados, 0)
          ),
        },
      ];

      setOptions((prevOptions) => ({
        ...prevOptions,
        xaxis: {
          categories: documentos,
        },
      }));

      setSeries(series);
    }
  }, [reporteDocumentoERPData]);

  if (isLoadingReporteERP) return "Cargando...";

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

export default ReporteDocumentoERP;
