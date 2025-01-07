import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Notice from "../Pages/Notice/Notice";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/noticia`} element={<Notice />} />
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
