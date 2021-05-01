import React, { Component } from "react";
import './player.css';
import {
  NavLink
} from "react-router-dom";
class Stuff extends Component {
  render() {
    return (
      <header className="main-header">
 
<br></br><br></br><br></br>
<section className="main-navigation">
<NavLink to="/Game1"><button className="nav-btn" >
    Player vs Computer
    </button></NavLink>
  
  <NavLink to="/game"><button className="nav-btn">
  Player vs Player
    </button></NavLink>

    
    
</section>;
</header>
    );
  }
}

export default Stuff;