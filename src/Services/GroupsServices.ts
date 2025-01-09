import api from "./api";
import { WhatsGroupProps } from "../Components/WhatsGroup";

export const getGroups = async (): Promise<WhatsGroupProps[]> => {
  const response = await api.get("/groups"); 
  return response.data; 
};