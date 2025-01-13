import { useEffect, useState } from "react";
import { getNoticeById, getNotices } from "../Services/NoticeServices";
import { NewsPageProps } from "../Pages/News/News";
import { NoticeProps } from "../Components/Notice";

export const useNotices = (id?: string) => {
  const [notice, setNotice] = useState<NewsPageProps | null>(null);
  const [notices, setNotices] = useState<NoticeProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        if (id) {
          // Buscar notice por ID
          const data = await getNoticeById(id);
          setNotice(data);
        } else {
          // Buscar todos os notices
          const data = await getNotices();
          setNotices(data);
        }
      } catch (err: any) {
        setError(err.message || "Erro ao buscar dados");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { notices, notice, loading, error };
};
