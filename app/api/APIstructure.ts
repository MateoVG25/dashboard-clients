import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type APIstructureProps = {
  functionURL: string;
  errorMessage: string;
  keyName: string;
  timeInMiliseconds: number;
};

export const APIstructure = ({
  functionURL,
  keyName,
  timeInMiliseconds,
}: APIstructureProps) => {
  const getStructure = async () => {
    try {
      const url = `${functionURL}`;
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      console.error(error, { errorMessage: error });
      throw error;
    }
  };

  const { isLoading, isError, error, data } = useQuery({
    queryKey: [{ keyName }],
    queryFn: getStructure,
    refetchInterval: timeInMiliseconds, // example: 15000 = 15 seconds
  });

  return {
    isLoading,
    data,
    isError,
    error,
  };
};
