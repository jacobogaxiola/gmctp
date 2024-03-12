import * as React from 'react';
import { DataGrid, esES } from '@mui/x-data-grid';
import { Grid, Paper } from '@mui/material';


const columns = [
  {
    field: 'nombre',
    headerClassName: 'datagridHeader',
    headerName: 'Usuario',
    width: 160,  
    editable: false
  },
  {
    field: 'rol',
    headerClassName: 'datagridHeader',
    headerName: 'Rol',
    width: 118,  
    editable: false
  },
];

const rows = [
  {id:1, nombre: 'Diego', rol: 'Adminstrador' },
  {id:2, nombre: 'Francisco', rol: 'Inspector' },
  {id:3, nombre: 'Luis Gael', rol: 'Administrador' },
  {id:4, nombre: 'jisus', rol: 'Inspector' },
  {id:5, nombre: 'Isis', rol: 'Inspector' },
  {id:6, nombre: 'Lenin', rol: 'Inspector' },
  {id:7, nombre: 'Paulina', rol: 'Inspector' },
  {id:8, nombre: 'Jacobo', rol: 'Inspector' },
  {id:9, nombre: 'Yan', rol: 'Inspector' }
];
const paperStyle={padding:20, height: '70', width: 280, margin: "20px auto"}

export default function UserList() {
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <DataGrid
          checkboxSelection=''
          density='compact'
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 9,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        />
      </Paper>
   </Grid>
  );
}