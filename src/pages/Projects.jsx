import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useEffect } from "react";
import axios from 'axios';
import { Grid} from '@mui/material';
import SingleRepo from "../components/SingleRepo";
import gif from "../assets/printload.gif"

const Projects = () => {
  const [repoData, setRepoData] = useState([]);
  const [load, setLoad] = useState(true)
  const url = `https://api.github.com/users/fatihcaliss/repos?per_page=100`

  const getData = async () => {
    const { data } = await axios.get(url);
    console.log(data);
    setRepoData(data);
    setLoad(false);
  }
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [])

  return (
    <div sx={{display:"flex", justifyContent:"center"}}>
      <CssBaseline />
      {load ? <img src={gif} alt="loading.gif" style={{display:"block", margin:"4rem auto",borderRadius:"50%"}}/> :
        <Grid container spacing={4} justifyContent="center" alignItems="center" maxWidth={1500} sx={{ margin: "auto" }}>
          {
            repoData?.map((repoInfo, i) => {
              return < SingleRepo key={i} repoInfo={repoInfo} />
            })
          }
        </Grid>}

    </div>
  )
}

export default Projects