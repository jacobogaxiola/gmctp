import { Avatar, Grid, Paper, TextField, FormControlLabel, Checkbox, Button, Typography, Link} from "@mui/material";
import React, { useState } from "react";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Login=()=>{
    const paperStyle={padding:20, height: '70vh', width: 280, margin: "20px auto"}
    const avatarStyle={backgroundColor:"orange"}
    const ctrlStyle={margin: "15px 0 0 0 "}
    const buttonStyle={backgroundColor:"orange", margin: "15px 0 0 0 "}

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const isValidEmail = ()=>{
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(email.match(validRegex))
            return true
        else
            return false
    }

    const isValidPassword = ()=>{
        let passwordRegExp  = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if(password.match(passwordRegExp ))
            return true
        else
            return false
    }

    const validateLogin = ()=>{
        if(!isValidEmail())
            console.log("El correo es INVÁLIDO")
        else if(!isValidPassword())
            console.log("La contraseña es INVÁLIDA")
        else
            console.log("Todo OK")
    }

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><AccountCircleOutlinedIcon/></Avatar>
                    <h2>GMT C-TPAT</h2>
                </Grid>
  
                <TextField 
                    label="Correo Electrónico" 
                    style={ctrlStyle}
                    placeholder="Teclea tu correo..." 
                    variant="outlined" 
                    fullWidth 
                    required 
                    onChange={(e) => setEmail(e.target.value)}
                    error={email.length!=0 && !isValidEmail()}
                    helperText={email.length!=0 && !isValidEmail() && "Formato o correo incompleto"}
                />
                <TextField 
                    label="Contraseña" 
                    style={ctrlStyle}
                    placeholder="Teclea tu contraseña..." 
                    type="password" 
                    variant="outlined" fullWidth required
                    onChange={(e) => setPassword(e.target.value)}
                    error={password.length!=0 && !isValidPassword()}
                    helperText={password.length!=0 && !isValidPassword() && "Mayúsculas, minúsculas y números (+8)"}
                />
                <Button 
                    type='submit' 
                    color='primary' 
                    variant="contained" 
                    style={buttonStyle} 
                    fullWidth
                    onClick={validateLogin}
                >Acceder
                </Button>
                <Typography style={ctrlStyle}>
                    <Link href="#">
                        ¿Olvidaste tu contraseña?
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login;