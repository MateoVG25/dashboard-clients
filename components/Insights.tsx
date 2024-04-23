"use client";

import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

// apis
import { ResumenOperacionAPI } from "@/app/api/ResumenOperacion";

const titleDashboard = {
  titleDashboard: "Dashboard",
  Cargados: "Cargados",
  EnBandeja: "En bandeja",
  Picking: "Picking",
  Packing: "Packing",
  PedidosFinalizadosPack: "Packing finalizados",
  PackingIntervenciones: "Packing Intervenciones",
};

type CardProps = React.ComponentProps<typeof Card>;

export default function Insights({ className, ...props }: CardProps) {
  const { data: resumenOperacionData } = ResumenOperacionAPI();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 justify-center">
      <Card className={`${cn(className)}`} {...props}>
        <CardHeader className="flex items-center space-x-2">
          <TruckIcon className="h-6 w-6" />
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
                  Pedidos:{" "}
                  <span className="font-bold">{item.PedidosCargados}</span>
                </p>
                <p className="text-center">
                  Lineas:{" "}
                  <span className="font-bold">{item.LineasCargadas}</span>
                </p>
                <p className="text-center">
                  Unidades:{" "}
                  <span className="font-bold">{item.UnidadesCargadas}</span>
                </p>
              </div>
            ))}
        </CardContent>
      </Card>
      <Card className={`${cn(className)}`} {...props}>
        <CardHeader className="flex items-center space-x-2">
          <InboxIcon className="h-6 w-6" />

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
                <p className="text-center">
                  Pedidos:{" "}
                  <span className="font-bold">{item.PedidosEnBandeja}</span>
                </p>
                <p className="text-center">
                  Lineas:{" "}
                  <span className="font-bold">{item.LineasEnBandeja}</span>
                </p>
                <p className="text-center">
                  Unidades:{" "}
                  <span className="font-bold">{item.UnidadesEnBandeja}</span>
                </p>
              </div>
            ))}
        </CardContent>
      </Card>
      <Card className={`${cn(className)}`} {...props}>
        <CardHeader className="flex items-center space-x-2">
          <HandIcon className="h-6 w-6" />
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
                  <span className="font-bold">{item.PedidosEnPicking}</span>
                </p>
                <p className="text-center">
                  Lineas pendientes:{" "}
                  <span className="font-bold">{item.LineasPendientesPick}</span>
                </p>
                <p className="text-center">
                  Unidades pendientes:{" "}
                  <span className="font-bold">
                    {item.UnidadesPendientesPick}
                  </span>
                </p>
              </div>
            ))}
        </CardContent>
      </Card>
      <Card className={`${cn(className)}`} {...props}>
        <CardHeader className="flex items-center space-x-2">
          <PackageIcon className="h-6 w-6" />
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
                  <span className="font-bold">{item.PedidosEnPacking}</span>
                </p>
                <p className="text-center">
                  Lineas pendientes:{" "}
                  <span className="font-bold">{item.LineasPendientesPack}</span>
                </p>
                <p className="text-center">
                  Unidades pendientes:{" "}
                  <span className="font-bold">
                    {item.UnidadesPendientesPack}
                  </span>
                </p>
              </div>
            ))}
        </CardContent>
      </Card>
      <Card className={`${cn(className)}`} {...props}>
        <CardHeader className="flex items-center space-x-2">
          <SettingsIcon className="h-6 w-6" />
          <CardTitle className="text-center">
            <TextGenerateEffect
              words={titleDashboard.PackingIntervenciones}
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
                  <span className="font-bold">
                    {item.PedidosIntervencionPack}
                  </span>
                </p>
                <p className="text-center">
                  Lineas:{" "}
                  <span className="font-bold">
                    {item.LineasIntervencionPack}
                  </span>
                </p>
                <p className="text-center">
                  Unidades:{" "}
                  <span className="font-bold">
                    {item.UnidadesIntervencionPack}
                  </span>
                </p>
              </div>
            ))}
        </CardContent>
      </Card>
      <Card className={`${cn(className)}`} {...props}>
        <CardHeader className="flex items-center space-x-2">
          <CheckCircleIcon className="h-6 w-6" />
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
                <p className="text-center">
                  Pedidos:{" "}
                  <span className="font-bold">
                    {item.PedidosFinalizadosPack}
                  </span>
                </p>
              </div>
            ))}
        </CardContent>
      </Card>
    </div>
  );
}

function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function CheckCircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function HandIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
      <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  );
}

function PackageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function InboxIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  );
}

function TruckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
      <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
      <circle cx="7" cy="18" r="2" />
      <path d="M15 18H9" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}
