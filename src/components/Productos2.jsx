import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(id, nombre, descripcion, fechaIngreso, precio, cantidad) {
  return {
    id, 
    nombre, 
    descripcion, 
    fechaIngreso, 
    precio, 
    cantidad,
    detalle: [
      {
        id: '1',
        nombre: 'Camisa',
        descripcion: 'Talla X',
        fechaIngreso: '2020-01-05',
        precio: 5000,
        cantidad: 10
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
 // const [detalle, setDetalle] = React.useState();

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell  style={{color:'darkcyan'}}>
          <IconButton  style={{color:'darkcyan'}}
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="right">{row.nombre}</TableCell>
        <TableCell align="right">{row.descripcion}</TableCell>
        <TableCell align="right">{row.fechaIngreso}</TableCell>
        <TableCell align="right">{row.precio}</TableCell>
        <TableCell align="right">{row.cantidad}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0, color:'#1F618D' }}  colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Detalle
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell style={{color:'#1F618D'}}>Nombre</TableCell>
                    <TableCell style={{color:'#1F618D'}}>Descripción</TableCell>
                    <TableCell style={{color:'#1F618D'}}>Fecha de ingreso</TableCell>
                    <TableCell style={{color:'#1F618D'}}>Precio</TableCell>
                    <TableCell style={{color:'#1F618D'}}>Cantidad</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.detalle.map((detalleRow) => (
                    <TableRow key={detalleRow.id}>
                      <TableCell component="th" scope="row">
                        {detalleRow.nombre}
                      </TableCell>
                      <TableCell>{detalleRow.descripcion}</TableCell>
                      <TableCell>{detalleRow.fechaIngreso}</TableCell>
                      <TableCell>{detalleRow.precio}</TableCell>
                      <TableCell>{detalleRow.cantidad}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
    createData(1, "Camisa", "Talla S", "16/05/22", 5000, 10),
    createData(2, "Blusa", "Talla M", "16/05/22", 4500, 12),
    createData(3, "Pantalón", "Talla 32", "16/05/22", 10000, 20),
    createData(4, "Enagua", "Talla S", "16/05/22", 12000, 10),
    createData(5, "Vestido", "Talla M", "16/05/22", 15000, 8),
    createData(6, "Short", "Talla 3/4", "16/05/22", 8000, 12),
    createData(7, "Camiseta", "Talla L", "16/05/22", 5000, 25),
    createData(8, "Suéter", "Talla L", "16/05/22", 10000, 14),
    createData(9, "Jacket", "Talla M", "16/05/22", 17000, 12),
    createData(10, "Licra", "Talla S", "16/05/22", 10000, 20),
    createData(11, "Top", "Talla S", "16/05/22", 8000, 18),
    createData(12, "Botines", "Talla 37", "16/05/22", 19000, 10),
    createData(13, "Tenis", "Talla 42", "16/05/22", 23000, 15),
    createData(14, "Sandalias", "Talla 35", "16/05/22", 7000, 5),
    createData(15, "Zapato", "Talla 40", "16/05/22", 16000, 8)
];

export default function CollapsibleTable() {

/*  {(() => {
    switch (detalle) {
      case 1:
        return{
        id: '1',
        nombre: 'Camisa',
        descripcion: 'Talla X',
        fechaIngreso: '2020-01-05',
        precio: 5000,
        cantidad: 10
      }
      case 2:
        return {
          id: '2',
          nombre: 'Blusa',
          descripcion: 'Talla M',
          fechaIngreso: '2020-01-05',
          precio: 4500,
          cantidad: 12
        }
      case 3:
        return{
          id: '3',
          nombre: 'Pantalón',
          descripcion: 'Talla 32',
          fechaIngreso: '2020-01-05',
          precio: 10000,
          cantidad: 20
        }
      case 4:
        return {
          id: '4',
          nombre: 'Enagua',
          descripcion: 'Talla S',
          fechaIngreso: '2020-01-05',
          precio: 12000,
          cantidad: 10
        }
      default:
        return null
    }
  })()}*/

  return (
    <TableContainer component={Paper}>
      <br></br>
      <br></br>
      <Table aria-label="collapsible table">
        <TableHead style={{background: '#1F618D'}}>
          <TableRow>
            <TableCell />
            <TableCell align="right" style={{color:'white'}}>Id</TableCell>
            <TableCell align="right" style={{color:'white'}}>Nombre</TableCell>
            <TableCell align="right" style={{color:'white'}}>Descripción</TableCell>
            <TableCell align="right" style={{color:'white'}}>Fecha Ingreso</TableCell>
            <TableCell align="right" style={{color:'white'}}>Precio</TableCell>
            <TableCell align="right" style={{color:'white'}}>Cantidad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    
  );
}
