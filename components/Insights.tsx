"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// components
import CardStructure from "./cards/CardStructure";
import {
  F7TrayArrowDownFill,
  SimpleLineIconsBasketLoaded,
  PhHandPointingBold,
  MdiPackageVariantPlus,
  MdiPackageVariantClosedRemove,
  MajesticonsCheck,
} from "./cards/icons";

// apis
import { ResumenOperacionAPI } from "@/app/api/ResumenOperacion";
import { titleDashboard } from "./cards/data";

type CardProps = React.ComponentProps<typeof Card>;

export function Insights({ className, ...props }: CardProps) {
  const { data: resumenOperacionData } = ResumenOperacionAPI();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 px-12 justify-center">
      {/* Cargados */}
      <CardStructure
        title={titleDashboard.Cargados}
        icon={<SimpleLineIconsBasketLoaded className="h-6 w-6" />}
        data={resumenOperacionData}
        keyNameOrders="PedidosCargados"
        keyNameLines="LineasCargadas"
        keyNameUnits="UnidadesCargadas"
        className={cn(className)}
        props={props}
      />

      {/* EnBandeja */}
      <CardStructure
        title={titleDashboard.EnBandeja}
        icon={<F7TrayArrowDownFill className="h-6 w-6" />}
        data={resumenOperacionData}
        keyNameOrders="PedidosEnBandeja"
        keyNameLines="LineasEnBandeja"
        keyNameUnits="UnidadesEnBandeja"
        className={cn(className)}
        props={props}
      />

      {/* Picking */}
      <CardStructure
        title={titleDashboard.Picking}
        icon={<PhHandPointingBold className="h-6 w-6" />}
        data={resumenOperacionData}
        keyNameOrders="PedidosEnPicking"
        keyNameLines="LineasPendientesPick"
        keyNameUnits="UnidadesPendientesPick"
        className={cn(className)}
        props={props}
      />

      {/* Packing */}
      <CardStructure
        title={titleDashboard.Packing}
        icon={<MdiPackageVariantPlus className="h-6 w-6" />}
        data={resumenOperacionData}
        keyNameOrders="PedidosEnPacking"
        keyNameLines="LineasPendientesPack"
        keyNameUnits="UnidadesPendientesPack"
        className={cn(className)}
        props={props}
      />

      {/* Packing Intervenciones */}
      <CardStructure
        title={titleDashboard.PackingIntervenciones}
        icon={<MdiPackageVariantClosedRemove className="h-6 w-6" />}
        data={resumenOperacionData}
        keyNameOrders="PedidosIntervencionPack"
        keyNameLines="LineasIntervencionPack"
        keyNameUnits="UnidadesIntervencionPack"
        className={cn(className)}
        props={props}
      />

      {/* Packing Finalizados */}
      <CardStructure
        title={titleDashboard.PedidosFinalizadosPack}
        icon={<MajesticonsCheck className="h-6 w-6" />}
        data={resumenOperacionData}
        keyNameOrders="PedidosFinalizadosPack"
        keyNameLines="LineasFinalizadosPack"
        keyNameUnits="UnidadesFinalizadosPack"
        className={cn(className)}
        props={props}
      />
    </div>
  );
}
