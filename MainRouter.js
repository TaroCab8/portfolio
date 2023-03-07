import React, {Component} from 'react'
import {Route, Switch} from "react-router-dom"
import Home from './components/singularity/Home'


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