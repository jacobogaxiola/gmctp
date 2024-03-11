import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Grid, Paper } from '@mui/material';

const columns = [
  {
    field: 'nombre',
    headerName: 'Nombre',
    width: 100,  
    editable: false,
  },
  {
    field: 'rol',
    headerName: 'Rol',
    sortable: false,
    width: 120,
  },
];

const rows = [
  {id:1, nombre: 'Diego', rol: 'Adminstrador' },
  {id:2, nombre: 'Francisco', rol: 'Inspector' },
  {id:3, nombre: 'Luis Gael', rol: 'Administrador' },
  {id:4, nombre: 'jisus', rol: 'Inspector' },

];
const paperStyle={padding:20, height: '70', width: 280, margin: "20px auto"}

export default function UserList() {
  return (
    <Grid>
    <Paper elevation={10} style={paperStyle}>
    <Grid align="center">
        <h2>Lista de Usuarios</h2>
    </Grid>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Paper>
   </Grid>
  );
}