import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import App from "./App";
import Home from "./components/pages/Home";
import Produtos from "./components/pages/Produtos";
import Sobre from "./components/pages/Sobre";
import Login from "./components/pages/Login";
import CadastroProdutos from "./components/pages/CadastroProdutos";
import CadastroHamburguer from "./components/pages/post/CadastroHamburguer";
import CadastroBebidas from "./components/pages/post/CadastroBebidas";
import CadastroAcompanhamentos from "./components/pages/post/CadastroAcompanhamentos";
import CadastroCombos from "./components/pages/post/CadastroCombos";
import DeletarProduto from "./components/pages/delete/DeletarProduto"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastroprodutos" element={<CadastroProdutos />} />
          <Route path="/cadastrohamburguer" element={<CadastroHamburguer />} />
          <Route path="/cadastrobebidas" element={<CadastroBebidas />} />
          <Route path="/cadastroacompanhamentos" element={<CadastroAcompanhamentos />}/>
          <Route path="/cadastrocombos" element ={<CadastroCombos />}/>
          <Route path="/deletarproduto" element ={<DeletarProduto />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
