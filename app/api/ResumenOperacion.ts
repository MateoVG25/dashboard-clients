import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_PATH } from "@/global-variables";
export const ResumenOperacionAPI = () => {
  const getResumenOperacion = async () => {
    try {
      const url = `http://172.16.0.8:4403/${API_PATH}/api/OtherProcesses/ResumenOperacion`;
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
