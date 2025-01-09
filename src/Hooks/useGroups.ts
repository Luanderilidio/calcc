import { useEffect, useState } from "react";
import { getGroups } from "../Services/GroupsServices";
import { WhatsGroupProps } from "../Components/WhatsGroup";

export const useGroups = () => {
  const [groups, setGroups] = useState<WhatsGroupProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGroups = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getGroups();
        setGroups(data);
      } catch (err: any) {
        setError(err.message || "Erro ao buscar groups");
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []); // Executa apenas uma vez, ao montar o componente

  return { groups, loading, error };
};
