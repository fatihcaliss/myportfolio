import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <div style={{display:"flex",gap:"4rem",justifyContent:"center",margin:"6rem"}}>
      <CssBaseline />
      <div ><a href="https://www.linkedin.com/in/fatihcaliss/" ><LinkedInIcon sx={{ fontSize: 100 }}className='social' color="action" /></a> </div>
      <div ><a href="https://github.com/fatihcaliss" ><GitHubIcon  sx={{ fontSize: 100 }}className='social' color="black" /></a></div>
      <div ><a href="mailto:fthcls@gmail.com" ><EmailIcon sx={{ fontSize: 100 }}className='social'  color="black" /></a></div>
    </div>
  )
}

export default Contact