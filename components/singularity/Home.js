import React, {useEffect, useState, useRef} from "react"
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
import Singular from './Singular'
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
import gitLogo from "./../../public/singular/git3.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';

import text0s from './../../public/text.js'

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
            overflowX:"hidden",
            
            
        }
        
        
    },
    footer:{
        height: window.innerHeight * 0.2,
        backgroundColor: theme.palette.background.default,
        padding:"10px",

        [theme.breakpoints.down("md")]:{
            
            height:"100%",
            overflowX:"hidden",
        }
          
    },
    typography:{
        color: "white",
        fontSize:"12px"
    },
    by:{
        backgroundColor:'rgba(3, 89, 81, 0.4)', 
        border: `2px solid #22B7F2`,
        borderRadius:"20px",
        borderStyle: "none double none double",
        padding: "5px"
    },
    mainContainer:{
        [theme.breakpoints.down("md")]:{
            height:"100%",
            
            width:"100%",
            
            flexDirection:"column",
            overflowX:"hidden",
        }
    },
    canvasMobile: {
        [theme.breakpoints.down("md")]:{
            overflowX:"hidden",
        }
    },
    emailButton:{
        [theme.breakpoints.down("md")]: {
            display:"none"
        }
    }
}))

const contactVariants={
    open: {opacity:1, y:"-50%", scale:0.8},
    closed: {opacity:0 ,height:0, y:"-300%" },
    mobile: {opacity:1, y:0, height:"100%"}
}
const seeVariants={
    open: { opacity:1, x:0},
    closed: {opacity:0, x:"-100%"}
}
const knowVariants={
    open: {x:0,  border: "none",transition:{type:"tween",delay:0.25}},
    closed: {height:0, y:"50%", x:"120%"},
    after:{height:"100%", y:0, opacity: 1, transition:{
        type:"tween",
        delay:0.5,
        duration:1,
    }}
}
const canvasVariant={
    reduced: {scale:1, y: "-10%"},
    normal: {scale: 1, y: 0, opacity:1},
    mobileCanvas:{opacity:0},
    laptopCanvas:{scale:0.8},
    mobilePic: {opacity:1, brightness:2, blur:[1,2]},
    mobilePicClosed:{opacity:0}
}

const buttonVariants={
    mobile:{opacity:0, display:"none"},
    mobileOpen:{opacity:1,}
}
const stackVariant = {
    open:{opacity:1}
}
export default function Home() {
    const classes = useStyles()
    const [contactIsOpen, setContactIsOpen] = useState(false)
    const [knowIsOpen, setKnowIsOpen] = useState(false)
    const [seeIsOpen, setSeeIsOpen] = useState(false)
    //const [language, setLanguage] = useState("")

    const [deviceSize, changeDeviceSize] = useState(window.innerWidth);
    const homeRef = useRef()
    const knowRef = useRef()
    const workRef = useRef()
    const contactRef = useRef()


  useEffect(() => {
    
    const resizeW = () => changeDeviceSize(window.innerWidth);

    window.addEventListener("resize", resizeW); // Update the width on resize

    return () => window.removeEventListener("resize", resizeW);
    
    
  }, []);

  const handleScroll= (reference) => {
      reference.current.scrollIntoView({behavior:"smooth"})
  }
  let userLang = navigator.language || navigator.userLanguage
  const handleChangeLanguage = language =>{
      localStorage.removeItem("Language")
      localStorage.setItem("Language", language)
      //setLanguage(language)
      console.log("done")
  }
    
    return(
        <ThemeProvider  theme={singularTheme}>
        
            <Grid container style={{overflowY:"hidden", overflowX:"hidden"}} className={classes.mainContainer}>
            <motion.div   initial={{opacity:0}} variants={buttonVariants} animate={deviceSize < 800 ? "mobileOpen": 0}>
                    <div style={{position: "fixed", right:0, top:`${window.innerWidth * 0.63}px`,height:"200px", width:"50px", zIndex:999,overflowX:"hidden",  }} >
                                    <IconButton style={{color:"#22B7F2",zIndex:"999", border:"2px solid white",backgroundColor:'rgba(3, 89, 81, 0.8)', }} onClick={() => {
                                        handleScroll(knowRef)
                                        setKnowIsOpen(knowIsOpen => !knowIsOpen)
                                        setContactIsOpen(false)
                                        setSeeIsOpen(false)
                                        }}>
                                        <VisibilityIcon style={{zIndex:999}}/>
                                    </IconButton>
                                    <IconButton style={{color:"#22B7F2",zIndex:999, border:"2px solid white",backgroundColor:'rgba(3, 89, 81, 0.8)', }} onClick={() => {
                                        handleScroll(workRef)
                                        setSeeIsOpen(seeIsOpen => !seeIsOpen)
                                        setContactIsOpen(false)
                                        setKnowIsOpen(false)
                                        }}>
                                        <WorkIcon style={{zIndex:999}}/>
                                    </IconButton>
                                    <IconButton style={{color:"#22B7F2",zIndex:999, border:"2px solid white",backgroundColor:'rgba(3, 89, 81, 0.8)', }} onClick={() => {
                                        handleScroll(contactRef)
                                        setContactIsOpen(contactIsOpen => !contactIsOpen)
                                        setSeeIsOpen(false)
                                        setKnowIsOpen(false)
                                        }}>
                                        <EmailIcon style={{zIndex:999}}/>
                                    </IconButton>
                                    <IconButton style={{color:"#22B7F2",zIndex:999, border:"2px solid white",backgroundColor:'rgba(3, 89, 81, 0.8)', }}  onClick={() => {
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
                    <Grid  item container alignItems="center"  justifyContent="center" style={{overflowY:"hidden", overflowX:"hidden",height:"100%"}} xs={12} sm={3}  md={3} lg={3} order={{xs:2,sm:1, md:1,lg:1}} ref={knowRef} >
                        <motion.div initial={{x:"120%", y:"50%"}} animate={[`${knowIsOpen ? "open" : "closed"}`,`${knowIsOpen ? "mid": "closed"}`,`${knowIsOpen ? "after": "closed"}`]} variants={knowVariants} style={{height:"100%"}}>
                            <Know/>
                        </motion.div>
                        
                        </Grid>
                    <Grid alignSelf="flex-start" style={{overflow:"hidden", /*border:"2px solid yellow"*/}} container item xs={12} sm={6}  md={6} lg={6}  order={{xs:1,sm:2,md:2,lg:2}}  ref={homeRef}>
                            <Grid item sm={1} md={1}/>
                            <Grid /*style={{border:"2px solid white"}}*/ item container md={1} sm={1} alignItems="center" >
                                <motion.div variants={buttonVariants}  animate={deviceSize < 900 ? "mobile" : 0}>
                                    <Button variant="outlined" style={{color:"#22B7F2", height: "300px",width: "20px",backgroundColor: 'transparent', zIndex:3, border:"2px #22B7F2", borderRadius:`50% 0% 0% 50%`, borderStyle: "none none none solid"}}  onClick={() => setKnowIsOpen(knowIsOpen => !knowIsOpen)} >
                                        <VisibilityIcon/>
                                    </Button>
                            </motion.div>
                            </Grid>
                            <Grid  style={{padding:0, heigth:"100%" }} item container  md={8} sm={8} alignItems="center" justifyContent="center" >
                                <motion.div initial={{opacity:0}} whileHover={{rotate: 360}} style={{height:"100%", margin:0, width:"418px", borderRadius:"50%", display: "flex", alignItems:"center", justifyContent:"center"}}  animate={[`${contactIsOpen ? "reduced" : "normal"}`, `${deviceSize < 1300 ? "laptopCanvas": "normal"}`]} variants={canvasVariant} >
                                <Singular/>    
                            </motion.div>
                            </Grid>
                            <Grid /*style={{border:"2px solid pink"}}*/ item container alignItems="center" md={1} sm={1}>
                                <motion.div variants={buttonVariants} animate={deviceSize < 900 ? "mobile" : 0} > 
                                <Button variant="outlined"  style={{color:"#22B7F2", height: "300px",width:"20px",backgroundColor: 'transparent',zIndex:3, border:"2px #22B7F2", borderRadius:`0% 50% 50% 0%`, borderStyle: "none solid none none"}} onClick={() => setSeeIsOpen(seeIsOpen => !seeIsOpen)} >
                                    <WorkIcon/>
                                </Button>
                            </motion.div>
                            </Grid>
                            <Grid item sm={1} md={1}/>
                            <Grid item md={12} />
                            <Grid item md={2} />
                            <Grid /*style={{border:"2px solid green"}}*/ item  container justifyContent="center" md={8} >
                                <motion.div variants={buttonVariants} animate={deviceSize < 900 ? "mobile" : 0} >
                                <Button variant="outlined"   style={{color:"#22B7F2",width:"300px",height:"30px",backgroundColor: 'transparent',zIndex:3, border:"2px #22B7F2", borderRadius:`0% 0% 50% 50%`, borderStyle: "none none solid none "}} onClick={() => setContactIsOpen(contactIsOpen => !contactIsOpen)} className={classes.emailButton} >
                                    <EmailIcon/>
                                </Button>
                            </motion.div>
                            </Grid>
                            <Grid item md={2} />
                            
                            
                            
                            
                                                    
                    </Grid>
                    <Grid  item alignSelf="flex-start" alignItems="center" justifyContent="center"  xs={12} sm={3} md={3} lg={3} style={{ height:"100%", overflow:"hidden"}} order={{xs:3, sm:3, md:3,lg:3}} ref={workRef}>
                        <motion.div style={{height:"100%"}} animate={seeIsOpen ? "open" : "closed"} variants={seeVariants} transition={{duration:"0.5"}}>
                            <See />
                        </motion.div>
                    </Grid>  
                </Grid>
                <Grid container item  xs={12} spacing={{lg:0,sm:0, xs:1}} direction="row"  alignItems="center" justifyContent="center" className={classes.footer} >
                    <Grid item xs={12} sm={3} md={3} lg={3} className={classes.by}  alignItems="flexStart" justifyContent="flex-start" order={{xs:3, sm: 1, md:1, lg:1}}>
                        <Typography className={classes.typography} style={{display:"flex", direction:"row", justifyContent:"center"}}> <CopyrightIcon/> 2023 | Lautaro Fabian Cabrera</Typography>
                        <Grid item container justifyContent="center" space={4}>
                            <a style={{color:"#22B7F2"}} href="https://www.linkedin.com/in/lautaro-fabian-cabrera-75773a163/" target="_blank" ><LinkedInIcon/></a>
                            <a style={{color:"#22B7F2"}} href="https://github.com/TaroCab8" target="_blank"><GitHubIcon/></a>
                                        
                        </Grid>
                        <div style={{display:"flex", justifyContent:"center"}}> 
                            <Button onClick={handleChangeLanguage("english")}>English</Button>
                            <Button onClick={handleChangeLanguage("español")}>Español</Button>
                            <Button onClick={handleChangeLanguage("francais")}>Francais</Button>
                        </div>
                        
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} style={{height:"100%", zIndex:3}} alignItems="flex-start" order={{xs:2, sm:2,md:2, lg:2}}>
                        <motion.div initial={{y:"-300%"}} animate={[`${contactIsOpen ? "open" : "closed"}`,`${ deviceSize < 900 ? "mobile" : 0}`]} variants={contactVariants} transition={{duration:"0.5"}} ref={contactRef}>
                            <Contact/>
                        </motion.div>
                    </Grid>
                    
                        <Grid item xs={12} sm={3} md={3} lg={3}  alignItems="center"  justifyContent="center" alignSelf="center" style={{backgroundColor:'#22B7F2', height:"90%", overflowX:"hidden",overflow:"visible", border:"2px solid white", borderRadius:20, borderStyle:"none double none double", paddingLeft:"10px"}} container order={{xs:1, sm:3, md:3, lg:3}}>
                            
                                <Grid item container alignItems="center" justifyContent="center" xs={12} md={12} lg={12}><Typography className={classes.typography} style={{ color:"white"}}> Stack </Typography></Grid>
                                <Grid item lg={3} md={2} xs={2} ><img height="30px" src={jsIcon}/></Grid>
                                <Grid item lg={3} md={2} xs={2} ><img height="30px" src={expressIcon} /></Grid>
                                <Grid item lg={3} md={2} xs={2} ><img height="30px" src={reactLogo} /></Grid>
                                <Grid item lg={3} md={2} xs={2}><img height="30px" src={muiLogo} /></Grid>
                                <Grid item lg={3} md={2} xs={2} ><img height="30px" src={mongoIcon} /></Grid>
                                <Grid item lg={3} md={2} xs={2} ><img height="30px" src={css3}/></Grid>
                                <Grid item lg={3} md={2} xs={2} ><img height="30px" src={nodeLogo}/></Grid>
                                <Grid item lg={3} md={2} xs={2} ><img height="30px" src={pythonLogo}/></Grid>
                                <Grid item lg={3} md={2} xs={2}><img height="30px" src={apiLogo}/></Grid>
                                <Grid item lg={3} md={2} xs={2}><img height="30px" src={agileLogo}/></Grid>
                                <Grid item lg={3} md={2} xs={2}><img height="30px"  style={{backgroundColor:'#22B7F2'}} src={gitLogo}/></Grid>
                            
                        </Grid>  
                    
                      
                </Grid>
            </Grid>    
        </ThemeProvider>
        
             
             
                 
                 
                 
                
                
    
        
            
        
    )
}