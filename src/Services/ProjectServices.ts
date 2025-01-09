import api from "./api";
import { ProjectProps } from "../Components/Projects";

export const getProjects = async (): Promise<ProjectProps[]> => {
  const response = await api.get("/projects"); 
  return response.data; 
};