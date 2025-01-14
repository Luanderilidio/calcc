import api from "./api";
import { ArticleProps } from "../Components/Article";
import { ArticlePageProps } from "../Pages/Article/Article";

export const getArticles = async (): Promise<ArticleProps[]> => {
  const response = await api.get("/articles"); 
  return response.data; 
};

export const getArticleById = async (id: string): Promise<ArticlePageProps> => {
  const response = await api.get(`/articles/${id}`);
  return response.data;
};