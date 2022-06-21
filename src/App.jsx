import React from 'react';
import './app.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inicio from './components/Inicio';
import Civilizaciones from './components/Civilizaciones';
import Productos from './components/Productos';
import Clientes from './components/Clientes';
import Productos2 from './components/Productos2';
import Civilizacion from './components/Civilizacion';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className='btn-group'>
          <Link to="/" className="btn btn-outline-dark">
            Inicio
          </Link>
          <Link to="/productos" className="btn btn-outline-dark">
            Productos
          </Link>
          <Link to="/civilizaciones" className="btn btn-outline-dark">
            Civilizaciones
          </Link>
          <Link to="/clientes" className="btn btn-outline-dark">
            Clientes
          </Link>
          <Link to="/productos2" className="btn btn-outline-dark">
            Productos
          </Link>
        </div>
        <Routes>
          <Route path="/civilizaciones/:id" element={<Civilizacion></Civilizacion>}></Route>
          <Route path="/" exact element={<Inicio></Inicio>}></Route>
          <Route path="/productos" element={<Productos></Productos>}></Route>
          <Route path="/civilizaciones" element={<Civilizaciones></Civilizaciones>}></Route>
          <Route path="/clientes" element={<Clientes></Clientes>}></Route>          
          <Route path="/productos2" element={<Productos2></Productos2>}></Route>          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
