import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_PATH } from "@/global-variables";

export const PackingAPI = () => {
  const getPacking = async () => {
    try {
      const url = `http://172.16.0.8:4403/${API_PATH}/api/Packing/DiaProductividad`;
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      console.error(error, "Error al cargar el resumen de la operacion");
      throw error;
    }
  };

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["KeyPacking"],
    queryFn: getPacking,
    refetchInterval: 15 * 60 * 1000, // Refetch every 15 minutes
  });

  return {
    isLoading,
    data,
    isError,
    error,
  };
};
