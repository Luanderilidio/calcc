import NewspaperIcon from "@mui/icons-material/Newspaper";
import EventIcon from "@mui/icons-material/Event";
import ScienceIcon from "@mui/icons-material/Science";
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import Groups2Icon from "@mui/icons-material/Groups2";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import BiotechIcon from "@mui/icons-material/Biotech";

import Base from "../../Components/Base";
import Welcome from "../../Components/Welcome";
import Topics from "../../Components/Topics";
import SwipperEvent from "../../Components/SwipperEvent";
import SwipperArticle from "../../Components/SwipperArticle";
import SwipperContacts from "../../Components/SwipperTeachers";
import SwipperProjects from "../../Components/SwipperProjects";
import NoticeList from "../../Components/NoticeList";
import Question from "../../Components/Question";
import SwipperWhatsGroup from "../../Components/SwipperWhatsGroup";
import SwipperUsefulLink from "../../Components/SwipperUsefulLink";

export default function Home() {
  return (
    <Base>
      <Welcome />
      <Topics
        title="Notícias"
        to="/"
        icon={<NewspaperIcon sx={{ fontSize: 25 }} className="text-black/70" />}
      />

      <NoticeList />
      <Topics
        title="Eventos"
        to="/"
        icon={<EventIcon sx={{ fontSize: 25 }} className="text-black/70" />}
      />
      <SwipperEvent />

      <Topics
        title="Artigos"
        to="/"
        icon={<ScienceIcon sx={{ fontSize: 25 }} className="text-black/70" />}
      />
      <SwipperArticle />

      <Topics
        title="Projetos"
        to="/"
        icon={<BiotechIcon sx={{ fontSize: 25 }} className="text-black/70" />}
      />

      <SwipperProjects />

      <Topics
        title="Professores"
        to="/"
        icon={<Groups2Icon sx={{ fontSize: 25 }} className="text-black/70" />}
      />
      <SwipperContacts />

      <Topics
        title="Grupos"
        to="/"
        icon={
          <WorkspacesIcon sx={{ fontSize: 25 }} className="text-black/70" />
        }
      />
      <SwipperWhatsGroup />

      <Topics
        title="Links Úteis"
        to="/"
        icon={
          <InsertLinkIcon sx={{ fontSize: 25 }} className="text-black/70" />
        }
      />
      <SwipperUsefulLink />

      <Question />
    </Base>
  );
}
