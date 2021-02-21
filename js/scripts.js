function Player(name) {
  this.name = name;
}
function Space(row,column,mark) {
  this.row = row;
  this.column = column;
  this.mark = mark;
}

function Board() {
  this.spaces = {};
}
function Game() {
  this.games = {} ;
}

function attachPlayerGridListeners() {
  let i = 1;
  let y = 1;
  let gridString = $("#" + i.toString() + y.toString() + "p1");
  let boardString = $("#" + i.toString() + y.toString());
  for (i = 1; i <= 3; i++) {
    console.log (gridString)
    for (y = 1; y <= 3; y++) {
      gridString.on("click", function() {
        console.log("X")
        gridString.text("X");
        boardString.text("X");
      });
    }
  }
}
$(document).ready(function() {
  attachPlayerGridListeners();   
});
  // Create 4 constructors
//4) Game