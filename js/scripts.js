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
  for (i = 1; i <= 3; i++) {
    $("#11p1").on("click", function() {
      console.log("X")
      $("#11p1").text("X");
      $("#11").text("X");
    });
  }
}
$(document).ready(function() {
  attachPlayerGridListeners();   
});
  // Create 4 constructors
//2) Space
//3) Board will have different objects
//4) Game