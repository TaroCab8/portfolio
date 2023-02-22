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
        
        //backgroundColor: theme.palette.background.default,
        
        padding:"10px",
        width: "100%",
    },

    codeIcon:{
        color: theme.palette.secondary.main,
        border:`2px solid ${theme.palette.secondary.main}`,
        backgroundColor: "transparent"
    }
}))

export default function See() {
    const classes=useStyles()
    return (
        <Grid container justifyContent="flex-start" alignItems="flex-start"   style={{backgroundColor:"theme.palette.background.default", zIndex:3, width:"100%" }}>
            <Grid item container>
                <motion.div initial={{scale:"0.4", y:"-30%",x:"-50%"}} whileHover={{scale:"1",y:0,x:0}}>
                    <Card style={{height:"100%", margin:0, padding: 0,borderRadius: 20,
            fontSize:"14", backgroundColor:'rgba(3, 89, 81, 0.4)' }} className={classes.cells} >
                        <div style={{float:"left", marginRight:"5px", height:"100px", width:"100px", border:"1px solid black"}} ></div>
                        <CardHeader style={{color:"white"}}>Mern VideoMedia</CardHeader>
                        <Typography style={{textAlign:"justify"}} component="p" >MERN base media application where mongodb's aggregation capabilities where exploded. Used also GRID for chunking and streaming large media fikes from database </Typography>
                        <CardActions>
                            <IconButton><a href="https://github.com/TaroCab8/StreamMedia" target="_blank" ><CodeIcon className={classes.codeIcon} /></a></IconButton>
                        </CardActions>
                    </Card>
                </motion.div>
                
            </Grid>
            <Grid item container style={{border:"2px solid yellow"}}>
                <motion.div initial={{scale:"0.4",y:"-90%",x:"-50%"}} whileHover={{scale:"1",x:0, y:"-120%"}}>
                    <Card style={{height:"100%", margin:0, padding: 0,borderRadius: 20, backgroundColor:'rgba(3, 89, 81, 0.4)'}} className={classes.cells}>
                        <div style={{float:"left", marginRight:"5px", height:"100px", width:"100px", border:"1px solid black"}} ></div>
                        <CardHeader style={{color:"white"}} >Mern Market Place</CardHeader>
                        <Typography style={{textAlign:"justify"}} component="p" >Utilize same Mern Skeleton to implement database capabilities such as authorization components, user and shops schemas</Typography>
                        <CardActions>
                            <IconButton><a href="https://github.com/TaroCab8/marketPlace" target="_blank" ><CodeIcon className={classes.codeIcon} /></a></IconButton>
                        </CardActions>
                    </Card >
                </motion.div>
                
            </Grid>
            <Grid item container style={{border:"2px solid yellow"}}>
                <motion.div initial={{scale:"0.4",y:"-150%",x:"-50%"}} whileHover={{scale:"1",x:0, y:"-220%"}} >
                    <Card style={{height:"100%", margin:0, padding: 0,borderRadius: 20, backgroundColor:'rgba(3, 89, 81, 0.4)', }} className={classes.cells}>
                        <div style={{float:"left", marginRight:"5px", height:"100px", width:"100px", border:"1px solid black"}} ></div>
                        <CardHeader style={{color:"white"}}>This Portfolio</CardHeader>
                        
                        <Typography style={{textAlign:"justify"}} component="p" >Used as a playground in order to canalize an idea away from templates implementing creative solutions</Typography>
                        <CardActions>
                            <IconButton><a href="https://github.com/TaroCab8/portfolio" target="_blank" ><CodeIcon className={classes.codeIcon} /></a></IconButton>
                        </CardActions>
                    </Card>
                </motion.div>
                
            </Grid>
        </Grid>
    )
}