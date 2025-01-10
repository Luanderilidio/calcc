import api from "./api";
import { UsefulLinkProps } from "../Components/UsefulLink";

export const getUsefulLinks = async (): Promise<UsefulLinkProps[]> => {
  const response = await api.get("/usefullinks");
  return response.data;
};
