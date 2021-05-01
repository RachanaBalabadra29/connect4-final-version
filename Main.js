import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import player from "./player";
  import game from "./game";
  import computer from "./Game1";
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div >
        <div>
      <h1 className="game-title">
    <span className="small">Connect</span>
    <span className="big">Four</span>
    
  
    </h1></div>
        <div className="header">
         <NavLink exact to="/"> <p id = "left">Home |</p></NavLink>
            <NavLink to="/player"><p id = "left1">Game</p></NavLink>
            </div>
          <div className="content">
          <Route exact path="/" component={Home}/>
            <Route path="/player" component={player}/>
            <Route path="/game" component={game}/>
            <Route path="/Game1" component={computer}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;