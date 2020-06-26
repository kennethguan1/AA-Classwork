require 'singleton'
class Piece
    attr_reader :color
    def initialize(color, board, pos)
        @color = color
        @board = board
        @pos = pos
    end
end

module Slideable
    def moves
        result = []
        row, col = @pos
         self.move_directions.each do |direction|
            new_row = row + direction[0]
            new_col = col + direction[1]
            while Chess.valid_pos?(new_row, new_col)
                result << [new_row, new_col]
                break if @board[new_row][new_col] != nil #this is for if the piece that stopped our movement is different color.
                new_row += direction[0]
                new_col += direction[1]
            end
        end
        result
    end
end

module Stepable
    def moves
        result = []
        row, col = @pos
        self.move_directions.each do |direction|
            new_row = row + direction[0]
            new_col = col + direction[1]
            result << [new_row, new_col] if self.valid_pos?(new_row, new_col)
        end
        result
    end
end

class Rook < Piece 
    include Slideable
    def symbol 
        "Rook_" + @color.to_s[0]
    end
    def move_directions
        [
            [0, -1],
            [0, 1],
            [-1, 0],
            [1, 0],
        ]
    end
end

class Queen < Piece
    include Slideable
    def symbol 
        "Queen_" + @color.to_s[0]
    end
    def move_directions
        [
            [-1, -1],
            [0, 1],
            [1, -1],
            [1, 1],
            [0, -1],
            [0, 1],
            [-1, 0],
            [1, 0]
        ]
    end
end

class Knight < Piece
    include Stepable
    def symbol 
        "Knight_" + @color.to_s[0]
    end
    def move_directions
        [
            [-2, -1],
            [-2, 1],
            [-1, -2],
            [1, 2],
            [2, -1],
            [2, 1]
        ]
    end
end

class Bishop < Piece
    include Slideable
    def symbol 
        "Bishop_" + @color.to_s[0]
    end
    def move_directions
        [
            [-1, -1],
            [-1, 1],
            [1, -1],
            [1, 1]
        ]
    end
end

class King < Piece
    include Stepable
    def symbol 
        "King_" + @color.to_s[0]
    end

    def move_directions
        [
            [0, 1],
            [0, -1],
            [-1, 0],
            [1, 0],
            [-1, -1],
            [-1, 1],
            [1, -1],
            [1, 1]
        ]
    end
end


class Pawn < Piece
    def initialize(color, board, pos)
        super(color, board, pos)
        @symbol = "Pawn" + color.to_s[0]
        @at_start_row = true
        @forward_direction = color == :white ? -1 : 1
    end
end

class NullPeice < Piece
    include Singleton
    def initialize 
        @color = :none
        @symbol = " "
    end
end
