import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { PICKING_URL } from "@/global-variables";

export const PickingAPI = () => {
  const getPicking = async () => {
    try {
      const url = `${PICKING_URL}`;
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      console.error(error, "Error al cargar el resumen de la operacion");
      throw error;
    }
  };

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["KeyPicking"],
    queryFn: getPicking,
    refetchInterval: 6000,
  });

  return {
    isLoading,
    data,
    isError,
    error,
  };
};
