import { AgChartTheme } from "ag-charts-community";

export const chartsTheme: AgChartTheme = {
  baseTheme: "ag-default",
  overrides: {
    common: {
      title: {
        wrapping: "always",
        fontSize: 20,
      },
      overlays: {
        loading: {
          text: "Cargando graficas...",
        },
        noData: {
          text: "No hay información para mostrar",
        },
        noVisibleSeries: {
          text: "No hay series para mostrar",
        },
      },
    },
    bar: {
      series: {
        label: {
          fontFamily: "Fira code",
          enabled: true,
          placement: "inside",
          color: "white",
          formatter: function (params) {
            return Math.round(params.value).toString();
          },
        },
      },
    },
  },
};
