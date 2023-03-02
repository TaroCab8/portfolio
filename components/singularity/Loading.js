import React from "react"
import {motion} from 'framer-motion'


export default function Loading() {

    return(
        <motion.div style={{border: "10px solid #f3f3f3",borderTop: "10px solid #3498db",borderRadius: "50%",width: "80px",height: "80px", position:"absolute", top:`${window.innerHeight / 2 -     40}px`, left:`${window.innerWidth / 2 - 40}px`}} animate={{rotate:360}} transition={{duration:2, repeat: Infinity}}>
        </motion.div>
    )
}