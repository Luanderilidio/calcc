import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  Container } from "@mui/material";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DescriptionIcon from "@mui/icons-material/Description";
import "animate.css";
import MarkdownRenderer from "../../Components/MarkdownRenderer";
import Base from "../../Components/Base";
import { useEvents } from "../../Hooks/useEvents";
import moment from "../../../momentConfig";




export interface EventsPageProps {
  id: string;
  imageEventUrl: string;
  date: Date;
  titleAddress: string;
  address: string;
  modality: string;
  title: string;
  link: string;
  content: string;
}

export default function Event() {
  const { id } = useParams<{ id: string }>();

  const [isScrolling, setIsScrolling] = useState(false);
  const [showButton, setShowButton] = useState(false);
  let scrollTimeout: NodeJS.Timeout;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      setShowButton(false);

      // Define um timeout para detectar quando o usuário para de rolar
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        setShowButton(true);
      }, 300); // O botão aparece 300ms após o usuário parar de rolar
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const { event, loading, error } = useEvents(id);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;
  if (!event) return <p>Evento não encontrado.</p>;

  const now = moment(event.date).locale("pt-br");
  const formattedDate = now.format("LL");
  const formattedHours = now.format("dddd [às] HH:mm [horas]");
  const formattedDateCapitalized = formattedHours.charAt(0).toUpperCase() + formattedHours.slice(1);

  console.log(moment.locale());

  return (
    <Base>
      <Container>
        <div className="relative">
          <div className="overflow-hidden rounded-2xl w-full border shadow-md shadow-black/10 relative ">
            <img
              className="w-full h-52 hover:scale-110 transition duration-500 cursor-pointer object-cover object-top rounded-xl shadow-xl "
              src={event.imageEventUrl}
            />
            <button className="py-[4px] px-[8px] rounded-[4px] font-bold text-xs z-10 top-4 right-4 bg-green-500/10 backdrop-blur-md text-green-500 border border-green-400/30 hover:bg-white/30 transition duration-300 absolute">
              {event.modality}
            </button>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg" />
          </div>
          <h1 className="w-full text-2xl text-[#50525F] font-extrabold leading-none font-Inter text-left mt-4 mb-3">
            {event.title}
          </h1>

          <div className="flex items-center gap-1 text-[#50525F]">
            <InsertInvitationIcon sx={{ fontSize: 15 }} />
            <p className="font-bold text-sm ">{formattedDate}</p>
          </div>
          <div className="flex items-center gap-1 mt-1 text-[#50525F]">
            <AccessTimeIcon sx={{ fontSize: 15 }} />
            <p className="font-bold text-sm">{formattedDateCapitalized}</p>
          </div>
          <div className="flex items-start justify-start gap-1 mt-1 text-[#50525F]">
            <LocationOnIcon sx={{ fontSize: 15 }} />
            <div className="flex flex-col ">
              <p className="font-bold text-sm leading-none">
                {event.titleAddress}
              </p>
              <p className="font-normal text-xs">{event.address}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-4 text-[#50525F]">
            <DescriptionIcon sx={{ fontSize: 20 }} />
            <p className="font-bold text-lg">Descrição</p>
          </div>
          <div className="text-xl mt-5 mb-10">
            <MarkdownRenderer content={event.content} />
          </div>
          {showButton && (
            <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
              <button
                onClick={() => window.open(event.link, "_blank")}
                className="bg-green-500 px-4 py-2 rounded-md font-bold shadow-md shadow-black/30 transition ease-in-out active:scale-95 hover:scale-105 animate__animated animate__fadeIn animate__faster"
              >
                Inscreva-se agora!
              </button>
            </div>
          )}
        </div>
      </Container>
    </Base>
  );
}
