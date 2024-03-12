import { Avatar, Grid, Paper, TextField, Button} from "@mui/material";
import React, { useState } from "react";
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';

const ChangePassword=()=>{
    const paperStyle={padding:20, height: '70vh', width: 280, margin: "20px auto"}
    const avatarStyle={backgroundColor:"orange"}
    const ctrlStyle={margin:"15px 0 0 0"}
    
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmation, setConfirmation] = useState("")

    const isValidCurrentPassword = ()=>{
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(currentPassword.match(validRegex))
            return true
        else
            return false
    }

    const isValidNewPassword = ()=>{
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

    const validateChangePassword = ()=>{
        if(!isValidCurrentPassword())
            console.log("La contraseña actual es INVÁLIDO")
        else if(!isValidNewPassword())
            console.log("La nueva contraseña es INVÁLIDA")
        else if(!isValidConfirmation())
            console.log("La confirmacion es INVÁLIDA")
        else
            console.log("Todo OK")
    }

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockResetOutlinedIcon/></Avatar>
                    <h2>Cambia tu contraseña</h2>
                </Grid>
                <TextField style={ctrlStyle} 
                 label="Contraseña actual" 
                 placeholder="Teclea tu contraseña..." 
                 type="password" 
                 variant="outlined" 
                 fullWidth 
                 required 
                 onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <TextField style={ctrlStyle} 
                 label="Nueva contraseña" 
                 placeholder="Teclea tu contraseña..." 
                 type="password"
                 variant="outlined" 
                 fullWidth 
                 required 
                 onChange={(e) => setNewPassword(e.target.value)}
                />
                <TextField style={ctrlStyle} 
                label="Confirmar nueva contraseña" 
                placeholder="Teclea tu contraseña..."
                 type="password"
                  variant="outlined" 
                 fullWidth 
                 required 
                 onChange={(e) => setConfirmation(e.target.value)}
                 />
                <Grid style={ctrlStyle} align="center">
                    <Button 
                    variant="contained"
                    onClick={validateChangePassword}
                    >Cambiar
                    </Button>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default ChangePassword;