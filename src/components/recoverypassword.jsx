import { Avatar, Grid, Paper, TextField, Button} from "@mui/material";
import React from "react";
import LockClockRoundedIcon from '@mui/icons-material/LockClockRounded';
import { useState } from "react";


const RecoveryPassword=()=>{
    const paperStyle={padding:20, height: '70vh', width: 280, margin: "20px auto"}
    const textFieldStyle={margin: "15px 0 0 0"}
    const otherStyle={backgroundColor:"orange", margin: "30px 0 0 0"}
    const ctrlStyle={margin:"15px 0 0 0"}

    const [newPassword, setNewPassword] = useState("")
    const [confirmation, setConfirmation] = useState("")

    const isValidPassword = ()=>{
        let passwordRegExp  = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if(newPassword.match(passwordRegExp ))
            return true
        else
            return false
    }

    const isValidConfirmation = ()=>{
        let passwordRegExp  = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if(confirmation.match(passwordRegExp ))
            return true
        else
            return false
    }

    const isSamePassword = ()=>{
        if (newPassword==confirmation)
        return true
    else 
    return false
    }

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center"><Avatar style={otherStyle}><LockClockRoundedIcon/></Avatar></Grid>
                <h3>Recupera tu contraseña</h3>
                <TextField 
                label="Nueva contraseña" 
                placeholder="Teclea nueva contraseña" 
                style={ctrlStyle}
                type="password" 
                variant="outlined" fullWidth required
                onChange={(e) => setNewPassword(e.target.value)}
                error={newPassword.length!=0 && !isValidPassword()}
                helperText={newPassword.length!=0 && !isValidPassword() && "Mayúsculas, minúsculas y números (+8)"}
                />
                <TextField
                 label="Confirmar contraseña" 
                 style={textFieldStyle} 
                 placeholder="Repite de nuevo tu contraseña" 
                 type="password" 
                 variant="outlined"
                 fullWidth required
                 onChange={(e) => setConfirmation(e.target.value)}
                    error={confirmation.length!=0 && !isValidConfirmation()}
                 helperText={confirmation.length!=0 && !isSamePassword() && "Las contraseñas no coinciden"} 
                 />
                <Grid align="center">
                    <Button 
                    variant="contained" 
                    style={ctrlStyle}>
                    Cambiar
                    </Button>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default RecoveryPassword;