import api from "./api";
import { EventImageProps } from "../Components/EventImage"; 

export const getEvents = async (): Promise<EventImageProps[]> => {
  const response = await api.get("/events"); 
  return response.data; 
};