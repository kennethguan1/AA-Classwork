import React from 'react';
import Tile from './tile.jsx';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.board.grid)
        return (
            <div id= "board"> 
                {this.props.board.grid.map((subArray, index1) => {
                    return <div key={index1}>{subArray.map((tile, index2) => 
                        { return <div key={index2}><Tile tile={tile} 
                        updateGame={this.props.updateGame} /></div>})}</div>
                })}
            </div>
        )
    }
}


export default Board;