import { useEffect, useState } from "react";
import { TeacherProps } from "../Components/Teacher";
import { UsefulLinkProps } from "../Components/UsefulLink";
import { getUsefulLinks } from "../Services/UsefulLinkServices";

export const useUsefulLinks = () => {
  const [usefulLinks, setUsefulLinks] = useState<UsefulLinkProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsefulLinks = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getUsefulLinks();
        setUsefulLinks(data);
      } catch (err: any) {
        setError(err.message || "Erro ao buscar usefulLinks");
      } finally {
        setLoading(false);
      }
    };

    fetchUsefulLinks();
  }, []); // Executa apenas uma vez, ao montar o componente

  return { usefulLinks, loading, error };
};
