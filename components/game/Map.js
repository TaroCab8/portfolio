import React, {useState, useEffect} from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Typography from '@mui/material/Typography'
import {makeStyles} from '@mui/styles'
import Divider from '@mui/material/Divider'
import CanvasGame from './CanvasGame'

const useStyles = makeStyles(theme => ({
    cardMedia:{
        backgroundColor: "black",
        justifyContent: "center",
        width:"100%",
        border:"1px solid yellow"
        

    },
    canvasContainer:{
        height: "600px",
        width: "600px",
        border: `4px solid ${theme.palette.text.secondary}`, 
        borderRadius:"25px",
        backgroundColor: 'white'
        
    },
    input: {
        width: '100%',
        backgroundColor: 'black',
        border: 'none',
        outline: 'none',
        margin: '5px',
        color: theme.palette.text.secondary,
        typography: theme.typography,
        position: 'absolute',
        bottom: 10,
        left: 0,
        //borderRadius: '50px',
        paddingBottom:'5px'

    },
    iconLoco:{
        color: theme.palette.text.secondary,
        typography: theme.typography,
    },
    textContainer: {
        border: `4px solid ${theme.palette.text.secondary}`, 
        borderRadius:"25px",
        margin: "10px"
    },
    typography: {
        backgroundColor: "black",
        heigth: '800px',
        color: theme.palette.text.secondary,
    }
    
}))

export default function Map() {
    const classes= useStyles()

    const handleInput = () => {
        if(event.key == "Enter") {
            console.log(event.target.value)
        }
    }

    return(
        <Card style={{backgroundColor:"black", height:"920px", border:"1px solid white", justifyContent: "center", alignContent: "center", flexDirection:"column"}}>
            <Typography variant="h6" className={classes.typography} >Your quest</Typography>
            <Divider/>
            <div className={classes.canvasContainer} style={{display: "flex", justifyContent:"center"}}>
                <CanvasGame style={{borderRadius: '25px'}} />
            </div>
            <CardContent className={classes.textContainer}>
                <Typography component="div" variant="body2" className={classes.typography}>Options</Typography>
            </CardContent>

            <TextField  InputProps={{  
            startAdornment: (
              <InputAdornment  position="start">
                <KeyboardArrowRightIcon className={classes.iconLoco}/>
            </InputAdornment>)}} onKeyDown={handleInput} autoFocus={true} className={classes.input} style={{position: "absolute", bottom: 0}} type="text" variant="standard"></TextField>
        </Card>
        
    )
}
