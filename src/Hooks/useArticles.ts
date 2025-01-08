import { useEffect, useState } from "react";
import { getArticles } from "../Services/ArticlesServices";
import { ArticleProps } from "../Components/Article";

export const useArticles = () => {
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getArticles();
        setArticles(data);
      } catch (err: any) {
        setError(err.message || "Erro ao buscar articles");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []); // Executa apenas uma vez, ao montar o componente

  return { articles, loading, error };
};
