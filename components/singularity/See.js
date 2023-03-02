import React, {useState, useEffect} from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import CodeIcon from '@mui/icons-material/Code';
import makeStyles from '@mui/styles/makeStyles'
import {motion} from 'framer-motion'
import portfolio from './../../public/portfolio.mp4'
import market from './../../public/marketplace.mp4'
import videoStream from './../../public/videoStream.mp4'
import text0s from "./../../public/text"


const useStyles= makeStyles(theme =>({
    cells:{
        border: `2px solid ${theme.palette.secondary.main}`,
        borderRadius: 20,
        borderStyle: "none double none double",
        
        //backgroundColor: theme.palette.background.default,
        
        padding:"10px",
        width: "100%",

        display:"flex",
        flexDirection:"column",
        justifyContent:"center"
    },

    codeIcon:{
        color: theme.palette.secondary.main,
        backgroundColor: "transparent"
    }
}))
const seeVariant= {
    mobile: {width:"80%", x:"15px",height:"120%"}
}
export default function See() {
    const classes=useStyles()
    const [deviceSize, changeDeviceSize] = useState(window.innerWidth);
    //const [language, setLanguage]= useState("")

    useEffect(() => {
        //setLanguage(`${localStorage.getItem("Language")}`)
        //console.log(`See component says: Here Language is: ${language}`)
        const resizeW = () => changeDeviceSize(window.innerWidth);

        window.addEventListener("resize", resizeW); // Update the width on resize

        return () => window.removeEventListener("resize", resizeW);  

  },[]);
  
    return (
        
        <Grid container direction="column" justifyContent="space-evenly" alignItems="flex-start" spacing={{xs:2,md:0}}   style={{backgroundColor:"theme.palette.background.default", zIndex:3, height:"100%",width:"100%" }}>
            <Grid item justifyContent="center">
                <motion.div initial={{height:"100px", width:"2px"}} animate={deviceSize < 900 ? "mobile": 0} variants={seeVariant} whileHover={{width:"90%", x:"25px",height:"100%"}}>
                    <Card style={{height:"100%", margin:0, padding: "10px",borderRadius: 20,
            fontSize:"14", backgroundColor:'rgba(3, 89, 81, 0.4)',display:"flex", alignItems:"center", justifyContent:"center"  }} className={classes.cells} >
                        <div style={{height:"250px", width:"250px", border:"1px solid white", borderRadius:20, display:"flex", justifyContent:"center", overflow:"hidden"}} >
                            <video controls height="100%" src={videoStream}/>
                        </div>
                        <CardHeader style={{color:"white",fontSize:"12px"}} title="Mern Video stream app"></CardHeader>
                        <Typography style={{textAlign:"justify",padding:"5px"}} component="p" >{text0s.see.video.francais} </Typography>
                        <CardActions>
                            <Button style={{border: "2px solid #22B7F2",backgroundColor:'#012E40',width:"30%",color:'white',zIndex: 999, justifySelf:"center"}} ><a href="https://github.com/TaroCab8/StreamMedia" target="_blank" ><CodeIcon className={classes.codeIcon} /></a></Button>
                        </CardActions>
                    </Card>
                </motion.div>
                
            </Grid>
            <Grid item >
                <motion.div initial={{height:"100px", width:"2px"}} animate={deviceSize < 900 ? "mobile": 0} variants={seeVariant} whileHover={{width:"90%", x:"25px",height:"100%"}}>
                    <Card style={{height:"100%", margin:0, padding: "10px",borderRadius: 20,backgroundColor:'rgba(3, 89, 81, 0.4)',display:"flex", alignItems:"center", justifyContent:"center" }} className={classes.cells}>
                        <div style={{height:"250px", width:"250px", border:"1px solid white", borderRadius:20, display:"flex", justifyContent:"center", overflow:"hidden"}} >
                            <video controls height="100%" src={market}/>
                        </div>
                        <CardHeader style={{color:"white",fontSize:"12px"}} title="Mern Marketplace" ></CardHeader>
                        <Typography style={{textAlign:"justify",padding:"5px"}} component="p" >{text0s.see.market.francais}</Typography>
                        <CardActions>
                            <Button style={{border: "2px solid #22B7F2",backgroundColor:'#012E40',width:"30%",color:'white',zIndex: 999, justifySelf:"center"}}><a href="https://github.com/TaroCab8/marketPlace" target="_blank" ><CodeIcon className={classes.codeIcon} /></a></Button>
                        </CardActions>
                    </Card >
                </motion.div>
                
            </Grid>
            <Grid item>
                <motion.div  initial={{height:"100px", width:"2px"}} animate={deviceSize < 900 ? "mobile": 0} variants={seeVariant} whileHover={{width:"90%", x:"25px", height:"100%"}}>
                    <Card style={{height:"100%", margin:0, padding: "10px",borderRadius: 20, backgroundColor:'rgba(3, 89, 81, 0.4)', display:"flex", alignItems:"center", justifyContent:"center" }} className={classes.cells}>
                        <div style={{height:"250px", width:"80%", border:"1px solid white", borderRadius:20, display:"flex", justifyContent:"center", overflow:"hidden"}} >
                            <video controls height="100%" src={portfolio}/>
                        </div>
                        <CardHeader style={{color:"white", fontSize:"12px"}} title="This Portfolio"></CardHeader>
                        
                        <Typography style={{textAlign:"justify", padding:"5px"}} component="p" >{text0s.see.portfolio.francais}</Typography>
                        <CardActions>
                            <Button style={{border: "2px solid #22B7F2",backgroundColor:'#012E40',width:"30%",color:'white',zIndex: 999, justifySelf:"center"}}><a href="https://github.com/TaroCab8/portfolio" target="_blank" ><CodeIcon className={classes.codeIcon} /></a></Button>
                        </CardActions>
                    </Card>
                </motion.div>
                
            </Grid>
        </Grid>
    )
}