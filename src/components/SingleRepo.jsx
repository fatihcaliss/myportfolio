import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';


const SingleRepo = ({ repoInfo }) => {

    return (
        <Grid item >
            <Card sx={{ width: 345, height: 360, bgcolor: "#282c44",display:"flex",flexDirection:"column",justifyContent:"space-around" }}>
                <CardActionArea sx={{ cursor: 'default',display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{color:"orangered",fontWeight:"1000"}}>
                            {repoInfo.name}
                        </Typography>
                        <Typography gutterBottom variant="body1" component="p" sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: '2',
                            WebkitBoxOrient: 'vertical',
                            height: '50px'
                        }}>
                            {repoInfo?.description}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div">
                            Created:{repoInfo.created_at}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div">
                            Last Update:{repoInfo.updated_at}
                        </Typography>

                    </CardContent>
                </CardActionArea>
                <CardActions sx={{display:"flex",justifyContent:"center"}}>
                    <Button size="small" variant='contained' sx={{ bgcolor: '#FF4A57' }}>
                        <a href={repoInfo.html_url} style={{ textDecoration: "none" }}>SHOW CODES</a>
                    </Button>
                    <Button size="small" variant='contained' sx={{ bgcolor: '#FF4A57' }}>
                        GO TO PAGE
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default SingleRepo