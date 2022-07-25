import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from "../assets/logo.png"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate()
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <img src={logo} alt="logo" width="50rem" onClick={()=>navigate("/")} style={{cursor:"pointer",borderRadius:"10px"}}/>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: "2rem",cursor:"pointer",color:"#white" }} onClick={()=>navigate("/")}>
              Fatih
            </Typography>
            <Button color="inherit" onClick={()=>navigate("/")}>Home</Button>
            <Button color="inherit" onClick={()=>navigate("/Projects")}>Projects</Button>
            <Button color="inherit" onClick={()=>navigate("/About")}>About</Button>
            <Button color="inherit" onClick={()=>navigate("/Contact")}>Contact</Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
