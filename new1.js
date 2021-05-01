import React from 'react';

import './style.css';
class Dashboard extends React.Component{
  constructor(props){
    super(props)
    this.state={message1:"player1's turn",board:[],completed:false,cplayer:null,player1:"",player2:"", message:""};
    this.game = this.game.bind(this);
    
    
  }
  intialBoard(){
    // let board[]= 
    let board=[];
    let row=[];
    for(let i=0;i<6;i++)
    {
      for(let j=0;j<7;j++)
      {
        row.push(null);

      }
      board.push(row);
    }
    this.setState(board);
    console.log(this.state.board);
  }

  currentPlayer(){
    if(this.state.cplayer===this.state.player1){
      this.state.cplayer=this.state.player2;

    }
    else{
      this.state.cplayer=this.state.player1;
    }
  }
  
  game(c){
    if(this.state.board=="false")
    {
      let board=this.state.board;
      for(let r=6;r>=1;r++){
        if(!board[r][c]){
          board[r][c]=this.state.cplayer;
        }
      }

      let res=this.satisfy(board);
      if (res === this.state.player1) {
        this.setState({ board, completed: true, message: 'Player 1 (blue) wins!' });
      } else if (res === this.state.player2) {
        this.setState({ board, completed: true, message: 'Player 2 (yellow) wins!' });
      } else if (res === 'draw game') {
        this.setState({ board, completed: true, message: 'Draw game.' });
      } else {
        this.setState({ board, currentPlayer: this.currentPlayer() });
      }


    }
    else {
      this.setState({ message: 'Game over. Please start a new game.' });
    }
  }
//verical
  checkingVertical(board){
    for(let r=3;r<6;r++){
      for(let c=0;c<7;c++){

        if(board[r][c]){
          if(board[r][c]===board[r-1][c] && board[r][c]===board[r-2][c] && board[r][c]===board[r-3][c]){
            return board[r][c];
          }

        }
      }
      
    }
  }
  //horizontal

  checkingHorizontal(board){
    for(let r=0;r<6;r++){
      for(let c=0;c<6;c++){

        if(board[r][c]){
          if(board[r][c]===board[r][c+1] && board[r][c]===board[r][c+2] && board[r][c]===board[r][c+3]){
            return board[r][c];
          }

        }
      }
      
    }
  }
  //diagonal

  checkingDiagnolRight(board){
    for(let r=3;r<6;r++){
      for(let c=0;c<4;c++){

        if(board[r][c]){
          if(board[r][c]===board[r-1][c+1] && board[r][c]===board[r-2][c+2] && board[r][c]===board[r-3][c+3]){
            return board[r][c];
          }

        }
      }
      
    }
  }

  checkingDiagnolleft(board){
    for(let r=3;r<6;r++){
      for(let c=0;c<4;c++){

        if(board[r][c]){
          if(board[r][c]===board[r-1][c-1] && board[r][c]===board[r-2][c-2] && board[r][c]===board[r-3][c-3]){
            return board[r][c];
          }

        }
      }
      
    }
  }

  //checkingDraw

  checkingDraw(board){
    for(let r=0;r<6;r++){
      for(let c=0;c<7;c++){
        if(board[r][c]==null){
          return null;
        }
      }
    }
    return "draw game"
  }
  satisfy(board){
    return this.checkingVertical(board) || this.checkingHorizontal(board) || this.checkingDiagnolRight(board) || this.checkingDiagnoleft(board) || this.checkingDraw(board);
  }
  
    render(){
      return(
        <div>
          
          <p>Welcome to dashboard </p>
          <p>player1: {this.props.player1}</p>
          <p>player2: {this.props.player2}</p>
          {this.state.message1}
          {this.state.board}
          <br></br>
          <br></br>
          <table>
            <tbody>
            {this.state.board.map((row, i) => (<Row key={i} row={row} play={this.game} />))}
            </tbody>
          </table>
         

        </div>
      );
    }

  }
  const Row = ({ row, game }) => {
    return (
      <tr>
        {row.map((cell, i) => <Cell key={i} value={cell} columnIndex={i} play={game} />)}
      </tr>
    );
  };
  const Cell = ({ value, columnIndex, game }) => {
    let color = 'white';
    if (value === 1) {
      color = 'red';
    } else if (value === 2) {
      color = 'yellow';
    }
    return (
      <td>
        <div className="cell" onClick={() => {game(columnIndex)}}>
          <div className={color}></div>
        </div>
      </td>
    );
  };
  export default Dashboard;