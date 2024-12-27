import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          {/* <Route path={`/admin`} element={<Admin />} />
          <Route path={`/mediacao-escolar`} element={<MediacaoEscolar />} />
          <Route path={`/busca-ativa`} element={<BuscaAtiva />} />
          <Route path={`/contatos`} element={<Contatos />} /> */}
          <Route path="*" element={<>No Match</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
