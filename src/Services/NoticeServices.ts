import api from "./api";
import { NoticeProps } from "../Components/Notice"; 

export const getNotices = async (): Promise<NoticeProps[]> => {
  const response = await api.get("/notices"); 
  return response.data; 
};