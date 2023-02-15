import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CodeIcon from '@mui/icons-material/Code';
import makeStyles from '@mui/styles/makeStyles'
import {motion} from 'framer-motion'

const useStyles= makeStyles(theme =>({
    cells:{
        border: `2px solid ${theme.palette.secondary.main}`,
        borderRadius: 20,
        borderStyle: "none double none double",
        backgroundColor: theme.palette.background.default,
        padding:"10px",
        width: "100%",
    }
}))

export default function Contact() {
    const classes=useStyles()
    return (
        <Grid container  direction="column"  justifyContent="flex-start" alignItems="flex-start" spacing={1} >
            <Grid item>
                <motion.div initial={{scale:"0.5"}} whileHover={{scale:"1"}}>
                    <Card style={{height:"100%", margin:0, padding: 0,borderRadius: 20,backgroundColor:'rgba(3, 89, 81, 0.4)',
            fontSize:"14" }} className={classes.cells} >
                        <CardHeader>Mern VideoMedia</CardHeader>
                        <Typography component="p" >MERN base media application where mongodb's aggregation capabilities where exploded. Used also GRID for chunking and streaming large media fikes from database </Typography>
                        <CardActions>
                            <IconButton><CodeIcon/></IconButton>
                        </CardActions>
                    </Card>
                </motion.div>
                
            </Grid>
            <Grid item>
                <motion.div initial={{scale:"0.5"}} whileHover={{scale:"1"}}>
                    <Card style={{height:"100%", margin:0, padding: 0,borderRadius: 20,backgroundColor:'rgba(3, 89, 81, 0.4)'}} className={classes.cells}>
                        <CardHeader>Mern Market Place</CardHeader>
                        <Typography component="p" >Utilize same Mern Skeleton to implement database capabilities such as authorization components, user and shops schemas</Typography>
                        <CardActions>
                            <IconButton><CodeIcon/></IconButton>
                        </CardActions>
                    </Card >
                </motion.div>
                
            </Grid>
            <Grid item >
                <motion.div initial={{scale:"0.5"}} whileHover={{scale:"1"}} >
                    <Card style={{height:"100%", margin:0, padding: 0,borderRadius: 20,backgroundColor:'rgba(3, 89, 81, 0.3)'}} className={classes.cells}>
                        <CardHeader>This Portfolio</CardHeader>
                        
                        <Typography component="p" >Used as a playground in order to canalize an idea away from templates implementing creative solutions</Typography>
                        <CardActions>
                            <IconButton><CodeIcon/></IconButton>
                        </CardActions>
                    </Card>
                </motion.div>
                
            </Grid>
        </Grid>
    )
}