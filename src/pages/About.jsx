import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const About = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#1F2235', height: '80vh', margin: "2rem" }} >
          <Typography variant="h2" component="div" gutterBottom sx={{ color: '#FF4A57' }}>
            Fatih Calis
          </Typography>
          <Typography variant="h3" gutterBottom sx={{ color: 'white' }}>
            Frontend Developer
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ color: 'white' }}>
            My Tools;
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: 'white', fontSize: "1.3rem" }}>
            ✅ React.js<br/>
            ✅ JavaScript<br/>
            ✅ HTML5<br/>
            ✅ CSS3<br/>
            ✅ Python<br/>
            ✅ SASS<br/>
            ✅ Bootstrap<br/>
            ✅ MUI<br/>
            ✅ SDLC & Agile<br/>
            ✅ Git & GitHub<br/>
            ✅ Linux<br/>
            ✅ SQL
          </Typography>

        </Box>

      </Container>
    </React.Fragment>
  )
}

export default About