import React, {useState, useEffect} from 'react'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import {makeStyles} from '@mui/styles'


const useStyles =  makeStyles(theme => ({
    root:{
        backgroundColor: 'black',
        maxHeight: 925,
        minHeight: 925,
        margin: 0,
        paddingLeft: '20px',
        color: theme.palette.text.primary,
        typography: theme.typography,
        position: "relative",
        border: "10px solid gray",
        borderRadius:'50px',
        
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
        left: 0,
        borderRadius: '50px'

    },
    textHide: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right:0,
        backgroundColor: "black",
        
    }
    
    } ))

 
export default function Game() {
    const classes= useStyles()
    const [values, setValues]= useState(["Welcome"])

    // set triggers and responses
    const host = trigger => {
        const responses = [
            {
                question: "Welcome",
                response: "Thanks for passing. Are you up for a little game? yes/no"
            },
            {
                question: "> yes",
                response: "awesome"
            },
            {
                question: "awesome",
                response: "Loading..."
            },
            {
                question: "> no" || "> n",
                response: "oh, ok.. :("
            },
            {
                question: "oh, ok.. :(",
                response: "See you next time."
            },
            {
                question: "> como estas",
                response: "todo bien y vos"
            },         
        ]

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
    
    // setting values and check outcome
    let lastItem = values[values.length - 1]
    let reply=  host(lastItem)
    console.log(reply)
        
    // rendering responses by intervals  
    useEffect(() =>{
        
        const interval = setInterval(() => {
            reply ? setValues([...values, reply]) : 0 
            
        },3000)

        return () => clearInterval(interval)
        
    })
    
       
    
    // screen up to 15 elements then clean up
    if(values.length === 12) {
        setValues([values[values.length - 1]])
    }

    return (
        <div className={classes.root}>
            {values.map((item,i)=> {
                    return ( 
                        <Typography className={"textHide"} key={i} className={classes.textLines}  >{item}</Typography>
                        )
                })
                    
            }
        
        
        <TextField InputProps={{disableUnderline: true}} autoFocus={true} className={classes.input} style={{position: "absolute", bottom: 0}} type="text"  onKeyDown={handleInput}></TextField>
        
        
        
            
        </div>
    )
}


/**
 * 
 */
