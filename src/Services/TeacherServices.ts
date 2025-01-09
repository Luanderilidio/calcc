import api from "./api";
import { TeacherProps } from "../Components/Teacher";

export const getTeachers = async (): Promise<TeacherProps[]> => {
  const response = await api.get("/teachers"); 
  return response.data; 
};