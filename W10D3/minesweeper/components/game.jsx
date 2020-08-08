import React from 'react';
import * as Minesweeper from "../minesweeper"
import Board from "./board"

class Game extends React.Component{
    constructor(props){
        super (props);
        let board = new Minesweeper.Board(10,10);
        this.state = {board};
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(){
      
    }

    render(){
        return (
            <Board board={this.state.board} updateGame={this.updateGame}/>

        )
    }
}


export default Game;