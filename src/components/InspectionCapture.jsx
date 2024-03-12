import {  Grid, Paper, TextField, Button }  from "@mui/material";
import React from "react";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Autocomplete from '@mui/material/Autocomplete';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const InspectionCapture=()=>{

    const paperStyle={padding:20, height: '70vh', width: 280, margin: "20px auto"}
    const avatarStyle={backgroundColor:"orange"}
    const ctrlStyle={margin:"15px 0 0 0"}

    return(
        <Grid>
             <Paper elevation={10} style={paperStyle}>

        <AppBar position="static">
        <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
        Inspeccion
        </Typography>
        </Toolbar>
        </AppBar> 

        <Grid align="center"> 
        <h2> </h2>
        </Grid> 
          
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DatePicker sx={{ width: "100%" }}/>
                </LocalizationProvider>

                <TextField style={ctrlStyle} label="Placas" placeholder="Teclea las placas" type="text" variant="outlined" fullWidth required />
                
                <Autocomplete
                    style={ctrlStyle}
                    disablePortal
                    id="tipo"
                    options={[{label:"Torton (O)",id:"O"},{label:"Tractor (T)",id:"T"},{label:"Remolque (R)",id:"R"},{label:"Plataforma (P)",id:"P"},{label:"Tanque (A)",id:"A"}]}
                    sx={{ width: "100%" }}
                    renderInput={(params) => <TextField {...params} label="Tipo" />}
                />

                <Autocomplete
                    style={ctrlStyle}
                    disablePortal
                    id="estatus"
                    options={[{label:"Pendiente (P)",id:"I"},{label:"terminado (T)",id:"A"},{label:"rechazado (R)",id:"B"}]}
                    sx={{ width: "100%" }}
                    renderInput={(params) => <TextField {...params} label="Estatus" />}
                />
 
                <Grid style={ctrlStyle} align="center" >
                <Button variant="contained" >Guardar</Button>
                </Grid>

            </Paper>
        </Grid>
    )
}

export default InspectionCapture;