"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";
import { ConceptoData } from "./data/data";
import { Badge } from "@/components/ui/badge";

export type Transaction = {
  Usuario: string;
  Concepto: string;
  FechaHora: string;
  TiempoDesdeUltimaTransaccion: number;
};

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "Usuario",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Usuario" />
    ),
  },
  {
    accessorKey: "Concepto",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Concepto" />
    ),
    cell: (info) => info.getValue(),
    meta: {
      filterVariant: "select",
    },
  },
  {
    accessorKey: "FechaHora",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fecha-Hora" />
    ),
    cell: ({ row }) => {
      const fecha = new Date(row.original.FechaHora);
      return fecha.toLocaleString();
    },
  },
  {
    accessorKey: "TiempoDesdeUltimaTransaccion",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Tiempo desde ultima transacción (Minutos)"
      />
    ),
  },
];
