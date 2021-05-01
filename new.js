import React from 'react';

import './style.css';
class Dashboard extends React.Component{
  constructor(props){
    super(props)
    this.state={message1:"player1's turn",board:[]};
    
    
  }
  componentDidMount(){
    var cells=document.getElementsByTagName("td");
    var flag=1;
    for (let index = 0; index < cells.length; index++) {
      const element = cells[index];
      cells[index].addEventListener("click", ()=>{
        if(flag==1){
          

          cells[index].style.backgroundColor="blue";
          flag=2;
          this.setState({message1:" player2's turn"});

        }
        else{

          

          cells[index].style.backgroundColor="yellow";
          flag=1;
          this.setState({message1:" player1's turn"});

        }

        

      })
      
    }
    
  }

  intialBoard(){
    // let board[]= 
    let board=[];
    let row=[];
    for(let i=0;i<6;i++)
    {
      for(let j=0;j<7;j++)
      {
        row.push(0);

      }
      board.push(row);
    }
  }

    render(){
      return(
        <div>
          
          <p>Welcome to dashboard </p>
          <p>player1: {this.props.player1}</p>
          <p>player2: {this.props.player2}</p>
          {this.state.message1}
          <br></br>
          <br></br>
          {/* <table>
            <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
             

            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
             

            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
             

            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
             

            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
             

            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
             

            </tr>


            </tbody>
           
          </table> */}

        </div>
      )
    }

  }
  export default Dashboard;