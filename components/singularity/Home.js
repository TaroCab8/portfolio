import React, {useEffect, useState, useRef} from "react"
import CanvasSingular from './CanvasSingular'
import singularTheme from './SingularTheme'
import {Link} from 'react-router-dom'
import {ThemeProvider} from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
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
import VisibilityIcon from '@mui/icons-material/Visibility';
import WorkIcon from '@mui/icons-material/Work';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EmailIcon from '@mui/icons-material/Email';

import makeStyles from '@mui/styles/makeStyles'


const useStyles = makeStyles(theme => ({
    container: {
         
        height: "80vh",
        padding: '10px',
        marginBottom:0,
        //backgroundColor: "white",
        backgroundColor: theme.palette.background.default,
        justifyContent: "space-between",
        alignItems: "flex-start",
        overflowY:"hidden",
        border:"2px solid orange"
        
    },
    footer:{
        height: "21vh",
        backgroundColor: theme.palette.background.default,
        padding:"10px",
        

          
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
    }
}))

const contactVariants={
    open: {opacity:1, y:"-50%", scale:0.8},
    closed: {opacity:0 ,height:0, }
}
const seeVariants={
    open: { opacity:1, x:0},
    closed: {opacity:0, x:"100%"}
}
const knowVariants={
    open: {y:0, x:0, },
    closed: {height:0, x:"-140%",alignSelf:"center"}
}
const canvasVariant={
    reduced: {scale:0.8, y: "-10%"},
    normal: {scale: 0.8, y: 0}
}

export default function Home() {
    const classes = useStyles()
    const [contactIsOpen, setContactIsOpen] = useState(false)
    const [knowIsOpen, setKnowIsOpen] = useState(false)
    const [seeIsOpen, setSeeIsOpen] = useState(false)
    
    return(
        <ThemeProvider  theme={singularTheme}>
            <Grid container style={{overflowY:"hidden"}}>
                <Grid className={classes.container}   alignItems="flex-start" container item spacing={2}>
                    <Grid  item  style={{ height:"100%"}} xs={12}  md={3} lg={2} order={{xs:2,md:1,lg:1}}>
                        <motion.div initial={{x:"-140%"}} animate={knowIsOpen ? "open" : "closed"} variants={knowVariants} transition={{type: "tween", duration:"1.5"}}>
                            <Know/>
                        </motion.div>
                        
                        </Grid>
                    <Grid alignSelf="flex-start"  container item xs={12}  md={6} lg={6} direction="column" order={{xs:1,md:2,lg:2}}>
                        <Grid item>
                            <motion.div whileHover={{rotate: 360}} animate={contactIsOpen ? "reduced" : "normal"} variants={canvasVariant} >
                                <CanvasSingular/>   
                            </motion.div>
                            <Button variant="outlined" style={{color:"#22B7F2", height: "300px",width: "20px",backgroundColor: 'transparent', zIndex:3,position:"absolute", left:"30%", top:"10%", border:"2px #22B7F2", borderRadius:`50% 0% 0% 50%`, borderStyle: "none none none solid"}}  onClick={() => setKnowIsOpen(knowIsOpen => !knowIsOpen)} ><VisibilityIcon/></Button>
                            <Button variant="outlined"  style={{color:"#22B7F2", height: "300px",width:"20px",backgroundColor: 'transparent',zIndex:3, position:"absolute", right:"30%", top:"10%", border:"2px #22B7F2", borderRadius:`0% 50% 50% 0%`, borderStyle: "none solid none none"}} onClick={() => setSeeIsOpen(seeIsOpen => !seeIsOpen)} ><WorkIcon/></Button>
                            <Button variant="outlined"   style={{color:"#22B7F2",width:"300px",height:"30px",backgroundColor: 'transparent',zIndex:3, position:"absolute", top:"60%", left:"40%", border:"2px #22B7F2", borderRadius:`0% 0% 50% 50%`, borderStyle: "none none solid none "}} onClick={() => setContactIsOpen(contactIsOpen => !contactIsOpen)} ><EmailIcon/></Button>
                        </Grid>
                        
                    </Grid>
                    <Grid  item alignSelf="flex-start" alignItems="flex-start" justifyContent="flex-end"  xs={12}  md={3} lg={2} style={{ height:"100%", overflow:"hidden"}} order={{xs:3,md:3,lg:3}}>
                        <motion.div animate={seeIsOpen ? "open" : "closed"} variants={seeVariants} transition={{duration:"0.5"}}>
                            <See />
                        </motion.div>
                    </Grid>  
                </Grid>
                <Grid container item  className={classes.footer} direction="row"  alignItems="center" justifyContent="center">
                    <Grid item xs={12} lg={3} className={classes.by}  alignItems="flexStart" justifyContent="flex-start">
                        <Typography className={classes.typography} style={{display:"flex", direction:"row", justifyContent:"center"}}> by Lautaro Fabian Cabrera <CopyrightIcon/></Typography>
                    </Grid>
                    <Grid item xs={12} lg={6} style={{height:"100%", zIndex:3}} alignItems="flex-start">
                        <motion.div animate={contactIsOpen ? "open" : "closed"} variants={contactVariants} transition={{duration:"0.5"}}>
                            <Contact/>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} lg={3}   style={{backgroundColor:'#22B7F2'}} container>
                        
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