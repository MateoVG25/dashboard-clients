import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { REPORTE_PEDIDOS_USUARIO_URL } from "@/global-variables";

export const ReportePedidosUsuarioAPI = () => {
  const getReportePedidosUsuario = async () => {
    try {
      const url = `${REPORTE_PEDIDOS_USUARIO_URL}`;
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      console.error(error, "Error al cargar el reporte de pedidos de usuario");
      throw error;
    }
  };
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["KeyReportePedidosUsuario"],
    queryFn: getReportePedidosUsuario,
    refetchInterval: 15 * 60 * 1000,
  });

  return {
    isLoading,
    data,
    isError,
    error,
  };
};
