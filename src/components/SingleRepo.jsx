import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';


const SingleRepo = ({ repoInfo }) => {

    return (
        <Grid item >
            <Card sx={{ width: 345, height: 360, bgcolor: "#282c44", display: "flex", flexDirection: "column", justifyContent: "space-around", color: "white" }}>
                <CardActionArea sx={{ cursor: 'default' }}>
                    {/* <CardMedia
                        component="img"
                        height="180"
                        image={deneme}
                        alt="green iguana"
                    /> */}
                    <CardContent sx={{ width: "100%", height: "100%" }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#FF4A57", fontWeight: "1000" }}>
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
                            📅Created : {repoInfo.created_at.slice(0, 10).split("-").reverse().join("/")}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div">
                            📅Last Update : {repoInfo.updated_at.slice(0, 10).split("-").reverse().join("/")}
                        </Typography>

                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
                    <Button size="small" variant='contained' sx={{ bgcolor: '#FF4A57', "&:hover": { bgcolor: "white", color: "#FF4A57" } }}>
                        <a href={repoInfo.html_url} style={{ textDecoration: "none" }} className="detailButton">SHOW CODES</a>
                    </Button>
                    {/* <Button size="small" variant='contained' sx={{ bgcolor: '#FF4A57', "&:hover": { bgcolor: "white", color: "#FF4A57" } }}>
                        <a href={repoInfo.html_url} style={{ textDecoration: "none" }} className="detailButton">GO TO PAGE</a>
                    </Button> */}
                </CardActions>
            </Card>
        </Grid>
    )
}

export default SingleRepo