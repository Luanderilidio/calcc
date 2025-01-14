import { useEffect, useState } from "react";
import { getArticleById, getArticles } from "../Services/ArticlesServices";
import { ArticleProps } from "../Components/Article";
import { ArticlePageProps } from "../Pages/Article/Article";

export const useArticles = (id?: string) => {
  const [article, setArticle] = useState<ArticlePageProps | null>(null);
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);

      try {
        if (id) {
          const data = await getArticleById(id);
          setArticle(data);
        } else {
          const data = await getArticles();
          setArticles(data);
        }
      } catch (err: any) {
        setError(err.message || "Erro ao buscar articles");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [id]); // Executa apenas uma vez, ao montar o componente

  return { articles, article, loading, error };
};
