import { useMemo, useState } from "react";
import {
  Autocomplete,
  Button,
  Container,
  IconButton,
  Menu,
  TextField,
} from "@mui/material";
import TitleOutlinedIcon from "@mui/icons-material/TitleOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import SearchIcon from "@mui/icons-material/Search";
import Base from "../../Components/Base";
import Notice, { NoticeProps } from "../../Components/Notice";
import { useNotices } from "../../Hooks/useNotice";

export default function AllNews() {
  const { notices, loading, error } = useNotices();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeMenu, setActiveMenu] = useState<string>("");
  const [titleFilter, setTitleFilter] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [authorFilter, setAuthorFilter] = useState<string>("");
  const [filteredNotices, setFilteredNotices] = useState<NoticeProps[]>([]);

  const open = Boolean(anchorEl);

  // Filtros únicos para títulos, categorias e autores
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

  // Abrir menu
  const handleMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>,
    menu: string
  ) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(menu);
  };

  // Fechar menu
  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveMenu("");
  };

  // Lógica da pesquisa ao clicar nos botões
  const handleSearch = () => {
    let results = notices;

    if (titleFilter) {
      results = results.filter((n) =>
        n.title.toLowerCase().includes(titleFilter.toLowerCase())
      );
    }
    if (categoryFilter) {
      results = results.filter((n) =>
        n.category.toLowerCase().includes(categoryFilter.toLowerCase())
      );
    }
    if (authorFilter) {
      results = results.filter((n) =>
        n.authorName.toLowerCase().includes(authorFilter.toLowerCase())
      );
    }

    setFilteredNotices(results);
    handleMenuClose();
  };

  const renderMenuContent = () => {
    if (activeMenu === "title") {
      return (
        <div className="w-80 px-2 pt-2 flex">
          <Autocomplete
            fullWidth
            size="small"
            options={titles}
            value={titleFilter}
            onChange={(event, newValue) => setTitleFilter(newValue || "")}
            renderInput={(params) => <TextField {...params} label="Título" />}
          />
        </div>
      );
    }

    if (activeMenu === "category") {
      return (
        <div className="w-80 px-2 pt-2 flex">
          <Autocomplete
            fullWidth
            size="small"
            options={categories}
            value={categoryFilter}
            onChange={(event, newValue) => setCategoryFilter(newValue || "")}
            renderInput={(params) => <TextField {...params} label="Tags" />}
          />
        </div>
      );
    }

    if (activeMenu === "author") {
      return (
        <div className="w-80 px-2 pt-2 flex">
          <Autocomplete
            fullWidth
            size="small"
            options={authors}
            value={authorFilter}
            onChange={(event, newValue) => setAuthorFilter(newValue || "")}
            renderInput={(params) => <TextField {...params} label="Autor" />}
          />
        </div>
      );
    }

    if (activeMenu === "date") {
      return (
        <div className="w-80 px-2 pt-2 flex">
          <Autocomplete
            fullWidth
            size="small"
            options={authors}
            value={authorFilter}
            onChange={(event, newValue) => setAuthorFilter(newValue || "")}
            renderInput={(params) => <TextField {...params} label="Autor" />}
          />
        </div>
      );
    }

    return null;
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;
  if (!notices || notices.length === 0) return <p>Notícias não encontradas.</p>;

  return (
    <Base>
      <Container>
        {/* Botões do Filtro */}
        <h1 className="text-5xl text-center font-bold font-Roboto my-5">Notícias</h1>
        <div className="grid grid-cols-12 gap-2 mb-5">
          <Button
          disabled
            className="col-span-3"
            onClick={(e) => handleMenuOpen(e, "title")}
            size="small"
            variant="outlined"
            startIcon={<TitleOutlinedIcon />}
          >
            Título
          </Button>

          <Button
          disabled
            className="col-span-3"
            onClick={(e) => handleMenuOpen(e, "category")}
            size="small"
            variant="outlined"
            startIcon={<LocalOfferOutlinedIcon />}
          >
            Tags
          </Button>

          <Button
          disabled
          
            className="col-span-3"
            onClick={(e) => handleMenuOpen(e, "author")}
            size="small"
            variant="outlined"
            startIcon={<AccountCircleOutlinedIcon />}
          >
            Autor
          </Button>
          <Button
            disabled
            className="col-span-3"
            onClick={(e) => handleMenuOpen(e, "date")}
            size="small"
            variant="outlined"
            startIcon={<InsertInvitationIcon />}
          >
            Data
          </Button>
        </div>

        {/* Menu de Filtro */}
        <Menu
          id="filter-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "filter-button",
          }}
        >
          {renderMenuContent()}
        </Menu>

        {/* Lista de Notícias */}
        <div className="flex flex-col gap-4">
          {(filteredNotices.length > 0 ? filteredNotices : notices).map(
            (item, index) => (
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
            )
          )}
        </div>
        
      </Container>
    </Base>
  );
}
