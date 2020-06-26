require_relative 'Class Piece'
class Board
    def initialize
    @grid= Array.new(8) {Array.new(8)}
        fill_pawns(:white)
        fill_pawns(:black)
        fill_back_row(:white)
        fill_back_row(:black)
    end

    def move_piece(start_pos, end_pos)
        raise "no piece at start position" if self[start_pos] == nil
        raise "cannot move to end position" if self[end_pos] != nil
        self[start_pos] = nil
        self[end_pos] = self[start_pos]

    end


    def [](pos)
        row, col = pos
        @grid[row][col]
    end

    def []=(pos, val)
        row, col = pos
        @grid[row][col] = val
    end

    def fill_pawns(color)
        start_row = color == :white ? 6 : 1
        (0..7).each do |col|
            self[[start_row, col]] = Piece.new(color, self, [start_row, col]) 
        end
    end

    def fill_back_row(color)
        start_row = (color == :white ? 7 : 0)
        self[[start_row, 0]] = Piece.new(color, self, [start_row, 0])
        self[[start_row, 7]] = Piece.new(color, self, [start_row, 7])
        self[[start_row, 1]] = Piece.new(color, self, [start_row, 1])
        self[[start_row, 6]] = Piece.new(color, self, [start_row, 6])
        self[[start_row, 2]] = Piece.new(color, self, [start_row, 2])
        self[[start_row, 5]] = Piece.new(color, self, [start_row, 5])
        self[[start_row, 3]] = Piece.new(color, self, [start_row, 3])
        self[[start_row, 4]] = Piece.new(color, self, [start_row, 4])
    end

    def valid_pos?(pos)
        col = pos[0]
        row = pos[1]
        row >= 0 && row <= 7 && col >= 0 && col <= 7 && @grid[row][col].color != @color && @grid[row][col] == nil
    end
end