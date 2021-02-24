function Player(name,mark) {
  this.name = name;
  this.mark = mark;
}

function Space(row,column,mark) {
  this.row = row;
  this.column = column;
  this.mark = mark;
}

// function Board() {
//   "11" = "";
//   "12" = "";
//   "13" = "";
//   "21" = "";
//   "22" = "";
//   "23" = "";
//   "31" = "";
//   "32" = "";
//   "33" = "";
// }

function Board() {
  this.spaces = {};
  this.currentId = 0;
}

//Maybe hard-coded board object rather than constructor, update each space with mark prototype
Board.prototype.spaceId = function() {
  this.currentId += 1;
  return this.currentId;
}

Board.prototype.makeSpace = function(space) {
  space.id = this.spaceId();
  this.spaces[space.id] = space;
}

Board.prototype.findId = function(id) {
  if (this.spaces[id] != undefined) {
    return this.spaces[id];
  }
  return false;
}  

function Game() {
  this.games = {} ;
}

// function isWinner(board) {
  //   i = board.currentId
  //   for (board)
  // }
  
function attachPlayerGridListeners(board) {
  let i = 1;
  let y = 1;
  let x = 0;
  
   
  for (i = 1; i <= 3; i++) {
    for (y = 1; y <= 3; y++) {
      let gridString = $("#" + i.toString() + y.toString() + "p1");
      let boardString = $("#" + i.toString() + y.toString());
       
      //create id iterator, needs to go 1-9  
      x++;
      let id = x;
      console.log(id);
      gridString.on("click", function() {

        console.log(id)
        (board.findId(id));
        
        //update space.mark to X

        board[i.toString + y.toString] = "X"
        gridString.text("X");
        boardString.text("X");
      });
    
      
    }
  }
  

  for (i = 1; i <= 3; i++) {
    for (y = 1; y <= 3; y++) {
      let gridString = $("#" + i.toString() + y.toString() + "p2");
      let boardString = $("#" + i.toString() + y.toString());
      
      // let row = i;
      // let column = y;
      
      gridString.on("click", function() {
        // let space = new Space(row,column,"O");
        // board.takeSpace(space)
        
        gridString.text("O");
        boardString.text("O");
      });
    }
  }
}
  
let board = new Board();
  
function createBoard (board) {
  for (i = 1; i <= 3; i++) {
    for (y=1; y <= 3; y++) {
      let space = new Space(i,y, "");
      board.makeSpace(space);
    }
  }
}

$(document).ready(function() {
  createBoard(board);
  attachPlayerGridListeners(board);   
});

// Create 4 constructors
//4) Game

// Player one turn. Click space
// What are the winning combos?
//1) complete row 
//2) complete column 
//3) diagonal
 