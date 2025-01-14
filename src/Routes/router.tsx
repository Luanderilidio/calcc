import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import Event from "../Pages/Event/Event";
import Article from "../Pages/Article/Article";
import Project from "../Pages/Project/Project";


const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/noticia/:id/:title`} element={<News />} />
          <Route path={`/evento/:id/:title`} element={<Event />} />
          <Route path={`/artigo/:id/:title`} element={<Article />} />
          <Route path={`/projeto/:id/:title`} element={<Project />} />
          {/* <Route path={`/admin`} element={<Admin />} />
          <Route path={`/busca-ativa`} element={<BuscaAtiva />} />
          <Route path={`/contatos`} element={<Contatos />} /> */}
          <Route path="*" element={<>No Match</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
