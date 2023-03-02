import React, {useState, useEffect} from "react"
import {BrowserRouter} from "react-router-dom"
import {ThemeProvider} from '@mui/material/styles'
import gameTheme from './components/game/GameTheme'
import MainRouter from './MainRouter'
import Loading from "./components/singularity/Loading.js"


export default function App() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 8000)
    }, [])
    return(
        
            <BrowserRouter>
                <ThemeProvider theme={gameTheme}>
                    {
                        loading ?
                        <Loading/>
                    : 
                    <MainRouter/>
                    }
                    
                    
                </ThemeProvider>
                
            </BrowserRouter>            
        
    )
}