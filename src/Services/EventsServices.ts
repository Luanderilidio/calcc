import api from "./api";
import { EventImageProps } from "../Components/EventImage"; 
import { EventsPageProps } from "../Pages/Event/Event";

export const getEvents = async (): Promise<EventImageProps[]> => {
  const response = await api.get("/events"); 
  return response.data; 
};

export const getEventById = async (id: string): Promise<EventsPageProps> => {
  const response = await api.get(`/events/${id}`);
  return response.data;
};