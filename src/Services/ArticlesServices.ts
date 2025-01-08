import api from "./api";
import { ArticleProps } from "../Components/Article";

export const getArticles = async (): Promise<ArticleProps[]> => {
  const response = await api.get("/articles"); 
  return response.data; 
};