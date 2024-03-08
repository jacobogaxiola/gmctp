import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, Grid, Paper } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

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
  {id:1, nombre: 'Diego', rol: 'Adminstrador' },
  {id:2, nombre: 'Francisco', rol: 'Inspector' },
  {id:3, nombre: 'LuisGay', rol: 'Administrador' },
  {id:4, nombre: 'jisus', rol: 'Inspector' },

];
const paperStyle={padding:20, height: '70vh', width: 280, margin: "20px auto"}
const avatarStyle={backgroundColor:"orange"}


export default function UserList() {
  return (
    <Grid>
    <Paper elevation={10} style={paperStyle}>
    <Grid align="center">
                    <Avatar style={avatarStyle}><AccountCircleOutlinedIcon/></Avatar>
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
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Paper>
   </Grid>
  );
}