import React, {useEffect, useState, useRef} from "react"
import CanvasSingular from './CanvasSingular'
import singularTheme from './SingularTheme'
import {Link} from 'react-router-dom'
import {ThemeProvider} from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import See from './See'
import Know from './Know'
import Contact from './Contact'
import CopyrightIcon from '@mui/icons-material/Copyright';
import { motion } from "framer-motion"
import mongoIcon from "./../../public/singular/mongoDb.svg"
import css3 from "./../../public/singular/css3.svg"
import expressIcon from "./../../public/singular/express.svg"
import jsIcon from "./../../public/singular/js.svg"
import muiLogo from "./../../public/singular/mui.svg"
import nodeLogo from "./../../public/singular/node.svg"
import pythonLogo from "./../../public/singular/python.svg"
import reactLogo from "./../../public/singular/react.svg"
import apiLogo from "./../../public/singular/restApi.png"
import agileLogo from "./../../public/singular/agile.png"
import taroDev from "./../../public/TaroDev.png"
import VisibilityIcon from '@mui/icons-material/Visibility';
import WorkIcon from '@mui/icons-material/Work';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';

import makeStyles from '@mui/styles/makeStyles'


const useStyles = makeStyles(theme => ({
    container: {
         
        height: window.innerHeight * 0.8,
        padding: '10px',
        marginBottom:0,
        //backgroundColor: "white",
        backgroundColor: theme.palette.background.default,
        justifyContent: "space-between",
        alignItems: "flex-start",
        overflowY:"hidden",
        overflowX:"hidden",
        [theme.breakpoints.down("md")]:{
            height:"100%",
            
            
            
        }
        
        
    },
    footer:{
        height: window.innerHeight * 0.2,
        backgroundColor: theme.palette.background.default,
        padding:"10px",
        
        [theme.breakpoints.down("md")]:{
            
            height:"100%"
           
        }
          
    },
    typography:{
        color: theme.palette.primary.main
    },
    by:{
        backgroundColor:'rgba(3, 89, 81, 0.4)', 
        border: `2px solid #22B7F2`,
        borderRadius:"20px",
        borderStyle: "none double none double",
        padding: "5px   "
    },
    mainContainer:{
        [theme.breakpoints.down("md")]:{
            height:"100%",
            
           
            overflow:"auto",
            flexDirection:"column",
            overflowX:"hidden",
        }
    },
    canvasMobile: {
        [theme.breakpoints.down("md")]:{
            
        }
    },
    emailButton:{
        [theme.breakpoints.down("md")]: {
            opacity:0
        }
    }
}))

const contactVariants={
    open: {opacity:1, y:"-50%", scale:0.8},
    closed: {opacity:0 ,height:0, y:"-300%" }
}
const seeVariants={
    open: { opacity:1, x:0},
    closed: {opacity:0, x:"-100%"}
}
const knowVariants={
    open: {x:0,  transition:{type:"tween",delay:0.25}},
    closed: {height:0, y:"50%", x:"120%"},
    after:{height:"90%", y:0, opacity: 1, transition:{
        type:"tween",
        delay:0.5,
        duration:1,
    }}
}
const canvasVariant={
    reduced: {scale:0.8, y: "-10%"},
    normal: {scale: 0.8, y: 0, opacity:1},
    mobileCanvas:{opacity:0},
    mobilePic: {opacity:1}
}

const buttonVariants={
    mobile:{opacity:0},
    mobileOpen:{opacity:1}
}
export default function Home() {
    const classes = useStyles()
    const [contactIsOpen, setContactIsOpen] = useState(false)
    const [knowIsOpen, setKnowIsOpen] = useState(false)
    const [seeIsOpen, setSeeIsOpen] = useState(false)

    const [deviceSize, changeDeviceSize] = useState(window.innerWidth);
    const homeRef = useRef()
    const knowRef = useRef()
    const workRef = useRef()
    const contactRef = useRef()

  useEffect(() => {
    const resizeW = () => changeDeviceSize(window.innerWidth);

    window.addEventListener("resize", resizeW); // Update the width on resize

    return () => window.removeEventListener("resize", resizeW);

    if(deviceSize < 800){
        canvas.width = "200px"
    }
  });

  const handleScroll= (reference) => {
      reference.current.scrollIntoView({behavior:"smooth"})
  }
    
    return(
        <ThemeProvider  theme={singularTheme}>
        
            <Grid container style={{overflowY:"hidden"}} className={classes.mainContainer}>
            <motion.div   initial={{opacity:0}} variants={buttonVariants} animate={deviceSize < 800 ? "mobileOpen": 0}>
                    <div style={{position: "fixed", right:"20%", top:`${window.innerWidth/2}px`,height:"200px", width:"30px", zIndex:999, border: "2px solid red", }} >
                                    <IconButton style={{color:"#22B7F2",zIndex:"999"}} onClick={() => {
                                        handleScroll(knowRef)
                                        setKnowIsOpen(knowIsOpen => !knowIsOpen)
                                        setContactIsOpen(false)
                                        setSeeIsOpen(false)
                                        }}>
                                        <VisibilityIcon style={{zIndex:999}}/>
                                    </IconButton>
                                    <IconButton style={{color:"#22B7F2",zIndex:999}} onClick={() => {
                                        handleScroll(workRef)
                                        setSeeIsOpen(seeIsOpen => !seeIsOpen)
                                        setContactIsOpen(false)
                                        setKnowIsOpen(false)
                                        }}>
                                        <WorkIcon style={{zIndex:999}}/>
                                    </IconButton>
                                    <IconButton style={{color:"#22B7F2",zIndex:999}} onClick={() => {
                                        handleScroll(contactRef)
                                        setContactIsOpen(contactIsOpen => !contactIsOpen)
                                        setSeeIsOpen(false)
                                        setKnowIsOpen(false)
                                        }}>
                                        <EmailIcon style={{zIndex:999}}/>
                                    </IconButton>
                                    <IconButton style={{color:"#22B7F2",zIndex:999}} onClick={() => {
                                        handleScroll(homeRef)
                                        setContactIsOpen(false)
                                        setSeeIsOpen(false)
                                        setKnowIsOpen(false)
                                        }} >
                                        <HomeIcon style={{zIndex:999}}/>
                                    </IconButton>
                    </div>
                                </motion.div>
                
                <Grid xs={12} container item    alignItems="flex-start"  spacing={0} className={classes.container}>
                    <Grid  item  style={{ overflowX:"hidden",height:"100%"}} xs={12}  md={3} lg={3} order={{xs:2,md:1,lg:1}} ref={knowRef} >
                        <motion.div initial={{x:"120%", y:"50%"}} animate={[`${knowIsOpen ? "open" : "closed"}`,`${knowIsOpen ? "mid": "closed"}`,`${knowIsOpen ? "after": "closed"}`]} variants={knowVariants}>
                            <Know/>
                        </motion.div>
                        
                        </Grid>
                    <Grid alignSelf="flex-start"  container item xs={12}  md={6} lg={6} direction="column" order={{xs:1,md:2,lg:2}} ref={homeRef}>
                        <Grid item xs={12} spacing={0} className={classes.canvasMobile} alignSelf="center">
                            <motion.div initial={{opacity:0}} animate={deviceSize < 800 ? "mobilePic" : 0} variants={canvasVariant} ><img style={{height: "300px", position:"absolute", left:"10%", top:"25%" }} src={taroDev} /></motion.div>
                            <motion.div initial={{opacity:0}} whileHover={{rotate: 360}}  animate={[`${contactIsOpen ? "reduced" : "normal"}`,`${deviceSize < 800 ? "mobileCanvas": "normal"}`]} variants={canvasVariant} >
                                
                                
                                <CanvasSingular/>   
                            </motion.div>
                            <motion.div variants={buttonVariants} animate={deviceSize < 800 ? "mobile" : 0}>
                                <Button variant="outlined" style={{color:"#22B7F2", height: "300px",width: "20px",backgroundColor: 'transparent', zIndex:3,position:"absolute", left:"30%", top:"10%", border:"2px #22B7F2", borderRadius:`50% 0% 0% 50%`, borderStyle: "none none none solid"}}  onClick={() => setKnowIsOpen(knowIsOpen => !knowIsOpen)} >
                                    <VisibilityIcon/>
                                </Button>
                            </motion.div>
                            <motion.div variants={buttonVariants} animate={deviceSize < 800 ? "mobile" : 0} > 
                                <Button variant="outlined"  style={{color:"#22B7F2", height: "300px",width:"20px",backgroundColor: 'transparent',zIndex:3, position:"absolute", right:"30%", top:"10%", border:"2px #22B7F2", borderRadius:`0% 50% 50% 0%`, borderStyle: "none solid none none"}} onClick={() => setSeeIsOpen(seeIsOpen => !seeIsOpen)} >
                                    <WorkIcon/>
                                </Button>
                            </motion.div>
                            <motion.div variants={buttonVariants} animate={deviceSize < 800 ? "mobile" : 0} >
                                <Button variant="outlined"   style={{color:"#22B7F2",width:"300px",height:"30px",backgroundColor: 'transparent',zIndex:3, position:"absolute", top:"60%", left:"40%", border:"2px #22B7F2", borderRadius:`0% 0% 50% 50%`, borderStyle: "none none solid none "}} onClick={() => setContactIsOpen(contactIsOpen => !contactIsOpen)} className={classes.emailButton} >
                                    <EmailIcon/>
                                </Button>
                            </motion.div>
                            
                            
                        </Grid>
                        
                    </Grid>
                    <Grid  item alignSelf="flex-start" alignItems="center" justifyContent="center"  xs={12}  md={3} lg={3} style={{ height:"100%", overflow:"hidden"}} order={{xs:3,md:3,lg:3}} ref={workRef}>
                        <motion.div style={{height:"100%"}} animate={seeIsOpen ? "open" : "closed"} variants={seeVariants} transition={{duration:"0.5"}}>
                            <See />
                        </motion.div>
                    </Grid>  
                </Grid>
                <Grid container item  xs={12} direction="row"  alignItems="center" justifyContent="center" className={classes.footer} >
                    <Grid item xs={12} lg={3} className={classes.by}  alignItems="flexStart" justifyContent="flex-start" order={{xs:3, lg:1}}>
                        <Typography className={classes.typography} style={{display:"flex", direction:"row", justifyContent:"center"}}> by Lautaro Fabian Cabrera <CopyrightIcon/></Typography>
                    </Grid>
                    <Grid item xs={12} lg={6} style={{height:"100%", zIndex:3}} alignItems="flex-start" order={{xs:1, lg:2}}>
                        <motion.div initial={{y:"-300%"}} animate={contactIsOpen ? "open" : "closed"} variants={contactVariants} transition={{duration:"0.5"}} ref={contactRef}>
                            <Contact/>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} lg={3}   style={{backgroundColor:'#22B7F2'}} container order={{xs:2, lg:3}}>
                        
                            <Grid item lg={3} md={2}><img height="50px" src={jsIcon}/></Grid>
                            <Grid item lg={3} md={2}><img height="50px" src={expressIcon} /></Grid>
                            <Grid item lg={3} md={2}><img height="50px" src={reactLogo} /></Grid>
                            <Grid item lg={3} md={2}><img height="50px" src={muiLogo} /></Grid>
                            <Grid item lg={3} md={2} ><img height="50px" src={mongoIcon} /></Grid>
                            <Grid item lg={3} md={2}><img height="50px" src={css3}/></Grid>
                            <Grid item lg={3} md={2}><img height="50px" src={nodeLogo}/></Grid>
                            <Grid item lg={3} md={2}><img height="50px" src={pythonLogo}/></Grid>
                            <Grid item lg={3} md={2}><img height="50px" src={apiLogo}/></Grid>
                            <Grid item lg={3} md={2}><img height="50px" src={agileLogo}/></Grid>
                        
                    </Grid>    
                </Grid>
            </Grid>    
        </ThemeProvider>
        
             
             
                 
                 
                 
                
                
    
        
            
        
    )
}