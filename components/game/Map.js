import React, {useState, useEffect} from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import {makeStyles} from '@mui/styles'
import CanvasGame from './CanvasGame'
import {Redirect} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    cardMedia:{
        backgroundColor: "black",
        justifyContent: "center",
        width:"100%",
        border:"1px solid yellow"
        

    },
    canvasContainer:{
        height: "430px",
        width: "430px",
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
        borderRadius: '25px',
        paddingLeft: '20px'
    }
    
}))

export default function Map() {
    const classes= useStyles()
    const [redirect, setRedirect] = useState(false)

    const handleInput = () => {
        if(event.key == "Enter" && event.target.value === 0) {
            setRedirect(true)
        }
    }
    useEffect(()=>{
        const abortController = new AbortController()

        if(redirect){
            return (<Redirect to={"/quest"}/>)
        }

        return function cleanup() {
            abortController.abort()
        }
    },[])
    
//style={{backgroundColor:"black", height:"920px", border:"1px solid white", justifyContent: "center", alignContent: "center", flexDirection:"column"}}
    return(
        <Grid container justifyContent="center" alignItems="flex-start" style={{backgroundColor:'black',border:'4px solid green', height: '100vh',width:'100vw'}} >
                <Grid item xs={12}>
                    <Typography variant="h6" className={classes.typography} >Your quest</Typography>
                    </Grid>
                <Grid  className={classes.canvasContainer}item xs="auto" alignSelf="center">
                    <CanvasGame style={{borderRadius: '25px',width:"400px",height:"400px"}} />
                    </Grid>
                <Grid item xs={12} className={classes.textContainer}>
                    <Typography component="div" variant="body2" className={classes.typography}>Options</Typography>
                    </Grid>
                <Grid alignSelf="flex-end" item xs={12} >
                    <TextField  InputProps={{  
                startAdornment: (
                <InputAdornment  position="start">
                    <KeyboardArrowRightIcon className={classes.iconLoco}/>
                </InputAdornment>)}} onKeyDown={handleInput} autoFocus={true} className={classes.input}  type="text" variant="standard"></TextField>
                </Grid>
                
                
                
                    
                
                
                    
                

                
            
        </Grid>
    )
}
