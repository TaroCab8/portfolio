import React, {Component} from 'react'
import {Route, Switch} from "react-router-dom"
import Game from './components/game/Game'
import GameOver from './components/game/GameOver'
import Home from './components/fractal/Home'
import Contact from './components/fractal/Contact'
import See from './components/fractal/See'
import Know from './components/fractal/Know'

const MainRouter = () => {
    return (<div>
        <Switch>
            <Route exact path="/" component={Game}/>
            <Route path="/home" component={Home}/>
            
        </Switch>
    </div>)
}

export default MainRouter