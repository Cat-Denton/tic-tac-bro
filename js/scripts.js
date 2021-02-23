function Player(name,mark) {
  this.name = name;
  this.mark = mark;
}

function Space(row,column,mark) {
  this.row = row;
  this.column = column;
  this.mark = mark;
}

function Board() {
  this.spaces = {};
  this.currentId = 0;
}

Board.prototype.spaceId = function() {
  this.currentId += 1;
  return this.currentId;
}

Board.prototype.takeSpace = function(space) {
  space.id = this.spaceId();
  this.spaces[space.id] = space;
}



function Game() {
  this.games = {} ;
}



function attachPlayerGridListeners(board) {
  let i = 1;
  let y = 1;
  
  
  
  for (i = 1; i <= 3; i++) {
    for (y = 1; y <= 3; y++) {
      let gridString = $("#" + i.toString() + y.toString() + "p1");
      let boardString = $("#" + i.toString() + y.toString());
      let row = i;
      let column = y;
      
      gridString.on("click", function() {
        let space = new Space(row,column,"X");
        board.takeSpace(space)

        gridString.text("X");
        boardString.text("X");
      });
    }
  }
  for (i = 1; i <= 3; i++) {
    for (y = 1; y <= 3; y++) {
      let gridString = $("#" + i.toString() + y.toString() + "p2");
      let boardString = $("#" + i.toString() + y.toString());

      let row = i;
      let column = y;
      gridString.on("click", function() {
        let space = new Space(row,column,"O");
        board.takeSpace(space)

        gridString.text("O");
        boardString.text("O");
      });
    }
  }
}

let board = new Board();

$(document).ready(function() {

  
  attachPlayerGridListeners(board);   
  
});

// Create 4 constructors
//4) Game

// Player one turn. Click space
// What are the winning combos?
//1) complete row 
//2) complete column 
//3) diagonal
 