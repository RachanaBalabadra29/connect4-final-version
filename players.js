import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './gaming.js';
class About extends React.Component{
constructor(props){
    super(props)
    this.state={input:"",input1:"", color1:"",color2:""}
}

    render(){
    return(
        
      <div>
        {/* <h1>this is about</h1> */}
        <h3>Enter the names of the players</h3>
        <p>Player1: <input type="text" onChange={this.read1} name="input"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Choose  colour: <button className="btn" onClick={this.read2}></button>&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>Player2: <input type="text" onChange={this.read1} name="input1"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Choose  colour: &nbsp;&nbsp;&nbsp;&nbsp;<button className="btn3"onClick={this.read5}></button></p>
        <h3>player-1: {this.state.input}&nbsp;&nbsp;&nbsp;&nbsp; color choosen:{this.state.color1}</h3>
        <h3>player-2: {this.state.input1}&nbsp;&nbsp;&nbsp;&nbsp;color choosen:{this.state.color2}</h3>
        <button className="button" onClick={this.next}>Start game</button>
      </div>

  
    );
    }
    read1=(ele)=>{
        // console.log(ele.target.value);
        
        this.setState({[ele.target.name]:ele.target.value});
        console.log(this.state.input)
    }
    read2=()=>{
     
      this.setState({color1:"red"});
      console.log(this.state.color1)
  }
  
read5=()=>{
 
this.setState({color2:"yellow"});
console.log(this.state.color2)
}
    next=()=>{
     
     ReactDOM.render(<Dashboard player1={this.state.input} player2={this.state.input1} color1={this.state.color1} color2={this.state.color2}/>, document.getElementById('root'));
    }
  }
  

  export default About;