"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

// charts
import PickingChart from "@/components/PickingChart";
import PackingChart from "@/components/PackingChart";
import RecepcionChart from "@/components/RecepcionChart";

import { useDragAndDrop } from "@formkit/drag-and-drop/react";

type CardProps = React.ComponentProps<typeof Card>;

import { ResumenOperacionAPI } from "@/app/api/ResumenOperacion";

const titleDashboard = {
  titleDashboard: "Dashboard",
  Cargados: "Cargados",
  EnBandeja: "En bandeja",
  Picking: "Picking",
  Packing: "Packing",
};

export const Dashboard = ({ className, ...props }: CardProps) => {
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
      <TextGenerateEffect
        words={titleDashboard.titleDashboard}
        className="text-center my-5"
        textSize="text-4xl"
      />
      <div className="flex justify-evenly gap-5 flex-wrap">
        <Card
          className={`${cn(
            "w-[380px]",
            className
          )} rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]`}
          {...props}
        >
          <CardHeader>
            <CardTitle className="text-center">
              <TextGenerateEffect
                words={titleDashboard.Cargados}
                duration={2}
                textSize="text-4xl"
              />
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {resumenOperacionData &&
              resumenOperacionData.map((item: any, index: number) => (
                <div key={index}>
                  <p className="text-center">Pedidos: {item.PedidosCargados}</p>
                  <p className="text-center">Lineas: {item.LineasCargadas}</p>
                  <p className="text-center">
                    Unidades: {item.UnidadesCargadas}
                  </p>
                </div>
              ))}
          </CardContent>
        </Card>
        <Card
          className={`${cn(
            "w-[380px]",
            className
          )} rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]`}
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
                    Pedidos: {item.PedidosEnBandeja}
                  </p>
                  <p className="text-center">Lineas: {item.LineasEnBandeja}</p>
                  <p className="text-center">
                    Unidades: {item.UnidadesEnBandeja}
                  </p>
                </div>
              ))}
          </CardContent>
        </Card>
        <Card
          className={`${cn(
            "w-[380px]",
            className
          )} rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]`}
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
                    Pedidos: {item.PedidosEnPicking}
                  </p>
                  <p className="text-center">
                    Lineas pendientes: {item.LineasPendientesPick}
                  </p>
                  <p className="text-center">
                    Unidades pendientes: {item.UnidadesPendientesPick}
                  </p>
                </div>
              ))}
          </CardContent>
        </Card>
        <Card
          className={`${cn(
            "w-[380px]",
            className
          )} rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]`}
          {...props}
        >
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
                    Pedidos: {item.PedidosEnPacking}
                  </p>
                  <p className="text-center">
                    Lineas pendientes: {item.LineasPendientesPack}
                  </p>
                  <p className="text-center">
                    Unidades pendientes: {item.UnidadesPendientesPack}
                  </p>
                </div>
              ))}
          </CardContent>
        </Card>
      </div>
      <div className="flex my-20 justify-around flex-wrap" ref={parent}>
        {draggableCharts.map((chart) => (
          <div className="draggable-chart" key={chart.key}>
            {chart}
          </div>
        ))}
      </div>
    </>
  );
};
