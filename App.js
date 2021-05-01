import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './players';
import Dashboard from './gaming.js'
import Home from './Home.js'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Router>
      <div>
       
          
            <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
         
          
            <Link to="/players">Players</Link>&nbsp;&nbsp;&nbsp;&nbsp;
         
          
            <Link to="/gaming">Dashboard</Link>&nbsp;&nbsp;&nbsp;&nbsp;
         
       

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/players">
            <About />
          </Route>
          <Route path="/gaming">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>

      {/* </header> */}
    </div>
  );
}






export default App;
