import { useQuery } from "react-query";
import { TipoCambioService } from "../services";

function useGetTipoCambio() {
  const { data, error, refetch } = useQuery(["tipoCambio"], () =>
    TipoCambioService.listarTipoCambio()
  );
  const getAreaTratamiento = () => refetch();

  return { data, error, getAreaTratamiento };
}
export default useGetTipoCambio;
