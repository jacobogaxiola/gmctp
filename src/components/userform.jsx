import { Avatar, Grid, Paper, TextField, Button} from "@mui/material";
import React from "react";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Autocomplete from '@mui/material/Autocomplete';

const UserForm=()=>{
    const paperStyle={padding:20, height: '70vh', width: 280, margin: "20px auto"}
    const avatarStyle={backgroundColor:"orange"}
    const ctrlStyle={margin:"15px 0 0 0"}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><PersonOutlineOutlinedIcon/></Avatar>
                    <h2>Usuario</h2>
                </Grid>
                <TextField style={ctrlStyle} label="Nombre" placeholder="Teclea tu nombre..." type="text" variant="outlined" fullWidth required />
                <TextField style={ctrlStyle} label="Apellidos" placeholder="Teclea tus apellidos..." type="text" variant="outlined" fullWidth required />
                <TextField style={ctrlStyle} label="Correo" placeholder="Teclea tu correo..." type="email" variant="outlined" fullWidth required />
                <Autocomplete
                    style={ctrlStyle}
                    disablePortal
                    id="rol"
                    options={[{label:"Inspector",id:"I"},{label:"Administrador",id:"A"}]}
                    sx={{ width: "100%" }}
                    renderInput={(params) => <TextField {...params} label="Rol" />}
                />
                <Grid style={ctrlStyle} align="center">
                    <Button variant="contained">Guardar</Button>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default UserForm;