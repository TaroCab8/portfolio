import React, {useState, useEffect} from 'react'
import intro from './../../public/gameImg/intro.png'
import inn from './../../public/gameImg/citeInn.png'
import tavern from './../../public/gameImg/tavern.png'
import arena from './../../public/gameImg/Fac.png'
import wfh from './../../public/gameImg/wfh.png'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Typography from '@mui/material/Typography'
import {makeStyles} from '@mui/styles'
import Divider from '@mui/material/Divider'
import {Redirect} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    cardMedia:{
        backgroundColor: "black",
        justifyContent: "center",
        width:"100%",
        border:"1px solid yellow"
        

    },
    image:{
        height: "600px",
        width: "600px",
        border: `4px solid ${theme.palette.text.secondary}`, 
        borderRadius:"25px",
        
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
export default function Quest() {
    const classes= useStyles()
    const pics = [intro, inn, tavern, arena, wfh]
    const text= ["Press: \n 1 --> Inn \n 2 --> Tavern \n 3 --> arena \n 4 --> atelier \n 5 --> To walk there", "Hi he is my man, you will find him at his atelier", "The guy is not cheap", "He's part of my team, defending the colors of the citè", "Pay me money and we shall have access to creativity"]
    const [foto, setFoto]= useState(0)
    const [redirect, setRedirect] = useState(false)
    

    const handleInput = event => {
        let data
        if(event.key == "Enter") {
            let data= event.target.value
            if(data == "1"){
                setFoto(1)
            } else if( data == "2"){
                setFoto(2)
            } else if (data=="3"){
                setFoto(3)
            } else if(data == "4"){
                setFoto(4)
            } else if (data=="5"){
                setRedirect(true)
            }else {
                setFoto(0)
            }
            event.target.value="" 
        }
    }
    
    


    const clickButton = () => {
        if(foto > pics.length-2) {
            setFoto(0)
        }else{
            setFoto(foto + 1)
        }    
    }
    useEffect(() => {
        console.log(foto)
    })
    if(redirect) {
        return(<Redirect to={"/map"} />)
    }
    return(
        <Card style={{backgroundColor:"black", height:"920px", border:"1px solid white", justifyContent: "center", alignContent: "center", flexDirection:"column"}}>
            <Typography variant="h6" className={classes.typography} >Your quest</Typography>
            <Divider/>
            <div style={{display: "flex", justifyContent:"center"}}>
            <CardMedia className={classes.card}>
                    <img className={classes.image} src={pics[foto]} ></img>
                </CardMedia>
            </div>
            <CardContent className={classes.textContainer}>
                <Typography component="div" variant="body2" className={classes.typography}>{text[foto]}</Typography>
            </CardContent>
            <TextField  InputProps={{  
            startAdornment: (
              <InputAdornment  position="start">
                <KeyboardArrowRightIcon className={classes.iconLoco}/>
            </InputAdornment>)}} onKeyDown={handleInput} autoFocus={true} className={classes.input} style={{position: "absolute", bottom: 0}} type="text" variant="standard"></TextField>
        </Card>
        
    )
}