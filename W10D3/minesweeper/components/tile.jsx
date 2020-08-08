import React from 'react';

class Tile extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        console.log("click")
    }
    
    render(){
        const tile = this.props.tile;
        let text, klass;
        if (tile.explored){
            if(tile.bombed){
                text = '💣';
            } else {
                text = tile.adjacentBombCount();
             }
        } else {
            text = "T"
        }
            return (
            <div className="tile" onClick={this.handleClick}>
                {text}
            </div>
        )
    }
}

export default Tile;