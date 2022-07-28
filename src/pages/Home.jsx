import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Typewriter from 'typewriter-effect';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import EmailIcon from '@mui/icons-material/Email';


const Home = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#1F2235', height: '70%',margin:".5rem" }} >
        <ThemeProvider theme={theme}>
          <Typography variant="h1" component="div" gutterBottom sx={{ color: '#FF4A57' }} className='welcome'>

            <Typewriter

              variant="h1"
              onInit={(typewriter) => {
                typewriter.typeString("Welcome !")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("My name is Fatih.")
                  .start();
              }}>
            </Typewriter>
          </Typography>
          <Typography variant="h2" gutterBottom sx={{ color: 'white' }}>
            <Typewriter
              className='welcome'
              onInit={(typewriter) => {
                typewriter.typeString(" I Am Frontend Developer.")
                  .start();
              }}>
              Welcome
            </Typewriter>
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: 'white', fontSize: "1.3rem", textIndent: "3rem" }}>
            Interested in IT and an expert front-end developer, interested in writing codes, skilled at developing complex solutions, creating user friendly designs, excellent and dependable team player with strong analytical thinking skills. Quick to learn and adapt to new technologies, and create new solutions according to problems.
          </Typography>
          {/* <div  className="home-icons" style={{display:"flex",gap:"3rem",justifyContent:"center"}}>       
            <div ><a href="https://www.linkedin.com/in/fatihcaliss/" ><LinkedInIcon sx={{ fontSize: 60, color: "orangered" }} className='social' color="action" /></a> </div>
            <div ><a href="https://github.com/fatihcaliss" ><GitHubIcon sx={{ fontSize: 60, color: "orangered" }} className='social' color="black" /></a></div>
            <div ><a href="mailto:fthcls@gmail.com" ><EmailIcon sx={{ fontSize: 60, color: "orangered" }} className='social' color="black" /></a></div>
          </div> */}
          </ThemeProvider>
        </Box>
      </Container>
      <CssBaseline />
    </React.Fragment>
  )
}

export default Home