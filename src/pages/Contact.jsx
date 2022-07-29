import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate()
  return (
    <div className="icons">
      <CssBaseline />
      <div ><a href="https://www.linkedin.com/in/fatihcaliss/" ><LinkedInIcon sx={{ fontSize: 100,color:"#FF4A57" }}className='social' color="action" title="linkedn"/></a> </div>
      <div ><a href="https://github.com/fatihcaliss" ><GitHubIcon  sx={{ fontSize: 100,color:"#FF4A57" }}className='social' color="black" /></a></div>
      <div ><a href="mailto:fthcls@gmail.com" ><EmailIcon sx={{ fontSize: 100,color:"#FF4A57" }}className='social'  color="black" /></a></div>
      <div ><BadgeIcon onClick={()=>navigate("/ResumePage")} sx={{ fontSize: 100,color:"#FF4A57" }}className='social'  color="black" /></div>
    </div>
  )
}

export default Contact