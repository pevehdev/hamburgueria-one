import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'

import App from './App'
import Home from './components/pages/Home'
import Produtos from './components/pages/Produtos'
import Sobre from './components/pages/Sobre'
import Login from './components/pages/Login'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <BrowserRouter>
    <Routes>
      <Route element={<App />}>
      <Route path="/" element={<Home />}/>
      <Route path="/produtos" element={<Produtos />}/>
      <Route path="/sobre" element={<Sobre />}/>
      <Route path="/login" element={<Login />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)