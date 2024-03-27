import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { RESUMEN_OPERACION_URL } from "@/global-variables";
export const ResumenOperacionAPI = () => {
  const getResumenOperacion = async () => {
    try {
      const url = `${RESUMEN_OPERACION_URL}`;
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      console.error(error, "Error al cargar el resumen de la operacion");
      throw error;
    }
  };

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["KeyResumenOperacion"],
    queryFn: getResumenOperacion,
    refetchInterval: 15 * 60 * 1000, // Refetch every 15 minutes
  });

  return {
    isLoading,
    data,
    isError,
    error,
  };
};
