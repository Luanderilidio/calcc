import { useEffect, useState } from "react";
import { getProjects } from "../Services/ProjectServices";
import { ProjectProps } from "../Components/Projects";

export const useProjects = () => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getProjects();
        setProjects(data);
      } catch (err: any) {
        setError(err.message || "Erro ao buscar projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []); // Executa apenas uma vez, ao montar o componente

  return { projects, loading, error };
};
