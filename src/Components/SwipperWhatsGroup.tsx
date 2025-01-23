import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import WhatsGroup, { WhatsGroupProps } from "./WhatsGroup";
import { Autocomplete, TextField } from "@mui/material";
import { useGroups } from "../Hooks/useGroups";

export default function SwipperWhatsGroup() {
  const { groups, loading, error } = useGroups();
  const [filteredGroups, setFilteredGroups] = useState<WhatsGroupProps[]>([]); // Estado inicial vazio

  // Atualiza o estado de grupos filtrados quando os grupos são carregados
  useEffect(() => {
    if (groups) setFilteredGroups(groups);
  }, [groups]);

  if (loading) return <p>Carregando artigos...</p>;
  if (error) return <p className="text-red-500">Erro: {error}</p>;

  // Atualiza os grupos filtrados com base na entrada do usuário
  const handleFilterChange = (event: any, value: string) => {
    const filtered = groups.filter((group) =>
      group.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredGroups(filtered);
  };

  return (
    <div className="">
      
      <Swiper
        spaceBetween={0}
        slidesPerView={2.3}
        pagination={{ clickable: true }}
        className="border-red-500 pb-3"
      >
        {filteredGroups.map((_item) => (
          <SwiperSlide key={_item.id} className="rounded-xl">
            <WhatsGroup
              id={_item.id}
              title={_item.title}
              imageTeacherUrl={_item.imageTeacherUrl}
              teacherName={_item.teacherName}
              imageGroupUrl={_item.imageGroupUrl}
              linkGroup={_item.linkGroup}
              room={_item.room}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-end mb-3">

      <Autocomplete
        size="small"
        className="w-6/12 mr-3"
        options={groups.map((group) => group.title)} // Títulos dos grupos como opções
        onInputChange={handleFilterChange} // Atualiza os grupos filtrados
        renderInput={(params) => (
          <TextField {...params} label="Filtrar Grupos" variant="outlined" />
        )}
      />
      </div>
    </div>
  );
}
