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
  $("#11p1").on("click", function() {
    console.log("X")
    $("#11p1").text("X");
    $("#11").text("X");
  });
};

$(document).ready(function(){
  
  attachPlayerGridListeners();
  
})
// Notes of Project
// Create 4 constructors
// writing a prototype that uses the space object to fill a space? fill a space and then create a space object
//1) Create a Player constructor  
//2) Space
//3) Board will have different objects
//4) Game