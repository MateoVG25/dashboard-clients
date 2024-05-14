import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { REPORTE_DOCUMENTO_ERP_URL } from "@/global-variables";

export const ReporteDocumentoERPAPI = () => {
  const getReporteDocumentoERP = async () => {
    try {
      const url = `${REPORTE_DOCUMENTO_ERP_URL}`;
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      console.error(error, "Error al cargar el reporte documento ERP");
      throw error;
    }
  };
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["KeyReporteDocumentoERP"],
    queryFn: getReporteDocumentoERP,
    refetchInterval: 15 * 60 * 1000,
  });

  return {
    isLoading,
    data,
    isError,
    error,
  };
};
