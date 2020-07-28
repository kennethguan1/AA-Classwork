let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let grid = new Array(8).fill(null).map(() => new Array(8).fill(null)); 
  grid[3][4] = new Piece('black');
  grid[4][3] = new Piece('black');
  grid[3][3] = new Piece('white');
  grid[4][4] = new Piece('white');
  return grid; 
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  if (pos[0] < 0 || pos[1] < 0 || pos[0] > 7 || pos[1] > 7 ) return false;
  else return true;
};

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if(this.isValidPos(pos)) { 
    return this.grid[pos[0]][pos[1]]; 
  }
  else { 
    throw new Error('Not valid pos!');
  }
};


/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  if (this.getPiece(pos) === null) {
    return null;
  } else if (this.getPiece(pos).color !== color) {
    return false;
  } else {
    return true;
  }
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  if (this.getPiece(pos) === null) {
    return false;
  }
  else {
    return true;
  }
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns an empty array if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns empty array if it hits an empty position.
 *
 * Returns empty array if no pieces of the opposite color are found.
 */
Board.prototype._positionsToFlip = function(pos, color, dir, piecesToFlip = []){
  // Assume pos is valid and is not occupied 
  // Returns empty array if it hits an empty position.
  if (this.isValidPos([pos[0] + dir[0], pos[1] + dir[1]]) && !this.isOccupied([pos[0] + dir[0], pos[1] + dir[1]])) { 
   return []; 
  }
  // Returns an empty array if it reaches the end of the board before finding another piece of the same color.
  else if (!this.isValidPos([pos[0] + dir[0], pos[1] + dir[1]])){
    return [];
  }
  // Returns empty array if no pieces of the opposite color are found. //WW //WBBW 
  // else if (this.isValidPos([pos[0] + dir[0], pos[1] + dir[1]]) && this.getPiece([pos[0] + dir[0], pos[1] + dir[1]]).color === color && piecesToFlip === [])
  // return []
  else if (this.isValidPos([pos[0] + dir[0], pos[1] + dir[1]]) && this.getPiece([pos[0] + dir[0], pos[1] + dir[1]]).color === color){
    return piecesToFlip; 
  }
  else {
    piecesToFlip.push([pos[0] + dir[0], pos[1] + dir[1]]);
    return this._positionsToFlip([pos[0] + dir[0], pos[1] + dir[1]], color, dir, piecesToFlip);
  }
};
// WW piecesToFlip = []
// WBBW piecesToFlip = [b,b]

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  if (this.isOccupied(pos)) {
    return false;
  }
  else {
    let dic_arr = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]]; 
    for(let i=0;i<dic_arr.length;i++) {
      if((this._positionsToFlip(pos, color, dic_arr[i])).length > 0) {
        return true;
      }
    }
    return false; 
  }
  
};

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  if (!this.isValidPos(pos) || !this.validMove(pos, color)){
    throw new Error('Invalid Move');
  }
  else {
    this.grid[pos[0]][pos[1]] = new Piece(color);
    let dic_arr = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
    for (let i = 0; i < dic_arr.length; i++) {
      pos_arr = this._positionsToFlip(pos, color, dic_arr[i]);
      pos_arr.forEach((pos) => {this.getPiece(pos).flip()});
    }
  }

};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
  let valid_pos = [];
  for(let i=0; i<8; i++){
    for (let j = 0; j < 8; j++) {
      let pos = [i,j];
      if (this.validMove(pos,color)) {
        valid_pos.push(pos);
      }
    }
  }
  return valid_pos;
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  if (this.validMoves(color).length > 0) { 
    return true;
  }
  else {
    return false;
  }
};



/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () { 
  if (!this.hasMove("white") || !this.hasMove("black")) {
    return true; 
  }
  else {
    return false;
  }
};




/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () { 
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if(this.grid[i][j] === null) console.log(` `);
      else console.log(`${this.grid[i][j].toString()}`);
      console.log(` `);
    } 
    console.log(`\n`);
  }
};

module.exports = Board;
