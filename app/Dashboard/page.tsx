"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";

type CardProps = React.ComponentProps<typeof Card>;

import { ResumenOperacionAPI } from "@/app/api/ResumenOperacion";

const titleDashboard = {
  titleDashboard: "Dashboard",
  Cargados: "Cargados",
  EnBandeja: "En bandeja",
  Picking: "Picking",
  Packing: "Packing",
  PedidosFinalizadosPack: "Packing finalizados",
};

import HeaderComponent from "@/components/ui/header";

import RecepcionChart from "@/components/RecepcionChart";
import PickingChart from "@/components/PickingChart";
import PackingChart from "@/components/PackingChart";

const Dashboard = ({ className, ...props }: CardProps) => {
  const charts = [
    <PickingChart key="picking" />,
    <PackingChart key="packing" />,
    <RecepcionChart key="recepcion" />,
  ];

  const [parent, draggableCharts] = useDragAndDrop<HTMLDivElement, JSX.Element>(
    charts
  );

  // apis
  const { data: resumenOperacionData } = ResumenOperacionAPI();

  return (
    <>
      <HeaderComponent />
      <div className="flex justify-evenly gap-5 flex-wrap gap-y-8">
        <Card className={`${cn("w-[380px]", className)} rounded-xl`} {...props}>
          <CardHeader>
            <CardTitle className="text-center">
              <TextGenerateEffect
                words={titleDashboard.Cargados}
                duration={2}
                textSize="text-4xl"
              />
            </CardTitle>
          </CardHeader>
          <CardContent>
            {resumenOperacionData &&
              resumenOperacionData.map((item: any, index: number) => (
                <div key={index}>
                  <p className="text-center">
                    Pedidos: <p className="font-bold">{item.PedidosCargados}</p>
                  </p>
                  <p className="text-center">
                    Lineas: <p className="font-bold">{item.LineasCargadas}</p>
                  </p>
                  <p className="text-center">
                    Unidades:{" "}
                    <p className="font-bold">{item.UnidadesCargadas}</p>
                  </p>
                </div>
              ))}
          </CardContent>
        </Card>
        <Card
          className={`${cn("w-[380px]", className)} rounded-xl `}
          {...props}
        >
          <CardHeader>
            <CardTitle className="text-center">
              <TextGenerateEffect
                words={titleDashboard.EnBandeja}
                duration={2}
                textSize="text-4xl"
              />
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {resumenOperacionData &&
              resumenOperacionData.map((item: any, index: number) => (
                <div key={index}>
                  <p className="text-center text-">
                    Pedidos:{" "}
                    <p className="font-bold">{item.PedidosEnBandeja}</p>
                  </p>
                  <p className="text-center">
                    Lineas: <p className="font-bold">{item.LineasEnBandeja}</p>
                  </p>
                  <p className="text-center">
                    Unidades:{" "}
                    <p className="font-bold">{item.UnidadesEnBandeja}</p>
                  </p>
                </div>
              ))}
          </CardContent>
        </Card>
        <Card
          className={`${cn("w-[380px]", className)} rounded-xl `}
          {...props}
        >
          <CardHeader>
            <CardTitle className="text-center">
              <TextGenerateEffect
                words={titleDashboard.Picking}
                duration={2}
                textSize="text-4xl"
              />
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {resumenOperacionData &&
              resumenOperacionData.map((item: any, index: number) => (
                <div key={index}>
                  <p className="text-center">
                    Pedidos:{" "}
                    <p className="font-bold">{item.PedidosEnPicking}</p>
                  </p>
                  <p className="text-center">
                    Lineas pendientes:{" "}
                    <p className="font-bold">{item.LineasPendientesPick}</p>
                  </p>
                  <p className="text-center">
                    Unidades pendientes:{" "}
                    <p className="font-bold">{item.UnidadesPendientesPick}</p>
                  </p>
                </div>
              ))}
          </CardContent>
        </Card>
        <Card className={`${cn("w-[380px]", className)} rounded-xl`} {...props}>
          <CardHeader>
            <CardTitle className="text-center">
              <TextGenerateEffect
                words={titleDashboard.Packing}
                duration={2}
                textSize="text-4xl"
              />
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {resumenOperacionData &&
              resumenOperacionData.map((item: any, index: number) => (
                <div key={index}>
                  <p className="text-center">
                    Pedidos:{" "}
                    <p className="font-bold">{item.PedidosEnPacking}</p>
                  </p>
                  <p className="text-center">
                    Lineas pendientes:{" "}
                    <p className="font-bold">{item.LineasPendientesPack}</p>
                  </p>
                  <p className="text-center">
                    Unidades pendientes:{" "}
                    <p className="font-bold">{item.UnidadesPendientesPack}</p>
                  </p>
                </div>
              ))}
          </CardContent>
        </Card>
        <Card
          className={`${cn("w-[380px]", className)} rounded-xl `}
          {...props}
        >
          <CardHeader>
            <CardTitle className="text-center">
              <TextGenerateEffect
                words={titleDashboard.PedidosFinalizadosPack}
                duration={2}
                textSize="text-4xl"
              />
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {resumenOperacionData &&
              resumenOperacionData.map((item: any, index: number) => (
                <div key={index}>
                  <p className="text-center text-lg">
                    Pedidos:{" "}
                    <p className="font-bold">{item.PedidosFinalizadosPack}</p>
                  </p>
                </div>
              ))}
          </CardContent>
        </Card>
      </div>
      <div
        className="flex my-20 justify-around flex-wrap gap-4 gap-y-10"
        ref={parent}
      >
        {draggableCharts.map((chart) => (
          <div className="draggable-chart" key={chart.key}>
            {chart}
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
