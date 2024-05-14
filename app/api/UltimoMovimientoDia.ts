import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ULTIMO_MOVIMIENTO_DIA_URL } from "@/global-variables";

export default function UltimoMovimientoDiaAPI() {
  const getUltimoMovimientoDia = async () => {
    try {
      const url = `${ULTIMO_MOVIMIENTO_DIA_URL}`;
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      console.error(error, "Error al cargar los ultimos movimientos del dia");
      throw error;
    }
  };

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["KeyUltimoMovimientoDia"],
    queryFn: getUltimoMovimientoDia,
    refetchInterval: 15 * 60 * 1000,
  });

  return {
    isLoading,
    data,
    isError,
    error,
  };
}
