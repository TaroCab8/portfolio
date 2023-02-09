import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CodeIcon from '@mui/icons-material/Code';
import {makeStyles} from '@mui/styles'

const useStyles=makeStyles(theme =>({
    typo:{
        color: '#6E5C14',
        fontFamily: "Roboto",
        fontSize: 12
    }
}))

export default function Contact() {
    const classes=useStyles()
    return (
        <Grid container direction="row"  justifyContent="space-evenly" alignItems="center" spacing={2} style={{fontFamily:"Roboto", color:"#6E5C14", flexGrow:1, height: "970px", margin: "50px"}}>
            <Grid item xs={3}>
                <Card>
                    <CardHeader>Mern VideoMedia</CardHeader>
                    
                    <Typography className={classes.typo} component="p" >MERN base media application where mongodb's aggregation capabilities where exploded. Used also GRID for chunking and streaming large media fikes from database </Typography>
                    <CardActions>
                        <IconButton><CodeIcon/></IconButton>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card>
                    <CardHeader>Mern Market Place</CardHeader>
                    
                    <Typography className={classes.typo} component="p" >Utilize same Mern Skeleton to implement database capabilities such as authorization components, user and shops schemas</Typography>
                    <CardActions>
                        <IconButton><CodeIcon/></IconButton>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card>
                    <CardHeader>This Portfolio</CardHeader>
                    
                    <Typography className={classes.typo} component="p" >Used as a playground in order to canalize an idea away from templates implementing creative solutions</Typography>
                    <CardActions>
                        <IconButton><CodeIcon/></IconButton>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}