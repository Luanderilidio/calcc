import api from "./api";
import { NoticeProps } from "../Components/Notice"; 
import { NewsPageProps } from "../Pages/News/News";

export const getNotices = async (): Promise<NoticeProps[]> => {
  const response = await api.get("/notices"); 
  return response.data; 
};

export const getNoticeById = async (id: string): Promise<NewsPageProps> => {
  const response = await api.get(`/notices/${id}`);
  return response.data;
};