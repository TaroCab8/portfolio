import React, {useState, useEffect} from 'react'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import {makeStyles} from '@mui/styles'

const useStyles =  makeStyles(theme => ({
    root:{
        backgroundColor: 'black',
        maxHeight: 720,
        minHeight: 720,
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
    const [values, setValues]= useState(["Hi Welcome"])

    // set triggers and responses
    const host = trigger => {
        const responses = [
            {
                question: "> yes",
                response: "awesome"
            },
            {
                question: "> no",
                response: "See you next time"
            },
            {
                question: "> como estas",
                response: "todo bien y vos"
            },
            
        ]
        // cleaning input for only user questions
        //const questions = trigger.filter(t => t[0] == ">")

        //perform questions analysis, compare with responses and provide an answer
        const answer = responses.map(r => {
            if(trigger == r.question) {
                return r.response
            } 
        }).filter(a =>  {return a !== undefined})
        return answer.toString() 
        }
    
    // getting answers into view
    const handleInput = event => {
        
        if(event.key == "Enter"){
            setValues([...values, "> " + event.target.value])  
            event.target.value=""     
        }
        
    }
          
    // perform answers reading and shooting responses accordingly        
    useEffect(()=> {
        console.log(values)
        let reply= host((values[values.length - 1]))
        reply ? setValues([...values, reply]) : 0    
    })
    
    // screen up to 15 elements then clean up
    if(values.length === 12) {
        setValues([values[values.length - 1]])
    }

    return (
        <div className={classes.root}>
            
        {values.map((item,i)=> {
            return <Typography key={i} >{item}</Typography>
        })}
        
        <TextField autoFocus={true} className={classes.input} style={{position: "absolute", bottom: 0}} type="text"  onKeyDown={handleInput}></TextField>
        
        
        
            
        </div>
    )
}


/**
 * 
 */
