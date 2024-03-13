import { Grid, Paper, TextField, Button } from "@mui/material";
import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Autocomplete from "@mui/material/Autocomplete";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Fade from "@mui/material/Fade";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CircularProgress from "@mui/material/CircularProgress";

const InspectionCapture = () => {
  const paperStyle = {
    padding: 20,
    height: "160vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "orange" };
  const ctrlStyle = { margin: "15px 0 0 0" };

  const [loading, setLoading] = React.useState(false);
  const [query, setQuery] = React.useState("idle");
  const timerRef = React.useRef();

  React.useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    []
  );

  const handleClickLoading = () => {
    setLoading((prevLoading) => !prevLoading);
  };

  const handleClickQuery = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (query !== "idle") {
      setQuery("idle");
      return;
    }
    setQuery("progress");
    timerRef.current = setTimeout(() => {
      setQuery("Inspeccion Guardada");
    }, 2000);
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ m: 0, mr: 2, height: 50 }}
            >
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

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker sx={{ width: "100%" }} />
        </LocalizationProvider>

        <TextField
          style={ctrlStyle}
          id="outlined-multiline-flexible"
          label="Lugar de inspección"
          multiline
          maxRows={4}
          sx={{ width: "100%" }}
          required
        />

        <TextField
          style={ctrlStyle}
          label="Placas de unidad 1"
          placeholder="Teclea las placas"
          type="text"
          variant="outlined"
          fullWidth
          required
        />

        <Autocomplete
          style={ctrlStyle}
          disablePortal
          id="tipo"
          options={[
            { label: "(O)", id: "O" },
            { label: "(T)", id: "T" },
            { label: "(R)", id: "R" },
            { label: "(P)", id: "P" },
            { label: "(A)", id: "A" },
          ]}
          sx={{ width: "100%" }}
          renderInput={(params) => (
            <TextField {...params} label="Tipo de unidad 1" />
          )}
        />

        <TextField
          style={ctrlStyle}
          label="Placas de unidad 2"
          placeholder="Teclea las placas"
          type="text"
          variant="outlined"
          fullWidth
          required
        />

        <Autocomplete
          style={ctrlStyle}
          disablePortal
          id="tipo"
          options={[
            { label: "(O)", id: "O" },
            { label: "(T)", id: "T" },
            { label: "(R)", id: "R" },
            { label: "(P)", id: "P" },
            { label: "(A)", id: "A" },
          ]}
          sx={{ width: "100%" }}
          renderInput={(params) => (
            <TextField {...params} label="Tipo de unidad 2" />
          )}
        />

        <TextField
          style={ctrlStyle}
          label="Placas de unidad 3"
          placeholder="Teclea las placas"
          type="text"
          variant="outlined"
          fullWidth
          required
        />

        <Autocomplete
          style={ctrlStyle}
          disablePortal
          id="tipo"
          options={[
            { label: "(O)", id: "O" },
            { label: "(T)", id: "T" },
            { label: "(R)", id: "R" },
            { label: "(P)", id: "P" },
            { label: "(A)", id: "A" },
          ]}
          sx={{ width: "100%" }}
          renderInput={(params) => (
            <TextField {...params} label="Tipo de unidad 3" />
          )}
        />

        <TextField
          style={ctrlStyle}
          label="Placas de dolly"
          placeholder="Teclea las placas"
          type="text"
          variant="outlined"
          fullWidth
          required
        />

        <Autocomplete
          style={ctrlStyle}
          disablePortal
          id="estatus"
          options={[
            { label: "(P)", id: "I" },
            { label: "(T)", id: "A" },
            { label: "(R)", id: "B" },
          ]}
          sx={{ width: "100%" }}
          renderInput={(params) => <TextField {...params} label="Estatus" />}
        />

        <TextField
          style={ctrlStyle}
          id="outlined-multiline-flexible"
          label="Motivo de cancelación"
          multiline
          maxRows={4}
          sx={{ width: "100%" }}
          required
        />

        <Grid align="center">
          <h2> </h2>
        </Grid>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker sx={{ width: "100%" }} />
        </LocalizationProvider>

        <Grid style={ctrlStyle} align="center">
          <Box sx={{ height: 50 }}>
            {query === "Inspeccion Guardada" ? (
              <Typography>Inspeccion Guardada!</Typography>
            ) : (
              <Fade
                in={query === "progress"}
                style={{
                  transitionDelay: query === "progress" ? "800ms" : "0ms",
                }}
                unmountOnExit
              >
                <CircularProgress />
              </Fade>
            )}
          </Box>
          <Button variant="contained" onClick={handleClickQuery} sx={{ m: 0 }}>
            {query !== "idle" ? "Eliminar" : "Guardar"}
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default InspectionCapture;
