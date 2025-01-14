import api from "./api";
import { ProjectProps } from "../Components/Projects";
import { ProjectPageProps } from "../Pages/Project/Project";

export const getProjects = async (): Promise<ProjectProps[]> => {
  const response = await api.get("/projects"); 
  return response.data; 
};

export const getProjectById = async (id: string): Promise<ProjectPageProps> => {
  const response = await api.get(`/projects/${id}`);
  return response.data;
};