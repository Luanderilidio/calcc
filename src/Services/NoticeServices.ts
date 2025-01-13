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

export const updateNoticeLikes = async (id: string) => {
  const response = await api.put(`/notices/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      qtdLike: 1, // Incrementa no backend (ou envie um valor dinâmico)
    }),
  });

  return response.data(); // Retorna os dados atualizados
};