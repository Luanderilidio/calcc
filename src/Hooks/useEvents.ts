import { useEffect, useState } from "react";
import { getEvents } from "../Services/EventsServices";
import { EventImageProps } from "../Components/EventImage";

export const useEvents = () => {
  const [events, setEvents] = useState<EventImageProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getEvents();
        setEvents(data);
      } catch (err: any) {
        setError(err.message || "Erro ao buscar events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []); // Executa apenas uma vez, ao montar o componente

  return { events, loading, error };
};
