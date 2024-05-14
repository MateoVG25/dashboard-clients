"use client";

import { columns } from "./columns";
import { DataTable } from "./data-table";
import UltimoMovimientoDiaAPI from "@/app/api/UltimoMovimientoDia";

export default function TablaUltimoMovimientoDia() {
  const { isLoading: isLoadingUltimoMovimiento, data: UltimoMovimientoData } =
    UltimoMovimientoDiaAPI();

  if (isLoadingUltimoMovimiento || !UltimoMovimientoData) {
    return <div>Cargando datos...</div>;
  }

  return (
    <div className="container mx-auto pb-3">
      <DataTable
        columns={columns}
        data={UltimoMovimientoData ? UltimoMovimientoData : "Cargando datos..."}
      />
    </div>
  );
}
