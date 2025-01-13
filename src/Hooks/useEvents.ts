import { useEffect, useState } from "react";
import { getEventById, getEvents } from "../Services/EventsServices";
import { EventImageProps } from "../Components/EventImage";
import { EventsPageProps } from "../Pages/Event/Event";

export const useEvents = (id?: string) => {
  const [event, setEvent] = useState<EventsPageProps | null>(null);
  const [events, setEvents] = useState<EventImageProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        if (id) {
          // Buscar notice por ID
          const data = await getEventById(id);
          setEvent(data);
        } else {
          // Buscar todos os notices
          const data = await getEvents();
          setEvents(data);
        }
      } catch (err: any) {
        setError(err.message || "Erro ao buscar eventos");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { events, event, loading, error };
};
