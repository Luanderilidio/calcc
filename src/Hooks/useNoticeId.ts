import { useEffect, useState } from "react";
import { getNoticeById } from "../Services/NoticeServices";
import { NewsPageProps } from "../Pages/News/News";

export const useNoticeById = (id: string) => {
  const [notice, setNotice] = useState<NewsPageProps | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotice = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getNoticeById(id);
        setNotice(data);
      } catch (err: any) {
        setError(err.message || "Erro ao buscar o notice");
      } finally {
        setLoading(false);
      }
    };

    fetchNotice();
  }, [id]); // Reexecuta sempre que o ID mudar

  return { notice, loading, error };
};
