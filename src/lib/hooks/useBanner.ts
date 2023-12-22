import useSWR from "swr";
import { fetcher } from "../utils/api";

export const useBanner = () => {
  const pathkey = "/usebanner";
  const { data, error, isLoading } = useSWR(pathkey, fetcher, {
    refreshInterval: 10000,
  });
  return { data: data || [], loading: isLoading, error: error || null };
};
