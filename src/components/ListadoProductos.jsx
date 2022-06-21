import React from "react";
import { Button } from '@mui/material';


const ListadoProductos = (props) => {
  console.log(props.productos);
  return (
    <table>
      <thead style={{background: '#1F618D'}}>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Fecha</th>
          <th>Precio</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {
          props.productos.map(producto => (
            <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.fechaIngreso}</td>
                <td>{producto.precio}</td>
                <td>{producto.cantidad}</td>
                <td>
                    <Button color="primary"
                    className="button muted-button"
                    onClick={() => 
                      {props.mostrar(producto)}
                    }
                    >
                      Detalle
                    </Button>
                </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default ListadoProductos;
