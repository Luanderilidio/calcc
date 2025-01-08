import { useEffect, useState } from "react";
import { getNotices } from "../Services/NoticeServices";
import { NoticeProps } from "../Components/Notice";

export const useNotices = () => {
  const [notices, setNotices] = useState<NoticeProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotices = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getNotices();
        setNotices(data);
      } catch (err: any) {
        setError(err.message || "Erro ao buscar notices");
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []); // Executa apenas uma vez, ao montar o componente

  return { notices, loading, error };
};
