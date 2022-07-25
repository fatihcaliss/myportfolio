import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


const Home = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#1F2235', height: '80vh', margin: "2rem" }} >
          <Typography variant="h1" component="div" gutterBottom sx={{ color: '#FF4A57' }}>
            Welcome
          </Typography>
          <Typography variant="h2" gutterBottom sx={{ color: 'white' }}>
            I Am Frontend Developer.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: 'white',fontSize:"1.3rem",textIndent:"3rem" }}>
            Interested in IT and an expert front-end developer, interested in writing codes, skilled at developing complex solutions, creating user friendly designs, excellent and dependable team player with strong analytical thinking skills. Quick to learn and adapt to new technologies, and create new solutions according to problems.
          </Typography>

        </Box>

      </Container>
    </React.Fragment>
  )
}

export default Home