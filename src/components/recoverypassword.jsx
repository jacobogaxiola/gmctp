import { Avatar, Grid, Paper, TextField, FormControlLabel, Checkbox, Button} from "@mui/material";
import React from "react";
import LockClockRoundedIcon from '@mui/icons-material/LockClockRounded';



const RecoveryPassword=()=>{
    const paperStyle={padding:20, height: '70vh', width: 280, margin: "20px auto"}
    const avatarStyle={backgroundColor:"orange"}
    const textFieldStyle={margin: "15px 0 0 0"}
    const otherStyle={backgroundColor:"orange", margin: "30px 0 0 0"}
    const buttonStyle={backgroundColor:"orange", margin: "15px 0 0 0"  }
    const ctrlStyle={margin:"15px 0 0 0"}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center"><Avatar style={otherStyle}><LockClockRoundedIcon/></Avatar></Grid>
                <h3>Recupera tu contraseña</h3>
                <TextField label="Nueva contraseña" placeholder="Teclea nueva contraseña" type="password" variant="outlined" fullWidth required/>
                <TextField label="Confirmar contraseña" style={textFieldStyle} placeholder="Repite de nuevo tu contraseña" type="password" variant="outlined" fullWidth required/>
                <Grid align="center"><Button variant="contained" style={ctrlStyle}>Cambiar</Button></Grid>
            </Paper>
        </Grid>
    )
}

export default RecoveryPassword;