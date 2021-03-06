function Space(row,column,mark) {
  this.row = row;
  this.column = column;
  this.mark = mark;
}

function Board() {
  this.spaces = {};
  this.currentId = 0;
  this.player = 1;
  this.counter = 0;
}

Board.prototype.incrementCounter = function() {
  this.counter +=1;
  return this.counter;
}

Board.prototype.spaceId = function() {
  this.currentId += 1;
  return this.currentId;
}

Board.prototype.switchPlayer = function () {
  if (this.player === 1) {
    this.player += 1;
  } else {
    this.player -= 1;
  };
};

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
  }  else {
    return false;
  }
}
  
function attachPlayerGridListeners(board) {
  let i = 1;
  let y = 1;
  let x = 0;
  
  for (i = 1; i <= 3; i++) {
    for (y = 1; y <= 3; y++) {
      let boardString = $("#" + i.toString() + y.toString());
       
      x++;
      let id = x;
      boardString.on("click", function() {
        if (board.findId(id).mark === id && board.player === 1) {  
          board.findId(id).mark = "X";
          boardString.text("X");
          board.incrementCounter();
          if (isWinner(board)) {
            $("h1").hide();
            $(".board").hide();
            $("#xWinsPic").show();
          } else if (board.counter < 9) {
            $("h1").hide();
            $(".board").hide();
            let rando = (Math.floor(Math.random() * 5)+1).toString()
            
            $("#hit" + rando).show()
            setTimeout(function() {
              $("h1").show();
              $(".board").show();
              $("#hit" + rando).hide()
            }, 750);
            board.switchPlayer();
          } else {
            $("h1").hide();
            $(".board").hide();
            $("#brosWinPic").show();
          }
        } else if (board.findId(id).mark === id && board.player === 2) {
          board.findId(id).mark = "O";
          boardString.text("O");
          board.incrementCounter();
          if (isWinner(board)) {
            $("h1").hide();
            $(".board").hide();
            $("#oWinsPic").show();
          } else if (board.counter < 9) {
            $("h1").hide();
            $(".board").hide();
            let rando = (Math.floor(Math.random() * 5)+1).toString()
            $("#hit" + rando).show()
            setTimeout(function() {
              $("h1").show();
              $(".board").show();
              $("#hit" + rando).hide()
            }, 750);
            board.switchPlayer();
          } else {
            $("h1").hide();
            $(".board").hide();
            $("#brosWinPic").show();
          }
        }
      });
    };
  };
}

  
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


 