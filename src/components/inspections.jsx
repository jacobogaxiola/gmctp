import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Grid, Paper } from '@mui/material';


const columns = [
  {
    field: 'fecha',
    headerName: 'Fecha',
    width: 100,
    editable: false,
  },
  {
    field: 'placas',
    headerName: 'Placas',
    sortable: false,
    width: 120
  },
  {
    field: 'tipo',
    headerName: 'Tipo',
    width: 100,
    editable: false,
  },
  {
    field: 'estatus',
    headerName: 'Estatus',
    sortable: false,
    width: 120
  },
];

const rows = [
  {id:1, fecha: '01/09/22', placas: '23d342d34', tipo:'Camion', estatus:'(p)'},
  {id:2, fecha: '12/12/23', placas: '234f324f3', tipo:'Tractor', estatus:'(t)'},
  {id:3, fecha: '09/08/21', placas: '2341d32sx', tipo:'Tanque', estatus:'(r)' },
  {id:4, fecha: '06/08/23', placas: '2309d47f4', tipo:'Camion', estatus:'(r)' },

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