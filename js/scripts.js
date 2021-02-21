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









// Notes of Project
// Create 4 constructors
//1) Create a Player constructor  
//2) Space
//3) Board will have different objects
//4) Game