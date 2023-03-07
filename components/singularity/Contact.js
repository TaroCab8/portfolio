import React,{useState, useRef} from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import credentials from './../credentials'
import emailjs from "emailjs-com"
import makeStyles from "@mui/styles/makeStyles"
import text0s from "./../../public/text"


const useStyles = makeStyles((theme) => ({
    formContainer:{
        width:"100%",   
        height:"100%",
        padding:"10px",
        backgroundColor:'transparent',
        overflowY:"hidden",
        [theme.breakpoints.up("md")]:{
            display: "flex",
            justifyContent:"center", 
            alignItems:"center", 
            flexDirection:"column",
            
        }
        
    },
    card:{
        display:"flex",
        justifyContent:"center", 
        alignItems:"center", 
        flexDirection:"column",
        padding:"20px",
        backgroundColor: theme.palette.background.default,
        border: `2px solid ${theme.palette.secondary.main}`,
        borderStyle: "none none none double",
        overFlowY:"hidden",
        height:"100%",
        [theme.breakpoints.up("md")]:{
            padding:"10px", 
            zIndex: 3,
            
        }
        
    },
    formal:{
        backgroundColor:'rgba(3, 89, 81, 0.1)',
        fontSize: '1em',
        height:"100%",
        width:"100%",
        display:"flex",
        justifyContent:"center", 
        alignItems:"center", 
        flexDirection:"column",
        [theme.breakpoints.up("md")]:{
            fontSize:"14px"
        }
    },
    button: {
        border: `4px solid ${theme.palette.primary.main}`,
        backgtoundColor:"transparent",
        width: "70%",
        alignText:"center",
        color:theme.palette.primary.main,
        zIndex: 999
    }
    
    
}))

export default function Contact() {
    const classes = useStyles()
    const [values, setValues] = useState({
        name: "",
        email:"",
        message: "",
        open:false,
        error:""

    })
     
    const handleChange= name => event => {
        setValues({...values, [name]: event.target.value})
    }
    
    
    const form = useRef()
    const clickButton = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            credentials.mailgun.service_id,
            credentials.mailgun.template_id,
            form.current,
            credentials.mailgun.user_id,
        ).then(
            result => {
                console.log(result.text)
                setValues({
                    name: "",
                    email:"",
                    message:"", 
                    open:true} )
            },
            error => console.log(error.text)
        )
    }
    const handleClose = () => {
        setValues({...values, open:false})
    }
    //let language= localStorage.getItem("Language")
    //console.log(`Contact component says: Here Language is: ${language}`)
    return (

        <Grid  container className={classes.formContainer}>
            <Grid style={{width:"100%"}} item md={12} sm={6} xs={12}>
                <Card style={{backgroundColor:'rgba(3, 89, 81, 0.4)', borderRadius: 50}} className={classes.card} >
                    <Typography>Get in Touch</Typography>
                    <form className={classes.formal}  ref={form}>
                        <TextField name="name" label="Name" onChange={handleChange("name")} value={values.name} fullWidth/>
                        <TextField name="email" type="email" label="Email"  onChange={handleChange("email")} value={values.email} fullWidth />
                        <TextField name="message" type="textArea" multiline label="Message" rows={2} onChange={handleChange("message")} value={values.message} fullWidth/>
                    </form>
                    
                    <CardActions style={{width: "70%", justifyContent:"center"}}>
                        <Button variant="outlined" style={{border: "2px solid #22B7F2",backgroundColor:'#012E40',width: "70%",color:"white"    ,zIndex: 999}} onClick={clickButton} >Send</Button>
                    </CardActions>
                </Card>
                <Dialog style={{backgroundColor:'rgba(3, 89, 81, 0.4)', borderRadius: 50}}  open={values.open} onClose={handleClose} aria-describedby="alert-dialog-description" >
                    <DialogContent >
                        <DialogContentText  id="alert-dialog-description">{text0s.contact.dialog.francais}</DialogContentText>
                    </DialogContent>
                        
                </Dialog> 
            </Grid>
              
        </Grid>
    )
}