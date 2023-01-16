import React from 'react'

export default function Game() {
    return (<div style={{backgroundColor:"black", border:"6px solid green", height:"920px", fontFamily: 'VT323',color: "lightgreen", fontSize:"16px"}}>
        <div id="img-containers" style={{height:"820px"}}>
        <style>
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
</style>
            <img></img>
            <h6 style={{color:"lightgreen", marginTop: "0px", fontSize:"20px",fontFamily: 'VT323'}}>> Choose your language: nl/
            - f= french
            - s= spanish 
            - e= english.</h6>
        </div>
        ><input style={{fontFamily: 'VT323',width:"80%", position:"absolute", marginBottom: "0px", backgroundColor:"black", border:"none",color:"lightgreen",fontSize:"20px"}}/>
        
    </div>)
}