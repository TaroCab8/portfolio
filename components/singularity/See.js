import React, {useState, useEffect} from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button'
import CodeIcon from '@mui/icons-material/Code';
import makeStyles from '@mui/styles/makeStyles'
import {motion} from 'framer-motion'
import portfolio from './../../public/portfolio.mp4'
import market from './../../public/marketplace.mp4'
import videoStream from './../../public/videoStream.mp4'
import tracker from './../../public/tracker.mp4'
import text0s from "./../../public/text"


const useStyles= makeStyles(theme =>({
    cells:{
        border: `2px solid ${theme.palette.secondary.main}`,
        borderRadius: 20,
        borderStyle: "none double none double",
        [theme.breakpoints.down("sm")]:{
            scale:1,
            
         }
    },

    codeIcon:{
        color: "white",
        backgroundColor: "transparent"
    },
    typo:{
        [theme.breakpoints.down("lg")]:{
            fontSize:"0.75em"
           
        }
    }, 
    seeContainer:{
        backgroundColor:"theme.palette.background.default", 
        height:"100%", 
        overflow:"visible",
        zIndex:999,
        [theme.breakpoints.down("sm")]:{
            justifyContent: "space-between",
            padding:0
            
         }
    },
    tarjetas:{
        

        [theme.breakpoints.down("sm")]:{
            position:"relative",
            paddingTop:0, 
            justifyContent:"flex-start"
         }
    }
}))
const seeVariant= {
    mobile: {scale:1.2, zIndex:999, x:"-8%",y:"10%"}
}
export default function See() {
    const classes=useStyles()
    const [deviceSize, changeDeviceSize] = useState(window.innerWidth);
    //const [language, setLanguage]= useState("")

    useEffect(() => {
        //setLanguage(`${localStorage.getItem("Language")}`)
        //console.log(`See component says: Here Language is: ${language}`)
        const resizeW = () => changeDeviceSize(window.innerWidth);

        window.addEventListener("resize", resizeW); // Update the width on resize

        return () => window.removeEventListener("resize", resizeW);  

  },[]);
  
    return (
        
        <Grid container spacing={{xs:2,md:0, lg:0}}  direction="column" className={classes.seeContainer}>
            <motion.div initial={{scale:0.9}} whileHover={{scale:1.2, zIndex:999, x:"-8%",y:"10%"}} style={{position:"absolute", top:0, backgroundColor:"transparent",zIndex:999}}  className={classes.tarjetas}>
                <Card  className={classes.cells} style={{backgroundColor:'#0D0D0D'}}>
                    <CardMedia  style={{objectFit:"cover",height:"18vh", opacity:0.9   }}  loop muted autoPlay component="video"  src={videoStream} />
                   
                    <Accordion style={{backgroundColor:'rgba(3, 89, 81, 0.4)'}}>
                        <AccordionSummary  expandIcon={<ExpandMoreIcon style={{color:"white"}}/>} aria-controls="panel1a-content" id="panel1a-header">
                            <Typography>Video media app</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body2" className={classes.typo} >{text0s.see.video.francais}</Typography>
                            <CardActions style={{overflow:"hidden",justifyContent:"center", alignItens:"center"}}>
                                <Button style={{border: "2px solid #22B7F2",backgroundColor:'#012E40',width:"30%", height:"30px",color:'white',zIndex: 999, justifySelf:"center"}} ><a href="https://github.com/TaroCab8/StreamMedia" target="_blank" ><CodeIcon className={classes.codeIcon} /></a></Button>
                            </CardActions>
                        </AccordionDetails>
                    </Accordion>
                </Card>
            </motion.div>
                <motion.div initial={{scale:0.9}}  whileHover={{scale:1.2, zIndex:999, x:"-8%",y:"-15%"}} style={{position:"absolute", top:"35%"}} className={classes.tarjetas}>
                    <Card className={classes.cells} style={{backgroundColor:'#0D0D0D'}}>
                    
                        <CardMedia style={{objectFit:"cover", height:"18vh", opacity:0.9}} loop muted autoPlay component="video" src={market}/>
                   
                        <Accordion style={{backgroundColor:'rgba(3, 89, 81, 0.4)'}}>
                            <AccordionSummary  expandIcon={<ExpandMoreIcon style={{color:"white"}}/>} aria-controls="panel1a-content" id="panel1a-header">
                                <Typography>Market Place</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body2" className={classes.typo} >{text0s.see.market.francais}</Typography>
                                <CardActions style={{justifyContent:"center", alignItens:"center"}}>
                                    <Button style={{border: "2px solid #22B7F2",backgroundColor:'#012E40',width:"30%", height:"30px",color:'white',zIndex: 999, justifySelf:"center"}} ><a href="https://github.com/TaroCab8/StreamMedia" target="_blank" ><CodeIcon className={classes.codeIcon} /></a></Button>
                                </CardActions>
                            </AccordionDetails>
                        </Accordion>
                    
                    </Card> 
                </motion.div> 
                <motion.div initial={{scale:0.9}} whileHover={{scale:1.2, zIndex:999,x:"-8%",y:"-10%"}} style={{position:"absolute", bottom:0,}} className={classes.tarjetas}>
                    <Card className={classes.cells} style={{backgroundColor:'#0D0D0D'}}  >
                        <CardMedia  style={{objectFit:"cover",height:"18vh", opacity:0.9}} loop muted autoPlay component="video" src={tracker}/>
                    
                        <Accordion style={{backgroundColor:'rgba(3, 89, 81, 0.4)'}}>
                            <AccordionSummary  expandIcon={<ExpandMoreIcon style={{color:"white"}}/>} aria-controls="panel1a-content" id="panel1a-header">
                                <Typography>Suivi des dépenses</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body2" className={classes.typo} >{text0s.see.expenses.francais}</Typography>
                                <CardActions style={{justifyContent:"center", alignItens:"center"}}>
                                    <Button style={{border: "2px solid #22B7F2",backgroundColor:'#012E40',width:"30%", height:"30px",color:'white',zIndex: 999, justifySelf:"center"}} ><a href="https://github.com/TaroCab8/Expense-Tracker-app" target="_blank" ><CodeIcon className={classes.codeIcon} /></a></Button>
                                </CardActions>
                            </AccordionDetails>
                        </Accordion>
                    </Card>
                </motion.div> 
                
        </Grid>
    )
}


/**
 * <Grid container spacing={{xs:2,md:0, lg:0}}  direction="column" alignItems="flexStart" justifyContent="flex-start" style={{backgroundColor:"theme.palette.background.default", height:"100%",border:"2px solid violet", overflow:"visible"}}>
 */
//video
/**
 * <motion.div initial={{scale:0.4}} whileHover={{scale:0.8}}>
                            <CardMedia  style={{border:"1px solid brown", }} controls autoPlay component="video"  src={videoStream} />
                        </motion.div> 
 * <motion.div initial={{y:"-100%", opacity:0}} whileHover={{y:0,opacity:1}}>
                            <CardHeader style={{border:"1px solid ligthcoral", overflow:"hidden"}} variant="h6" title="Video media app"></CardHeader>
                            <Typography style={{border:"1px solid lightgreen", overflow:"hidden"}} variant="body2">{text0s.see.video.francais}</Typography>
                            <CardActions style={{border:"1px solid salmon", overflow:"hidden",justifyContent:"center", alignItens:"center"}}>
                                <Button style={{border: "2px solid #22B7F2",backgroundColor:'#012E40',width:"30%", height:"30px",color:'white',zIndex: 999, justifySelf:"center"}} ><a href="https://github.com/TaroCab8/StreamMedia" target="_blank" ><CodeIcon className={classes.codeIcon} /></a></Button>
                            </CardActions>
                        </motion.div>
 */

//market place
/**
 * <motion.div initial={{scale:0.4,y:"-20%"}} whileHover={{scale:0.8, y:"-20%"}}>
                            <CardMedia style={{border:"1px solid brown",  }} controls autoPlay component="video" src={market}/>
                        </motion.div>
 * <motion.div initial={{y:"-100%", opacity:0}} whileHover={{y:0,opacity:1}}>
                            <CardHeader style={{border:"1px solid ligthcoral", overflow:"hidden"}} variant="h6" title="Market place"/>
                            <Typography style={{border:"1px solid lightgreen", overflow:"hidden"}} variant="body2" >{text0s.see.market.francais}</Typography>
                            <CardActions style={{border:"1px solid salmon", overflow:"hidden", justifyContent:"center", alignItens:"center"}}>
                                <Button style={{border: "2px solid #22B7F2",backgroundColor:'#012E40', height:"30px", width:"30%",color:'white',zIndex: 999, justifySelf:"center"}}><a href="https://github.com/TaroCab8/marketPlace" target="_blank" ><CodeIcon className={classes.codeIcon} /></a></Button>
                            </CardActions>
                        </motion.div>
 */


//portfolio
/**
 * <motion.div initial={{scale:0.4, y:"-40%"}} whileHover={{scale:0.8, y:"40%"}}>
                            <CardMedia  style={{border:"1px solid brown", }} controls autoPlay component="video" src={portfolio}/>
                        </motion.div>
 * <motion.div initial={{y:"-100%", opacity:0}} whileHover={{y:"-50%",opacity:1}}>
                            <CardHeader style={{border:"1px solid ligthcoral", overflow:"hidden"}} variant="h6" title="Le présent portefeuille"></CardHeader>
                            <Typography style={{border:"1px solid lightgreen", overflow:"hidden"}} variant="body2" >{text0s.see.portfolio.francais}</Typography>
                            <CardActions style={{border:"1px solid salmon", overflow:"hidden",justifyContent:"center", alignItens:"center" }}>
                                <Button style={{border: "2px solid #22B7F2",backgroundColor:'#012E40',height:"30px",width:"30%",color:'white',zIndex: 999, justifySelf:"center"}}><a href="https://github.com/TaroCab8/portfolio" target="_blank" ><CodeIcon className={classes.codeIcon} /></a></Button>
                            </CardActions>
                        </motion.div>
 */