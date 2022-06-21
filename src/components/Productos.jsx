import React, { useState } from "react";
import ListadoProductos from "./ListadoProductos";
import ProductoForm from "./ProductoForm";

function Productos() {

  //se hace el listado
  const productosData = [
    {id: 1, nombre: "Blusa", descripcion: "Talla M", fechaIngreso: "16/05/22", precio: 4500, cantidad: 12},
    {id: 2, nombre: "Camisa", descripcion: "Talla S", fechaIngreso: "16/05/22", precio: 5000, cantidad: 10},
    {id: 3, nombre: "Pantalón", descripcion: "Talla 32", fechaIngreso: "16/05/22", precio: 10000, cantidad: 20},
    {id: 4, nombre: "Enagua", descripcion: "Talla S", fechaIngreso: "16/05/22", precio: 12000, cantidad: 10},
    {id: 5, nombre: "Vestido", descripcion: "Talla M", fechaIngreso: "16/05/22", precio: 15000, cantidad: 8},
    {id: 6, nombre: "Short", descripcion: "Talla 3/4", fechaIngreso: "16/05/22", precio: 8000, cantidad: 12},
    {id: 7, nombre: "Camiseta", descripcion: "Talla L", fechaIngreso: "16/05/22", precio: 5000, cantidad: 25},
    {id: 8, nombre: "Suéter", descripcion: "Talla L", fechaIngreso: "16/05/22", precio: 10000, cantidad: 14},
    {id: 9, nombre: "Jacket", descripcion: "Talla M", fechaIngreso: "16/05/22", precio: 17000, cantidad: 12},
    {id: 10, nombre: "Licra", descripcion: "Talla S", fechaIngreso: "16/05/22", precio: 10000, cantidad: 20},
    {id: 11, nombre: "Top", descripcion: "Talla S", fechaIngreso: "16/05/22", precio: 8000, cantidad: 18},
    {id: 12, nombre: "Botines", descripcion: "Talla 37", fechaIngreso: "16/05/22", precio: 19000, cantidad: 10},
    {id: 13, nombre: "Tenis", descripcion: "Talla 42", fechaIngreso: "16/05/22", precio: 23000, cantidad: 15},
    {id: 14, nombre: "Sandalias", descripcion: "Talla 35", fechaIngreso: "16/05/22", precio: 7000, cantidad: 5},
    {id: 15, nombre: "Zapato", descripcion: "Talla 40", fechaIngreso: "16/05/22", precio: 16000, cantidad: 8}
  ];

  // state - aquí carga toda la data
  const [productos, setProductos] = useState(productosData);

  //objeto con las propiedades del usuario vacío porque tenemos que capturar los datos de la tabla
  const [currentProduct, setCurrentProduct] = useState({ 
    id: null, nombre: '', descripcion: '', fechaIngreso: '', precio: '', cantidad: ''
  });

  //recibe el usuario que va a modificar y se la envia al currentUser para que tenga la información de dicho usuario
  const mostrar = (producto) => {
    setCurrentProduct({
      id: producto.id, nombre: producto.nombre, descripcion: producto.descripcion, fechaIngreso: producto.fechaIngreso,
      precio: producto.precio, cantidad: producto.cantidad
    })
  }

  return (
    <div className="container">
      <h1 align="center" style={{ color: "#1F618D" }}>Productos</h1>
      <br></br>
      <div className="flex-row">
        <div className="flex-large">
                    <div>
                        <h2>Detalle producto</h2>
                        <ProductoForm
                        currentProduct={currentProduct}/>
                    </div>    
        </div>
        <div className="flex-large">
          <h2 align="center">Listado de Productos</h2>
          {/* se pasa el estado como props porque estos son los campos que están dentro de la tabla */}
          <ListadoProductos 
            productos={productos}  
            mostrar={mostrar}
          /> 
        </div>
      </div>
    </div>
  );
}

export default Productos;
