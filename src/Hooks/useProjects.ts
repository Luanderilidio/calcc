import { useEffect, useState } from "react";
import { getProjectById, getProjects } from "../Services/ProjectServices";
import { ProjectProps } from "../Components/Projects";
import { ProjectPageProps } from "../Pages/Project/Project";

export const useProjects = (id?: string) => {
  const [project, setProject] = useState<ProjectPageProps | null>(null);
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);

      try {
        if (id) {
          const data = await getProjectById(id);
          setProject(data);
        } else {
          const data = await getProjects();
          setProjects(data);
        }
      } catch (err: any) {
        setError(err.message || "Erro ao buscar projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [id]); // Executa apenas uma vez, ao montar o componente

  return { projects, project, loading, error };
};
