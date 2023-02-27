import React from "react"
import {BrowserRouter} from "react-router-dom"
import {ThemeProvider} from '@mui/material/styles'
import gameTheme from './components/game/GameTheme'
import MainRouter from './MainRouter'

export default function App() {
    return(
            <BrowserRouter>
                <ThemeProvider theme={gameTheme}>
                    <MainRouter/>
                </ThemeProvider>
                
            </BrowserRouter>            
        
    )
}