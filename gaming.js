import React from 'react';

import './style.css';
class Dashboard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      player1: 1,
      player2: 2,
      currentPlayer: null,
      board: [],
      gameOver: false,
      message: 'Player1s turn',
      message1:'',
      count1:0,
      count2:0,
      time: {}, 
      seconds: 180
      

    };
   
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    // Bind play function to App component
    this.play = this.play.bind(this);
  }
  // Starts new game
  initBoard() {
    // Create a blank 6x7 matrix
    let board = [];
    for (let r = 0; r < 6; r++) {
      let row = [];
      for (let c = 0; c < 7; c++) { row.push(null) }
      board.push(row);
    }
    this.setState({
      board,
      currentPlayer: this.state.player1,
      gameOver: false,
      message: '',
      count1:0,
      count2:0
    });
  }
  togglePlayer() {
    // return (this.state.currentPlayer === this.state.player1) ? this.state.player2 : this.state.player1;
    if(this.state.currentPlayer === this.state.player1){
      this.state.message1="Player2's turn"
      var c=this.state.count1+1
      this.setState({count1:c})
      return this.state.player2;

    }
    else{
      this.state.message1="Player1's turn"
      var c=this.state.count2+1
      this.setState({count2:c})
      return this.state.player1;
    }
  }
  play(c) {
    if (!this.state.gameOver) {
      // Place piece on board
      let board = this.state.board;
      for (let r = 5; r >= 0; r--) {
        if (!board[r][c]) {
          board[r][c] = this.state.currentPlayer;
          break;
        }
      }
      // Check status of board
      let result = this.checkAll(board);
      if (result === this.state.player1) {
        this.setState({ board, gameOver: true, message: 'Player 1 wins!' });
      } else if (result === this.state.player2) {
        this.setState({ board, gameOver: true, message: 'Player 2  wins!' });
      } else if (result === 'draw') {
        this.setState({ board, gameOver: true, message: 'Draw game.' });
      } else {
        this.setState({ board, currentPlayer: this.togglePlayer() });
      }
    } else {
      this.setState({ message: 'Game over' });
    }
  }
  checkVertical(board) {
    // Check only if row is 3 or greater
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c] &&
              board[r][c] === board[r - 2][c] &&
              board[r][c] === board[r - 3][c]) {
            return board[r][c];
          }
        }
      }
    }
  }
  checkHorizontal(board) {
    // Check only if column is 3 or less
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r][c + 1] &&
              board[r][c] === board[r][c + 2] &&
              board[r][c] === board[r][c + 3]) {
            return board[r][c];
          }
        }
      }
    }
  }
  checkDiagonalRight(board) {
    // Check only if row is 3 or greater AND column is 3 or less
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c + 1] &&
              board[r][c] === board[r - 2][c + 2] &&
              board[r][c] === board[r - 3][c + 3]) {
            return board[r][c];
          }
        }
      }
    }
  }
  checkDiagonalLeft(board) {
    // Check only if row is 3 or greater AND column is 3 or greater
    for (let r = 3; r < 6; r++) {
      for (let c = 3; c < 7; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c - 1] &&
              board[r][c] === board[r - 2][c - 2] &&
              board[r][c] === board[r - 3][c - 3]) {
            return board[r][c];
          }
        }
      }
    }
  }
  checkDraw(board) {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c] === null) {
          return null;
        }
      }
    }
    return 'draw';
  }
  checkAll(board) {
    return this.checkVertical(board) || this.checkDiagonalRight(board) || this.checkDiagonalLeft(board) || this.checkHorizontal(board) || this.checkDraw(board);
  }
  componentWillMount() {
    this.initBoard();
  }
  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }
  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    
    if(this.state.message=="Player 1 wins!" || this.state.message== 'Player 2  wins!' || this.state.message== 'Draw game.'){
      let seconds = this.state.seconds;
      this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
      });

    }
    else{
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
     }
     let seconds = this.state.seconds - 1;
    // Check if we're at zero.
    if (seconds == 0) {
       
      clearInterval(this.timer);
      this.state.message="Time up"
    }
  }
  
  render() {
    return (
      <div>
        <div className="bg">
        Player1:<input type="text" value={this.props.player1}/>&nbsp;&nbsp;&nbsp;&nbsp;
        Player2:&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" value={this.props.player2}/>
        <p>Player1-color:<input type="text" value={this.props.color1}/>&nbsp;&nbsp;&nbsp;&nbsp;
        Player2-color:<input type="text" value={this.props.color2}/></p>
        <p>Player1-move:<input type="text" value={this.state.count1}/>&nbsp;&nbsp;&nbsp;&nbsp;
        Player2-move:<input type="text" value={this.state.count2}/></p>
        <p className="time"><button className="button" onClick={this.startTimer}>Start Game</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p className="button">M: {this.state.time.m} S: {this.state.time.s}</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;<button className="button" onClick={() => {this.initBoard()}}>New Game</button></p>
        </div>
        <div>
          
       
        <p className="message">
          {this.state.message1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {this.state.message}</p>
        </div>
        
        
        
        <table>
          <thead>
          </thead>
          <tbody>
            {this.state.board.map((row, i) => (<Row key={i} row={row} play={this.play} color1={this.props.color1} color2={this.props.color2} />))}
          </tbody>
        </table>
      </div>
    );
  }
}

// Row component
const Row = ({ row, play, color1, color2 }) => {
  return (
    <tr>
      {row.map((cell, i) => <Cell key={i} value={cell} columnIndex={i} play={play} color1={color1} color2={color2} />)}
    </tr>
  );
};
const Cell = ({ value, columnIndex, play, color1, color2 }) => {
  let color = 'white';
  if (value === 1) {
    color = color1;
  } else if (value === 2) {
    color = color2;
  }
  return (
    <td>
      <div className="cell" onClick={() => {play(columnIndex)}}>
        <div className={color}></div>
      </div>
    </td>
  );
};
  export default Dashboard; 