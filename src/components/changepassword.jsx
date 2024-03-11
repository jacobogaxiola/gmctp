import { Avatar, Grid, Paper, TextField, Button} from "@mui/material";
import React, { useState } from "react";
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';

const ChangePassword=()=>{
    const paperStyle={padding:20, height: '70vh', width: 280, margin: "20px auto"}
    const avatarStyle={backgroundColor:"orange"}
    const ctrlStyle={margin:"15px 0 0 0"}
    
    const [currentpassword, setCurrentPassword] = useState("")
    const [newpassword, setNewpassword] = useState("")
    const [confirmation, setConfirmation] = useState("")

    const onCurrentpasswordChange = (e)=>{
        let password=e.target.value
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(password.match(validRegex)) {
            console.log("Contraseña ok");
            setCurrentpassword(password);
        }
        else
            console.log("Contraseña inválida");
    }
    const onChangePassword = ()=>{

    }

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockResetOutlinedIcon/></Avatar>
                    <h2>Recuperacion de contraseña</h2>
                </Grid>
                <TextField style={ctrlStyle} 
                onChange={onCurrentpasswordChange}
                label="Contraseña actual" 
                placeholder="Teclea tu contraseña..." 
                type="password" variant="outlined" 
                fullWidth required />
                <TextField style={ctrlStyle} 
                label="Nueva contraseña" 
                placeholder="Teclea tu contraseña..." 
                type="password"
                 variant="outlined" 
                fullWidth required />
                <TextField style={ctrlStyle} 
                label="Confirmar nueva contraseña" 
                placeholder="Teclea tu contraseña..."
                 type="password"
                  variant="outlined" 
                 fullWidth required />
                <Grid style={ctrlStyle} align="center">
                    <Button variant="contained">Cambiar</Button>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default ChangePassword;