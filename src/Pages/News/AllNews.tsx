import { useMemo, useState } from "react";
import {
  Autocomplete,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  TextField,
  Typography,
} from "@mui/material";
import TitleOutlinedIcon from "@mui/icons-material/TitleOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Base from "../../Components/Base";
import Notice from "../../Components/Notice";
import { useNotices } from "../../Hooks/useNotice";

export default function AllNews() {
  const { notices, loading, error } = useNotices();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeMenu, setActiveMenu] = useState<string>("tags");
  const [titleFilter, setTitleFilter] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [dateFilter, setDateFilter] = useState<Date | null>(null);
  const [authorFilter, setAuthorFilter] = useState<string>("");

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    menu: string
  ) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(menu);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveMenu("");
  };

  const open = Boolean(anchorEl);

  const renderMenuContent = () => {
    if (activeMenu === "title") {
      return (
        <div className="w-80 px-2 flex">
          <Autocomplete
            fullWidth
            size="small"
            options={titles}
            value={titleFilter}
            onChange={(event, newValue) => setTitleFilter(newValue || "")}
            renderInput={(params) => <TextField {...params} label="Título" />}
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>
      );
    }
    if (activeMenu === "tags") {
      return <div></div>;
    }
    if (activeMenu === "author") {
      return (
        <MenuItem>
          <Typography variant="body1">Componente para Autor</Typography>
        </MenuItem>
      );
    }
    if (activeMenu === "date") {
      return <div className="w-60"></div>;
    }
    return null;
  };

  const titles = useMemo(
    () => [...new Set(notices.map((n) => n.title))],
    [notices]
  );
  const categories = useMemo(
    () => [...new Set(notices.map((n) => n.category))],
    [notices]
  );
  const authors = useMemo(
    () => [...new Set(notices.map((n) => n.authorName))],
    [notices]
  );

  const filteredNotices = useMemo(() => {
    return notices.filter((notice) => {
      const matchesTitle = notice.title
        .toLowerCase()
        .includes(titleFilter.toLowerCase());
      const matchesCategory = categoryFilter
        ? notice.category === categoryFilter
        : true;
      const matchesDate = dateFilter
        ? new Date(notice.date).toDateString() === dateFilter.toDateString()
        : true;
      const matchesAuthor = authorFilter
        ? notice.authorName === authorFilter
        : true;

      return matchesTitle && matchesCategory && matchesDate && matchesAuthor;
    });
  }, [titleFilter, categoryFilter, dateFilter, authorFilter, notices]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;
  if (!notices) return <p>Notícias não encontradas.</p>;

  return (
    <Base>
      <Container>
        <div className="grid grid-cols-12 gap-2 mb-5">
          <Button
            className="col-span-3"
            onClick={(e) => handleClick(e, "title")}
            size="small"
            variant="outlined"
            startIcon={<TitleOutlinedIcon />}
          >
            Título
          </Button>

          <Button
            className="col-span-3"
            onClick={(e) => handleClick(e, "tags")}
            size="small"
            variant="outlined"
            startIcon={<LocalOfferOutlinedIcon />}
          >
            Tags
          </Button>

          <Button
            className="col-span-3"
            onClick={(e) => handleClick(e, "author")}
            size="small"
            variant="outlined"
            startIcon={<AccountCircleOutlinedIcon />}
          >
            Autor
          </Button>

          <Button
            className="col-span-3"
            onClick={(e) => handleClick(e, "date")}
            size="small"
            variant="outlined"
            startIcon={<InsertInvitationOutlinedIcon />}
          >
            Data
          </Button>
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {renderMenuContent()}
        </Menu>

        {notices.map((item, index) => (
          <Notice
            key={index}
            id={item.id}
            imageUrl={item.imageUrl}
            category={item.category}
            title={item.title}
            authorImageUrl={item.authorImageUrl}
            authorName={item.authorName}
            date={item.date}
          />
        ))}
      </Container>
    </Base>
  );
}
