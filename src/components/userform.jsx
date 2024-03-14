import { Avatar, Grid, Paper, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Autocomplete from "@mui/material/Autocomplete";

const UserForm = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "orange" };
  const ctrlStyle = { margin: "15px 0 0 0" };

const [name, setName] = useState("")
const [lastName, setLastName] = useState("")
const [email, setEmail] = useState("")
    
const isValidEmail = ()=>{
    let validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if(email.match(validRegex))
        return true
    else
        return false
}

const validateUserForm = ()=>{
    if(!isValidEmail())
        console.log("El  es INVÁLIDO")
    else
        console.log("Todo OK")
}

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <PersonOutlineOutlinedIcon />
          </Avatar>
          <h2>Usuario</h2>
        </Grid>
        <TextField
          style={ctrlStyle}
          label="Nombre"
          placeholder="Teclea tu nombre..."
          type="text"
          variant="outlined"
          fullWidth
          required
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          style={ctrlStyle}
          label="Apellidos"
          placeholder="Teclea tus apellidos..."
          type="text"
          variant="outlined"
          fullWidth
          required
          onChange={(e) => setLastName(e.target.value)}
       />
        <TextField
          style={ctrlStyle}
          label="Correo"
          placeholder="Teclea tu correo..."
          type="email"
          variant="outlined"
          fullWidth
          required
          onChange={(e) => setEmail(e.target.value)}
          error={email.length!=0 && !isValidEmail()}
          helperText={email.length!=0 && !isValidEmail() && "Formato o email incompleto"}
        />
        <Autocomplete
          style={ctrlStyle}
          disablePortal
          id="rol"
          options={[
            { label: "Inspector", id: "I" },
            { label: "Administrador", id: "A" },
          ]}
          sx={{ width: "100%" }}
          renderInput={(params) => <TextField {...params} label="Rol" />}
        />
        <Grid style={ctrlStyle} align="center">
          <Button variant="contained">Guardar</Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default UserForm;
