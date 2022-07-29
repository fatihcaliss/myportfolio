import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';

const About = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <React.Fragment>
     
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm" sx={{minHeight:"100vh"}}>
          <Box sx={{ bgcolor: '#1F2235',margin:"2rem" }} >
            <Typography variant="h2" component="div" gutterBottom sx={{ color: '#FF4A57' }}>
              Fatih Calis
            </Typography>
            <Typography variant="h3" gutterBottom sx={{ color: 'white' }}>
              Frontend Developer
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ color: 'white' }}>
              My Tools;
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: 'white', fontSize: "1.3rem"}} className="dene">
              🟣 React.js<br />
              🟣 JavaScript<br />
              🟣 HTML5<br />
              🟣 CSS3<br />
              🟣 Python<br />
              🟣 SASS<br />
              🟣 Bootstrap<br />
              🟣 MUI<br />
              🟣 SDLC & Agile<br />
              🟣 Git & GitHub<br />
              🟣 Linux<br />
              🟣 SQL
            </Typography>
          </Box>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default About