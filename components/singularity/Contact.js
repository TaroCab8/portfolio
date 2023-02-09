import React,{useState, useRef} from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import emailjs from "emailjs-com"


export default function Contact() {
    const [user, setUser] = useState({
        name: "",
        email:"",
        message: ""
    })
     
    const handleChange= name => event => {
        setUser({...user, [name]: event.target.value})
    }
    
    
    const form = useRef()
    const clickButton = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            "service_djvhkqs",
            "template_3ckmovr",
            form.current,
            "s_xbktrLowWfBmOFY",
        ).then(
            result => console.log(result.text),
            error => console.log(error.text)
        )
        setUser({
            name: "",
            email:"",
            message:""
        })
    }
  
    
    return (

        <Container style={{height: "700px"}}>
            <Card style={{width:"90%", justifyContent:"center", alignItems:"center", padding:"20px"}}>
                <Typography>Get in Touch</Typography>
                <form ref={form}>
                    <TextField name="name" label="Name" onChange={handleChange("name")} value={user.name} fullWidth/>
                    <TextField name="email" type="email" label="Email"  onChange={handleChange("email")} value={user.email} fullWidth />
                    <TextField name="message" type="textArea" multiline label="message" onChange={handleChange("message")} value={user.message} fullWidth/>
                </form>
                
                <CardActions>
                    <Button style={{color:"black", backgroundColor: "lightblue"}} onClick={clickButton} >Send</Button>
                </CardActions>
            </Card>   
        </Container>
    )
}