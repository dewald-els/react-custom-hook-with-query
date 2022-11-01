import { Guitar } from "./../models/guitar.model";
import { fetchGuitars } from "./api";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useGuitars = () => {
  const guitars = useQuery<Guitar[], AxiosError>(["guitars"], () => {
    return fetchGuitars().then((r) => r.data);
  });
  return guitars.data || [];
};
