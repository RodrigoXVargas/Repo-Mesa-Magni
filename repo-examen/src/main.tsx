import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './componentes/Navbar.tsx'
import Crud from './vistas/Crud.tsx'
import FormCrud from './vistas/FormCrud.tsx'
import Details from './vistas/Details.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
    <Navbar />
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/crud' element={<Crud />} />
      <Route path='/crud/:id' element={<FormCrud />} />
      <Route path='/details/:id' element={<Details />} />

    </Routes>

  </BrowserRouter>
  </React.StrictMode>,
)
