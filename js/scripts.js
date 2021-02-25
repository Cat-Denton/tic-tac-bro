// function Player(name,mark) {
//   this.name = name;
//   this.mark = mark;
// }

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

function isWinner(board) {
  if (board.findId(1).mark === board.findId(2).mark && board.findId(2).mark === board.findId(3).mark)  {
    return true;
  } else if (board.findId(4).mark === board.findId(5).mark && board.findId(5).mark === board.findId(6).mark) {
    return true;
  } else if (board.findId(7).mark === board.findId(8).mark && board.findId(8).mark === board.findId(9).mark) {
    return true;
  } else if (board.findId(1).mark === board.findId(4).mark && board.findId(4).mark === board.findId(7).mark) {
    return true;
  } else if (board.findId(2).mark === board.findId(5).mark && board.findId(5).mark === board.findId(8).mark) {
    return true;
  } else if (board.findId(3).mark === board.findId(6).mark && board.findId(6).mark === board.findId(9).mark) {
    return true;
  } else if (board.findId(1).mark === board.findId(5).mark && board.findId(5).mark === board.findId(9).mark) {
    return true;
  } else if (board.findId(7).mark === board.findId(5).mark && board.findId(5).mark === board.findId(3).mark) {
    return true;
  } else {
    return false;
  }
}
  
function attachPlayerGridListeners(board) {
  let i = 1;
  let y = 1;
  let x = 0;
  
  for (i = 1; i <= 3; i++) {
    for (y = 1; y <= 3; y++) {
      let gridString = $("#" + i.toString() + y.toString() + "p1");
      let boardString = $("#" + i.toString() + y.toString());
       
      x++;
      let id = x;
      gridString.on("click", function() {
        if (board.findId(id).mark === id) {  
          board.findId(id).mark = "X";
          gridString.text("X");
          boardString.text("X");
          if (isWinner(board)) {
            alert("Blue Player Wins!");
          }
        };
=======
function attachPlayerGridListeners() {
  let i = 1;
  let y = 1;
  
    for (i = 1; i <= 3; i++) {
    for (y = 1; y <= 3; y++) {
  let gridString = $("#" + i.toString() + y.toString() + "p1");
  let boardString = $("#" + i.toString() + y.toString());
  console.log (gridString)
      gridString.on("click", function() {
        gridString.text("X");
        boardString.text("X");

      });
    };
  };

  x = 0;
  for (i = 1; i <= 3; i++) {
    for (y = 1; y <= 3; y++) {
      let gridString = $("#" + i.toString() + y.toString() + "p2");
      let boardString = $("#" + i.toString() + y.toString());

      x++;
      let id =x;
    
      gridString.on("click", function() {
        if (board.findId(id).mark === id) {
          board.findId(id).mark = "O";
          gridString.text("O");
          boardString.text("O");
          if (isWinner(board)) {
            alert("Red Player Wins!");
          }
        };
      });
    };
  };
};
  
let board = new Board();
  
function createBoard (board) {
  let markPlaceholder = 1
  for (i = 1; i <= 3; i++) {
    for (y=1; y <= 3; y++) {
      let space = new Space(i,y, markPlaceholder);
      board.makeSpace(space);
      markPlaceholder++
    }
  }
}

$(document).ready(function() {
  createBoard(board);
  attachPlayerGridListeners(board);   
});


 