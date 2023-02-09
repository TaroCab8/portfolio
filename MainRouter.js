import React, {Component} from 'react'
import {Route, Switch} from "react-router-dom"
import Game from './components/game/Game'

import Home from './components/singularity/Home'
import Contact from './components/singularity/Contact'
import See from './components/singularity/See'
import Know from './components/singularity/Know'
import Map from './components/game/Map'
import Quest from './components/game/Quest'

const MainRouter = () => {
    return (<div>
        <Switch>
            <Route exact path="/" component={Game}/>
            <Route path="/home" component={Home}/>
            <Route path="/map" component= {Map}/>
            <Route path="/see" component= {See}/>
            <Route path="/know" component= {Know}/>
            <Route path="/contact" component= {Contact}/>
            <Route path="/quest" component= {(props) => {
                return <Quest {...props}/>
                }}/>
            
        </Switch>
    </div>)
}

export default MainRouter