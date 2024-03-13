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
    field: 'lugar de inspeccion',
    headerName: 'lugar de inspeccion',
    sortable: false,
    width: 120
  },
  {
    field: 'placas de unidad 1',
    headerName: 'placas de unidad 1',
    width: 100,
    editable: false,
  },
  {
    field: 'tipo de unidad 1', 
    headerName: 'Estatus',
    sortable: false,
    width: 120
  },
  {
    field: 'placas de unidad 2',
    headerName: 'placas de unidad 2',
    width: 100,
    editable: false,
  },
  {
    field: 'tipo de unidad 2',
    headerName: 'tipo de unidad 2',
    sortable: false,
    width: 120
  },
  {
    field: 'placas de unidad 3',
    headerName: 'placas de unidad 3',
    width: 100,
    editable: false,
  },
  {
    field: 'tipo de unidad 3',
    headerName: 'tipo de unidad 3',
    sortable: false,
    width: 120
  },
  {
    field: 'placas dolli',
    headerName: 'placas dolli',
    width: 100,
    editable: false,
  },
  {
    field: 'estatus',
    headerName: 'estatus',
    sortable: false,
    width: 120
  },
  {
    field: 'Motivo de cancelacion',
    headerName: 'Motivo de cancelacion',
    width: 100,
    editable: false,
  },
];

const rows = [
  {id:1, fecha: '01/09/22', placas: '23d342d34', tipo:'Camion', estatus:'(p)'},
  {id:2, fecha: '12/12/23', placas: '234f324f3', tipo:'Tractor', estatus:'(t)'},
  {id:3, fecha: '09/08/21', placas: '2341d32sx', tipo:'Tanque', estatus:'(r)' },
  {id:4, fecha: '06/08/23', placas: '2309d47f4', tipo:'Camion', estatus:'(r)' },

];
const paperStyle={padding:20, height: '20', width: 280, margin: "20px auto"}

export default function UserList() {
  return (
    <Grid> 
    <Paper elevation={10} style={paperStyle}>
      <Grid align="center">
        <h2>Lista de Inspeccion</h2>
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