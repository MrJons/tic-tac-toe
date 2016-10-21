
function Game() {'use strict';

  this.currentPlayer = "X";
}

  Game.prototype.switchPlayer = function () {
    if (this.currentPlayer === "X"){
      this.currentPlayer = "O";
    } else {
      this.currentPlayer = "X";
    }
  };







// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };
