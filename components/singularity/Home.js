import React, {useEffect, useState, useRef} from "react"
import CanvasSingular from './CanvasSingular'
import singularTheme from './SingularTheme'
import {Link} from 'react-router-dom'
import {ThemeProvider} from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import See from './See'
import Know from './Know'
import Contact from './Contact'
import { motion } from "framer-motion"

import makeStyles from '@mui/styles/makeStyles'


const useStyles = makeStyles(theme => ({
    container: {
         
        height: '100vh',
        padding: '25px',
        backgroundColor: theme.palette.background.default,
        justifyContent: "space-between",
        alignItems: "flex-start",
        overflow:"hidden",
        //opacity:0,
    },
    frame: {
        height: '100%',
        width:"100%",
        border: `6px inset ${theme.palette.primary.main}`,
        //borderRadius: 20,
        backgroundColor: "transparent",
    },
    
}))

const contactVariants={
    open: { opacity:1, y:"-100%"},
    closed: {opacity:0, y:0}
}
const seeVariants={
    open: { opacity:1, x:0},
    closed: {opacity:0, x:"100%"}
}
const knowVariants={
    open: { opacity:1, x:0, y:0},
    closed: {opacity:0,x:"-100%"}
}
const canvasVariant={
    reduced: {scale:0.7, y: "-30%"},
    normal: {scale: 1, y: 0}
}

export default function Home() {
    const classes = useStyles()
    const [contactIsOpen, setContactIsOpen] = useState(false)
    const [knowIsOpen, setKnowIsOpen] = useState(false)
    const [seeIsOpen, setSeeIsOpen] = useState(false)
    
    return(
        <ThemeProvider  theme={singularTheme}>

                <Grid className={classes.container} container spacing={2}>
                    <Grid  item xs={3}>
                        <motion.div animate={knowIsOpen ? "open" : "closed"} variants={knowVariants} transition={{duration:"0.5"}}>
                            <Know/>
                        </motion.div>
                        
                        </Grid>
                    <Grid alignSelf="flex-start" container item xs={6} >
                        <Grid item alignSelf="flex-start">
                           
                            <motion.div whileHover={{rotate: 360}} animate={contactIsOpen ? "reduced" : "normal"} variants={canvasVariant} >
                                <CanvasSingular/>   
                            </motion.div>
                            <Button variant="outlined" style={{position: "absolute",  
                            left:"450px",top: "160px"}} onClick={() => setKnowIsOpen(knowIsOpen => !knowIsOpen)} >Know</Button>
                            <Button variant="outlined" style={{position: "absolute",  
                            left:"450px",top: "200px"}} onClick={() => setSeeIsOpen(seeIsOpen => !seeIsOpen)} >See</Button>
                            <Button variant="outlined" style={{position: "absolute",  
                            left:"450px",top: "240px"}} onClick={() => setContactIsOpen(contactIsOpen => !contactIsOpen)} >Contact</Button>
                        </Grid>
                        <Grid item  xm={4}>
                            <motion.div animate={contactIsOpen ? "open" : "closed"} variants={contactVariants} transition={{duration:"0.5"}}>
                                <Contact/>
                            </motion.div>
                        </Grid>
                    </Grid>
                    <Grid alignSelf="flex-start" item xs={3} >
                        <motion.div animate={seeIsOpen ? "open" : "closed"} variants={seeVariants} transition={{duration:"0.5"}}>
                            <See />
                        </motion.div>
                    </Grid>  
                </Grid>
                
        </ThemeProvider>
        
             
             
                 
                 
                 
                
                
    
        
            
        
    )
}