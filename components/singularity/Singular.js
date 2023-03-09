import React from 'react'
import {motion} from 'framer-motion'
import inner from './../../public/singular/innerCircles.png'

export default function Singular() {
    return(
        <motion.div style={{width:"418px", height:"418px",borderRadius:"50%", justifyContent:"center"}}>
            <motion.div animate={{rotate:360, scale:[1, 0.95, 0.9, 0.85,0.85,0.9, 0.95, 1]}} transition={{duration:5}} style={{height:"410px",width:"410px", borderRadius:"50%", border:"4px solid rgba(1, 46, 64, 1)", justifyContent:"center"}}>
                <motion.div  style={{height:"400px", width:"400px", borderRadius:"50%", border:"4px solid rgba(1, 46, 64, 0.8)",justifyContent:"center"}}>
                    <motion.div style={{height:"390px", width:"390px",borderRadius:"50%", border:"4px solid rgba(1, 46, 64, 0.6)",justifyContent:"center"}}>
                        <motion.div container style={{height:"380px", width:"380px",borderRadius:"50%", border:"4px solid rgba(1, 46, 64, 0.4)", display:"flex",justifyContent:"center", alignItems:"center"}}>
                            <motion.img style={{height:"370px", width:"370px", borderRadius:"50%",justifyContent:"center", alignItems:"center", position:"absolute"}} src={inner}></motion.img>
                            <motion.div style={{height:"258px", width:"258px",borderRadius:"50%", border:"2px solid rgba(34, 183, 242, 1)", display:"flex",justifyContent:"center", alignItems:"center", zIndex:9}}>
                                <motion.div style={{height:"200px", width:"200px",borderRadius:"50%", border:"25px solid rgba(34, 183, 242, 0.4)",boxShadow:"0 0 50px rgba(1, 46, 64, 0.5),0 0 70px rgba(34, 183, 242, 1)",justifyContent:"center"}}>
                                    <motion.div style={{border: "24px solid #22B7F2", backgroundColor:'#035951', height:"150px", width:"150px", borderRadius:"50%"}}>
                                        <motion.div style={{border: "50px solid #004B47", backgroundColor:'black', height:"50px", width:"50px", borderRadius:"50%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                                            <motion.div  style={{backgroundColor:'black', height:"50px", width:"50px", borderRadius:"50%", boxShadow:"0 0 20px black,0 0 60px rgba(34, 183, 242, 0.3)"}}></motion.div>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
          
            
            
            
        </motion.div>
    )
} 