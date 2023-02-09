import React, {useEffect, useRef} from "react"
import CanvasSingular from './CanvasSingular'
import {Link} from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import See from './See'
import Know from './Know'
import Contact from './Contact'
import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'
import Hero from './Hero.js'


export default function Home() {
    return(
        
        <Container>
            <Hero/>
            <Divider/>
            <Know/>
            <Divider/>
            <See />
            <Divider/>
            <Contact/>
            
        </Container>
                 
             
                 
                 
                 
                
                
    
        
            
        
    )
}