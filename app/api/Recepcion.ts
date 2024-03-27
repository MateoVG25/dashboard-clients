import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { RECEPCION_URL } from "@/global-variables";

export const RecepcionAPI = () => {
  const getRecepcion = async () => {
    try {
      const url = `${RECEPCION_URL}`;
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      console.error(error, "Error al cargar los datos de recepcion");
      throw error;
    }
  };

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["KeyRecepcion"],
    queryFn: getRecepcion,
    refetchInterval: 15 * 60 * 1000, // Refetch every 15 minutes
  });

  return {
    isLoading,
    data,
    isError,
    error,
  };
};
