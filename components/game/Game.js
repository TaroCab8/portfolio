import React, {useState, useEffect} from 'react'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import {makeStyles} from '@mui/styles'

const useStyles =  makeStyles(theme => ({
    root:{
        backgroundColor: 'black',
        maxHeight: 920,
        minHeight: 920,
        margin: '5px',
        color: theme.palette.text.primary,
        typography: theme.typography,
        position: "relative"

    },
   
    input: {
        width: '100%',
        backgroundColor: 'black',
        border: 'none',
        outline: 'none',
        margin: '5px',
        color: theme.palette.text.primary,
        typography: theme.typography,
        position: 'absolute',
        bottom: 10,
        left: 0

    },
    
    } ))

 
export default function Game() {
    const classes= useStyles()
    const [values, setValues]= useState(["hi, welcome"])
    const cue=["hi, welcome", "please, choose your language:", "f=francais","s=spanish","e=english"]

    
    const handleInput = event => {
        if(event.key == "Enter"){
            setValues([...values, "> " + event.target.value])
            event.target.value=""
        }
    }
    
    useEffect(()=> {
        console.log(values)

    })
    
    // screen up to 15 elements then clean up
    if(values.length === 16) {
        setValues([values[values.length - 1]])
    }

    return (
        <div className={classes.root}>
            
        {values.map((item,i)=> {
            return <Typography key={i} >{item}</Typography>
        })}
        <TextField InputAdornment=">" className={classes.input} style={{position: "absolute", bottom: 0}} type="text" autoFocus="autoFocus" onKeyDown={handleInput}></TextField>
        
        
        
            
        </div>
    )
}


/**
 * 
 */
