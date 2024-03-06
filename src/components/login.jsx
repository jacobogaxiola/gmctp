import { Avatar, Grid, Paper, TextField, FormControlLabel, Checkbox, Button, Typography, Link} from "@mui/material";
import React from "react";
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Login=()=>{
    const paperStyle={padding:20, height: '70vh', width: 280, margin: "20px auto"}
    const avatarStyle={backgroundColor:"orange"}
    const textFieldStyle={margin: "15px 0 0 0 "}
    const buttonStyle={backgroundColor:"orange"}

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><AccountCircleOutlinedIcon/></Avatar>
                    <h2>GMT C-TPAT</h2>
                </Grid>
  
                <TextField label="Correo Electrónico" placeholder="Teclea tu correo..." variant="outlined" fullWidth required />
                <TextField label="Contraseña" style={textFieldStyle}  placeholder="Teclea tu contraseña..." type="password" variant="outlined" fullWidth required />
                <FormControlLabel  control={<Checkbox name="checkedB" color="primary"/>} label="Recordarme"/>
                <Button type='submit' color='primary' variant="contained" style={buttonStyle} fullWidth>Acceder</Button>
                <Typography>
                    <Link href="#">
                        ¿Olvidaste tu contraseña?
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login;