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
            <Route exact path="/" component={Home}/>
            
        </Switch>
    </div>)
}

export default MainRouter

/**
 * 
 * <Route path="/map" component= {Map}/>
    <Route path="/quest" component= {(props) => {
        return <Quest {...props}/>}}/>
 */