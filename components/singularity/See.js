import React, {useState, useEffect} from 'react'
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
const seeVariant= {
    mobile: {width:"80%", x:"15px",height:"80%"}
}
export default function See() {
    const classes=useStyles()
    const [deviceSize, changeDeviceSize] = useState(window.innerWidth);


    useEffect(() => {
        const resizeW = () => changeDeviceSize(window.innerWidth);

        window.addEventListener("resize", resizeW); // Update the width on resize

        return () => window.removeEventListener("resize", resizeW);  
  });
    return (
        <Grid container direction="column" justifyContent="space-around" alignItems="flex-start" spacing={0}   style={{backgroundColor:"theme.palette.background.default", zIndex:3, height:"100%",width:"100%" }}>
            <Grid item>
                <motion.div initial={{height:"100px", width:"20px"}} animate={deviceSize < 800 ? "mobile": 0} variants={seeVariant} whileHover={{width:"90%", x:"25px",height:"100%"}}>
                    <Card style={{height:"100%", margin:0, padding: 0,borderRadius: 20,
            fontSize:"14", backgroundColor:'rgba(3, 89, 81, 0.4)' }} className={classes.cells} >
                        <div style={{float:"left", marginRight:"5px", height:"100px", width:"100px", border:"1px solid black"}} ></div>
                        <CardHeader style={{color:"white"}} title="Mern VideoMedia"></CardHeader>
                        <Typography style={{textAlign:"justify"}} component="p" >MERN base media application where mongodb's aggregation capabilities where exploded. Used also GRID for chunking and streaming large media fikes from database </Typography>
                        <CardActions>
                            <IconButton><a href="https://github.com/TaroCab8/StreamMedia" target="_blank" ><CodeIcon className={classes.codeIcon} /></a></IconButton>
                        </CardActions>
                    </Card>
                </motion.div>
                
            </Grid>
            <Grid item >
                <motion.div initial={{height:"100px", width:"20px"}} animate={deviceSize < 800 ? "mobile": 0} variants={seeVariant} whileHover={{width:"90%", x:"25px",height:"100%"}}>
                    <Card style={{height:"100%", margin:0, padding: 0,borderRadius: 20, backgroundColor:'rgba(3, 89, 81, 0.4)'}} className={classes.cells}>
                        <div style={{float:"left", marginRight:"5px", height:"100px", width:"100px", border:"1px solid black"}} ></div>
                        <CardHeader style={{color:"white"}} title="Mern Market Place" ></CardHeader>
                        <Typography style={{textAlign:"justify"}} component="p" >Utilize same Mern Skeleton to implement database capabilities such as authorization components, user and shops schemas</Typography>
                        <CardActions>
                            <IconButton><a href="https://github.com/TaroCab8/marketPlace" target="_blank" ><CodeIcon className={classes.codeIcon} /></a></IconButton>
                        </CardActions>
                    </Card >
                </motion.div>
                
            </Grid>
            <Grid item>
                <motion.div  initial={{height:"100px", width:"20px"}} animate={deviceSize < 800 ? "mobile": 0} variants={seeVariant} whileHover={{width:"90%", x:"25px", height:"100%"}}>
                    <Card style={{height:"100%", margin:0, padding: 0,borderRadius: 20, backgroundColor:'rgba(3, 89, 81, 0.4)', }} className={classes.cells}>
                        <div style={{float:"left", marginRight:"5px", height:"100px", width:"100px", border:"1px solid black"}} ></div>
                        <CardHeader style={{color:"white", fontSize:"12px"}} title="This Portfolio"></CardHeader>
                        
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