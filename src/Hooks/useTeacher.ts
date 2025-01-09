import { useEffect, useState } from "react";
import { getTeachers } from "../Services/TeacherServices";
import { TeacherProps } from "../Components/Teacher";

export const useTeachers = () => {
  const [teachers, setTeachers] = useState<TeacherProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getTeachers();
        setTeachers(data);
      } catch (err: any) {
        setError(err.message || "Erro ao buscar teachers");
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []); // Executa apenas uma vez, ao montar o componente

  return { teachers, loading, error };
};
