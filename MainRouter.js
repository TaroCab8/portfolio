import React, {Component} from 'react'
import {Route, Switch} from "react-router-dom"
import Game from './components/game/Game'

import Home from './components/singularity/Home'
import Contact from './components/singularity/Contact'
import See from './components/singularity/See'
import Know from './components/singularity/Know'
import CanvasGame from './components/game/CanvasGame'

const MainRouter = () => {
    return (<div>
        <Switch>
            <Route exact path="/" component={Game}/>
            <Route path="/home" component={Home}/>
            <Route path="/map" component= {CanvasGame}/>
            
        </Switch>
    </div>)
}

export default MainRouter