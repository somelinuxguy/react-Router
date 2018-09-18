import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Homepage from './Homepage.js'

let Navbar = () =>
    <div>
        <a href="#boks">BOKS</a> 
        <br/>
        <a href="#profile">Profile</a>
        <br/>
    </div>

let profile = () => 
    <div>PRofile!!df11</div>

let NotFound = () =>
    <div>BLARG!! BLERMP! ZOOOZLE!</div>

// need to pull out just the one bok
let BokPage = (props) => {
    let foundBok = props.boks.find(bok => bok.id.toString() === props.match.params.id)
    return foundBok ? <p>{foundBok.content}</p> : <p>Loading...</p>
}

// I have no idea what ... is
let Router = (props) => 
    <HashRouter>
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/boks" render={(routeProps) => 
                    <Homepage {...routeProps} {...props} /> }
                />
                <Route exact path="/boks/:id" render={(routeProps) =>
                    <BokPage {...routeProps} {...props} /> }
                />
                <Route path="/profile" component={profile} />
                <Route path="/" component={NotFound} />
            </Switch>
        </div>
    </HashRouter>

export default Router;