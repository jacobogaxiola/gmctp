import * as React from 'react';
import Box from '@mui/material/Box';
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
    width: 120
  },
];

const rows = [
  {id:1, nombre: 'Juan', rol: 'Adminstrador' },
  {id:2, nombre: 'Pedro', rol: 'Inspector' },
  {id:3, nombre: 'Pablo', rol: 'Administrador' },
  {id:4, nombre: 'Jesus', rol: 'Inspector' },

];
const paperStyle={padding:20, height: '70vh', width: 280, margin: "20px auto"}

export default function UserList() {
  return (
    <Grid>
    <Paper elevation={10} style={paperStyle}>
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
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Paper>
   </Grid>
  );
}