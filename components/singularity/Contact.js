import React,{useState, useRef} from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import credentials from './../credentials'
import emailjs from "emailjs-com"
import makeStyles from "@mui/styles/makeStyles"


const useStyles = makeStyles((theme) => ({
    formContainer:{
        maxWidth:"40vw",
        height:"25%",
        backgroundColor:'transparent'
    },
    card:{
        width:"40vw", 
        justifyContent:"center", 
        alignItems:"center", 
        padding:"20px",
        backgroundColor: theme.palette.background.default,
        border: `2px solid ${theme.palette.secondary.main}`,
        borderStyle: "none none none double",
        
    },
    formal:{
        backgroundColor:'rgba(3, 89, 81, 0.1)',
        fontSize: '1em'
    },
    button: {
        border: `2px solid ${theme.palette.secondary.main}`,
        backgtoundColor:"transparent",
        width: "70%",
        alignText:"center"
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
    
    return (

        <Container   className={classes.formContainer}>
            <Card  style={{backgroundColor:'rgba(3, 89, 81, 0.4)', borderRadius: 50}} className={classes.card} >
                <Typography>Get in Touch</Typography>
                <form className={classes.formal}  ref={form}>
                    <TextField name="name" label="Name" onChange={handleChange("name")} value={values.name} fullWidth/>
                    <TextField name="email" type="email" label="Email"  onChange={handleChange("email")} value={values.email} fullWidth />
                    <TextField name="message" type="textArea" multiline label="Message" rows={3} onChange={handleChange("message")} value={values.message} fullWidth/>
                </form>
                
                <CardActions>
                    <Button variant="outlined" className={classes.button} onClick={clickButton} >Send</Button>
                </CardActions>
            </Card>
            <Dialog open={values.open} onClose={handleClose} aria-describedby="alert-dialog-description" >
                <DialogContent >
                    <DialogContentText style={{color: "black"}} id="alert-dialog-description">Thank you for contacting! I'll get in touch real soon.</DialogContentText>
                </DialogContent>
                    
            </Dialog>   
        </Container>
    )
}